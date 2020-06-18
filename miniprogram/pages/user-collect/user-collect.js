// pages/user-collect/user-collect.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    idList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getListByCloudFn();
  },
  _getListByCloudFn() {
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
          })
          .orderBy("collectTime", "desc")
          .get()
          .then((res) => {
            let bookList = [];
            let idList = [];
            res.data.forEach((ele) => {
              bookList.push(ele.bookInfo);
              idList.push(ele.bookid);
            });
            this.setData({
              bookList,
              idList,
            });
            // console.log(this.data.bookList);
          });
      });
  },
  // 点击书籍跳转至详情页面
  handleToBookPage(e) {
    let { index } = e.currentTarget.dataset;
    let { bookList } = this.data;
    wx.navigateTo({
      url: "../book/book?id=" + bookList[index].id,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", bookList[index]);
      },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
