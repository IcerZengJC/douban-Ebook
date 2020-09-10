// pages/classify/classify.js
import { request } from "../../request/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookTags: [],
    currentIndex: 0,
    param: {
      q: "",
      start: 0,
      count: 1,
    },
    tagImgList: [],
    scrollTop: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bookTags;
    let currentIndex = 0;

    wx.cloud
      .callFunction({
        name: "getBookTags",
      })
      .then((res) => {
        bookTags = res.result.bookTags;
        bookTags.forEach((v) => {
          v.isActive = false;
        });
        bookTags[0].isActive = true;
        this.setData({
          bookTags,
          currentIndex,
        });
        // console.log(bookTags);
        this.getTagImg();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  handleChangeIndex(e) {
    // 1 获取点击的索引
    const { index } = e.currentTarget.dataset;
    const { bookTags } = this.data;
    bookTags.forEach((v) => {
      v.isActive = false;
    });
    bookTags[index].isActive = true;
    this.setData({
      bookTags,
      currentIndex: index,
      scrollTop: 0,
    });
    // 有这个属性，就无需发送 request 请求图片
    if (!bookTags[index].haveImg) {
      this.getTagImg();
    } else {
      console.log("无需 request 图片");
    }
  },
  getTagImg() {
    let { param } = this.data;
    let { currentIndex } = this.data;
    let { bookTags } = this.data;

    let tagList = bookTags[currentIndex].tagContent;
    let tagImgList = [];

    var q = "param.q"; //先用一个变量，把(param.q)用字符串拼接起来

    tagList.forEach((ele, idx) => {
      this.setData({
        [q]: ele.tagName,
      });

      request({
        param,
        url: "/search",
      }).then((result) => {
        let { books } = result.data;
        var img = "bookTags[" + currentIndex + "].tagContent[" + idx + "].img";
        var haveImg = "bookTags[" + currentIndex + "].haveImg";
        this.setData({
          [img]: books[0].image,
          [haveImg]: true,
        });
      });
    });
  },
  handleChooseTag(e) {
    const { tagname } = e.currentTarget.dataset;
    console.log("tagname", tagname);

    wx.setStorageSync("classifytag", tagname);
    wx.switchTab({
      url: "../find/find",

      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },
});
