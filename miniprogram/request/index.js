// 同时发送异步代码的次数
let ajaxTimes = 0;
export const request = (params) => {
  // 判断 url中是否带有 /my/ 请求的是私有的路径 带上header token
  ajaxTimes++;

  // console.log(params);
  // 显示加载中 效果
  wx.showLoading({
    title: "加载中",
    mask: true,
  });
  // 定义公共的url
  // https://api.douban.com/v2/book/17604305?fields=id,title,url&apikey=0df993c66c0c636e29ecbb5344252a4a
  // https://api.douban.com/v2/book/search?q=1&apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10
  const baseUrl = "https://api.douban.com/v2/book" + params.url;
  let { param } = params;
  // console.log(param);
  let url =
    baseUrl +
    "?q=" +
    param.q +
    "&apikey=" +
    param.apikey +
    "&start=" +
    param.start +
    "&count=" +
    param.count;
  console.log(url);
  return new Promise((resolve, reject) => {
    wx.request({
      header: { "Content-Type": "application/text" },
      url,
      success: (result) => {
        // console.log(result);
        resolve(result);
      },
      fail: () => {
        console.log("请求失败");
      },
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          //  关闭正在等待的图标
          wx.hideLoading();
        }
      },
    });
  });
  // return new Promise((resolve, reject) => {
  //   wx.request({
  //     ...params,
  //     url: baseUrl + params.url,
  //     success: (result) => {
  //       resolve(result.data.message);
  //     },
  //     fail: (err) => {
  //       reject(err);
  //     },
  //     complete: () => {
  //       ajaxTimes--;
  //       if (ajaxTimes === 0) {
  //         //  关闭正在等待的图标
  //         wx.hideLoading();
  //       }
  //     },
  //   });
  // });
};
