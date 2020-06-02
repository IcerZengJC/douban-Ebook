// pages/find/find.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShow: true,
    listShow: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  handleInputShow() {
    this.setData({
      inputShow: !this.data.inputShow,
    });
  },
  handleListShow() {
    this.setData({
      listShow: !this.data.listShow,
    });
  },
});
