const utils = require("../../utils/util");
Page({
  onLoad() {
    let timer = setTimeout(() => {
      console.log("5s");
      this.direct();

      clearTimeout(timer);
    }, 1000);
  },

  direct() {
    let url = "../select/select";
    wx.reLaunch({
      url,
    });
  },
});
