const utils = require("../../utils/util");
Page({
  data: {
    bookTags: [],
    selectTag: [],
  },
  onLoad() {
    wx.cloud
      .callFunction({
        name: "getBookTags",
      })
      .then((res) => {
        console.log(res.result);
        let { bookTags } = res.result;
        this.setData({
          bookTags,
          isShow: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  handleChooseTag(e) {
    console.log(e.currentTarget.dataset);
    let { text } = e.currentTarget.dataset;
    let { swiperindex } = e.currentTarget.dataset;
    let { tagindex } = e.currentTarget.dataset;
    let { selectTag } = this.data;
    // let { bookTags } = this.data;
    let isSelect =
      "bookTags[" + swiperindex + "].tagContent[" + tagindex + "].isSelect";
    // 已经选中了

    let flag = false;
    selectTag.some((ele) => {
      console.log(ele);
      if (ele === text) {
        flag = true;
      }
    });
    if (flag) {
      selectTag = this.remove(selectTag, text);
      // selectTag.remove(text);
      this.setData({
        selectTag,
        [isSelect]: false,
      });
    } else {
      // 未选中
      selectTag.push(text);
      this.setData({
        selectTag,
        [isSelect]: true,
      });
    }
  },
  remove(arr, val) {
    var index = arr.indexOf(val);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  },
  handleStorage() {
    let { selectTag } = this.data;
    wx.setStorageSync("tags", selectTag);
    this.direct();
  },
  direct() {
    let url = "../index/index";
    wx.switchTab({
      url,
    });
  },
});
