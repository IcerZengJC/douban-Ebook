var exports_mode = require("./index");

bookTags = [
  {
    title: "文学 ",
    tagSize: 27,
    tagContent: [
      {
        tagName: "小说",
        tagUrl: "https://book.douban.com/tag/小说",
        tagBookNum: "(6486089)",
      },
      {
        tagName: "外国文学",
        tagUrl: "https://book.douban.com/tag/外国文学",
        tagBookNum: "(2516929)",
      },
      {
        tagName: "文学",
        tagUrl: "https://book.douban.com/tag/文学",
        tagBookNum: "(2357357)",
      },
      {
        tagName: "经典",
        tagUrl: "https://book.douban.com/tag/经典",
        tagBookNum: "(1530083)",
      },
      {
        tagName: "中国文学",
        tagUrl: "https://book.douban.com/tag/中国文学",
        tagBookNum: "(1455228)",
      },
      {
        tagName: "随笔",
        tagUrl: "https://book.douban.com/tag/随笔",
        tagBookNum: "(1388118)",
      },
      {
        tagName: "日本文学",
        tagUrl: "https://book.douban.com/tag/日本文学",
        tagBookNum: "(1116087)",
      },
      {
        tagName: "散文",
        tagUrl: "https://book.douban.com/tag/散文",
        tagBookNum: "(832568)",
      },
      {
        tagName: "村上春树",
        tagUrl: "https://book.douban.com/tag/村上春树",
        tagBookNum: "(500548)",
      },
      {
        tagName: "诗歌",
        tagUrl: "https://book.douban.com/tag/诗歌",
        tagBookNum: "(414916)",
      },
      {
        tagName: "童话",
        tagUrl: "https://book.douban.com/tag/童话",
        tagBookNum: "(373594)",
      },
      {
        tagName: "名著",
        tagUrl: "https://book.douban.com/tag/名著",
        tagBookNum: "(348073)",
      },
      {
        tagName: "儿童文学",
        tagUrl: "https://book.douban.com/tag/儿童文学",
        tagBookNum: "(336560)",
      },
      {
        tagName: "古典文学",
        tagUrl: "https://book.douban.com/tag/古典文学",
        tagBookNum: "(314611)",
      },
      {
        tagName: "余华",
        tagUrl: "https://book.douban.com/tag/余华",
        tagBookNum: "(289080)",
      },
      {
        tagName: "王小波",
        tagUrl: "https://book.douban.com/tag/王小波",
        tagBookNum: "(273536)",
      },
      {
        tagName: "杂文",
        tagUrl: "https://book.douban.com/tag/杂文",
        tagBookNum: "(253214)",
      },
      {
        tagName: "当代文学",
        tagUrl: "https://book.douban.com/tag/当代文学",
        tagBookNum: "(234361)",
      },
      {
        tagName: "张爱玲",
        tagUrl: "https://book.douban.com/tag/张爱玲",
        tagBookNum: "(218236)",
      },
      {
        tagName: "外国名著",
        tagUrl: "https://book.douban.com/tag/外国名著",
        tagBookNum: "(153086)",
      },
      {
        tagName: "钱钟书",
        tagUrl: "https://book.douban.com/tag/钱钟书",
        tagBookNum: "(139094)",
      },
      {
        tagName: "鲁迅",
        tagUrl: "https://book.douban.com/tag/鲁迅",
        tagBookNum: "(126028)",
      },
      {
        tagName: "诗词",
        tagUrl: "https://book.douban.com/tag/诗词",
        tagBookNum: "(103171)",
      },
      {
        tagName: "茨威格",
        tagUrl: "https://book.douban.com/tag/茨威格",
        tagBookNum: "(77627)",
      },
      {
        tagName: "米兰·昆德拉",
        tagUrl: "https://book.douban.com/tag/米兰·昆德拉",
        tagBookNum: "(62367)",
      },
      {
        tagName: "杜拉斯",
        tagUrl: "https://book.douban.com/tag/杜拉斯",
        tagBookNum: "(47243)",
      },
      {
        tagName: "港台",
        tagUrl: "https://book.douban.com/tag/港台",
        tagBookNum: "(9568)",
      },
    ],
  },
  {
    title: "流行 ",
    tagSize: 36,
    tagContent: [
      {
        tagName: "漫画",
        tagUrl: "https://book.douban.com/tag/漫画",
        tagBookNum: "(1479176)",
      },
      {
        tagName: "推理",
        tagUrl: "https://book.douban.com/tag/推理",
        tagBookNum: "(1206739)",
      },
      {
        tagName: "绘本",
        tagUrl: "https://book.douban.com/tag/绘本",
        tagBookNum: "(1063162)",
      },
      {
        tagName: "青春",
        tagUrl: "https://book.douban.com/tag/青春",
        tagBookNum: "(779739)",
      },
      {
        tagName: "东野圭吾",
        tagUrl: "https://book.douban.com/tag/东野圭吾",
        tagBookNum: "(777908)",
      },
      {
        tagName: "悬疑",
        tagUrl: "https://book.douban.com/tag/悬疑",
        tagBookNum: "(725043)",
      },
      {
        tagName: "科幻",
        tagUrl: "https://book.douban.com/tag/科幻",
        tagBookNum: "(695936)",
      },
      {
        tagName: "言情",
        tagUrl: "https://book.douban.com/tag/言情",
        tagBookNum: "(590940)",
      },
      {
        tagName: "推理小说",
        tagUrl: "https://book.douban.com/tag/推理小说",
        tagBookNum: "(412613)",
      },
      {
        tagName: "奇幻",
        tagUrl: "https://book.douban.com/tag/奇幻",
        tagBookNum: "(408102)",
      },
      {
        tagName: "武侠",
        tagUrl: "https://book.douban.com/tag/武侠",
        tagBookNum: "(369446)",
      },
      {
        tagName: "日本漫画",
        tagUrl: "https://book.douban.com/tag/日本漫画",
        tagBookNum: "(349111)",
      },
      {
        tagName: "耽美",
        tagUrl: "https://book.douban.com/tag/耽美",
        tagBookNum: "(327310)",
      },
      {
        tagName: "韩寒",
        tagUrl: "https://book.douban.com/tag/韩寒",
        tagBookNum: "(270009)",
      },
      {
        tagName: "网络小说",
        tagUrl: "https://book.douban.com/tag/网络小说",
        tagBookNum: "(265482)",
      },
      {
        tagName: "三毛",
        tagUrl: "https://book.douban.com/tag/三毛",
        tagBookNum: "(253635)",
      },
      {
        tagName: "科幻小说",
        tagUrl: "https://book.douban.com/tag/科幻小说",
        tagBookNum: "(250643)",
      },
      {
        tagName: "亦舒",
        tagUrl: "https://book.douban.com/tag/亦舒",
        tagBookNum: "(242599)",
      },
      {
        tagName: "阿加莎·克里斯蒂",
        tagUrl: "https://book.douban.com/tag/阿加莎·克里斯蒂",
        tagBookNum: "(204869)",
      },
      {
        tagName: "金庸",
        tagUrl: "https://book.douban.com/tag/金庸",
        tagBookNum: "(187302)",
      },
      {
        tagName: "安妮宝贝",
        tagUrl: "https://book.douban.com/tag/安妮宝贝",
        tagBookNum: "(177070)",
      },
      {
        tagName: "穿越",
        tagUrl: "https://book.douban.com/tag/穿越",
        tagBookNum: "(169392)",
      },
      {
        tagName: "郭敬明",
        tagUrl: "https://book.douban.com/tag/郭敬明",
        tagBookNum: "(158216)",
      },
      {
        tagName: "轻小说",
        tagUrl: "https://book.douban.com/tag/轻小说",
        tagBookNum: "(156262)",
      },
      {
        tagName: "魔幻",
        tagUrl: "https://book.douban.com/tag/魔幻",
        tagBookNum: "(155092)",
      },
      {
        tagName: "青春文学",
        tagUrl: "https://book.douban.com/tag/青春文学",
        tagBookNum: "(145442)",
      },
      {
        tagName: "几米",
        tagUrl: "https://book.douban.com/tag/几米",
        tagBookNum: "(120981)",
      },
      {
        tagName: "J.K.罗琳",
        tagUrl: "https://book.douban.com/tag/J.K.罗琳",
        tagBookNum: "(113842)",
      },
      {
        tagName: "幾米",
        tagUrl: "https://book.douban.com/tag/幾米",
        tagBookNum: "(104698)",
      },
      {
        tagName: "张小娴",
        tagUrl: "https://book.douban.com/tag/张小娴",
        tagBookNum: "(98558)",
      },
      {
        tagName: "古龙",
        tagUrl: "https://book.douban.com/tag/古龙",
        tagBookNum: "(83287)",
      },
      {
        tagName: "校园",
        tagUrl: "https://book.douban.com/tag/校园",
        tagBookNum: "(81522)",
      },
      {
        tagName: "高木直子",
        tagUrl: "https://book.douban.com/tag/高木直子",
        tagBookNum: "(77382)",
      },
      {
        tagName: "沧月",
        tagUrl: "https://book.douban.com/tag/沧月",
        tagBookNum: "(68221)",
      },
      {
        tagName: "余秋雨",
        tagUrl: "https://book.douban.com/tag/余秋雨",
        tagBookNum: "(61769)",
      },
      {
        tagName: "落落",
        tagUrl: "https://book.douban.com/tag/落落",
        tagBookNum: "(58516)",
      },
    ],
  },
];
url = "https://book.douban.com/tag/小说";
// url = "https://book.douban.com/tag/python";
var event = url;
console.log(url);
// console.log(bookTags);
exports_mode.main(event, null);
