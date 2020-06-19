// pages/user-bloglike/bloglke.js
const db = wx.cloud.database();
let result = {};
let openid = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogList:[]
  },
  goComment(event){
    wx.navigateTo({
      url: '../blog-comment/blog-comment?blogId='+ event.target.dataset.blogid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var app = getApp();
    this.result = await app.getOpenidOnlyCloud();
    this.openid = app.globalData.openid.result.openid;
    this._getListByCloudFn()
  },
  _getListByCloudFn(){
    db.collection("blog-like")
    .where({
      _openid: this.openid,
    })
    .orderBy("likeTime", "desc")
    .get()
    .then((res) => {
     
      let blogList = [];
     console.log(res)
      res.data.forEach((ele) => {
        blogList.push(ele.blog);
      });
      this.setData({
        blogList,
      });
      console.log(this.data.blogList)
      // console.log(this.data.bookList);
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})