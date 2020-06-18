// pages/user-readhistory/user-readhistory.js

const db = wx.cloud.database();
const now = new Date();
let result = {};
let openid = "";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    bookListInOneDay: [],
    bookListInSevenDay: [],
    bookListOverSevenDay: [],
    idList: [],
    showList: [true, true, true],
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
    db.collection("history")
      .where({
        _openid: this.openid,
      })
      .orderBy("historyTime", "desc")
      .get()
      .then((res) => {
        console.log(res.data);

        let bookList = [];
        let bookListInOneDay = [];
        let bookListInSevenDay = [];
        let bookListOverSevenDay = [];
        let idList = [];

        res.data.forEach((ele) => {
          let timeRes = this.getInervalDay(ele.historyTime, now);

          if (timeRes < 1) {
            // 一天内
            bookListInOneDay.push(ele.bookInfo);
          } else if (timeRes <= 7) {
            // 七天内
            bookListInSevenDay.push(ele.bookInfo);
          } else {
            bookListOverSevenDay.push(ele.bookInfo);
          }
          // bookList.push(ele.bookInfo);
          idList.push(ele.bookid);
        });
        bookList.push(bookListInOneDay);
        bookList.push(bookListInSevenDay);
        bookList.push(bookListOverSevenDay);

        this.setData({
          bookList,
          bookListInOneDay,
          bookListInSevenDay,
          bookListOverSevenDay,
          idList,
        });
        // console.log(this.data.bookList);
      });
  },
  // 点击书籍跳转至详情页面
  handleToBookPage(e) {
    let { index } = e.currentTarget.dataset;
    let { idx } = e.currentTarget.dataset;
    let { bookList } = this.data;
    console.log(index);
    console.log(idx);

    wx.navigateTo({
      url: "../book/book?id=" + bookList[index][idx].id,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", bookList[index][idx]);
      },
    });
  },
  // 计算当前时间和记录时间之差
  getInervalDay(startDate, endDate) {
    var ms = endDate.getTime() - startDate.getTime();
    if (ms < 0) return 0;
    return Math.floor(ms / 1000 / 60 / 60 / 24);
  },

  handleShowWrap(e) {
    console.log();
    let { index } = e.currentTarget.dataset;
    let { showList } = this.data;
    showList[index] = !showList[index];
    this.setData({
      showList,
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
