// 安装4个依赖 express fs superagent cheerio
const express = require("express");
const app = express();

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("your app is running at http://%s:%s", host, port);
});

app.get("/", function (req, res) {
  res.send(result);
});

var fs = require("fs");
let readData = function (filename) {
  var data = JSON.parse(fs.readFileSync(filename));
  return data;
};
let writeData = function (data, filename) {
  var dataString = JSON.stringify(data);
  fs.writeFile(filename, dataString, function (err) {
    if (err) throw err;
    console.log("file saved");
  });
};

var superagent = require("superagent");

let data = readData("mid.json");
let result = {};
// 书以标签分组的列表
let bookFinalList = [];
// 循环tagInfo的标签链接
data.forEach((tagInfo) => {
  let bookCategory = [];
  let bookTag = [];

  tagInfo.tagContent.forEach((v, i) => {
    // 接受该标签的书籍列表
    let bookList = [];
    // url有中文，需转码
    var url = encodeURI(v.tagUrl);
    // console.log();
    superagent.get(url).end((err, res) => {
      if (err) {
        // 如果访问失败或者出错，会这行这里
        console.log(`热点标签抓取失败 - ${err}`);
      } else {
        // 访问成功，请求 页面所返回的数据会包含在res
        // 抓取标签书籍列表数据
        getBookInfo(res, bookList);
        // 标签的标签名及书单
        let tag = {
          tagName: v.tagName,
          bookList,
        };

        bookTag.push(tag);
      }
      let test = {
        title: tagInfo.title,
        tageSize: tagInfo.tagSize,
        bookTag,
      };

      let item = bookCategory.find((item) => {
        return item.tagName == test.tagName;
      });
      if (!item) {
        bookCategory.push(test);
        // console.log(bookCategory);
        bookFinalList.push(test);
        result = bookFinalList;
        writeData(result, "final.json");
      }
    });
  });
});

const cheerio = require("cheerio");

let getBookInfo = (res, bookList) => {
  let $ = cheerio.load(res.text);

  $(".subject-item").each(function () {
    bookInfo = {
      title: $(this).find(".info h2 a").attr("title"),
      img: $(this).find(".pic .nbg img").attr("src"),
      pub: $(this).find(".info .pub").text().trim(),
      introduction: $(this).find(".info>p").text().trim(),
      starRating: $(this).find(".info .star .rating_nums").text(),
      ratingNum: $(this).find(".info .star .pl").text().trim(),
      buyUrl:
        $(this).find(".info .buy-info a").attr("href") || "暂未提供购买链接",
    };
    bookList.push(bookInfo);
  });
};
