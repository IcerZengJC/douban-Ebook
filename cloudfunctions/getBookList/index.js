// 云函数入口文件
const cloud = require("wx-server-sdk");
// 引入所需要的第三方包
const superagent = require("superagent");
const cheerio = require("cheerio");
cloud.init({
  // env: "test-peovn", //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
});
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  let data = event.bookTags;
  return { data };
  // 书以标签分组的列表
  // let bookFinalList = [];
  // // 循环tagInfo的标签链接
  // data.forEach((tagInfo) => {
  //   let bookCategory = [];
  //   let bookTag = [];

  //   tagInfo.tagContent.forEach((v, i) => {
  //     // 接受该标签的书籍列表
  //     let bookList = [];
  //     // url有中文，需转码
  //     var url = encodeURI(v.tagUrl);
  //     // console.log();
  //     const result = await superagent.get(url);

  //     // 访问成功，请求 页面所返回的数据会包含在res
  //     // 抓取标签书籍列表数据
  //     let $ = cheerio.load(res.text) || {};
  //     if ($) {
  //       $(".subject-item").each(function () {
  //         bookInfo = {
  //           title: $(this).find(".info h2 a").attr("title"),
  //           img: $(this).find(".pic .nbg img").attr("src"),
  //           pub: $(this).find(".info .pub").text().trim(),
  //           introduction: $(this).find(".info>p").text().trim(),
  //           starRating: $(this).find(".info .star .rating_nums").text(),
  //           ratingNum: $(this).find(".info .star .pl").text().trim(),
  //           buyUrl:
  //             $(this).find(".info .buy-info a").attr("href") ||
  //             "暂未提供购买链接",
  //         };
  //         bookList.push(bookInfo);
  //       });

  //       // 标签的标签名及书单
  //       let tag = {
  //         tagName: v.tagName,
  //         bookList,
  //       };

  //       bookTag.push(tag);

  //       let test = {
  //         title: tagInfo.title,
  //         tageSize:  tagInfo.tagSize,
  //         bookTag,
  //       };

  //       let item = bookCategory.find((item) => {
  //         return item.tagName == test.tagName;
  //       });
  //       if (!item) {
  //         bookCategory.push(test);
  //         // console.log(bookCategory);
  //         bookFinalList.push(test);
  //         result = bookFinalList;
  //         return { data: "成功" };
  //       }
  //     } else {
  //       return { data: "爬取失败" };
  //     }
  //   });
  // });
};
