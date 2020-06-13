import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    swiperList: [],
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
    bookCount: 0,
    bookTags: [],
    param: {
      apikey: "0df993c66c0c636e29ecbb5344252a4a",
      q: "",
      start: 0,
      count: 10,
    },
  },
  baseUrl: "https://api.douban.com/v2/book",
  onLoad() {
    // 从 bookInfo中提取 书的图片
    wx.cloud
      .callFunction({
        name: "getBookTags",
      })
      .then((res) => {
        console.log(res.result);
        let { bookTags } = res.result;
        this.setData({
          bookTags, 
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current,
    });
  },
  handleOpenBook(e) {
    wx.navigateTo({
      // url: "/miniprogram/pages/book/book",
      url: "../book/book",
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },
  handleChooseTag(e) {
    let { text } = e.currentTarget.dataset;
    console.log(text);
    var q = "param.q"; //先用一个变量，把(param.q)用字符串拼接起来
    this.setData({
      [q]: text,
    });
    let { apikey } = this.data.param;
    this.getBookCommend();
  },
  getBookCommend() {
    let { param } = this.data;
    request({
      param,
      url: "/search",
    }).then((result) => {
      console.log("返回");
      let bookInfo = result.data.books;

      this.setData({
        bookInfo,
        bookCount: result.data.count,
      });

      const imgUrls = [];
      bookInfo.forEach((v) => {
        imgUrls.push(v.image);
        // console.log(v.image);
      });
      this.setData({
        imgUrls,
      });
    });
  },
});
