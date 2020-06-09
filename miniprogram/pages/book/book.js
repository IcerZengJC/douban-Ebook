// pages/book/book.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowChapter: true,
    currentPage: 1,
    book: {
      id: 1,
      name: "斗破苍穹",
      author: "天蚕土豆",
      article: [],
    },
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function () {
    console.log("object");
    let fs = wx.getFileSystemManager();
    const file_path =
      "cloud://test-peovn.7465-test-peovn-1302203294/book/data.txt";
    console.log(1);
    console.log(file_path);
    wx.cloud.downloadFile({
      fileID: file_path,
      success: (res) => {
        // get temp file path
        console.log("success");
        console.log(res);
        console.log(res.tempFilePath);
        fs.readFile({
          filePath: res.tempFilePath,
          encoding: "utf-8",
          success: (res) => {
            console.log("read_success");
            // console.log(res.data);
            console.log(typeof res.data);
            this.CutBook(res.data);
          },
          fail: (err) => {
            console.log("read_fail");
          },
        });
      },
      fail: (err) => {
        console.log("fail");
        // handle error
      },
    });
  },

  CutBook(str) {
    console.log("切割开始");
    str = str.split(/(第.+章\s+.+)\r\n/);

    console.log(str);
    var is_article = "book.article";
    let article = [];
    let x = {};
    let page = 1;
    for (let i = 1; i < str.length; i = i + 2) {
      x.page = page;
      x.title = str[i];
      console.log(str[i + 1]);
      x.content = str[i + 1];
      console.log(x);
      article.push(x);
      x = {};
      page++;
    }

    this.setData({ [is_article]: article });
  },
  handleShowChapter(e) {
    console.log(e);
  },
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
