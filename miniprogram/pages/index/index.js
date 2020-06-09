Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动播放
    interval: 3000, //停留时间间隔
    duration: 1000, //播放时长
    previousMargin: "150rpx", //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: "150rpx", //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    circular: true, //是否采用衔接滑动
    currentSwiperIndex: 0, //swiper当前索引
    bookInfo: [
      {
        bookId: 0,
        bookImg:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=967536691,2527279703&fm=26&gp=0.jpg",
        bookTitle: "时间简史1",
        bookDescription: [
          "你有时间简史吗?",
          "你有时间简史吗?",
          "你有时间简史吗?",
        ],
      },
      {
        bookId: 1,
        bookImg:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=967536691,2527279703&fm=26&gp=0.jpg",
        bookTitle: "时间简史2",
        bookDescription: [
          "你有时间简史吗?",
          "你有时间简史吗?",
          "你有时间简史吗?",
        ],
      },
      {
        bookId: 2,
        bookImg:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=967536691,2527279703&fm=26&gp=0.jpg",

        bookTitle: "时间简史3",
        bookDescription: [
          "你有时间简史吗?",
          "你有时间简史吗?",
          "你有时间简史吗?",
        ],
      },
      {
        bookId: 3,
        bookImg:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=967536691,2527279703&fm=26&gp=0.jpg",

        bookTitle: "时间简史4",
        bookDescription: [
          "你有时间简史吗?",
          "你有时间简史吗?",
          "你有时间简史吗?",
        ],
      },
      {
        bookId: 4,
        bookImg:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=967536691,2527279703&fm=26&gp=0.jpg",
        bookTitle: "时间简史5",
        bookDescription: [
          "你有时间简史吗?",
          "你有时间简史吗?",
          "你有时间简史吗?",
        ],
      },
    ],
    bookTags: [],
    // bookTags:[],
  },
  onLoad() {
    // 从 bookInfo中提取 书的图片
    const imgUrls = [];
    const { bookInfo } = this.data;
    bookInfo.forEach((v) => {
      imgUrls.push(v.bookImg);
    });
    this.setData({
      imgUrls,
    });
    wx.cloud
      .callFunction({
        name: "getBookTags",
        data: {},
      })
      .then((res) => {
        wx.hideLoading();
        // console.log(res);
        // console.log(res.result.bookTags);
        // const result = res.result || {};
        this.setData({
          bookTags: res.result.bookTags,
        });
        wx.cloud
        .callFunction({
          name: "getBookList",
          data: {
            bookTags:res.result.bookTags,
          },
        })
        .then((res2) => {
          console.log(res2.result);
        });
      })
      .catch((err) => {
        wx.hideLoading();
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
});
