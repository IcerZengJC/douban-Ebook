// 安装4个依赖 express fs superagent cheerio
const express = require("express");
const app = express();
var fs = require("fs");

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
let bookInfo = []; // 本地标签
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
      writeData(bookTags, "mid.json");
    }
  });

let writeData = function (data, filename) {
  var dataString = JSON.stringify(data);
  fs.writeFile(filename, dataString, function (err) {
    if (err) throw err;
    console.log("file saved");
  });
};
let readData = function () {
  var data = JSON.parse(fs.readFileSync("./data.json"));
  // var dataString = JSON.stringify(data);
  // console.log(data[0].tagContent);
  return data;
};

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

        // console.log(getBookList(tagContent));
        // console.log(bookCategory);
        // tagContent = {
        //   tagName: a.text(),
        //   tagUrl: "https://book.douban.com" + a.attr("href"),
        //   tagBookNum: b.text(),
        //   bookList: getBookList(tagContent),
        // };
        // console.log(typeof getBookList(tagContent));
        // (tagContent.bookList = getBookList(tagContent)),
        tagPartition.tagContent.push(tagContent);
      });
    bookTags.push(tagPartition); // 存入最终结果数组
  });
  result = bookTags;
  // 标签组
  return bookTags;
};
// let result = {};
// 书以标签分组的列表
// let getBookList = (tagContent) => {
//   data = readData();

//   bookCategory = [];
//   // 循环bookTags的标签链接
//   // 接受该标签的书籍列表
//   let bookList = [];
//   // url有中文，需转码
//   var url = encodeURI(tagContent.tagUrl);
//   i = 0;
//   superagent.get(url).end((err, res) => {
//     if (err) {
//       // 如果访问失败或者出错，会这行这里
//       console.log(`热点标签抓取失败 - ${err}`);
//     } else {
//       // 访问成功，请求 页面所返回的数据会包含在res
//       // 抓取标签书籍列表数据
//       // console.log(res);
//       // bookList =
//       // console.log(bookList);
//       // console.log(tagContent.tagName);
//       // console.log(bookList);
//       // 标签的标签名及书单
//       let tag = {
//         tagName: tagContent.tagName,
//         bookList: getBookInfo(res, url, tagContent.tagName),
//       };
//       // console.log(getBookInfo(res, url));
//       // console.log(getBookInfo(res, url));
//       // console.log(typeof getBookInfo(res, url));
//       // console.log(tag);
//       // console.log(getBookInfo(res, url));
//       console.log(i++, "push ok");
//       bookCategory.push(tag);
//       // console.log(i++, bookCategory);
//       // console.log(typeof bookCategory);
//       // // 在本地服务器显示
//       // result = bookCategory;
//       // console.log(1, bookCategory);
//       // console.log(1, bookCategory[0].bookList);
//     }
//     // console.log(bookCategory);
//     // console.log(2, bookCategory[0].bookList);

//     // console.log(2, bookCategory);

//     // result = bookCategory;
//     // console.log(bookCategory.bookList);
//     // console.log(bookCategory);
//   });
//   console.log(bookCategory[0]);
// };

// let getBookInfo = (res, url, tag) => {
//   let bookList = [];
//   let $ = cheerio.load(res.text);

//   $(".subject-item").each(function () {
//     bookInfo = {
//       title: $(this).find(".info h2 a").attr("title"),
//       img: $(this).find(".pic .nbg img").attr("src"),
//       pub: $(this).find(".info .pub").text().trim(),
//       introduction: $(this).find(".info>p").text().trim(),
//       starRating: $(this).find(".info .star .rating_nums").text(),
//       ratingNum: $(this).find(".info .star .pl").text().trim(),
//       buyUrl:
//         $(this).find(".info .buy-info a").attr("href") || "暂未提供购买链接",
//       url,
//       tag,
//     };
//     bookList.push(bookInfo);
//   });
//   return bookList;
// };
