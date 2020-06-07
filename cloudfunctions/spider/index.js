// 云函数入口文件
const cloud = require("wx-server-sdk");
let bookInfo = []; // 本地标签

cloud.init({
  env: "环境id",
});
const db = wx.cloud.database();
const express = require("express");
const app = express();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("your app is running at http://%s:%s", host, port);
  });

  app.get("/", function (req, res) {
    res.send(result);
  });

  // 引入所需要的第三方包
  const superagent = require("superagent");

  let bookTags = []; // 热点标签
  let result = {};
  /**
   * index.js
   * [description] - 使用superagent.get()方法来访问百度标签首页
   */
  superagent
    .get("https://book.douban.com/tag/?view=type&icn=index-sorttags-all")
    .end((err, res) => {
      if (err) {
        // 如果访问失败或者出错，会这行这里
        console.log(`热点标签抓取失败 - ${err}`);
      } else {
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
        // 抓取热点标签数据
        bookTags = getBookTags(res);
        // writeData(bookTags);
        //插入单条数据
        // db.collection("bookTags")
        //   .add({
        //     // data 字段表示需新增的 JSON 数据
        //     data: { bookTags },

        //     // success: function (res) {
        //     //   // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        //     //   console.log(res);
        //     // },
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   });
        db.collection("bookTags").add({
          data: {
            bookTags,
          },
        });
        bookInfo = bookTags;
        // return bookTags;
      }
    });

  // let writeData = function (data) {
  //   var dataString = JSON.stringify(data);
  //   fs.writeFile("data.json", dataString, function (err) {
  //     if (err) throw err;
  //     console.log("file saved");
  //   });
  // };
  // let readData = function () {
  //   var data = JSON.parse(fs.readFileSync("./data.json"));
  //   // var dataString = JSON.stringify(data);
  //   // console.log(data[0].tagContent);
  //   return data;
  // };

  /**
   * index.js
   * [description] - 抓取热点标签页面
   */
  // 引入所需要的第三方包
  const cheerio = require("cheerio");

  let getBookTags = (res) => {
    // 访问成功，请求http://news.baidu.com/ 页面所返回的数据会包含在res.text中。

    /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
       以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
     */
    let $ = cheerio.load(res.text);

    // 找到目标数据所在的页面元素，获取数据
    $(".tag-title-wrapper").each(function () {
      // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
      let tagPartition = {
        title: "", // 获取标签组标题
        tagSize: "", // 获取标签组长度
        tagContent: [], // 标签数组
      };
      const tagPartitionName = $(this)
        .find("h2")
        .text()
        .replace("· · · · · · ", "");
      // .replace(/[^\u4e00-\u9fa5]/, ""); // 没效果 吐了

      $(this)
        .next(".tagCol")
        .each(function () {
          tagLength = $(this).find("tbody tr td").length;
        });
      tagPartition = {
        title: tagPartitionName, // 获取标签标题
        tagSize: tagLength,
        tagContent: [],
      };
      // console.log(tagPartitionName);
      $(this)
        .next(".tagCol")
        .find(" tbody tr td")
        .each(function () {
          let a = $(this).find("a");
          let b = $(this).find("b");

          let tagContent = {
            tagName: a.text(),
            tagUrl: "https://book.douban.com" + a.attr("href"),
            tagBookNum: b.text(),
          };

          tagPartition.tagContent.push(tagContent);
        });
      bookTags.push(tagPartition); // 存入最终结果数组
    });
    result = bookTags;
    // 标签组
    return bookTags;
  };

  return { bookInfo };
};
