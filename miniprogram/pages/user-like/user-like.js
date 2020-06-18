// pages/user-like/user-like.js
const db = wx.cloud.database();
let result = {};
let openid = "";
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
  onLoad: async function (options) {
    var app = getApp();
    this.result = await app.getOpenidOnlyCloud();
    this.openid = app.globalData.openid.result.openid;
    this._getListByCloudFn();
  },
  _getListByCloudFn() {
    db.collection("likeBook")
      .where({
        _openid: this.openid,
      })
      .orderBy("likeTime", "desc")
      .get()
      .then((res) => {
        console.log(res);
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
