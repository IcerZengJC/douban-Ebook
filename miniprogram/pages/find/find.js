// pages/find/find.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShow: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  handleInputShow() {
    const { inputShow } = this.data;
    this.setData({
      inputShow: !inputShow,
    });
  },
});
