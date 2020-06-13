// 云函数入口文件
const cloud = require("wx-server-sdk");
// 引入所需要的第三方包
const superagent = require("superagent");
const cheerio = require("cheerio");
cloud.init({
  env: "test-peovn", //默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境
  secretId: "AKIDOmvVquxFXYJo79865pJWS8XfZF0qpSFN",
  secretKey: "zhAPN4VfkfJgogHgprdcGgqkMhZDZIlA",
});
const db = cloud.database({ env: "test-peovn" });
// 云函数入口函数
exports.main = async (event, context) => {
  let bookTags = []; // 热点标签
  let bookInfo = []; // 本地标签
  // 书以标签分组的列表;
  let bookFinalList = [];
  let bookCategory = [];
  /**
   * index.js
   * [description] - 使用superagent.get()方法来访问百度标签首页
   */
  let result;
  try {
    result = await superagent.get(
      "https://book.douban.com/tag/?view=type&icn=index-sorttags-all"
    );
    console.log("正常");
  } catch (error) {
    console.log(error);
  }

  // 访问成功，请求https://book.douban.com/tag/ 页面所返回的数据会包含在res
  // 抓取热点标签数据
  let $ = cheerio.load(result.text) || {};
  if ($) {
    $(".tag-title-wrapper").each(function () {
      // 标签组
      let tagPartition = {};
      // 标签组名
      const tagPartitionName = $(this).find("h2").text();
      // bookTags.push(tagPartitionName.replace("· · · · · · ", ""));
      // 每个标签组长度
      tagSize = $(this).next(".tagCol").find("tbody tr td").length;
      tagPartition = {
        title: tagPartitionName.replace("· · · · · · ", ""), // 获取标签标题
        tagSize,
        tagContent: [],
      };
      // 标签具体信息
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
      bookTags.push(tagPartition);
    });
    try {
      await db
        .collection("bookTags")
        .doc("4d5a19345edf5603005b3c897f8cc1ec")
        .update({
          data: {
            createTime: db.serverDate(), //服务端时间
            bookTags,
          },
        });
    } catch (e) {
      console.log(e);
    }

    return { bookTags };
  } else {
    return { data: "爬取失败" };
  }
};

