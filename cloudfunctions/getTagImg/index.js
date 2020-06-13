// 云函数入口文件
const cloud = require("wx-server-sdk");
// 引入所需要的第三方包
const cheerio = require("cheerio");

const superagent = require("superagent");
const charset = require("superagent-charset");
charset(superagent);

cloud.init({
  env: "test-peovn", //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
  secretId: "AKIDOmvVquxFXYJo79865pJWS8XfZF0qpSFN",
  secretKey: "zhAPN4VfkfJgogHgprdcGgqkMhZDZIlA",
});
const db = cloud.database();

exports.main = async (event, context) => {
  let imgList = [];
  let baseUrl = event;
  console.log("event", event);
  console.log("baseUrl", baseUrl);
  var url = encodeURI(baseUrl);
  console.log("url", url);

  let res;

  try {
    res = await superagent.get(url);
    console.log("正常");
  } catch (error) {
    console.log(`热点标签抓取失败 - ${error}`);
  }

  // 访问成功，请求https://book.douban.com/tag/ 页面所返回的数据会包含在res
  // 抓取热点标签数据
  let $ = cheerio.load(res.text) || {};

  console.log("object-1");
  // console.log(res);

  // 如果访问失败或者出错，会这行这里
  // 访问成功，请求 页面所返回的数据会包含在res
  // console.log($);
  if ($) {
    $(".subject-item").each(function () {
      let img = $(this).find(".pic .nbg img").attr("src");
      imgList.push(img);
      return false;
    });
    try {
      await db.collection("img").add({
        data: {
          createTime: db.serverDate(), //服务端时间
          imgList,
        },
      });
    } catch (e) {
      console.log(e);
    }
    // 标签的标签名及书单
    console.log("object");
    console.log(imgList);
    return { imgList };
    // return new Promise((resolve, reject) => {
    //   return resolve({ imgList });
    // });
  } else {
    return { data: "爬取失败" };
  }
};
