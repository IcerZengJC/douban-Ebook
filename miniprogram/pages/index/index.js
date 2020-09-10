import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    swiperData: {
      indicatorDots: true, //是否显示面板指示点
      autoplay: true, //是否自动播放
      interval: 3000, //停留时间间隔
      duration: 1000, //播放时长
      previousMargin: "150rpx", //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      nextMargin: "150rpx", //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      circular: true, //是否采用衔接滑动
    },
    currentSwiperIndex: 0, //swiper当前索引
    bookInfo: [],
    bookTags: [],
    param: {
      q: "",
      start: 0,
      count: 10,
    },
    isSelect: false,
    inputShow: true,
    listShow: true,
  },
  bookBox: [],
  imgBox: [],
  baseUrl: "https://api.douban.com/v2/book",
  onLoad() {
    this.setData({
      imgUrls: [],
      currentSwiperIndex: 0, //swiper当前索引
      bookInfo: [],
      bookTags: [],
      param: {
        q: "",
        start: 0,
        count: 10,
      },
    });
    // 从 bookInfo中提取 书的图片
    let tags = wx.getStorageSync("tags");
    console.log("object");
    // console.log(tags);
    tags.forEach((ele) => {
      this.handleChooseTag(ele, tags.length);
    });
  },

  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current,
    });
  },
  handleOpenBook(e) {
    let { index } = e.currentTarget.dataset;
    let { bookInfo } = this.data;

    console.log(bookInfo[index].id);
    wx.navigateTo({
      url: "../book/book?id=" + bookInfo[index].id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log("1", data);
        },
        someEvent: function (data) {
          console.log("2", data);
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", bookInfo[index]);
      },
    });
  },
  handleChooseTag(text, len) {
    var q = "param.q"; //先用一个变量，把(param.q)用字符串拼接起来
    var count = "param.count"; //先用一个变量，把(param.q)用字符串拼接起来
    // 看有几个标签，就将展示书籍切几块
    let n = Math.ceil(20 / len);
    this.setData({
      [q]: text,
      [count]: n,
    });
    this.getBookCommend();
  },
  getBookCommend() {
    let { param } = this.data;
    request({
      param,
      url: "/search",
    }).then((result) => {
      console.log("返回");
      let bookBox = result.data.books;

      bookBox.forEach((v) => {
        this.imgBox.push(v.image);
        this.bookBox.push(v);
      });
      this.setData({
        bookInfo: this.bookBox,
        imgUrls: this.imgBox,
      });
    });
    // 原来实现
    // let { param } = this.data;
    // request({
    //   param,
    //   url: "/search",
    // }).then((result) => {
    //   console.log("返回");
    //   let bookInfo = result.data.books;

    //   this.setData({
    //     bookInfo,
    //   });

    //   const imgUrls = [];
    //   bookInfo.forEach((v) => {
    //     imgUrls.push(v.image);
    //   });
    //   this.setData({
    //     imgUrls,
    //   });
    // });
  },
  handleListShow() {
    this.setData({
      listShow: !this.data.listShow,
    });
  },
  handleReSelect() {
    console.log("object");
    wx.reLaunch({
      url: "../select/select",
    });
  },
});
