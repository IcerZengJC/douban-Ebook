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
    let bookList = res.data.books;
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
});
