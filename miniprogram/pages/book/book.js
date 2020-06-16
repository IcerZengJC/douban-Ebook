const db = wx.cloud.database();
let userInfo = {};
//test.js
Page({
  data: {
    showAll: false,
    isLike: false,
    isCollect: false,
    bookInfo: [],
    openid: "",
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

    wx.cloud
      .callFunction({
        name: "login",
      })
      .then((res) => {
        this.setData({
          openid: res.result.openid,
        });
        db.collection("collectBook")
          .where({
            _openid: this.data.openid,
            bookid: this.data.bookInfo.id,
          })
          .get()
          .then((res) => {
            console.log(this.data.openid);
            if (res.data.length != 0) {
              this.setData({
                isCollect: true,
              });
              let { isCollect } = this.data;
            }
          });
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
      // 已经点赞，进行取消操作
      wx.showToast({
        title: "点赞成功",
        mask: true,
        success: () => {
          console.log("成功");
          this.setData({
            isLike: !this.data.isLike,
          });
        },
        fail: () => {
          console.log("失败");
        },
      });
    } else {
      // 已经取消，进行点赞操作
      wx.showToast({
        title: "取消点赞",
        mask: true,
        icon: "none",
        success: () => {
          console.log("成功");
          this.setData({
            isLike: !this.data.isLike,
          });
        },
        fail: () => {
          console.log("失败");
        },
      });
    }
  },
  handleCollectBtn() {
    this.setData({
      isCollect: !this.data.isCollect,
    });
    let { isCollect } = this.data;

    if (isCollect) {
      console.log(this.data.openid);
      db.collection("collectBook")
        .add({
          data: {
            bookInfo: this.data.bookInfo,
            bookid:this.data.bookInfo.id,
          },
        })
        .then((res) => {
          wx.showToast({
            title: "收藏成功~",
            mask: true,
          });
        });
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
          });
        });
    }
  },
});
