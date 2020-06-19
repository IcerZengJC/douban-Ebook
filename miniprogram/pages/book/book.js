const db = wx.cloud.database();
let userInfo = {};
let result = {};
let openid = "";
//test.js
Page({
  data: {
    showAll: false,
    isLike: false,
    isCollect: false,
    bookInfo: [],
    isLogin: false,
    modelShow: false,
  },
  bookBox: [],
  onLoad: function (option) {
    const eventChannel = this.getOpenerEventChannel();
    // 传递给上个页面数据
    // eventChannel.emit("acceptDataFromOpenedPage", { data: "test" });
    // eventChannel.emit("someEvent", { data: "test" });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    let that = this;
    eventChannel.on("acceptDataFromOpenerPage", (data) => {
      that.setData({
        bookInfo: data,
      });
    });

    wx.getSetting({
      success: async (res) => {
        if (res.authSetting["scope.userInfo"]) {
          this.setData({
            isLogin: true,
          });
          var app = getApp();
          this.result = await app.getOpenidOnlyCloud();
          this.openid = app.globalData.openid.result.openid;
          console.log(this.openid);
          db.collection("collectBook")
            .where({
              _openid: this.openid,
              bookid: this.data.bookInfo.id,
            })
            .get()
            .then((res) => {
              if (res.data.length != 0) {
                this.setData({
                  isCollect: true,
                });
                let { isCollect } = this.data;
              }
            });

          db.collection("likeBook")
            .where({
              _openid: this.openid,
              bookid: this.data.bookInfo.id,
            })
            .get()
            .then((res) => {
              if (res.data.length != 0) {
                this.setData({
                  isLike: true,
                });
                let { isLike } = this.data;
              }
            });

          db.collection("history")
            .doc(this.openid + "_" + this.data.bookInfo.id)
            .set({
              data: {
                bookInfo: this.data.bookInfo,
                historyTime: db.serverDate(),
              },
            })
            .then((res) => {
              console.log(res);
            });
        }
      },
    });
  },
  handleShowAll() {
    this.setData({
      showAll: !this.data.showAll,
    });
  },
  handleLikeBtn() {
    let { isLike } = this.data;
    // 是否点击
    if (!isLike) {
      if (this.data.isLogin) {
        db.collection("likeBook")
          .add({
            data: {
              bookInfo: this.data.bookInfo,
              bookid: this.data.bookInfo.id,
              createTime: db.serverDate(),
            },
          })
          .then((res) => {
            wx.showToast({
              title: "点赞成功~",
              mask: true,
              success: () => {
                this.setData({
                  isLike: !this.data.isLike,
                });
              },
            });
          });
      } else {
        wx.showToast({
          title: "请先登录账号",
          icon: "none",
          mask: true,
        });
      }
    } else {
      // 已经取消，进行点赞操作
      db.collection("likeBook")
        .where({
          _openid: this.data.openid,
          bookid: this.data.bookInfo.id,
        })
        .remove()
        .then((res) => {
          wx.showToast({
            title: "取消点赞",
            icon: "none",
            mask: true,
            success: () => {
              this.setData({
                isLike: !this.data.isLike,
              });
            },
          });
        });
    }
  },
  handleCollectBtn() {
    let { isCollect } = this.data;

    if (!isCollect) {
      if (this.data.isLogin) {
        db.collection("collectBook")
          .add({
            data: {
              bookInfo: this.data.bookInfo,
              bookid: this.data.bookInfo.id,
              collectTime: db.serverDate(),
            },
          })
          .then((res) => {
            wx.showToast({
              title: "收藏成功~",
              mask: true,
              success: () => {
                this.setData({
                  isCollect: !this.data.isCollect,
                });
              },
            });
          });
      } else {
        wx.showToast({
          title: "请先登录账号",
          icon: "none",
          mask: true,
        });
      }
    } else {
      db.collection("collectBook")
        .where({
          _openid: this.data.openid,
          bookid: this.data.bookInfo.id,
        })
        .remove()
        .then((res) => {
          wx.showToast({
            title: "取消收藏",
            icon: "none",
            mask: true,
            success: () => {
              this.setData({
                isCollect: !this.data.isCollect,
              });
            },
          });
        });
    }
  },
  handleToCatalog() {
    let { bookInfo } = this.data;
    wx.navigateTo({
      url: "../book-catalog/book-catalog?bookInfo=" + bookInfo.id,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", bookInfo.catalog);
      },
    });
  },
});
