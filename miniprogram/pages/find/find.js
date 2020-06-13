// pages/find/find.js
import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShow: true,
    listShow: true,
    // 取消 按钮 是否显示
    isFocus: false,
    // 输入框的值
    inpValue: "",
    param: {
      apikey: "0df993c66c0c636e29ecbb5344252a4a",
      q: "",
      start: 0,
      count: 10,
    },
    bookList: [],
    bookNum: 0,
  },
  totalPages: 0,
  pageNum: 1,
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
  handleInput(e) {
    // 1 获取输入框的值
    const { value } = e.detail;
    // 2 检测合法性
    if (!value.trim()) {
      this.setData({
        isFocus: false,
      });
      // 值不合法
      return;
    }
    // 3 准备发送请求获取数据
    var q = "param.q";

    this.setData({
      isFocus: true,
      [q]: value,
    });
    let { param } = this.data;
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(param);
    }, 1000);
  },
  // 发送请求获取搜索建议 数据
  async qsearch(param) {
    // console.log(param);
    const res = await request({ url: "/search", param });
    console.log(res.data);
    // 获取现在已有数据数据
    let { bookList } = this.data;
    // 拼接后才不会被新数据覆盖
    bookList = bookList.concat(res.data.books);
    // let bookList = res.data.books;
    let bookNum = res.data.total;

    this.setData({
      bookList,
      bookNum,
    });
  },
  // 点击 取消按钮
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      bookList: [],
      bookNum: [],
    });
  },
  // 页面上滑 滚动条触底事件
  onReachBottom() {
    // 总数
    console.log(this.data.bookNum);
    // 每页书籍数
    console.log(this.data.param.count);
    // 计算可分为多少页
    this.totalPages = Math.ceil(this.data.bookNum / this.data.param.count);
    console.log(this.totalPages);
    //  1 判断还有没有下一页数据
    if (this.pageNum >= this.totalPages) {
      // 没有下一页数据
      console.log("没有下一页数据");
      wx.showToast({ title: "没有下一页数据" });
    } else {
      // 还有下一页数据
      //  console.log('%c'+"有下一页数据","color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
      let { param } = this.data;
      console.log(start);
      let start = "param.start";
      this.setData({
        [start]: param.start + 10,
      });
      console.log("有下一页数据");
      this.pageNum++;
      this.qsearch(param);
    }
  },
  // 下拉刷新事件
  onPullDownRefresh() {
    // 1 重置数组
    this.setData({
      bookList: [],
      bookNum: 0,
    });
    // 2 重置请求参数
    this.data.param.start = 0;
    let { param } = this.data;
    // 3 发送请求
    this.qsearch(param);

    // 4 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错
    wx.stopPullDownRefresh();
  },
  handleGetId(e) {
    let { index } = e.currentTarget.dataset;
    let { bookList } = this.data;
    console.log(index);
    console.log(bookList);
    console.log(bookList[index]);
    wx.navigateTo({
      url: "../book/book?id=" + bookList[index].id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data);
        },
        someEvent: function (data) {
          console.log(data);
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
      },
    });
  },
});
