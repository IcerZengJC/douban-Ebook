// pages/find/find.js
import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShow: true,
    listShow: true,
    // 取消 按钮 是否显示
    isFocus: false,
    // 输入框的值
    inpValue: "",
    param: {
      apikey: "0df993c66c0c636e29ecbb5344252a4a",
      q: "",
      start: 0,
      count: 10,
    },
    bookList: [],

    bookRecomondList: [
      {
        rating: {
          max: 10,
          numRaters: 17652,
          average: "8.1",
          min: 0,
        },
        subtitle: "余秋雨三十年散文自选集",
        author: ["余秋雨"],
        pubdate: "2014-2",
        tags: [
          {
            count: 3055,
            name: "余秋雨",
            title: "余秋雨",
          },
          {
            count: 2085,
            name: "散文",
            title: "散文",
          },
          {
            count: 1796,
            name: "文化苦旅",
            title: "文化苦旅",
          },
          {
            count: 1651,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 1569,
            name: "文化",
            title: "文化",
          },
          {
            count: 1369,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 1290,
            name: "爱旅游，爱文化，必读",
            title: "爱旅游，爱文化，必读",
          },
          {
            count: 1179,
            name: "散文随笔",
            title: "散文随笔",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s27226968.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "新版小叙\t001\n牌坊\t001\n寺庙\t016\n我的山河\t025\n都江堰\t034\n道士塔\t041\n莫高窟\t052\n沙原隐泉\t060\n阳关雪\t065\n西域喀什\t070\n废井冷眼\t080\n杭州宣言\t090\n黄州突围\t100\n山庄背影\t115\n宁古塔\t133\n抱愧山西\t148\n风雨天一阁\t168\n鱼尾山屋\t181\n北极寒夜\t201\n远方的海\t216\n谢家门孔\t227\n巴金百年\t245\n佐临遗言\t271\n寻石之路\t293\n天人对话\t307\n为妈妈致悼词 323",
        pages: "287",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s27226968.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s27226968.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s27226968.jpg",
        },
        alt: "https://book.douban.com/subject/19940743/",
        id: "19940743",
        publisher: "长江文艺出版社",
        isbn10: "7535447341",
        isbn13: "9787535447340",
        title: "文化苦旅",
        url: "https://api.douban.com/v2/book/19940743",
        alt_title: "",
        author_intro:
          "余秋雨，浙江余姚人，当代著名散文家，文化学者，艺术理论家，文化史学家。著有《文化苦旅》《何谓文化》《中国文脉》《山河之书》《霜冷长河》等。\n二十世纪八十年代中期，他被推举为当时中国内地最年轻的高校校长，并出任上海市中文专业教授评审组组长，兼艺术专业教授评审组组长。二十多年前，他毅然辞去一切行政职务和高位任命，孤身一人寻访中华文明被埋没的重要遗址。\n二十世纪末，冒着生命危险贴地穿越数万公里考察了巴比伦文明、埃及文明、克里特文明、希伯莱文明、阿拉伯文明、印度文明、波斯文明等一系列最重要的文化遗迹，作为迄今全球唯一完成全部现场文化探索的人文学者，对当代世界文明作出了全新思考和紧迫提醒，在海内外引起广泛关注。\n他所写的书籍，长期位居全球华文书排行榜前列，仅中国台湾一地，就囊括了白金作家奖、桂冠文学家奖、读书人最佳书奖、金石堂最有影响力书奖等一系列重大奖项。",
        summary:
          "《文化苦旅》一书于1992年首次出版，是余秋雨先生1980年代在海内外讲学和考察途中写下的作品，是他的第一部文化散文集。全书主要包括两部分，一部分为历史、文化散文，另一部分为回忆散文。甫一面世，该书就以文采飞扬、知识丰厚、见解独到而备受万千读者喜爱。由此开创“历史大散文”一代文风，令世人重拾中华文化价值。他的散文别具一格，见常人所未见，思常人所未思，善于在美妙的文字中一步步将读者带入历史文化长河，启迪哲思，引发情致，具有极高的审美价值和史学、文化价值。书中多篇文章后入选中学教材。但由于此书的重大影响，在为余秋雨先生带来无数光环和拥趸的同时，也带来了数之不尽的麻烦和盗版。誉满天下，“谤”亦随身。余秋雨先生在身心俱疲之下，决定亲自修订、重编此书。\n新版《文化苦旅》作为余秋雨先生30年历史文化散文修订自选集，删掉旧版37篇文章中的13篇，新增文章17篇，其中入选教材的《道士塔》《莫高窟》《都江堰》等经典篇目全部经过改写、修订。新版内容与旧版相比，全新和改写的篇目达到三分之二以上，对新老读者都是一场全新的阅读体验和人文享受。堪称余秋雨30年来不懈的文化考察和人生思索的完美结晶。",
        price: "38.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 7851,
          average: "7.0",
          min: 0,
        },
        subtitle: "张小娴最美的散文",
        author: ["张小娴"],
        pubdate: "2013-4",
        tags: [
          {
            count: 5373,
            name: "张小娴",
            title: "张小娴",
          },
          {
            count: 2832,
            name: "谢谢你离开我",
            title: "谢谢你离开我",
          },
          {
            count: 1969,
            name: "爱情",
            title: "爱情",
          },
          {
            count: 1911,
            name: "治愈系",
            title: "治愈系",
          },
          {
            count: 1440,
            name: "散文",
            title: "散文",
          },
          {
            count: 748,
            name: "关于女子",
            title: "关于女子",
          },
          {
            count: 531,
            name: "生活智慧",
            title: "生活智慧",
          },
          {
            count: 515,
            name: "青春文学",
            title: "青春文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s25948224.jpg",
        binding: "",
        translator: [],
        catalog:
          "1你爱我吗？\n四肢在恋爱   . . . 002\n你爱我吗？   . . . 004\n爱情如烟花   . . . 006\n我和你的地域   . . . 008\n感性•感动•感觉   . . . 010\n床榻之岸的人   . . . 012\n一个人的掌声   . . . 014\n一厢情愿的时候   . . . 016\n有情但薄幸   . . . 018\n有个人把它当作一回事   . . . 020\n把自己挂在一个人身上   . . . 022\n好男人的贴身服务   . . . 024\n今天想吃什么   . . . 026\n我今天玩得很开心   . . . 028\n他对你的好   . . . 030\n隔着电话线的亲亲   . . . 034\n憋不住的眼泪   . . . 036\n爱情的时光隧道   . . . 038\n年轻的情人   . . . 040\n沉落在暗恋湖底   . . . 042\n坐船的男人   . . . 044\n应付一个女人   . . . 046\n沉迷的人是可怕的   . . . 048\n爱的两条路   . . . 050\n奴隶兽   . . . 052\n2 爱情终究是经营不来的\n我和你的习惯   . . . 056\n世间相对论   . . . 058\n时间的多情尾巴   . . . 060\n不要相信一碗暖的糖水   . . . 062\n把爱情削弱   . . . 064\n爱情终究是经营不来的   . . . 066\n一朵花的条件   . . . 068\n我和你的层次   . . . 070\n男朋友的学历   . . . 072\n最坏的结局是什么？   . . . 074\n惜取别离时   . . . 076\n惩罚   . . . 078\n回忆的味道   . . . 080\n当爱情缺席的时候   . . . 082\n那片你没有选择的风景   . . . 084\n一个人的晚饭   . . . 086\n导向心脏的手指   . . . 088\n要耐得住寂寞   . . . 090\n你的肚子给我踩   . . . 092\n留下的红丝带   . . . 094\n原谅   . . . 096\n你好像一点也不想我   . . . 098\n那时候，你还不懂得   . . . 100\n比一公尺还要长的希望   . . . 102\n女人的投资   . . . 104\n3我爱过，所以我活过\n不会再遇上  . . . 108\n爱情使人忘记时间，时间也使人忘记爱情  . . . 110\n最难消受  . . . 112\n枕边的细语  . . . 114\n当你爱上一个人  . . . 116\n爱的时候，我们也长大  . . . 118\n学着做一个高贵的人吧  . . . 122\n那一点点已经不重要了  . . . 124\n林中的小屋  . . . 126\n因为懂得，所以慈悲  . . . 128\n深情我欠得起  . . . 130\n你不爱我  . . . 132\n最愚蠢的爱  . . . 134\n自己的骗子  . . . 136\n反射的爱和恨  . . . 138\n有情吃泥饱  . . . 140\n不用再等我  . . . 142\n我会打电话给你  . . . 144\n负心和记性  . . . 146\n浮不上面的爱  . . . 148\n曾经深深爱着的那个人  . . . 150\n请你不要太快放弃我  . . . 152\n早失恋早好  . . . 154\n不爱你就是不爱你  . . . 156\n赢的最高境界  . . . 158\n情人无话  . . . 160\n旧情人与老人  . . . 162\n我爱过，所以我活过  . . . 164\n4心中的答案\n留一片夜色   . . . 168\n当时只道是寻常   . . . 170\n最难熬的孤单   . . . 172\n后悔有什么不好   . . . 174\n错过了的时刻   . . . 176\n不能舍弃的东西   . . . 178\n心中的答案   . . . 180\n我心自有明月   . . . 182\n我们都是风筝   . . . 184\n只是我们刚巧相爱   . . . 186\n世上的另一个我   . . . 188\n吃鱼的伴儿   . . . 190\n须眉知己   . . . 192\n谁笑到最后   . . . 194\n靠自己，也靠男人   . . . 196\n什么是青春？   . . . 198\n太老了   . . . 200\n它的烂漫，或是它的凋零   . . . 202\n六个明天以后   . . . 204\n夭折的爱情   . . . 206\n想做而还没有做的事   . . . 208\n心事的房子   . . . 210\n夜晚的一张脸   . . . 212\n那一段天涯路   . . . 214\n床是归乡   . . . 216\n人有几张脸   . . . 218\n你是梦里星河   . . . 220\n爱情的餐桌   . . . 222",
        pages: "223",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s25948224.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s25948224.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s25948224.jpg",
        },
        alt: "https://book.douban.com/subject/3521168/",
        id: "3521168",
        publisher: "湖南文艺出版社",
        isbn10: "7540460598",
        isbn13: "9787540460594",
        title: "谢谢你离开我",
        url: "https://api.douban.com/v2/book/3521168",
        alt_title: "",
        author_intro:
          "张小娴，香港知名作家。她是全世界华人的爱情知己。上世纪90年代初于《明报》连载《面包树上的女人》而声名鹊起。\n她以小说描绘爱情的灼热与冷却，以散文倾诉恋人的微笑与泪水，迄今已出四十多本小说和散文集，深受广大读者好评。\n她对人性的洞察，使她开创了一种既温柔又犀利的爱情文字。每一字句都打到心坎，让数以千万的读者得到疗愈，而我们也能从她的作品中豁然明白，爱情的得失从来就不重要，当你舍弃一些，也许得到更多，只要曾深深爱过，你的人生将愈加完整。",
        summary:
          "本书是张小娴的最新爱情散文。主题是离开，实际是透过离开讲女人的成长，告诉我们爱一个人只有两条路，给他自由，或是成为很棒的女人。无论单身与否，首先要有自己的独立性。因为离开原本就是爱情与人生的常态，那些痛苦增加了生命的厚度，有一天，当我们可以微笑地转身，就会明白，一个不爱你的人，绝不会比你的生命更重要。",
        price: "30.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 3808,
          average: "8.8",
          min: 0,
        },
        subtitle: "汪曾祺谈吃散文32篇",
        author: ["汪曾祺"],
        pubdate: "2005-04",
        tags: [
          {
            count: 1913,
            name: "汪曾祺",
            title: "汪曾祺",
          },
          {
            count: 1183,
            name: "美食",
            title: "美食",
          },
          {
            count: 1021,
            name: "散文",
            title: "散文",
          },
          {
            count: 783,
            name: "饮食文化",
            title: "饮食文化",
          },
          {
            count: 556,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 536,
            name: "饮食",
            title: "饮食",
          },
          {
            count: 378,
            name: "生活",
            title: "生活",
          },
          {
            count: 378,
            name: "吃",
            title: "吃",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1728272.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "葵・\n故乡的食物\n吃食和文学\n宋朝人的吃喝\n昆明菜\n\ufffd鱼\n家常酒菜\n韭菜花\n四方食事\n寻常茶话\n《知味集》征稿小启（代序）\n作家谈吃第一集\n――《知味集》后记\n萝卜\n五味\n米线和饵块\n食道旧寻\n――《学人谈吃》序\n故乡的野菜\n食豆饮水斋闲笔\n豆腐\n干丝\n肉食者不鄙\n鱼我所欲也\n昆明的吃食\n手把肉\n贴秋膘\n栗子\n《吃的自由》序\n果蔬秋浓\n《旅食与文化》题记\n面茶\n豆汁儿\n菌小谱\n",
        pages: "177",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1728272.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1728272.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1728272.jpg",
        },
        alt: "https://book.douban.com/subject/1288925/",
        id: "1288925",
        publisher: "山东画报出版社",
        isbn10: "7807130792",
        isbn13: "9787807130796",
        title: "五味",
        url: "https://api.douban.com/v2/book/1288925",
        alt_title: "",
        author_intro:
          "汪曾祺（192O～1997）现、当代作家。江苏高邮人。1939年考入昆明西南联合大学中文系，深受教写作课的沈从文的影响。1940年开始发表小说。 1943年大学毕业后在昆明、上海任中学国文教员和历史博物馆职员。1946年起在《文学杂志》、《文艺复兴》和《文艺春秋》上发表《戴车匠》、《复仇》、《绿猫》、《鸡鸭名家》等短篇小说，引起文坛注目。1950年后在北京文联、中国民间文学研究会工作，编辑《北京文艺》和《民间文学》等刊物。1962年调北京京剧团（后改北京京剧院）任编剧。著有小说集《邂逅集》、《羊舍的夜晚》、《汪曾祺短篇小说选》、《晚饭花集》、《寂寞与温暖》、《茱萸集》，散文集《蒲桥集》、《塔上随笔》，文学评论集《晚翠文谈》，以及《汪曾祺自选集》等。另有一些京剧剧本。短篇《受戒》和《大淖记事》是他的获奖小说。作品被译成多种文字介绍到国外。他以散文笔调写小说，写出了家乡五行八作的见闻和风物人情、习俗民风，富于地方特色。作品在疏放中透出凝重，于平淡中显现奇崛，情韵灵动淡远，风致清逸秀异。",
        summary:
          "汪曾祺既不是达官贵人，又不是商贾巨富，因此所食、所喜的多是地方风味和民间小食，他谈萝卜、豆腐，讲韭菜花、手把肉，皆是娓娓道来，从容闲适；读的人则津津有味，满嘴噙香。汪曾祺在《葵・薤》里说，自己小时候读汉乐府《十五从军征》“舂谷持作饭,采葵持作羹,羹饭一时熟,不知怡阿谁”时，尽管他“未从过军，接触这首诗的时候，也还没有经过长久的乱离，但是不止一次为这首诗流了泪”。想见汪曾祺老人也是多愁善感，性情中人，遇事有激情，有感动，有愤慨。\n但汪曾祺并不止于见花流泪，感别伤心，而是追根究底，想要弄明白葵到底是什么物种，他从《毛诗品物图考》追到吴其浚的《植物名实图考长编》和《植物名实图考》，恰巧在武昌见到了古书中的葵―――冬苋菜，终于放下了一件心事，总算把《十五从军征》真正读懂了。当然，汪曾祺的心思可不仅仅在考古，而自有深意，就是在文艺创作上“劝大家口味不要太窄，什么都要尝一尝”，“一个一年到头吃大白菜的人是没有口福的”。中国人讲究寓教于乐，汪曾祺也不例外，在其他几篇谈美食例如《吃食与文学》的文章里，他犹如邻家老妪，絮絮叨叨地讲自己的创作观点和人生感悟，可是你竟然一点也不讨厌他，反而觉得他是一个挺可爱的小老头。",
        series: {
          id: "21496",
          title: "汪曾祺系列丛书",
        },
        price: "13.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 3217,
          average: "8.7",
          min: 0,
        },
        subtitle: "丰子恺散文漫画精品集",
        author: ["丰子恺"],
        pubdate: "2016-10",
        tags: [
          {
            count: 1949,
            name: "丰子恺",
            title: "丰子恺",
          },
          {
            count: 1355,
            name: "活着本来单纯",
            title: "活着本来单纯",
          },
          {
            count: 1051,
            name: "治愈系",
            title: "治愈系",
          },
          {
            count: 963,
            name: "散文",
            title: "散文",
          },
          {
            count: 818,
            name: "快乐就这么简单",
            title: "快乐就这么简单",
          },
          {
            count: 731,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 700,
            name: "漫画",
            title: "漫画",
          },
          {
            count: 598,
            name: "绘本",
            title: "绘本",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s29041051.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "第一部分豁然开朗\n心小了，所有的小事就大了；心大了，所有的大事都小了；看淡世事沧桑，内心安然无恙。\n渐/003\n大账簿/008\n实行的悲哀/014\n生机/019\n佛无灵/023\n吃瓜子/028\n晨梦/035\n肉腿/039\n第二部分无宠不惊过一生\n不乱于心，不困于情。不畏将来，不念过往。如此，安好。\n忆儿时/045\n梦痕/052\n我的母亲/058\n白鹅/063\n闲居/069\n过年/073\n新年怀旧/078\n吃酒/087\n湖畔夜饮/092\n初冬浴日漫想/097\n第三部分天地间最健全的心眼\n天地间最健全的心眼，只是孩子们的所有物，世间事物的真相，只有孩子们能最明确、最完全地见到。我比起他们来，真的心眼已经被世智尘劳所蒙蔽，所斫丧，是一个可怜的残废者了。\n从孩子得到的启示/103\n给我的孩子们/107\n送考/112\n第四部分你若爱，生活哪里都是爱\n这个世界不是有钱人的世界，也不是无钱人的世界，它是有心人的世界。\n家/119\n杨柳/123\n随感13则/127\n庐山游记/136\n钱江看潮记/142\n春/147\n秋/151\n清晨/156\n扬州梦/162\n阿咪/168\n东京某晚的事/173\n塘栖/176\n第五部分学会艺术的生活\n人生有三层楼：第一层是物质生活，第二层是精神生活，第三层是灵魂生活。\n学会艺术的生活/181\n爱与同情/185\n手指/190\n自然/196\n美术与人生/201\n山中避雨/204\n梧桐树/208\n带点笑容/211",
        pages: "224",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s29041051.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s29041051.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s29041051.jpg",
        },
        alt: "https://book.douban.com/subject/26873638/",
        id: "26873638",
        publisher: "江苏凤凰文艺出版社",
        isbn10: "7539996315",
        isbn13: "9787539996318",
        title: "活着本来单纯",
        url: "https://api.douban.com/v2/book/26873638",
        alt_title: "",
        author_intro:
          "丰子恺，画家、散文家，卓有成就的文艺大师。师从弘一法师，学贯中西。朱自清，郁达夫，巴金、叶圣陶、林清玄，对其文章和漫画赞誉有加。日本汉学家吉川幸次郎则说，丰子恺是最中国的中国人。他的散文兼有平易纯朴之风、宽仁隽永之意和童真天然之趣，是现代文学中备受推崇的佳品，多次被选入学生教材，作语文教育典范。漫画幽默风趣，流传广泛 ，深受人们的喜爱，争相收藏。",
        summary:
          "丰子恺散文漫画精品集（全新精装收藏本）。女儿丰一吟授权版本，全面收录《渐》《大账簿》《梦痕》《给孩子们》等55篇经典佳作，一本书阅尽丰子恺散文精华。漫画原版复制，典雅可爱，采用特种纸印刷，色彩雅致，触感温润，可堪赏玩。有趣、 有心、有情的人生哲学。\n在心情低谷时翻看，给人以温暖与悲悯；在事情顺境时闲读，又像一阵凉夜清风，不至昏头脑。\n不要因为世界太复杂，而背叛了你的单纯。\n•\t活着这回事，本来是如此单纯。\n•\t所谓单纯，不是幼稚的天真，而是一种超越了世故，知道人世间种种矛盾、种种问题，种种细微的心理计较。但超过这一层，一种超乎其上的平视，达观看待这个世界，然后游戏其间。这是非常豁达的心胸，一种超越的态度和智慧。\n•\t敬畏  *  宁静  *  智慧  *  美",
        price: "45元",
      },
      {
        rating: {
          max: 10,
          numRaters: 37,
          average: "9.1",
          min: 0,
        },
        subtitle: "米什莱散文选",
        author: ["[法国] 儒勒·米什莱"],
        pubdate: "2020-4-1",
        tags: [
          {
            count: 50,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 49,
            name: "散文",
            title: "散文",
          },
          {
            count: 44,
            name: "自然",
            title: "自然",
          },
          {
            count: 41,
            name: "法国文学",
            title: "法国文学",
          },
          {
            count: 39,
            name: "儒勒·米什莱",
            title: "儒勒·米什莱",
          },
          {
            count: 36,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 25,
            name: "米什莱",
            title: "米什莱",
          },
          {
            count: 15,
            name: "2.散文随笔",
            title: "2.散文随笔",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s33601116.jpg",
        binding: "平装",
        translator: ["徐知免"],
        catalog:
          "鸟\n阳光与黑夜\n云雀\n燕子\n啄木鸟\n会唱歌的夜莺\n夜莺的迁徙\n虫\n枫丹白露森林\n阿尔卑斯山中的枞树林\n热带的昆虫\n田野里的蜜蜂\n白蚁\n蚂蚁的内战\n蜘蛛\n海\n从格朗维尔岸边观海\n军舰鸟\n灯塔\n1859 年10 月的一次风暴\n海中勇士——甲壳动物\n水母\n鱼镖\n麦哲伦\n雪原探险者\n山\n山的魅力和危险\n森林的梯形结构\n昂加蒂纳\n在贝尔尼那采集标本\n爪哇的火山\n山的死亡\n意大利的冬天\n热那亚人\n贫穷的亚平宁山区一瞥\n蜥蜴的食物\n罗马史\n意大利风貌\n法国史\n枫丹白露宫\n中世纪的教堂\n贞德\n人民\n《人民》序（节选）\n法国的农民\n工人诗人\n手工工场工人的苦恼\n我们的低级兄弟们\n我们的儿子\n“我的书”\n女巫\n仙女的童话\n妇女\n女孩和花\n我的少年时代\n我的少年时代\n圣马丁林荫大道的地窖\n教师\n丧葬\n我的历史志趣\n米什莱年表",
        ebook_url: "https://read.douban.com/ebook/150373103/",
        pages: "265",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s33601116.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s33601116.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s33601116.jpg",
        },
        alt: "https://book.douban.com/subject/30216772/",
        id: "30216772",
        publisher: "译林出版社",
        isbn10: "7544773426",
        isbn13: "9787544773423",
        title: "意大利的冬天",
        url: "https://api.douban.com/v2/book/30216772",
        alt_title: "",
        author_intro:
          "作者简介\n儒勒·米什莱（Jules Michelet，1798－1874），法国19世纪著名历史学家，在近代历史研究领域中成绩卓越，被誉为“法国史学之父”。他以文学风格的语言撰写历史著作，趣味盎然；他以历史学家的淹博写作散文，曲尽其妙。著有历史著作《法国史》《罗马史》《 人民》《法国大革命史》，自然著作《鸟》《虫》《海》《山》等。\n译者简介\n徐知免（1921—2015），江苏如皋人，著名法语翻译家，致力于法国诗歌和散文翻译。主要译作有《烽火岛》《孩子》《比尔和吕丝》《漂逝的半岛》《雨：现代法国诗抄》《列那尔散文选》《茜多》《认识东方》《法兰西和比利时游记》《旅人札记》等；编选有《法国散文选》《司汤达散文》；负责校阅《当代法国文学辞典》。",
        summary:
          "本书文章精选自法国19世纪著名历史学家儒勒·米什莱的12部代表著作——《鸟》《虫》《海》《山》《意大利的冬天》《罗马史》《法国史》《人民》《我们的儿子》《女巫》《我的少年时代》，从内容上可以分为自然散文和历史散文两部分，作者的生活情趣和渊博学识闪现在字里行间。\n不要问我你们该带什么新书去度假，那样我会回答：“没有什么新书。你们就带上《鸟》《虫》《海》《山》，到树林深处重新阅读。我可以肯定，你们会以为还没有翻阅过。”\n——左拉\n时代需要像您这样的人；每个世纪都有斯芬克司，那么就应当有许多俄狄甫斯。我为我们两个心灵的契合感到喜悦。您所有的著作都是行动。\n——雨果",
        ebook_price: "23.99",
        price: "39.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 2582,
          average: "8.4",
          min: 0,
        },
        subtitle: "周国平散文·情感体验篇",
        author: ["周国平"],
        pubdate: "2001-10",
        tags: [
          {
            count: 1246,
            name: "周国平",
            title: "周国平",
          },
          {
            count: 557,
            name: "散文",
            title: "散文",
          },
          {
            count: 533,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 446,
            name: "爱与孤独",
            title: "爱与孤独",
          },
          {
            count: 244,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 170,
            name: "孤独",
            title: "孤独",
          },
          {
            count: 156,
            name: "爱",
            title: "爱",
          },
          {
            count: 133,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s2166744.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "1、生命本来没有名字\n幸福的悖论\n时光村落里的往事\n永远未完成\n生命本来没有名字\n人人都是孤儿\n爱的反义词\n沟通的限度\n爱使人富有\n2、女性拯救人类\n人性、爱情和天才\n女性拯救人类\n现代：女性美的误区\n女人和哲学\n男人眼中的女人\n男子汉形象\n关于好男人\n能使男人受孕的女人\n3、爱情不风流\n性爱五题\n艺术・技术・魔术\n何必温馨\n爱情不风流\n爱还是被爱\n爱：从痴迷到依恋\n都市生活与爱情\n情人节\n欣赏另一半\n爱情是一条流动的河\n4、爱与孤独\n论孤独\n爱与孤独\n沟通的必要\n交往的限度\n爱情的容量\n我爱故我在\n爱的距离\n5、论性爱\n性爱哲学\n性爱伦理学\n性爱心理学\n性爱美学\n女性价值\n女性魅力\n女性心理\n男人与色情\n两性比较\n两性之间\n6、婚姻反思录\n论怕老婆\n家\n调侃婚姻\n宽松的婚姻\n心疼这个家\n婚姻反思录\n嫉妒的权利\n婚姻悖论与现代的困境\n婚姻中的爱情\n夫妻间的隐私\n7、婚姻与孩子\n婚姻与爱情\n婚姻不是天堂\n论亲子之爱\n孩子\n8、生命中的无奈\n惟有真情永存\n一本不问有什么意义的书\n点与面\n生命中的无奈\n海滩上的五百六十二枚贝壳",
        pages: "237",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s2166744.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s2166744.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s2166744.jpg",
        },
        alt: "https://book.douban.com/subject/1004539/",
        id: "1004539",
        publisher: "广西师范大学出版社",
        isbn10: "7563332855",
        isbn13: "9787563332854",
        title: "爱与孤独",
        url: "https://api.douban.com/v2/book/1004539",
        alt_title: "",
        author_intro:
          "周国平：1945年出生于上海，现在中国社会科学院哲学所工作。主要著作有：《尼采：在世纪的转折点上》、《人与永恒》、《尼采与形而上学》、《周国平文集》、《妞妞——一个父亲的札记》、《宁望的距离》等。主要译著有：《尼采美学文选》、《尼采诗集》、《偶像的黄昏》等。其作品充满了人生的智慧和哲学的魅力，融理性和激情于一体，笔调清新自然，深受读者喜爱。",
        summary:
          "收录散文50余篇，包括《生命本来没有名字》、《女性拯救人类》、《爱情不风流》、《爱与孤独》、《论性爱》等。",
        series: {
          id: "12695",
          title: "周国平散文",
        },
        price: "17.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 2748,
          average: "8.7",
          min: 0,
        },
        subtitle: "张爱玲散文结集",
        author: ["张爱玲"],
        pubdate: "2002-9",
        tags: [
          {
            count: 1117,
            name: "张爱玲",
            title: "张爱玲",
          },
          {
            count: 449,
            name: "散文",
            title: "散文",
          },
          {
            count: 219,
            name: "张看",
            title: "张看",
          },
          {
            count: 171,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 146,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 113,
            name: "張愛玲",
            title: "張愛玲",
          },
          {
            count: 105,
            name: "文学",
            title: "文学",
          },
          {
            count: 82,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1085145.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "天才散文　名家评说\n会说是非的女狐子／贾平凹（西安）\n世俗的张爱玲／王安忆（上海）\n磨破了领口的旗袍／苏童（南京）\n淘不尽的一口古井／李碧华（香港）\n不可思议的感性／南方朔（台北）\n乱世佳人／木心（纽约）\n\n写在前面／陈子善\n\n日常生活\n天才梦\n到底是上海人\n更衣记\n公寓生活记趣\n道路以目\n必也正名乎\n烬余录\n谈女人\n爱\n有女同车\n夜营的喇叭\n童言无忌\n附：我的姊姊――张爱玲\n造人\n打人\n私语\n中国人的宗教\n被窝\n雨伞下\n气短情长及其他\n卷首玉照及其他\n中国的日夜\n谈吃与画饼充饥\n草炉饼\n一九八八至――？\n\n亲友素描\n说胡萝卜\n炎樱语录\n附：不染红尘――张爱玲\n双声\n我看苏青\n姑姑语录\n忆胡适之\n\n未名小草\n迟暮\n秋雨\n读书报告三则\n《若馨》评\n论卡通画之前途\n牧羊者素描\n心愿\n张爱玲语录\n中学时代的先生\n附：记张爱玲\n\n艺文天地\n鸦片战争\n《秋歌》和《乌云盖月》\n婆媳之间\n《万紫千红》和《燕迎春》\n洋人看京戏及其他\n借银灯\n银宫就学记\n诗与胡说\n忘不了的画\n谈跳舞\n谈音乐\n谈画\n秘密\n丈人的心\n《亦报》的好文章\n谈看书\n谈看书后记\n关于《笑声泪痕》\n对现代中文的一点小意见\n信\n笑纹\n四十而不惑\n\n著译自述\n存稿\n论写作\n走！走到楼上去\n写什么\n《传奇》再版的话\n自己的文章\n罗兰观感\n写《倾城之恋》的老实话\n说小报――致《力报》编者\n有几句话同读者说\n《太太万岁》题记\n《小鹿》译后\n《爱默森选集》译者序\n《张爱玲小说集》自序\n《老人与海》译序\n《张看》自序\n《红楼梦魇》自序\n羊毛出在羊身上\n《多少恨》前言\n惘然记\n国语本《海上花》译后记\n《海上花》的几个问题\n回顾《倾城之恋》\n表姨细姨及其他\n说《小艾》\n《续集》自序\n“嗄？”？\n忆《西风》",
        pages: "434",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1085145.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1085145.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1085145.jpg",
        },
        alt: "https://book.douban.com/subject/1033843/",
        id: "1033843",
        publisher: "经济日报出版社",
        isbn10: "7801800990",
        isbn13: "9787801800992",
        title: "张看（上下）",
        url: "https://api.douban.com/v2/book/1033843",
        alt_title: "",
        author_intro: "",
        summary:
          "全书共分为“日常生活”、“亲友素描”、“未名小草”、“艺文天地”和“著译自述”五辑。每辑作品均按最初发表或首次结集的时间先后编排，以便让读者对张爱玲散文创作的进程有一个比较完整的把握。\n《张看》本是张爱玲第二部散文集的书名，是张爱玲自己选定的，她对此有过一个解释：“‘张看’就是张的见解或管窥——往里面张望——最浅薄的双关语”。",
        price: "46.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1550,
          average: "9.0",
          min: 0,
        },
        subtitle: "鲁迅散文精选集",
        author: ["鲁迅"],
        pubdate: "2015-1-1",
        tags: [
          {
            count: 321,
            name: "鲁迅",
            title: "鲁迅",
          },
          {
            count: 177,
            name: "散文",
            title: "散文",
          },
          {
            count: 144,
            name: "朝花夕拾",
            title: "朝花夕拾",
          },
          {
            count: 123,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 106,
            name: "文学",
            title: "文学",
          },
          {
            count: 89,
            name: "经典",
            title: "经典",
          },
          {
            count: 83,
            name: "美文",
            title: "美文",
          },
          {
            count: 79,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s27970504.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "朝花夕拾\n003 小引 _ 005 狗•猫•鼠 _ 014 阿长与《山海经》 _ 020 二十四孝图\n027 五猖会 _ 032 无常 _ 040 从百草园到三味书屋\n045 父亲的病 _ 051 琐记 _ 059 藤野先生\n066 范爱农 _ 074 后记\n野草•准风月谈•南腔北调\n091 题辞 _ 093 秋夜 _ 096 腊叶 _ 098 希望\n101 好的故事 _ 104 风筝 _ 107 影的告别 _ 109 雪 _ 111 夜颂\n113 秋夜纪游 _ 115 爬和撞 _ 117 听说梦\n121 捣鬼心传 _ 124 世故三昧\n坟•华盖•而已集\n129 记念刘和珍君 _ 135 送灶日漫笔 _ 139 马上日记\n150 魏晋风度及文章与药及酒之关系 _ 167 论雷峰塔的倒掉\n170 说胡须 _ 175 看镜有感 _ 179 春末闲谈\n184 论照相之类 _ 191 论“他妈的！” _ 195 一点比喻\n呐喊•且介亭杂文\n201 故乡 _ 212 阿金 _ 217 社戏\n228 一件小事 _ 231 我的第一个师父 _ 239 兔和猫\n244 鸭的喜剧 _ 248 从孩子的照相说起 _ 252 病后杂谈\n264 门外文谈 _ 285 这也是生活",
        ebook_url: "https://read.douban.com/ebook/8140218/",
        pages: "296",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s27970504.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s27970504.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s27970504.jpg",
        },
        alt: "https://book.douban.com/subject/26285184/",
        id: "26285184",
        publisher: "天津人民出版社",
        isbn10: "7201089145",
        isbn13: "9787201089140",
        title: "朝花夕拾",
        url: "https://api.douban.com/v2/book/26285184",
        alt_title: "",
        author_intro:
          "鲁迅，原名周树人，浙江绍兴人。1904年赴日本仙台学医，后从事文学创作。1918年5月首次使用笔名“鲁迅”，发表中国现代文学史上第一篇白话小说《狂人日记》。1921年发表中篇小说《阿Q正传》。一生写作1000万字，其中著作600万字，辑校和书信400万字。",
        summary:
          "曾经在陈丹青先生《鲁迅是谁？》的演讲中听到一个别致的观点，他说“鲁迅的被扭曲，是现代中国一桩超级公案”，对鲁迅以“政治上的正确”给予他的作品褒扬、抬高，不可怀疑、不可反对，致使鲁迅作品的层次和人格魅力被过度简化，他本身丰富优美的用字，以及风趣幽默的行文，后人常常视而不见，也许我们真的不小心错过了一个可爱的鲁迅。\n的确，鲁迅是爱憎分明的，但不等于说鲁迅没有情感，没有他温和、慈爱、狡黠的那一面，他也对人、对动物、对乡土、对自然有着特别的情怀。若是仅仅从某一些方面去解读鲁迅作品内涵的全部，这对他是非常不公平的。\n这个版本的《朝花夕拾》做了去政治化的尝试，真诚感受鲁迅作品的丰满原貌，精选《鲁迅全集》中亲切好读、文字优美的散文48篇。全书分为四部分：第一部分《朝花夕拾》，儿时美好记忆牵挂一生；第二部分，选取鲁迅先生随手拈来美文小品，余闲时，赏玩风筝、秋叶、江南雪；第三部分，看先生风趣妙谈古今历史；第四部分，记忆中的那些人那些事，在先生笔端随波荡漾，静谧安好。\n活生生的鲁迅如此可爱，你本该更早喜欢。",
        ebook_price: "5.99",
        price: "25元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1937,
          average: "7.3",
          min: 0,
        },
        subtitle: "安妮宝贝散文精选集",
        author: ["安妮宝贝"],
        pubdate: "2013-8",
        tags: [
          {
            count: 1253,
            name: "安妮宝贝",
            title: "安妮宝贝",
          },
          {
            count: 430,
            name: "且以喜乐，且以永日",
            title: "且以喜乐，且以永日",
          },
          {
            count: 386,
            name: "散文",
            title: "散文",
          },
          {
            count: 133,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 122,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 118,
            name: "好久不见安妮",
            title: "好久不见安妮",
          },
          {
            count: 89,
            name: "2013",
            title: "2013",
          },
          {
            count: 88,
            name: "觉醒之旅",
            title: "觉醒之旅",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s26839028.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "自序\n编者评序\n[壹]   终鲜兄弟，维予二人——情爱随笔\n[贰]   邂逅相遇，适我愿兮——人海感悟\n[叁]   棘心夭夭，母氏劬劳——所谓亲情\n[肆]   采葑采菲，无以下体——即景惜物\n[伍]   命不易哉，无曰高高在上——经历生死\n[陆]   维天之命，於穆不已——敬畏神圣\n[柒]   且以喜乐，且以永日——写作纪程",
        pages: "268",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s26839028.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s26839028.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s26839028.jpg",
        },
        alt: "https://book.douban.com/subject/24860561/",
        id: "24860561",
        publisher: "长江文艺出版社",
        isbn10: "7535467857",
        isbn13: "9787535467850",
        title: "且以永日",
        url: "https://api.douban.com/v2/book/24860561",
        alt_title: "",
        author_intro:
          "安妮宝贝，著名作家。著有《告别薇安》《八月未央》《清醒纪》《莲花》《素年锦时》《春宴》等中短篇小说、长篇小说、摄影散文各式作品。\n二〇一一年，主编文学读物《大方》。二〇一三年，出版散文集《眠空》，文化随笔《古书之美》，散文精选集《且以永日》。",
        summary:
          "《且以永日》，安妮宝贝十五年散文精粹，完美呈现。\n本书以“诗经”作为编选脉络，叙及爱、情感、家人，以及生死、神圣等命题，保持着安妮宝贝独有的文字质感。\n我把这些文字写给自己，以此作为一种思省、记录、整理、清洗。而当我写完这些，它们印刷流动之后，我就忘了它们。但若在某个时刻，有必要，则会丝毫不差地回忆起若干细节。它们是一些被打包起来的行李，搁置在某个角落。",
        price: "36.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 947,
          average: "8.9",
          min: 0,
        },
        subtitle: "“五四”最美的散文",
        author: ["梁遇春"],
        pubdate: "2005-1",
        tags: [
          {
            count: 412,
            name: "梁遇春",
            title: "梁遇春",
          },
          {
            count: 345,
            name: "散文",
            title: "散文",
          },
          {
            count: 168,
            name: "春醪集",
            title: "春醪集",
          },
          {
            count: 129,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 117,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 84,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 80,
            name: "现代文学",
            title: "现代文学",
          },
          {
            count: 71,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1319014.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "一 春醪集\n序\n1 讲演\n2 寄给一个失恋人的信（一）\n3 醉中梦话（一）\n4 “还我头来”及其他\n5 人死观\n6 查理斯・兰姆评传\n……\n二 泪与笑\n……\n附 论麻雀与扑克\n",
        pages: "224",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1319014.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1319014.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1319014.jpg",
        },
        alt: "https://book.douban.com/subject/1220904/",
        id: "1220904",
        publisher: "新世界出版社",
        isbn10: "7801875354",
        isbn13: "9787801875358",
        title: "春醪集",
        url: "https://api.douban.com/v2/book/1220904",
        alt_title: "",
        author_intro: "",
        summary:
          "现代中国散文的奇异之作，深得英国小品文神髓。从现在的眼光来看，梁遇春的作品依然无出其右，他的写作风格在当代并无传人，坊间许多的所谓的随笔基本上是形似而神不似。也许那个时代已经一去不复返了。 \n梁遇春（1906-1932）是个短命的文学天才，在这个世上他仅仅活了短短的28年。他留下来的作品并不多，除了二十余种外国文学作品译著外，他自己的文字主要就是本这本书了，这也是他《春醪集》和《泪与笑》两个小册子的集合。是作者用情感、学识和思想酝酿而成的春醪。废名普说过：“他的文思如星珠串天，稍纵即逝”。在文中，他谈读书，论学问，聊爱情，议朋友，引经据典，而毫不迂腐唠叨，是纯粹文学的议论，也属于文人的清谈。在小册子中，我们看到的作者是如此热爱生命、赞美人生的，他对待这个美与丑、善与恶、正与邪交织在一起的世界并没有用“拍案而起”的态度来批判，而是一种冷漠而鄙夷的方式揭露。",
        price: "22.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1814,
          average: "8.7",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993-7",
        tags: [
          {
            count: 599,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 164,
            name: "散文",
            title: "散文",
          },
          {
            count: 109,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 68,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 50,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 43,
            name: "看过三毛所有的书",
            title: "看过三毛所有的书",
          },
          {
            count: 36,
            name: "文学",
            title: "文学",
          },
          {
            count: 35,
            name: "ECHO",
            title: "ECHO",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s3333524.jpg",
        binding: "平装",
        translator: [],
        catalog: "\n      ",
        pages: "152",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s3333524.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s3333524.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s3333524.jpg",
        },
        alt: "https://book.douban.com/subject/1471705/",
        id: "1471705",
        publisher: "湖南文艺出版社",
        isbn10: "7540411635",
        isbn13: "9787540411633",
        title: "送你一匹马",
        url: "https://api.douban.com/v2/book/1471705",
        alt_title: "",
        author_intro: "",
        summary: "",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "3.70",
      },
      {
        rating: {
          max: 10,
          numRaters: 2189,
          average: "8.7",
          min: 0,
        },
        subtitle: "汪曾祺谈草木虫鱼散文41篇",
        author: ["汪曾祺"],
        pubdate: "2006",
        tags: [
          {
            count: 979,
            name: "汪曾祺",
            title: "汪曾祺",
          },
          {
            count: 592,
            name: "散文",
            title: "散文",
          },
          {
            count: 362,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 257,
            name: "人间草木",
            title: "人间草木",
          },
          {
            count: 202,
            name: "植物",
            title: "植物",
          },
          {
            count: 192,
            name: "自然",
            title: "自然",
          },
          {
            count: 188,
            name: "老头子很有意思",
            title: "老头子很有意思",
          },
          {
            count: 165,
            name: "中国文学",
            title: "中国文学",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1806539.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "186",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1806539.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1806539.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1806539.jpg",
        },
        alt: "https://book.douban.com/subject/1871913/",
        id: "1871913",
        publisher: "山东画报出版社",
        isbn10: "7807133686",
        isbn13: "9787807133681",
        title: "人间草木",
        url: "https://api.douban.com/v2/book/1871913",
        alt_title: "",
        author_intro:
          "编辑推荐：\r\n当代文坛上,能同时在小说和散文两块田地里经营,且自成一家的并不多,汪曾祺先生算是其中的一个。汪曾祺先生是公认的文体家,不仅能写一手优秀的小说,还能写一手漂亮的散文。汪氏散文可以称得上真正的文人散文,他的散文没有空泛的好为人师的大道理,也少有宏大题材,流淌在字里行间的都是文人的雅趣和爱好, 弥漫着文人的情调。如果说读汪氏小说我们感受到的是诗意,读汪氏散文我们享受的则是闲情逸致。本书从汪曾祺创作的大量散文中精选而成，最早的写于四十年代，大部分写于后半生，风格从华丽归于朴实，技巧臻于至境。",
        summary:
          '当《人间草木》作者汪曾祺是个喜欢草木虫鱼的人。他愿意看谈草木虫鱼的文章，爱读法布尔的《昆虫记》，推崇吴其浚的《植物名实图考》。他从法布尔的书中得知知了是个聋子，从吴其浚的书里知道古诗里的葵就是湖南、四川人现在还吃的冬苋菜，着实非常高兴。汪曾祺也爱写草木虫鱼类文章，草木虫鱼在其笔下，或考据缘由，或状写情致，无不摇曳生姿，意态旁出。这些文章，表达的是对生活的喜悦，是汪曾祺送给人间的"小温"。',
        series: {
          id: "21496",
          title: "汪曾祺系列丛书",
        },
        price: "21.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 2765,
          average: "9.2",
          min: 0,
        },
        subtitle: "",
        author: ["汪曾祺"],
        pubdate: "2005-5",
        tags: [
          {
            count: 1344,
            name: "汪曾祺",
            title: "汪曾祺",
          },
          {
            count: 1042,
            name: "散文",
            title: "散文",
          },
          {
            count: 414,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 309,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 265,
            name: "文学",
            title: "文学",
          },
          {
            count: 229,
            name: "淡淡的　清清的",
            title: "淡淡的　清清的",
          },
          {
            count: 206,
            name: "落花微雨的清新",
            title: "落花微雨的清新",
          },
          {
            count: 175,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s11133632.jpg",
        binding: "",
        translator: [],
        catalog:
          "我的家乡\n文游台\n观音寺\n午门忆旧\n一辈古人\n吴大和尚和七拳半\n新校舍\n泡茶馆\n跑警报\n自得其乐\n自报家门\n随遇而安\n多年父子成兄弟\n星斗其文,赤子其人\n金岳霖先生\n老舍先生\n国子监\n钓鱼台\n水母\n城隍·土地·灶王爷\n老不闲抄\n胡同文化\n我是一个中国人\n故乡的食物\n吃食和文学\n宋朝人的吃喝\n葵·薤\n五味\n寻常茶话\n食豆饮水斋闲笔\n韭菜花\n花\n果园杂记\n葡萄月令\n翠湖心影\n昆明的雨\n湘行二记\n泰山片石\n北京的秋花\n林肯的鼻子\n美国短简\n香港的鸟\n谈风格\n谈谈风俗画\n“揉面”\n《大淖记事》是怎样写出来的\n关于《受戒》",
        pages: "285",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s11133632.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s11133632.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s11133632.jpg",
        },
        alt: "https://book.douban.com/subject/1398441/",
        id: "1398441",
        publisher: "人民文学出版社",
        isbn10: "7020050344",
        isbn13: "9787020050345",
        title: "汪曾祺散文",
        url: "https://api.douban.com/v2/book/1398441",
        alt_title: "",
        author_intro:
          "汪曾祺（1920-1997），现当代作家。江苏高邮人。1939年考入昆明西南联合大学中文系，深受教写作课的沈从文的影响。1940年开始发表小说。曾任中国作家协会理事、顾问、北京剧协理事，在海内外出版专著全集30余部，代表作有小说《受戒》、京剧剧本《范进中举》、《沙家浜》（主要编者之一）。作品被译成多种文字介绍到国外。",
        summary:
          "本书收录了四十余篇散文,包括《我的家乡》、《文游台》、《观音寺》、《午门忆旧》、《一辈古人》等。",
        series: {
          id: "3096",
          title: "中华散文插图珍藏版",
        },
        price: "21.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 3367,
          average: "8.8",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993-07",
        tags: [
          {
            count: 1071,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 333,
            name: "梦里花落知多少",
            title: "梦里花落知多少",
          },
          {
            count: 251,
            name: "散文",
            title: "散文",
          },
          {
            count: 160,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 94,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 79,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 67,
            name: "文学",
            title: "文学",
          },
          {
            count: 51,
            name: "爱情",
            title: "爱情",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s3029289.jpg",
        binding: "平装",
        translator: [],
        catalog: "\n      ",
        pages: "179",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s3029289.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s3029289.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s3029289.jpg",
        },
        alt: "https://book.douban.com/subject/1471701/",
        id: "1471701",
        publisher: "湖南文艺出版社",
        isbn10: "7540411600",
        isbn13: "9787540411602",
        title: "梦里花落知多少",
        url: "https://api.douban.com/v2/book/1471701",
        alt_title: "",
        author_intro: "",
        summary: "\n      ",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "4.20",
      },
      {
        rating: {
          max: 10,
          numRaters: 1515,
          average: "8.7",
          min: 0,
        },
        subtitle: "散文、诗与画",
        author: ["[德]赫尔曼·黑塞"],
        pubdate: "2007-7",
        tags: [
          {
            count: 658,
            name: "黑塞",
            title: "黑塞",
          },
          {
            count: 444,
            name: "赫尔曼·黑塞",
            title: "赫尔曼·黑塞",
          },
          {
            count: 392,
            name: "德国",
            title: "德国",
          },
          {
            count: 374,
            name: "散文",
            title: "散文",
          },
          {
            count: 227,
            name: "堤挈诺之歌",
            title: "堤挈诺之歌",
          },
          {
            count: 217,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 206,
            name: "诗歌",
            title: "诗歌",
          },
          {
            count: 182,
            name: "德国文学",
            title: "德国文学",
          },
        ],
        origin_title:
          "Tessin: Betrachtungen, Gedichte und Aquarelle des Autors",
        image: "https://img9.doubanio.com/view/subject/m/public/s2623235.jpg",
        binding: "平装",
        translator: ["窦维仪"],
        catalog: "",
        pages: "253",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s2623235.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s2623235.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s2623235.jpg",
        },
        alt: "https://book.douban.com/subject/2165057/",
        id: "2165057",
        publisher: "上海世纪出版股份有限公司译文出版社",
        isbn10: "7532742334",
        isbn13: "9787532742332",
        title: "堤契诺之歌",
        url: "https://api.douban.com/v2/book/2165057",
        alt_title: "Tessin: Betrachtungen, Gedichte und Aquarelle des Autors",
        author_intro:
          "黑塞（1877-1962）是20世纪欧洲最有影响的小说家之一，诺贝尔文学奖获得者。他的创作生涯长达70年，作品覆盖面甚广，除了《在轮下》、《荒原狼》、《纳尔齐斯与歌尔德蒙》、《玻璃球游戏》等长篇小说外，也从未中断过中短篇及散文诗歌的创作，黑塞擅长以象征的艺术手法，从精神、心理方面，折射外界对人的心灵所造成的深刻刺痛，从而使作品的内在意义得以凝聚和升华。",
        summary:
          "《提契诺之歌》是黑塞作品中的精髓，它是一本散文、诗歌集，亦是作者对他在此之前所有作品的艺术理念、创作方法和哲学思想的归纳、总结和诠释，被许多专家和学者看做一把开启黑塞思想之门的钥匙。\n书中配有30余幅由作者本人绘制的水彩画和钢笔画，给作品增添了画龙点睛的作用。",
        series: {
          id: "566",
          title: "黑塞文集",
        },
        price: "33.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 7,
          average: "0.0",
          min: 0,
        },
        subtitle: "",
        author: ["林语堂"],
        pubdate: "1996-12",
        tags: [
          {
            count: 10,
            name: "散文",
            title: "散文",
          },
          {
            count: 5,
            name: "林语堂",
            title: "林语堂",
          },
          {
            count: 1,
            name: "批评",
            title: "批评",
          },
          {
            count: 1,
            name: "幽默",
            title: "幽默",
          },
          {
            count: 1,
            name: "大陆",
            title: "大陆",
          },
          {
            count: 1,
            name: "lala123",
            title: "lala123",
          },
          {
            count: 1,
            name: "LC",
            title: "LC",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1269034.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "目录\n文化编\n中国文化之精神\n论东西思想法之不同\n论东西文化的幽默\n论文艺如何复兴法子\n谈中西文化\n谈劳伦斯\n论中西画\n论幽默\n方巾气研究\n诗\n散 文\n小 说\n戏 剧\n谈钱穆先生之经学\n谈螺丝钉\n再谈螺丝钉\n三谈螺丝钉\n四谈螺丝钉\n社会编\n中国的国民性\n论性急为中国人所恶\n给玄同先生的信\n回京杂感\n读书救国谬论一束\n萨天师语录\n译尼采论“走过去”\n思满大人\n刘铁云之讽刺\n说诚与伪\n论政治病\n粘指民族\n沙蒂斯姆与尊孔\n叩头的软体操价值\n从梁任公的腰说起\n半部韩非治天下\n脸与法治\n谈言论自由\n国事亟矣\n谈新闻事业与现代社会\n苦矣！左拉！\n写在刘博士订正中国现代文坛冤狱表后\n希特勒与魏忠贤\n无字的批评\n外交纠纷\n丁在君的高调\n梦 影\n家国絮语解题\n泛论赤化与丧家之狗\n讨狗檄文\n打狗释疑\n“发微”与“告密”\n悼刘和珍杨德群女士\n闲话与谣言\n论土气\n谈天足\n裁缝的道德\n节育问题\n说浪漫\n教育编\n谈理想教育\n学风与教育\n话牛津\n哈佛味\n哥伦比亚大学及其他\n论学问与知趣\n失学解\n救救孩子\n考试分数不可靠\n论大专联考亟应废止\n茵治论考试\n谈涵养\n致陈六使函\n怎样把英文学好\n英文学习法\n洋泾浜与基本英语\n论翻译\n人世编\n有不为斋解\n言志篇\n我的信仰\n从人文主义回到基督信仰\n思孔子\n孟子说才志气欲\n做文与做人\n狂 论\n祝土匪\n哀莫大于心死\n中国人之聪明\n清算月亮\n论玩物不能丧志\n文妓说\n咏名流\n孤崖一枝花\n鲁迅之死\n辜鸿铭\n忆狗肉将军\n笔名之滥用\n婚嫁与女子职业\n为中国女子辩\n让娘儿们干一下吧！\n魔登女子\n说青楼\n论性的吸引力\n女论语\n恋爱和求婚\n一篇没有听众的演讲\n罗素离婚\n看电影流泪\n冬至之晨杀人记\n冀园被偷记\n中国有臭虫吗？\n母猪渡河\n驴子还债的故事\n闲话说东坡\n苏东坡与其堂妹\n萧伯纳一席谈\n再谈萧伯纳\n",
        pages: "600",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1269034.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1269034.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1269034.jpg",
        },
        alt: "https://book.douban.com/subject/1037757/",
        id: "1037757",
        publisher: "作家出版社",
        isbn10: "7506308207",
        isbn13: "9787506308205",
        title: "散文",
        url: "https://api.douban.com/v2/book/1037757",
        alt_title: "",
        author_intro: "",
        summary:
          "内容提要\n林语堂先生学贯中西，\n著作宏丰，是一位杰出的学\n者型作家。 他的散文、随笔\n是他作品中的精华。他借鉴\n外国娓语式散文和中国明清\n之际“性灵”作品的长处，加\n上林先生本人的天赋气质，\n使他的散文、随笔显示出主\n人情、通性灵、富幽默的特\n色。读他的这类作品，有如\n亲人朋友，在随意的絮谈中\n达到心的交流，通过轻松的\n阅读氛围，受到艺术熏陶并\n得到丰富的人生知识。\n",
        price: "27.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 969,
          average: "8.8",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993",
        tags: [
          {
            count: 312,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 114,
            name: "散文",
            title: "散文",
          },
          {
            count: 70,
            name: "游记",
            title: "游记",
          },
          {
            count: 63,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 28,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 18,
            name: "ECHO",
            title: "ECHO",
          },
          {
            count: 14,
            name: "文学",
            title: "文学",
          },
          {
            count: 14,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1830405.jpg",
        binding: "平",
        translator: [],
        catalog: "\n      ",
        pages: "177",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1830405.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1830405.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1830405.jpg",
        },
        alt: "https://book.douban.com/subject/1471702/",
        id: "1471702",
        publisher: "湖南文艺出版社",
        isbn10: "7540411473",
        isbn13: "9787540411473",
        title: "万水千山走遍",
        url: "https://api.douban.com/v2/book/1471702",
        alt_title: "",
        author_intro: "",
        summary: "\n      ",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "5.90元",
      },
      {
        rating: {
          max: 10,
          numRaters: 454,
          average: "7.5",
          min: 0,
        },
        subtitle: "《世界文学》地理散文集粹",
        author: ["劳伦斯 等"],
        pubdate: "2007-7",
        tags: [
          {
            count: 231,
            name: "大海与撒丁岛",
            title: "大海与撒丁岛",
          },
          {
            count: 201,
            name: "地理散文",
            title: "地理散文",
          },
          {
            count: 137,
            name: "旅行",
            title: "旅行",
          },
          {
            count: 105,
            name: "游记",
            title: "游记",
          },
          {
            count: 101,
            name: "地理文学",
            title: "地理文学",
          },
          {
            count: 92,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 89,
            name: "散文",
            title: "散文",
          },
          {
            count: 28,
            name: "人文｀行走",
            title: "人文｀行走",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s2791371.jpg",
        binding: "平装",
        translator: ["袁洪庚"],
        catalog: "",
        pages: "297",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s2791371.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s2791371.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s2791371.jpg",
        },
        alt: "https://book.douban.com/subject/2149703/",
        id: "2149703",
        publisher: "人民文学出版社",
        isbn10: "7020061745",
        isbn13: "9787020061747",
        title: "大海与撒丁岛",
        url: "https://api.douban.com/v2/book/2149703",
        alt_title: "",
        author_intro: "",
        summary:
          "文字和城市，幻像与真实。且随文学的脚步，神游遥远的异邦。探访墨西哥谷地，徜徉威尼斯市街，访毕蒂伏里的命相家，前往安达卢西亚的小客店……\n戴·赫·劳伦斯、弗·纳博科夫、川端康成、约翰·厄普代克将是您的旅伴。打开书页，《世界文学》地理文粹邀您共赏大师们的钟灵文字。\n翻译名家、法国文学艺术骑士勋章获得者：余中先博士撰序推荐。意大利博洛尼亚书展获奖画家Günter Mattei绘制封面画作。",
        price: "20.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1164,
          average: "9.2",
          min: 0,
        },
        subtitle:
          "三毛作品中最膾炙人口的《撤哈拉的故事》，\r\n由12篇精采動人的散文結合而成，\r\n其中〈沙漠中的飯店〉，\r\n是三毛適應荒涼單調的沙漠生活後，\r\n重新拾筆的第一篇文字，\r\n自此之後，三毛便寫出一系列以沙漠為背景的故事，\r\n風靡了全世界的中文讀者。",
        author: ["三毛"],
        pubdate: "1996.9",
        tags: [
          {
            count: 255,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 139,
            name: "撒哈拉的故事",
            title: "撒哈拉的故事",
          },
          {
            count: 60,
            name: "散文",
            title: "散文",
          },
          {
            count: 51,
            name: "经典",
            title: "经典",
          },
          {
            count: 46,
            name: "沙漠",
            title: "沙漠",
          },
          {
            count: 44,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 42,
            name: "异乡",
            title: "异乡",
          },
          {
            count: 42,
            name: "三毛作品集",
            title: "三毛作品集",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1641337.jpg",
        binding: "",
        translator: [],
        catalog: "",
        pages: "239",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1641337.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1641337.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1641337.jpg",
        },
        alt: "https://book.douban.com/subject/1770157/",
        id: "1770157",
        publisher: "皇冠叢書",
        isbn10: "962451027X",
        isbn13: "9789624510270",
        title: "撤哈拉的故事",
        url: "https://api.douban.com/v2/book/1770157",
        alt_title: "",
        author_intro:
          "本名陳平，一九四三年三月二十六日生，浙江省定海縣人，中國文化大學哲學系肄業。曾留學歐洲，婚後定居西屬撒哈拉沙漠納利島，並以當地的生活為背景，寫成一連串膾炙人口的作品。一九八一年回台後，曾在文化大學任教，一九八四年辭去教職，而以寫作、演講為重心。一九九一年一月四日去世，享年四十八歲。\r\n她的足跡遍及世界各地，她的作品也在全球的華人社會廣為流傳，在大陸也有廣大的讀者，生平著作和譯作十分豐富。共有二十四種。",
        summary: "",
        price: "港幣四十五元",
      },
      {
        rating: {
          max: 10,
          numRaters: 338,
          average: "8.6",
          min: 0,
        },
        subtitle: "汪曾祺散文精选集",
        author: ["汪曾祺"],
        pubdate: "2019-4",
        tags: [
          {
            count: 105,
            name: "汪曾祺",
            title: "汪曾祺",
          },
          {
            count: 77,
            name: "散文",
            title: "散文",
          },
          {
            count: 60,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 36,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 24,
            name: "文学大家",
            title: "文学大家",
          },
          {
            count: 23,
            name: "看透人心~",
            title: "看透人心~",
          },
          {
            count: 22,
            name: "中国",
            title: "中国",
          },
          {
            count: 20,
            name: "非常期待",
            title: "非常期待",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s32295641.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "万事有心\n在平淡的生活中，发现世间的妙趣与美好。\n002 书画自娱\n005 自得其乐\n014 看画\n019 写字\n024 谈读杂书\n026 听遛鸟人谈戏\n031 学谈常话\n036 贴秋膘\n040 岁朝清供\n043 甓射珠光\n046 昆明的雨\n051 礼拜天的早晨\n057 四方食事\n067 故乡的食物\n084 肉食者不鄙\n090 手把肉\n095 人间草木\n101 北京的秋花\n107 夏天的昆虫\n110 菌小谱\n116 阴城\n118 风景\n人间有味\n不管在什么环境下，永远不消沉沮丧，无机心，少俗虑。\n128 随遇而安\n142 无事此静坐\n145 旧病杂忆\n154 七十书怀\n161 晚年\n164 鉴赏家\n174 大妈们\n179 和尚\n185 一技\n188 闹市闲民\n191 吴大和尚和七拳半\n195 多年父子成兄弟\n200 大莲姐姐\n203 名优逸事\n210 金岳霖先生\n216 沈从文先生在西南联大\n226 生机\n233 沽源\n238 牌坊\n240 三圣庵\n243 白马庙\n246 炸弹和冰糖莲子",
        pages: "256",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s32295641.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s32295641.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s32295641.jpg",
        },
        alt: "https://book.douban.com/subject/33415839/",
        id: "33415839",
        publisher: "中国友谊出版公司",
        isbn10: "7505747061",
        isbn13: "9787505747067",
        title: "万事有心，人间有味",
        url: "https://api.douban.com/v2/book/33415839",
        alt_title: "",
        author_intro:
          "汪曾祺（1920-1997），江苏高邮人。中国当代著名作家、散文家、小说家、戏剧家，京派作家的代表人物，师从沈从文。他的文字干净而传神，淡泊通透，如话家常，无不透露着他对生活细致入微的体察与含情脉脉的打量。这位可爱的老人如一股清流，温暖人心——不管遇到什么境况，永远不消沉沮丧，始终守护心中的热情和生机，少俗虑，不悲观，兴致盎然地活着。",
        summary:
          "本书是汪曾祺先生的散文精选集，特别收录入选初、高中语文教材以及高考辅助阅读的《端午的鸭蛋》《金岳霖先生》《北京的秋花》等经典篇目，一本书阅尽汪曾祺的散文精品。\n汪老先生写字、画画、做饭，把普通的日常活得有情、有趣、有味，并把他对生活的热爱通过一字一句传达给世人——生活是美好的，人是有诗意的。\n透过汪曾祺的独特视角，生活里每一处细小的平凡都变得美丽灿烂。",
        price: "42元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1595,
          average: "8.2",
          min: 0,
        },
        subtitle: "",
        author: ["林清玄"],
        pubdate: "2013-4",
        tags: [
          {
            count: 442,
            name: "林清玄",
            title: "林清玄",
          },
          {
            count: 397,
            name: "散文",
            title: "散文",
          },
          {
            count: 188,
            name: "文学",
            title: "文学",
          },
          {
            count: 166,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 161,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 158,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 125,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 112,
            name: "灵修",
            title: "灵修",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s25616816.jpg",
        binding: "平装",
        translator: ["有2017年8月23印本"],
        catalog:
          "一 温一壶月光下酒\n月光下的喇叭手\n负琴盲翁\n家家有明月清风\n无关风月\n温一壶月光下酒\n我似昔人，不是昔人\n以水为师\n光之四书\n两只松鼠\n屋顶上的田园\n卷帘\n无灾无难到公卿\n二 黄玫瑰的心\n发芽的心情\n青山白发\n娘子坑的午宴\n忘情花的滋味\n一杯蜜是炼过几只蜂的\n生命的酸甜苦辣\n生平一瓣香\n深香默默\n黄玫瑰的心\n买了半山百合\n石上栽华\n正向时刻\n三 吾心似秋月\n三生石上旧精魂\n吾心似秋月\n佛鼓\n召集有缘人的钟声\n步步起清风\n去做人间雨\n水晶石与白莲花\n一味\n达摩茶杯\n在名利的海上航行\n一心一境\n送一轮明月给他\n四 白雪少年\n红心番薯\n飞入芒花\n在梦的远方\n过火\n家有香樟树\n银合欢\n翡翠莲雾\n白雪少年\n我唯一的松鼠\n仙堂戏院\n悬崖边的树\n兵卒无河\n五 星落尼罗河\n岁月的灯火都睡了\n芳香百里馨\n星落尼罗河\n卢桑夜船\n威尼斯船夫\n敏感的花",
        pages: "281",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s25616816.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s25616816.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s25616816.jpg",
        },
        alt: "https://book.douban.com/subject/21363319/",
        id: "21363319",
        publisher: "长江文艺出版社",
        isbn10: "7535461409",
        isbn13: "9787535461407",
        title: "林清玄散文精选",
        url: "https://api.douban.com/v2/book/21363319",
        alt_title: "",
        author_intro:
          "林清玄，台湾高雄人，著名散文家，连续十年雄踞 “台湾十大畅销书作家”榜单， 被\n誉为“当代散文八大家”之一。\n17岁开始发表作品；20岁出版第一本书；30岁前得遍台湾所有文学大奖；35岁入山修行后写成的“身心安顿系列”，是20世纪90年代台湾最畅销的作品；40岁完成“菩提系列”，畅销数百万册，是当代最具影响力的作品之一。\n他的文章曾多次入选大陆、中国台湾、中国香港和新加坡中小学华语教材及大学国文选，还曾被收入大陆高考语文试卷，是国际华文世界被广泛阅读的作家。",
        summary:
          "在林清玄的创作生涯中，除了后期最负盛名的“菩提系列”十书，其早期的散文作品，也因文笔清丽、情感醇厚，而深受读者欢迎，屡获台湾各项文学大奖。\n因此，本书除精选“菩提系列”十书中的经典篇目外，还收录了林清玄早期的散文代表作，如《温一壶月光下酒》、《白雪少年》、《在梦的远方》等。\n本书亦收录了深受青少年读者喜爱的《红心番薯》、《光之四书》（《光之香》一节入选全国高考语文试卷）等，以期在给成年读者带来安宁与回忆的同时，也给青少年读者向上的力量。\n让我们以本书作舟，与林先生一起，“循着时光的河流向上游前进，两岸花树宛然，群山微风依稀，好像重活了一次。”",
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1525,
          average: "8.6",
          min: 0,
        },
        subtitle: "加缪散文集",
        author: ["（法）加缪"],
        pubdate: "1997-12",
        tags: [
          {
            count: 1025,
            name: "加缪",
            title: "加缪",
          },
          {
            count: 536,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 409,
            name: "散文",
            title: "散文",
          },
          {
            count: 298,
            name: "法国",
            title: "法国",
          },
          {
            count: 257,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 203,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 176,
            name: "法国文学",
            title: "法国文学",
          },
          {
            count: 167,
            name: "苦难与阳光",
            title: "苦难与阳光",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s2663668.jpg",
        binding: "平装",
        translator: ["杜小真/等"],
        catalog:
          "目录\n译者的话\n反与正\n讽刺\n不置可否\n灵魂之死\n生之爱\n反与正\n反叛者\n反叛者\n形而上学的反叛\n该隐的子孙们\n反叛的诗歌\n洛特雷阿蒙和平庸\n超现实主义和革命\n历史的反叛\n弑君\n新福音书\n处死国王\n品德的宗教\n恐怖时期\n反叛和艺术\n小说与反叛\n反叛与风格\n创造与革命\n反叛与谋杀\n虚无主义的谋杀\n历史的谋杀\n适度与过度\n正午的思想\n虚无主义之外\n",
        pages: "154",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s2663668.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s2663668.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s2663668.jpg",
        },
        alt: "https://book.douban.com/subject/1070246/",
        id: "1070246",
        publisher: "上海三联书店",
        isbn10: "7542611038",
        isbn13: "9787542611031",
        title: "置身于苦难与阳光之间",
        url: "https://api.douban.com/v2/book/1070246",
        alt_title: "",
        author_intro:
          "阿贝尔·加缪（1913-1960），法国小说家、戏剧家、评论家。出生于阿尔及利亚的蒙多维城，l岁时，父亲死于第一次世界大战，家境贫寒，靠奖学金读完中学，1933年起以半工半读的方式在阿尔及尔大学攻读哲学。毕业后从事过各种职业，青年时参加过共产党，后因不满党的某些政策被开除。二战期间来到法国，因《局外人》一书而成名。主要作品还有小说《鼠疫》、《堕落》，随笔《西西弗斯神话》等。1957年获诺贝尔文学奖，1960年1月因遇车祸辞世。",
        summary:
          "二战后法国有两位号称“精神领袖”的人物，一是萨特，一是加缪。加缪还被称为“法国的良心”，他的散文素以散淡、朴素又寓意深长著称。本书选录了《反与正》和《反叛者》的部分章节，都是人们研究加缪时必会提到的篇章。在《反与正》中，加缪以凝重的笔调回忆了自己的艰苦童年，他的思想的基本出发点在此已有清楚的表现。《反叛者》展开对人生更深入的探索，“光活着是不够的，还应该知道为什么活着”，他对人生提出的问题和思考，震动着无数人的心灵。",
        series: {
          id: "1429",
          title: "世界经典随笔系列",
        },
        price: "9.20",
      },
      {
        rating: {
          max: 10,
          numRaters: 1746,
          average: "7.5",
          min: 0,
        },
        subtitle: "王开岭散文随笔自选集",
        author: ["王开岭"],
        pubdate: "2009-1",
        tags: [
          {
            count: 392,
            name: "王开岭",
            title: "王开岭",
          },
          {
            count: 240,
            name: "散文",
            title: "散文",
          },
          {
            count: 187,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 184,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 156,
            name: "思想",
            title: "思想",
          },
          {
            count: 141,
            name: "思想启蒙",
            title: "思想启蒙",
          },
          {
            count: 125,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 104,
            name: "思考",
            title: "思考",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s3735056.jpg",
        binding: "",
        translator: [],
        catalog:
          "序言  阅读的盛宴第一辑  灵魂的萤火  精神明亮的人  当她十八岁的时候  向儿童学习  从生命到罐头  远行笔记(四章)  两千年前的闪击  雪白  残片  被占领的人  向死而生  永远的邓丽君  女子如雪  《罗马假日》：对无精打采生活的精彩背叛  蓝湖  俄罗斯课本  女人，喜欢你的作品吗  生活在别处  谈谈墓地，谈谈生命第二辑  大地的忧郁  我们无处安放的哀伤  人类如何消费星空  古典之殇  仰望：一种精神姿势  一个房奴的精神大字报  白衣人：当一个痛苦的人来见你  大地伦理(四章)  鹿的穷途  森林被杀害，童话被杀害  麻雀，对不起  依据不足的“热爱生活”  “恐龙胃”与“物理人生”  为什么不让她们活下去  打捞悲剧中的“个”  一个非教徒的信仰絮语  对“快感”的蹙眉与微笑  对“异想天开”的隆重表彰  东西方文化下的资产观第三辑  精神路标  决不向一个提裤子的人开枪  女性气质  请想一想华盛顿……  战俘的荣誉  一个人的遭遇  是“国家”错了  梁漱溟：一只自由主义牛虻  我们能发出那个声音吗  “我比你们中任何一个更爱自己的国家”  “你有权保持沉默”  “坐着”的雕像  权利的傲慢  美国的宗教面包  英雄的最后  影子的道路  独裁者的性命之忧  为何我们没有自己的“大师级”第四辑  深夜翻书  当你老了，头白了……  爬满心墙的蔷薇  有毒的情人  《鼠疫》：保卫生活的故事  亲爱的灯光——怀念别林斯基文学小组札记  关于语言可以杀人  一本真正的书让人“害怕”  杀人的世界观和方法论  等待黑暗，等待光明  “然而我认识他，这多么好啊”后记  我在,我们很近",
        pages: "327",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s3735056.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s3735056.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s3735056.jpg",
        },
        alt: "https://book.douban.com/subject/3651646/",
        id: "3651646",
        publisher: "书海出版社",
        isbn10: "7805508208",
        isbn13: "9787805508207",
        title: "精神明亮的人",
        url: "https://api.douban.com/v2/book/3651646",
        alt_title: "",
        author_intro:
          "王开岭，1969年生，祖籍山东滕州。著有：《激动的舌头》《黑暗中的锐角》《跟随勇敢的心》《精神自治》等散文和思想随笔集。\n作品被录入数百种国内外选集和大中学教材，入选多届中国散文排行榜。现居北京，从事写作和媒体策划，任央视新闻频道《社会记录》《新闻会客厅》等栏目指导。",
        summary:
          "本书收入王开岭最具标志性的诗性散文和思想随笔。在思想界，他被誉为新生代的旗帜人物：在文学界，他被视为优美的灵魂书写者。其作品大量涌现在各类文选、年度排行榜、大(中)学语文读本和(中)高考试题中，被很多校园师生公荐为“精神启蒙书”和“美文鉴赏书”。",
        price: "35.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 130,
          average: "9.0",
          min: 0,
        },
        subtitle: "萧红散文选",
        author: ["萧红"],
        pubdate: "2019-8-20",
        tags: [
          {
            count: 48,
            name: "萧红",
            title: "萧红",
          },
          {
            count: 25,
            name: "散文",
            title: "散文",
          },
          {
            count: 19,
            name: "散文集",
            title: "散文集",
          },
          {
            count: 12,
            name: "现当代文学",
            title: "现当代文学",
          },
          {
            count: 12,
            name: "中国现代文学",
            title: "中国现代文学",
          },
          {
            count: 11,
            name: "中国",
            title: "中国",
          },
          {
            count: 7,
            name: "文学",
            title: "文学",
          },
          {
            count: 6,
            name: "随笔·散文",
            title: "随笔·散文",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s33461945.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "弃儿\n中秋节\n祖父死了的时候\n黑夜\n三个无聊人\n初冬\n欧罗巴旅馆\n雪天\n他去追求职业\n家庭教师\n来客\n提篮者\n饿\n搬家\n最末的一块木柈\n黑列巴和白盐\n度日\n飞雪\n他的上唇挂霜了\n当铺\n借\n买皮帽\n广告员的梦想\n新识\n牵牛房\n十元钞票\n同命运的小鱼\n几个欢快的日子\n女教师\n春意挂上了树梢\n小偷车夫和老头\n公园\n夏夜\n家庭教师是强盗\n册子\n剧团\n白面孔\n又是冬天\n门前的黑影\n决意\n一个南方的姑娘\n生人\n又是春天\n患病\n十三天\n拍卖家具\n最后的一个星期\n访问\n女子装饰的心理\n索非亚的愁苦\n孤独的生活\n感情的碎片\n永久的憧憬和追求\n鲁迅先生记(一)\n鲁迅先生记(二 )\n《大地的女儿》与《动乱时代》\n寄东北流亡者\n长安寺\n回忆鲁迅先生\n九一八致弟弟书",
        ebook_url: "https://read.douban.com/ebook/122907896/",
        pages: "272",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s33461945.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s33461945.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s33461945.jpg",
        },
        alt: "https://book.douban.com/subject/34800741/",
        id: "34800741",
        publisher: "江西人民出版社",
        isbn10: "7210114416",
        isbn13: "9787210114413",
        title: "商市街",
        url: "https://api.douban.com/v2/book/34800741",
        alt_title: "",
        author_intro:
          "萧红，原名张廼莹\n1911年6月1日出生于哈尔滨市呼兰河区\n1942年萧红病逝于香港浅水湾，年仅31岁\n中国近现代女作家、民国四大才女之一，被誉为20世纪30年代文学洛神\n萧红23岁踏进文坛，凭借《生死场》一举成名\n鲁迅称赞她是“中国当代最有前途的女作家”\n茅盾、夏志清等都对萧红大加赞赏\n萧红一生情路坎坷，但从未放弃对自由和爱的渴望与追求。",
        summary:
          "萧红散文精选\n萧红研究会特别推荐阅读版本\n完整收录1936年初版《商市街》41篇散文，另选录19篇萧红不同时期散文代表作\n所选篇目均采用初版本及初刊本文字，原汁原味保留萧红风格\n精选萧红人生重要阶段高清照片，珍藏纪念版\n萧红转型作品，独创介于散文、小说、自传之间的文体， 风格由此走向成 熟\n随书附赠萧红版画小像，适合纪念和收藏\n平装双封套，印金+烫金工艺，完美呈现经典品质内容\n本书完整收录 1936年文化生活出版社初版的《商市街》41篇散文，另选录19篇萧红不同时期的散文代表作品，如《纪念鲁迅先生》《长安寺》《寄东北流亡者》以及萧红写给自己弟弟的《九一八致弟弟书》。\n所选篇目很多记录了萧红与萧军生活在一起时贫困潦倒而又快乐的生活，自传性很强，是了解萧红生活的最佳入口。整体风格有很强的的社会风情画特点，语言精练、质朴，情感真挚，可读性非常强。",
        ebook_price: "9.99",
        series: {
          id: "49067",
          title: "萧红作品集（萧红研究会推荐版）",
        },
        price: "42",
      },
      {
        rating: {
          max: 10,
          numRaters: 470,
          average: "8.0",
          min: 0,
        },
        subtitle:
          "因陕西师范大学出版社违规重复使用同一个ISBN出版《西方三大经典哲理散文》丛书，此页面可表示该丛书的三本书：《培根人生论》、《蒙田随笔集》、《帕斯卡尔思想录》  －－豆瓣团队",
        author: ["(法)蒙田"],
        pubdate: "2003-04第二版",
        tags: [
          {
            count: 155,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 145,
            name: "蒙田",
            title: "蒙田",
          },
          {
            count: 97,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 75,
            name: "法国",
            title: "法国",
          },
          {
            count: 53,
            name: "散文",
            title: "散文",
          },
          {
            count: 42,
            name: "帕斯卡尔",
            title: "帕斯卡尔",
          },
          {
            count: 41,
            name: "经典",
            title: "经典",
          },
          {
            count: 38,
            name: "外国文学",
            title: "外国文学",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1641077.jpg",
        binding: "平装",
        translator: ["何兆武"],
        catalog:
          "前言：十六世纪的现代人\n致读者\n一 论口才\n二 论撒谎\n三 论看待事物的方法\n四 论恐惧\n五 探究哲理就是学习死亡\n六 论习惯\n七 论学究气\n八 论对孩子的教育\n九 论友谊\n十 论节制\n十一 人生可笑又滑稽\n十二 人的行为变化无常\n十三 论饮酒\n……\n附录：蒙田年谱",
        pages: "291",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1641077.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1641077.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1641077.jpg",
        },
        alt: "https://book.douban.com/subject/1007891/",
        id: "1007891",
        publisher: "陕西师范大学出版社",
        isbn10: "7561323301",
        isbn13: "9787561323304",
        title: "帕斯卡尔思想录",
        url: "https://api.douban.com/v2/book/1007891",
        alt_title: "",
        author_intro:
          "帕斯卡尔尼法国17世纪最具大才的数学家、物理学家、哲学家。他在理论科学和实验科学两方面都做出了巨大贡献。几何学上的帕斯卡尔六边形定理、帕斯卡尔三角形，物理学上的帕斯卡尔定理等均是他的贡献。他还创制了世界上第一台计算机，制作了水银气压计。他同时还是概率论的创立人之一。\r\n  1670《帕斯卡尔思想录》一书在法国首版。该书以其论战的锋芒、思想的深遂以及文笔的流畅而成为世界思想文化史上的经典著作，对后世产生了深远影响，被认为是法国古典散文的奠基之作。它与《蒙田随笔集》（培根人生论》一起，被人们誉为欧洲近代哲理散文三大经典。\r\n    本书作者以其特有的揭示矛盾的方法，反复阐述了人在无限大与无限小两个极限之间的对立悖反，论证了人既崇高伟大又十分软弱无力这一悖论，天才地揭示了人国思想而伟大这一动人主题。",
        summary:
          "人类有史以来最佳图书\r\n  如果整个法国文学只能让我选择一部书留下，我还是会毫不犹豫地选择留下《思想录》，它是一个崇高的纯粹法国天才的标本。   \r\n                        ——［法］维克多·吉罗\r\n  正如他是一个伟大的文学家一样，他的书也是他自己的精神自传。\r\n                        ——［美］梭罗\r\n  帕斯卡尔是一位注定要被人们一代一代研究的作家，改变的并不是他自己，而是我们。并不是我们的知识增加了，而是我们对世界和对他的态度变化了。\r\n                        ——［美］Ｔ·Ｓ·艾略特\r\n  在这些不朽的争论者之中，只有帕斯卡尔留存到现在，因为只有他是一个天才，只有他还屹立在世界的废墟之上。   \r\n                        ——［法］伏尔泰\r\n  他之于法兰西、犹如析拉图之于希腊，但丁之于意大利，塞万提斯之于西班牙，莎士比亚之于英格兰。    \r\n                        ——［法］谢瓦里埃",
        price: "19.5",
      },
      {
        rating: {
          max: 10,
          numRaters: 1122,
          average: "9.1",
          min: 0,
        },
        subtitle: "",
        author: ["史铁生"],
        pubdate: "2007-3",
        tags: [
          {
            count: 502,
            name: "史铁生",
            title: "史铁生",
          },
          {
            count: 341,
            name: "散文",
            title: "散文",
          },
          {
            count: 160,
            name: "思考",
            title: "思考",
          },
          {
            count: 133,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 98,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 96,
            name: "史铁生散文",
            title: "史铁生散文",
          },
          {
            count: 95,
            name: "文学",
            title: "文学",
          },
          {
            count: 89,
            name: "生命",
            title: "生命",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s23578859.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "秋天的怀念\n我的梦想\n我与地坛\n好运设计\n随笔十三\n爱情问题\n记忆迷宫\n墙下短记\n“足球”内外\n私人大事排行榜\n说死说话\n病隙碎笔1\n病隙碎笔5\n轻轻地走与轻轻地来\n消逝的钟声\n二姥姥\n叛逆者\n老家\n庙的回忆\n八子\n看电影\n老海棠树\n比如摇滚与写作\n想念地坛",
        pages: "267",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s23578859.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s23578859.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s23578859.jpg",
        },
        alt: "https://book.douban.com/subject/2058479/",
        id: "2058479",
        publisher: "人民文学出版社",
        isbn10: "7020059503",
        isbn13: "9787020059508",
        title: "史铁生散文",
        url: "https://api.douban.com/v2/book/2058479",
        alt_title: "",
        author_intro:
          "史铁生，1951年生于北京。1967年初中毕业。1969年去陕北农村插队，三年后双腿瘫痪转回北京。回京后在一家街道工厂做临时工，七年后因病情加重回家疗养。1979年始有小说、散文、剧本等作品发表。主要作品有：短篇小说《我的遥远的清平湾》、《命若琴弦》、《老屋小记》；散文《我与地坛》、《好运设计》、《病隙碎笔》；中篇小说《关于詹牧师的报告文学》、《中篇1或短篇4》；长篇小说《务虚笔记》、《我的丁一之旅》等。",
        summary:
          "《史铁生散文》（插图珍藏版），美文与华照相得益彰，既是伴君品味欣赏这佳作，又为珍藏馈赠之上品。中华散文，源远流长。数千年的散文创作，或抒情、或言志、或状景、或怀人……莫不反映出时代的风云变幻和人们的思想情感。中华散文的这些优良传统在二十世纪以降的新文学那里，不仅得到了全面传承，且不断有所创新、有所发展。为了展示二十世纪以来中华散文的创作业绩，我们在新世纪之初即编辑出版过“中华散文珍藏本”凡三十种。二零零五年，我们在此基础上选出十六种，作为“中华散文插图珍藏版”第一辑出版。此次又选出十种，作为第二辑出版。",
        series: {
          id: "3096",
          title: "中华散文插图珍藏版",
        },
        price: "21.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 39,
          average: "7.6",
          min: 0,
        },
        subtitle: "散文",
        author: ["李碧华"],
        pubdate: "1991",
        tags: [
          {
            count: 27,
            name: "李碧华",
            title: "李碧华",
          },
          {
            count: 13,
            name: "散文",
            title: "散文",
          },
          {
            count: 9,
            name: "香港",
            title: "香港",
          },
          {
            count: 6,
            name: "李碧華",
            title: "李碧華",
          },
          {
            count: 5,
            name: "雜文雜事",
            title: "雜文雜事",
          },
          {
            count: 3,
            name: "香港文学",
            title: "香港文学",
          },
          {
            count: 3,
            name: "繁体",
            title: "繁体",
          },
          {
            count: 3,
            name: "最初以为是冷漠",
            title: "最初以为是冷漠",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1690849.jpg",
        binding: "繁体直排",
        translator: [],
        catalog: "",
        pages: "241",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1690849.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1690849.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1690849.jpg",
        },
        alt: "https://book.douban.com/subject/1830373/",
        id: "1830373",
        publisher: "天地出版",
        isbn10: "9622575137",
        isbn13: "9789622575134",
        title: "江湖",
        url: "https://api.douban.com/v2/book/1830373",
        alt_title: "",
        author_intro:
          "最想旅游的地方：我暗恋者的心\r\n对名利看法： 极度虚荣，无可救药\r\n最甜蜜的经验：报仇\r\n挑战：去秦城监狱为江，魏，王做专访\r\n职业特色：夸张，虚构，捏造，渲染，无中生有，唯恐天下不乱\r\n愿望：不劳而获，财色兼收，醉生梦死\r\n遗憾：上述愿望皆成泡影\r\n---以上摘自书中（李碧华访问档案）",
        summary: "",
        price: "32。00",
      },
      {
        rating: {
          max: 10,
          numRaters: 55,
          average: "6.5",
          min: 0,
        },
        subtitle: "散文",
        author: ["亦舒"],
        pubdate: "2006/6",
        tags: [
          {
            count: 51,
            name: "亦舒",
            title: "亦舒",
          },
          {
            count: 13,
            name: "散文",
            title: "散文",
          },
          {
            count: 5,
            name: "香港文学",
            title: "香港文学",
          },
          {
            count: 5,
            name: "香港",
            title: "香港",
          },
          {
            count: 3,
            name: "港台",
            title: "港台",
          },
          {
            count: 3,
            name: "文艺",
            title: "文艺",
          },
          {
            count: 3,
            name: "小说",
            title: "小说",
          },
          {
            count: 3,
            name: "亦舒系列（散文）",
            title: "亦舒系列（散文）",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1794931.jpg",
        binding: "115x185mm",
        translator: [],
        catalog: "",
        pages: "245",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1794931.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1794931.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1794931.jpg",
        },
        alt: "https://book.douban.com/subject/1862081/",
        id: "1862081",
        publisher: "天地圖書有限公司",
        isbn10: "9629509490",
        isbn13: "9789629509491",
        title: "尚未打烊",
        url: "https://api.douban.com/v2/book/1862081",
        alt_title: "",
        author_intro:
          "亦舒，原名倪亦舒，1946年生於上海，祖籍浙江鎮海，兩歲來港定居，曾就讀嘉道理小學、北角官小，中學畢業於何東女子職業中學，十五歲開始寫稿，第一篇小說刊登在《西點》，十七歲開始替明報寫稿，當時仍然是一位中學生。中學畢業後，曾在《明報》任職記者及擔任電影雜誌採訪記者和編輯。1973年，亦舒赴英國修讀酒店食物管理課程，三年後學成回港，任職富麗華酒店公關部，後進入政府新聞處擔任新聞官，做了七年便退下，當全職作家及家庭主婦，並移居加拿大。",
        summary:
          "可以換嗎\r\n  生育醫生診所裡坐滿渴望懷孕的太太，有一位流淚說：「真不明白怎麼會有人墮胎」，可以換就好了，你不要的給我，皆大歡喜。\r\n  還有，珠圓玉潤的一群正愁身上脂肪之不走，看見壓食症人士住院增肥，也忍不住大叫一聲：換給你，換給你。\r\n  成了名的演員歌星遇著記者喊打喊殺，厭惡到絕頂，正往上爬的藝人黯然神傷：換給我就好了，來纏住我吧。\r\n  有些寫作人愛出風頭不愛寫，有些情願寫不喜亮相，兩者均叫出版社頭痛，不如這樣：彼此交換一些剩餘物資，兩全其美。\r\n  「給我就好了」，我們時時無比艷羨，嚮往別人過剩而自身缺乏的東西，幼時，是物資：一隻有趣玩具，一件漂亮衣裳……後來，是名利、友誼、愛情。\r\n  各人命運不同，故此友人間時時開這玩笑，「你不要他？早些通知我，我換雙球鞋去追他」，或是「你扔他時知會一聲，我到窗下站＃等接住」。\r\n  可以換嗎，你不珍惜的乃係我夢寐以求，你的終身盼望卻為我唾棄。\r\n  可以換就好了。\r\n\r\n電話\r\n  長途電話竟這樣便宜了。\r\n  打到香港比鄰市還相廉，可是，說些什麼呢。\r\n  家裡電話時時多日不響一次，你不打給別人，別人也知趣不來打擾，皆大歡喜，只有放學之後，小女的同學問功課才聞電話響。\r\n  講電話十分浪費時間，除非你是少男少女，他們用頭箍式對講無線電話，走來走去，雙手做別的事，故此可以有一搭沒一搭說上個多小時。\r\n  你會在電話裡訴心事嗎，還是到心理醫生處比較恰當，對任何人講私事或是打探任何人私事都是不禮貌的事，在電話裡最多只可說到股市去向，大選名單，以及天氣好壞。\r\n  那還不如不說的好，騰出來的寶貴時間讀報看書以及給最美好的享受：午睡。\r\n  福克納轉述莎士比亞的話：生命充滿聲響及憤怒……生氣管生氣，家庭裡減少噪聲，從少接電話開始。\r\n  不過，一切在子女到了十多歲時會有所改變。屆時，他們成為不付賬單的一家之主，電話、電腦、電視……似乎全歸他們所有。\r\n  再過些時候，有些家長會叫他們抱著電話搬到小公寓去。",
        series: {
          id: "6681",
          title: "亦舒作品集",
        },
        price: "55.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 193,
          average: "7.6",
          min: 0,
        },
        subtitle: "伍尔芙最经典散文作品集",
        author: ["[英] 伍尔芙"],
        pubdate: "2012-9-20",
        tags: [
          {
            count: 440,
            name: "伍尔芙",
            title: "伍尔芙",
          },
          {
            count: 220,
            name: "散文",
            title: "散文",
          },
          {
            count: 192,
            name: "飞蛾之死",
            title: "飞蛾之死",
          },
          {
            count: 177,
            name: "英国文学",
            title: "英国文学",
          },
          {
            count: 116,
            name: "女性主义",
            title: "女性主义",
          },
          {
            count: 82,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 78,
            name: "英国",
            title: "英国",
          },
          {
            count: 46,
            name: "EnglishLiterature",
            title: "EnglishLiterature",
          },
        ],
        origin_title: "the death of the moth",
        image: "https://img1.doubanio.com/view/subject/m/public/s19339659.jpg",
        binding: "Paperback",
        translator: ["李迎春"],
        catalog:
          "飞蛾之死\n夜幕下的苏塞克斯：一辆汽车上的映像\n三幅画像\n漫步街头：伦敦历险记\n老维克剧院“第十二夜”\n老格雷夫人\n琼斯和威尔金森\n塞维涅夫人\n亨利·詹姆斯：1、圈内\n亨利·詹姆斯：2、旧秩序\n亨利·詹姆斯：3、亨利·詹姆斯书信集\n乔治·莫尔\nE.M.福斯特小说\n不属我辈\n致一位年轻诗人\n门边人\n萨拉·柯勒律治\n传记的艺术\n人际艺术\n两位古董收藏家：沃波尔和科尔\n致威廉·科尔的一封信\n历史学家与这位吉本\n谢菲尔德庄园沉思\n中庸之辈\n工艺\n为什么\n女性的职业\n和平——空袭中的思索",
        pages: "219",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s19339659.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s19339659.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s19339659.jpg",
        },
        alt: "https://book.douban.com/subject/19894298/",
        id: "19894298",
        publisher: "光明日报出版社",
        isbn10: "7511231411",
        isbn13: "9787511231413",
        title: "飞蛾之死",
        url: "https://api.douban.com/v2/book/19894298",
        alt_title: "the death of the moth",
        author_intro:
          "弗吉尼亚·伍尔芙\nVirginia Woolf\n（1882年1月25日~1941年3月28日）\n英国女作家，批判家，意识流小说的代表人物之一，被誉为“20世纪最佳女作家”和二十世纪女性主义的先锋。她和当时的詹姆斯·乔伊斯，还有法国的普鲁斯特等创作意识流文学作品的作家一起，把意识流小说推向世界，极大地影响了世界范围内传统的写作手法。\n弗吉尼亚·伍尔芙的一生都在优雅和疯癫之间游走。有人说：伍尔芙的记忆有着隐秘的两面——一面澄明，一面黑暗；一面寒冷，一面温热；一面是创造，一面是毁灭；一面铺洒着天堂之光，一面燃烧着地狱之火。\n她最知名的作品包括小说《戴洛维夫人》（Mrs. Dalloway）、《到灯塔去》（To the Lighthouse）、《雅各的房间》（Jakob's Room），散文集《普通读者》（Common Reader）、《飞蛾之死》（The Death of the Moth）、《瞬间的存在》（Moments of Being）等。",
        summary:
          "20世纪最杰出女作家/世界三大意识流作家之一/女权主义运动的先驱人物\n弗吉尼亚·伍尔芙最具代表性的散文作品\n随书附赠梵高、罗杰·弗莱、贝尔（伍尔芙姐姐）精美画作卡片四张\n《飞蛾之死》是伍尔芙最为著名的散文。在文中，她为我们描述了一只飞蛾的悲剧命运。在注定无法突围而出的舞台上，飞蛾用它全部的精神和勇气不断向外飞翔，又一次次被阻挡，最终迎接了自己死亡的命运。文中，伍尔芙的笔调悲悯而热诚，就是这样一只微不足道的飞蛾，它在最后时刻，仍然在让自己的生命燃烧，不懈地追求着光明和希望。飞蛾小小的不屈灵魂和精神，加之伍尔芙饱满的热情，让这篇文章一直深受读者喜爱。更有人认为，伍尔芙通过《飞蛾之死》述说了自己的命运，这只飞蛾代她说出了她留给世间的遗言。\n书中还收录了伍尔芙其他具有代表性的散文二十七篇。\n我的头脑发生变化，它不再继续接纳印象了。它把自己关闭起来了。它变成了一只蛹。我躺着，处于相当麻木的状态，尽管肉体常常剧烈地疼痛着——接着，突然什么东西涌了出来……于是，所有的门都在打开，而我相信是那只飞蛾在我内心展翅飞舞。           ——弗吉尼亚·伍尔芙\n没有哪个女作家能像弗吉尼亚·伍尔芙这样广博、雄辩，她对前辈及她同时代作家的大量的评论，显现出她视野的开阔和非凡、睿智的评判能力，显现出她表达的精确和思想的深邃。她对写作女性和职业女性命运的关注，表明她对性别群体在民族传统中的位置和处境的极大关注，那些叛逆的理论探索，使她成为女权主义理论的先驱。               ——嘉男\n她全部创作之丰富和成就之巨大——不仅是九部小说、女性主义文章、书籍评论和《罗杰·弗莱伊传》，而且还有发表在杂志上的文章、日记以及书信，其中相当一部分是在她去世后出版的，现在还不断出版——使她一度曾被指责为狭隘的作品变得越来越成为她的时代、她的精神世界和现代艺术思想的精髓。                     ——马尔科姆·布拉德伯里",
        series: {
          id: "21240",
          title: "金羊毛",
        },
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 830,
          average: "8.8",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993-7",
        tags: [
          {
            count: 257,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 81,
            name: "散文",
            title: "散文",
          },
          {
            count: 49,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 34,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 27,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 27,
            name: "稻草人手记",
            title: "稻草人手记",
          },
          {
            count: 16,
            name: "台湾文学",
            title: "台湾文学",
          },
          {
            count: 14,
            name: "晒着太阳想旅行",
            title: "晒着太阳想旅行",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s6778219.jpg",
        binding: "平装",
        translator: [],
        catalog: "\n      ",
        pages: "151",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s6778219.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s6778219.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s6778219.jpg",
        },
        alt: "https://book.douban.com/subject/1471704/",
        id: "1471704",
        publisher: "湖南文艺出版社",
        isbn10: "7540411570",
        isbn13: "9787540411572",
        title: "稻草人手记",
        url: "https://api.douban.com/v2/book/1471704",
        alt_title: "",
        author_intro: "",
        summary: "\n      ",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "3.70",
      },
      {
        rating: {
          max: 10,
          numRaters: 726,
          average: "8.5",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993-07-01",
        tags: [
          {
            count: 261,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 78,
            name: "散文",
            title: "散文",
          },
          {
            count: 45,
            name: "我的宝贝",
            title: "我的宝贝",
          },
          {
            count: 45,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 34,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 26,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 20,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 15,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s2602143.jpg",
        binding: "平装",
        translator: [],
        catalog: "\n      ",
        pages: "211",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s2602143.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s2602143.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s2602143.jpg",
        },
        alt: "https://book.douban.com/subject/1471706/",
        id: "1471706",
        publisher: "湖南文艺出版社",
        isbn10: "7540411503",
        isbn13: "9787540411503",
        title: "我的宝贝",
        url: "https://api.douban.com/v2/book/1471706",
        alt_title: "",
        author_intro: "",
        summary: "\n      ",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "4.90",
      },
      {
        rating: {
          max: 10,
          numRaters: 294,
          average: "9.0",
          min: 0,
        },
        subtitle: "",
        author: ["周作人"],
        pubdate: "2009-05",
        tags: [
          {
            count: 361,
            name: "周作人",
            title: "周作人",
          },
          {
            count: 207,
            name: "散文",
            title: "散文",
          },
          {
            count: 89,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 71,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 65,
            name: "文学",
            title: "文学",
          },
          {
            count: 54,
            name: "现代文学",
            title: "现代文学",
          },
          {
            count: 47,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 46,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s26382716.jpg",
        binding: "精装",
        translator: ["钟叔河编订"],
        catalog:
          "周作人散文全集第1册\n1898\n戊戌在杭日记抄（2，20）\n1899\n绍兴家居日记抄（1，9）\n1900\n庚子扫墓日记（4，15）\n1901\n逍遥处士小传（3．30）\n清虚先生小传（4，1）\n1902\n南京学堂日记抄（2，13）\n《林和靖先生诗集》题记（2，23）\n江南杂记（4，11）\n薏川荫仙小传（6，14）\n1903\n汽船之窘况及苦热（9，13）\n江南考先生之一斑（9，13）\n1904\n说死生（5，15）\n论不宜以花字为女子之代名词（5，15）\n1905\n《秋草园日记》序（1，6）\n好花枝（1，15）\n女猎人（1，15）\n《玉虫缘》绪言（2，—）\n《玉虫缘》例言（2，—）\n《玉虫缘》一节[译文]（2，—）\n《玉虫缘》译者附识（2，18）\n《荒矶》译记（3，15）\n乙巳日记附记一则（3，30）\n《侠女奴》说明（5，3）\n附录：题《侠女奴》原本\n《造人术》跋语（5，15）\n1906\n《秋草闲吟》序（2—4）\n《孤儿记》缘起（3，—）\n《孤儿记》凡例（3，—）\n1907\n《红星佚史》序（3，—）\n女祸传（5，15）\n妇女选举权问题（7，25）\n周作人散文全集第2册\n1918\n陀思妥也夫斯奇之小说[译文](1，15)\n古诗今译Apologia(2，15)\nTheokritos牧歌第十[译文](2，15)\n废娼问题之中心人物[译文](2，15)\n读武者小路君所作《一个青年\n的梦》(5，15)\n贞操论[译文](5，15)\n与刘半农(5，15)\n日本近三十年小说之发达(5，20)\n安得森的《十之九》(9，15)\n《爱的成年》(10，15)\n庚子歌谣(10，15)\n周作人散文全集第3册\n1923\n妇女运动与常识(1，1)\n评《译日文法》(1，6)\n读《草堂》(1，13)\n关于薛乃纳女士的一句话(1，14)\n昼梦(1，15)\n见了《不敢盲从》的感想(1，16)\n爱罗先珂君的失明(1，17)\n对于“心潮”问题的公正话(1，20)\n意表之中的事(1，23)\n【绿洲】\n[o]小引(1，25)\n[一]《镡百姿》(1，25)\n周作人散文全集第4册\n1925\n奴气(1，4)\n滑稽似不多(1，5)\n介绍日本人的怪论(1，6)\n元旦试笔(1，12)\n《(古事记>中的恋爱故事》译后记(1，12)\n日本人的怪论书后(1，13)\n奴性与人格(1，13)\n改名的通信(1，17)\n情书与骂信(1，18)\n《婢仆须知》抄[译文](1，19)\n鬼的叫卖(1，19)\n希腊陶器画两幅说明(1，19)\n周作人散文全集第5册\n1927\n【闲话集成】\n[二七]国旗颂(1，1)\n[二八]上海气(1，1)\n[三二]请教历史家(1，1)\n[三四]妙文(1，8)\n[三五]国旗之拥护(1，8)\n(三六]又是“索隐”?(1，8)\n(三七]研究系之功(1，15)\n[三九]论无报可看(1，15)\n[四十]孰为苦辛?(1，15)\n[四一]“南北”释义(1，15)\n(四二]老人的苦运(1，22)\n……\n周作人散文全集第6册\n周作人散文全集第7册\n周作人散文全集第8册\n周作人散文全集第9册\n周作人散文全集第10册\n周作人散文全集第11册\n周作人散文全集第12册\n周作人散文全集第13册\n周作人散文全集第14册",
        pages: "8848",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s26382716.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s26382716.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s26382716.jpg",
        },
        alt: "https://book.douban.com/subject/3773194/",
        id: "3773194",
        publisher: "广西师范大学出版社",
        isbn10: "756338295X",
        isbn13: "9787563382958",
        title: "周作人散文全集",
        url: "https://api.douban.com/v2/book/3773194",
        alt_title: "",
        author_intro: "",
        summary:
          "十四卷，近七百万字，收录周作人全部散文及部分日记、诗歌、书信、序跋、译文，涵括了此前出版的主要周作人文集——《周作人文类编》及《周作人自编文集》的全部内容，还有集外文及未刊稿。多文为首次面世。\n本书由钟叔河编订。钟先生90年代曾整理出版十卷本《周作人文类编》，更出版过多种周作人选集和单行本。\n本书采用编年体形式辑录周作人1898～1966年的文章，所有文章(集内、集外)均考订注明：①初次发表的时间；②发表的出版物名称；③所用的署名。集内文注明收入何集，集外文注明“未收入自编文集”，未曾发表者注明“未刊稿”。每篇文章均有与“索引卷”相对应的编号，十分便于读者及研究者查阅。\n本书由广西师范大学出版社组织专家审校，编校历时五年，根据第一手资料校对，并根据周作人手稿核对过部分内容，改正了以往周作人作品集中的许多讹误。装帧设计及印制力求精美。\n除14卷正文外，另配索引卷（单独成书），近六十万字。与《鲁迅全集》“索引”以注释内容为主不同，本索引卷有全集篇目索引、主题分类索引、人名索引、书名索引、篇名及报刊名索引、自编文集篇目索引等。",
        price: "2280.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 1086,
          average: "9.0",
          min: 0,
        },
        subtitle: "花城：现代散文诗名著名译",
        author: ["阿尔蒂尔・兰波"],
        pubdate: "2004-5",
        tags: [
          {
            count: 703,
            name: "兰波",
            title: "兰波",
          },
          {
            count: 495,
            name: "诗歌",
            title: "诗歌",
          },
          {
            count: 279,
            name: "法国",
            title: "法国",
          },
          {
            count: 170,
            name: "王道乾",
            title: "王道乾",
          },
          {
            count: 163,
            name: "象征主义",
            title: "象征主义",
          },
          {
            count: 139,
            name: "法国文学",
            title: "法国文学",
          },
          {
            count: 131,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 108,
            name: "诗",
            title: "诗",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1841116.jpg",
        binding: "平装",
        translator: ["王道乾"],
        catalog:
          "《地狱一季》题解\n1 序诗\n2 坏血统\n3 地狱之夜\n4 谵妄Ⅰ 疯狂的童贞女/下地狱的丈夫\n5 谵妄Ⅱ 言语炼金术\n6 不可能\n7 闪光\n8 清晨\n9 永别\n10 通灵者书信题解\n11 兰波致乔治・伊藏巴尔\n12 兰波致保罗・德莫尼\n13 兰波的《地狱一季》\n阿尔蒂尔・兰波年表",
        pages: "104",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1841116.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1841116.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1841116.jpg",
        },
        alt: "https://book.douban.com/subject/1162773/",
        id: "1162773",
        publisher: "花城出版社",
        isbn10: "7536042957",
        isbn13: "9787536042957",
        title: "地狱一季",
        url: "https://api.douban.com/v2/book/1162773",
        alt_title: "",
        author_intro: "",
        summary:
          "《地狱一季》给人一种混乱和绝望的印象。是因为那许多互不连贯的句子和呼喊号叫。既有对真实的确认又有幻像虚影。要控制生命、生活的梦幻和由生存逃出的梦幻。还有撒旦冷笑的声音。但主导思想是：自幼即被加之于己的原罪的观念，这是全部罪恶的根源。所以说“地狱伤不到异教之人。”最后，承认失败，只有回到卑劣下流一途。“是火焰，火焰卷着罪人升腾而起。”",
        series: {
          id: "4431",
          title: "现代散文诗名著译丛",
        },
        price: "10.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1518,
          average: "8.9",
          min: 0,
        },
        subtitle: "",
        author: ["丰子恺"],
        pubdate: "2018-9",
        tags: [
          {
            count: 508,
            name: "丰子恺",
            title: "丰子恺",
          },
          {
            count: 353,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 258,
            name: "漫画",
            title: "漫画",
          },
          {
            count: 238,
            name: "文学与随笔",
            title: "文学与随笔",
          },
          {
            count: 232,
            name: "生活",
            title: "生活",
          },
          {
            count: 222,
            name: "治愈",
            title: "治愈",
          },
          {
            count: 216,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 170,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s29831216.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "第一章\n人生之味——不宠无惊过一生\n不乱于心，不困于情。\n不畏将来，不念过往。\n如此，安好。\n003 ...... 白鹅\n010 ...... 阿咪\n015 ...... 儿女\n021 ...... 我的母亲\n026 ...... 回忆李叔同先生\n035 ...... 访梅兰芳\n042 ...... 从孩子得到的启示\n047 ...... 给我的孩子们\n052 ...... 送阿宝出黄金时代\n第二章\n时间之味——我见青山多妩媚\n一粒沙里看出世界，\n一朵野花里见天国，\n在你掌中盛住无限，一时间里便是永结。\n059 ...... 渐\n064 ...... 春\n069 ...... 秋\n074 ...... 清晨\n081 ...... 生机\n086 ...... 晨梦\n090 ...... 大账簿\n第三章\n孤独之味——幸有我来山未孤\n心小了，所有的小事就大了；\n心大了，所有的大事都小了；\n看淡世事沧桑，内心安然无恙。\n097 ...... 山中避雨\n101 ...... 湖畔夜饮\n107 ...... 初冬浴日漫感\n111 ...... 随感十三则\n120 ...... 家\n127 ...... 陋巷\n133 ...... 闲居\n第四章\n艺术之味——此身已近桃花源\n人因为有这样的一双眼睛，所以人的一切生活，\n实用之外又必讲求趣味。\n一切东西，好用之外又求其好看。\n139 ...... 学画回忆\n147 ...... 竹影\n152 ...... 自然\n158 ...... 绘画之用\n162 ...... 学会艺术的生活\n166 ...... 从梅花说到艺术\n174 ...... 新艺术\n179 ...... 美与同情\n第五章\n生活之味——人间有味是清欢\n你若爱，生活哪里都可爱。\n你若恨，生活哪里都可恨。\n不是世界选择了你，是你选择了这个世界。\n187 ...... 忆儿时\n195 ...... 梦痕\n201 ...... 作父亲\n206 ...... 塘栖\n210 ...... 山水间的生活\n215 ...... 胡桃云片\n220 ...... 吃酒\n226 ...... 吃瓜子\n234 ...... 华瞻的日记",
        pages: "248",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s29831216.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s29831216.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s29831216.jpg",
        },
        alt: "https://book.douban.com/subject/30264297/",
        id: "30264297",
        publisher: "华中科技大学出版社",
        isbn10: "7568039390",
        isbn13: "9787568039390",
        title: "万般滋味，都是生活：丰子恺散文漫画精选集",
        url: "https://api.douban.com/v2/book/30264297",
        alt_title: "",
        author_intro:
          "丰子恺\n散文家、漫画家。早年就读于浙江省立第一师范学校，师从弘一法师学习音乐、绘画，从夏丏尊学习国文。朱自清、郁达夫、巴金、叶圣陶、林清玄，对其文章和漫画赞誉有加。\n他的散文风格恬淡率真、意味隽永，富有童真天然之趣。他的漫画或幽默风趣，或恬静淡雅，往往寥寥几笔，就勾画出一个诗意意境，深受人们的喜爱。著有《子恺漫画》《护生画集》《缘缘堂随笔》《缘缘堂再笔》《率真集》等。",
        summary:
          "愿你永葆童真，并乐此不疲，去生活\n一个人，在面对变化莫测的世界时，怀揣的不是无处可逃的感慨，而是“不如喜悦、不如清心、不如释然”的心态，以一颗童心过生活，这样的人，必定是懂得生活真正滋味的人，也是内心极其强大的人。\n全面收录《渐》《大账簿》《梦痕》《给孩子们》等40篇丰子恺经典散文作品，精选40余幅全彩漫画，完美还原丰子恺漫画清新、自然的本色。在纷繁复杂的世界里，让浮躁的心静下来，用心感受日常的一箪食、一瓢饮、一豆羹，安享生活的万般滋味……",
        price: "42.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 367,
          average: "9.3",
          min: 0,
        },
        subtitle: "余光中散文精品选",
        author: ["余光中", "林辛 编"],
        pubdate: "1994",
        tags: [
          {
            count: 233,
            name: "余光中",
            title: "余光中",
          },
          {
            count: 189,
            name: "散文",
            title: "散文",
          },
          {
            count: 89,
            name: "文学",
            title: "文学",
          },
          {
            count: 80,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 71,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 59,
            name: "经典",
            title: "经典",
          },
          {
            count: 48,
            name: "文化",
            title: "文化",
          },
          {
            count: 41,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s27273298.jpg",
        binding: "",
        translator: [],
        catalog: "",
        pages: "",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s27273298.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s27273298.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s27273298.jpg",
        },
        alt: "https://book.douban.com/subject/2054019/",
        id: "2054019",
        publisher: "山东文艺出版社",
        isbn10: "7532912140",
        isbn13: "9787532912148",
        title: "听听那冷雨",
        url: "https://api.douban.com/v2/book/2054019",
        alt_title: "",
        author_intro: "",
        summary: "",
        price: "9.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 152,
          average: "8.8",
          min: 0,
        },
        subtitle: "迟子建2019全新散文作品集",
        author: ["迟子建"],
        pubdate: "2019-6-8",
        tags: [
          {
            count: 120,
            name: "散文",
            title: "散文",
          },
          {
            count: 119,
            name: "迟子建",
            title: "迟子建",
          },
          {
            count: 58,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 53,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 48,
            name: "文学",
            title: "文学",
          },
          {
            count: 48,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 42,
            name: "美文",
            title: "美文",
          },
          {
            count: 37,
            name: "温暖",
            title: "温暖",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s32326142.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "第一章  好时光悄悄溜走\n灯祭/ 好时光悄悄溜走/ 撕日历的日子/ 腊月的守灵/ 北方的盐/ 农具的眼睛\n蚊烟中的往事/ 龙眼与伞/两个人的电影/ 原来姹紫嫣红开遍/ 最是花影难扫/ 父亲的肖像\n第二章  我对黑暗的柔情\n伤怀之美/ 冰灯/ 一滴水可以活多久/ 女人的手/光与影\n我的世界下雪了/ 我对黑暗的柔情/ 上天的九级浪/ 雪山的长夜/ 谁说春色不忧伤\n第三章  时间怎样地行走\n泥泞/ 必要的丧失/ 晚风中眺望彼岸/ 论谦卑/ 睡眠与劳动\n骂声中的浪漫/ 时间怎样地行走/ 红绿灯下/ 长发的秘密\n第四章  是谁扼杀了哀愁\n是谁扼杀了哀愁/ 石头与流水的巴黎/ 光明于低头的一瞬/ 紫气中的烟火/ 今日水犹寒\n鲁镇的黑夜与白天/ 西栅的梆声/ 最是沧桑起风情/ 飞向泥土的箭/\n美景，总在半梦半醒之间/ 一个作家应该谢谢什么\n第五章  也是冬天，也是春天\n午夜的费穆与伯格曼/ 看见的和看不见的镣铐/ 一个人和三个时代\n落红萧萧为哪般/ 从富春江到硕莪馆/ 也是冬天，也是春天\n附录  用文字收拢时代速度的缰绳",
        pages: "320",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s32326142.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s32326142.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s32326142.jpg",
        },
        alt: "https://book.douban.com/subject/33415751/",
        id: "33415751",
        publisher: "中信出版集团",
        isbn10: "7521700759",
        isbn13: "9787521700756",
        title: "也是冬天，也是春天",
        url: "https://api.douban.com/v2/book/33415751",
        alt_title: "",
        author_intro:
          "迟子建，女，1964年元宵节出生于漠河。1984年毕业于大兴安岭师范学校。1987年入北京师范大学与鲁迅文学院联办的研究生班学习，1990年毕业后到黑龙江省作家协会工作至今。1983年开始写作，已发表以小说为主的文学作品六百余万字，出版有八十余部单行本。\n主要作品有：长篇小说《伪满洲国》《越过云层的晴朗》《额尔古纳河右岸》《白雪乌鸦》，小说集《北极村童话》《白雪的墓园》《向着白夜旅行》《逝川》《清水洗尘》《雾月牛栏》《踏着月光的行板》《世界上所有的夜晚》，散文随笔集《伤怀之美》《我的世界下雪了》等。出版有《迟子建长篇小说系列》六卷、《迟子建文集》四卷、《迟子建中篇小说集》五卷、《迟子建短篇小说集》四卷以及三卷本的《迟子建作品精华》。曾获得di一、第二、第四届鲁迅文学奖，第七届茅盾文学奖，澳大利亚“悬念句子文学奖”等文学奖。作品有英、法、日、意、韩、瑞典等海外译本。",
        summary:
          "迟子建的父亲爱喝酒，爱写字，会拉小提琴和手风琴，是一位豁达又浪漫的小学校长，她的名字是父亲取的，在1964年，大多数国人争着给孩子起名“卫红”“卫东”“志国”的年月，因为很喜欢曹子建的《洛神赋》，父亲给自己的二女儿取名“子建”。他和北极村轮回的四季一起，给了迟子建最初的生命教育。\n“从小我就知道，跌倒了得爬起来继续走，所以不怕坎坷。再加上那里长达半年的冬天，冷风刺骨，你抵御大自然寒流的能力强了，抵御人生寒流的能力自然也强了。东北话讲叫皮实。”\n《也是冬天，也是春天》是茅盾文学奖、鲁迅文学奖、冰心散文奖三大奖项作家迟子建在散文领域沉淀十年后的爆发之作，也是她创作生涯中首部摄影插图散文，极富小说的阅读质感。面对生活的苦难与生命的泥泞，她满怀悲悯，但又毫不畏缩，似有一种花开叶落般的安然。本书中的名篇《雪山的长夜》《我的世界下雪了》《灯祭》等文曾被央视主持人董卿、演员黄轩等倾情传颂，《爱人》《泥泞》等名作连续被央视《朗读者》栏目收录。",
        price: "58.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 3431,
          average: "8.2",
          min: 0,
        },
        subtitle: "",
        author: ["周国平"],
        pubdate: "1999-11",
        tags: [
          {
            count: 1280,
            name: "周国平",
            title: "周国平",
          },
          {
            count: 675,
            name: "散文",
            title: "散文",
          },
          {
            count: 548,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 432,
            name: "守望的距离",
            title: "守望的距离",
          },
          {
            count: 288,
            name: "思考",
            title: "思考",
          },
          {
            count: 240,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 217,
            name: "人生",
            title: "人生",
          },
          {
            count: 154,
            name: "散文随笔",
            title: "散文随笔",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s10431044.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "序\n第一辑  存在之谜\n未经省察的人生没有价值\n幸福的悖论\n每个人都是一个宇宙\n失去的岁月\n自我二重奏\n探究存在之谜\n永远未完成\n第二辑  未知死焉知生\n悲观·执著·超脱\n思考死：有意义的徙劳生命的苦恼和创造的欢欣\n海德格尔的死亡观\n沉重的轻：虚无与偶然\n父亲的死<b\n",
        pages: "433",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s10431044.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s10431044.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s10431044.jpg",
        },
        alt: "https://book.douban.com/subject/1004318/",
        id: "1004318",
        publisher: "东方出版社",
        isbn10: "7506006758",
        isbn13: "9787506006750",
        title: "守望的距离：周国平散文集",
        url: "https://api.douban.com/v2/book/1004318",
        alt_title: "",
        author_intro:
          "周国平：中国社会科学院哲学研究所研究员，哲学博士。著有学术专著《尼采：在世纪的转折点上》、《尼采于形而上学》，随感集《人于永恒》，散文集《只有一个人生》、《今天我活着》、《迷者的悟》、《守望的距离》、《各自的朝圣路》，纪世作品《妞妞：一个父亲的札记》等，1998年底以前作品结集为《周国平文集》（1-6卷），译有《尼采美学文选》、《尼采诗集》等。",
        summary:
          "迄今为止，我的散文出过不同的版本和选本。其中，有三种是按时间顺序的完整结集，即：东方出版社1996年6月出版的《守望的距离》，收集了1983年至1995年4月的散文；东方出版社1999年10月出版的《各自的朝圣路》，收集了1995年4月至1998年的散文；北岳文艺出版社2002年10月出版的《安静》，收集了1999年至2002年8月的散文。这三种可视为其他所有版本和选本的母本，有了它们，就有了我将近二十年间所发表的几乎全部散文。\n在与原出版社的合约期内，在未作任何宣传的情形下，本书在五年中印行了71000册，我对这个成绩深表满意和感谢。现在，在合约到期以后，我把本书略做修订，重新出版。所做的修订有三。其一，在初版时，匆忙交稿，许多文章是从原发表刊物上剪贴的，其中有一些不免被那些刊物的编辑做了删改，此次均按原稿予以恢复。其二，由于《妞妞——一个父亲的札记》一书已出版，删去了从中摘录的文字。其三，增补了当时遗漏的若干文章。\n在我的生命中，本书写作的那十余年真是一段特殊而重要的岁月。那时候，我刚读完研究生，以接近不惑的年龄迎来了迟到的青春，身上有使不完的劲，一切都仿佛正在开始，要在哲学的事业上有一番作为。然而，也是在此期间，在我的生活中发生了一连串意想不到的变故。回想起来，也许正是那些变故迫使我暂时搁下我的学术计划，而把更多的精力用来思考令我困惑的人生难题，表面看来，这好像是一个外力把我从一条轨道上撞到了另一条轨道上。可是，我因此脱离哲学的轨道了吗？我相信没有。在我迄今为止的全部生涯中，再也找不出这样一个时候，我从哲学那里获得了如此有益的帮助，为此我对哲学满怀感激。\n本书中的文字大多写于一二十年前，可以称作旧文了。令我欣慰的是，仍有读者喜欢这些文字，包括在那之后成长起来的一茬茬可爱的青年读者。在这个喧闹的时代，如我平凡之辈，所写的东西在一二十年后还有人读，很应该知足了。但我不会因此沾沾自喜，因为我心里明白，我的作品决无传世的资格。我仅相信一点：一个人唯有真正为自己写作，他的作品才会有比较长久的生命力。今后我无论学术著作还是文学作品，都仍要坚持这个原则。为自己写作，也就是为每一个与自己面临和思考着同样问题的人写作，这是我所能想象的为人类写作的唯一可能的方式。",
        price: "23.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 478,
          average: "8.2",
          min: 0,
        },
        subtitle: "老舍40年散文经典",
        author: ["老舍"],
        pubdate: "2017-8",
        tags: [
          {
            count: 211,
            name: "老舍",
            title: "老舍",
          },
          {
            count: 117,
            name: "散文",
            title: "散文",
          },
          {
            count: 86,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 75,
            name: "随笔散文",
            title: "随笔散文",
          },
          {
            count: 58,
            name: "文学",
            title: "文学",
          },
          {
            count: 48,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 46,
            name: "经典",
            title: "经典",
          },
          {
            count: 29,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s29501505.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "目录\n在英国，在国内山河\n001 到了济南\n009 一些印象（选章）\n017 更大一些的想像（济南通信）\n020 头一天\n025 还想着它\n033 春　风\n035 青岛与我\n039 青岛与山大\n043 想北平\n046 英国人\n051 我的几个房东—留英回忆之二\n057 东方学院—留英回忆之三\n063 大明湖之春\n066 英国人与猫狗\n071 五月的青岛\n074 在成都\n076 滇行短记\n095 可爱的成都\n098 青蓉略记\n不正经起来\n108 慢电代邮\n109 真正的学校日刊\n111 老舍的创作\n112 我的理想家庭\n115 在民国卅年元旦写出我的自己的希望\n117 话剧观众须知廿则\n119 答客问\n121 大　喜\n124 向妇女同志们致敬\n127 越南人民必胜\n128 一九五〇年日记（1月1日至2月21日）\n142 一九六一年访内蒙日记（7月29日至9月1日）\n164 猪多肥多粮多的陈各庄大队（1966年调查资料）\n时有雅趣在人间\n172 济南的药集（济南通信）\n175 吃莲花的\n178 小麻雀\n181 落花生\n184 小动物们\n190 小动物们（鸽）续\n196 西红柿\n198 母　鸡\n200 多鼠斋杂谈\n214 猫\n严肃得很\n218 神的游戏\n221 鬼与狐\n225 谈幽默\n232 “幽默”的危险\n236 兔儿爷\n238 灵的文学与佛教\n244 我的“话”\n249 什么是幽默？\n从心而论\n254 新年醉话\n257 抬头见喜\n261 大发议论\n267 小　病\n270 避　暑\n273 习　惯\n276 又是一年芳草绿\n280 暑　避\n282 婆婆话\n288 闲　话\n292 有了小孩以后\n297 无　题（因为没有故事）\n300 在乡下\n302 “住”的梦\n305 入　城\n307 北京的春节\n312 乍看舞剑忙提笔\n一些人，常在心\n316 代语堂先生拟赴美宣传大纲\n320 小型的复活（自传之一章）\n325 致女友××函\n329 宗月大师\n333 自　述\n339 敬悼许地山先生\n346 四位先生\n352 我的母亲\n358 八方风雨",
        ebook_url: "https://read.douban.com/ebook/37755815/",
        pages: "408",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s29501505.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s29501505.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s29501505.jpg",
        },
        alt: "https://book.douban.com/subject/27090347/",
        id: "27090347",
        publisher: "浙江文艺出版社",
        isbn10: "7533949358",
        isbn13: "9787533949358",
        title: "天真的幽默家",
        url: "https://api.douban.com/v2/book/27090347",
        alt_title: "",
        author_intro:
          "老舍（1899—1966）\n中国现代著名小说家、剧作家、翻译家。\n本名舒庆春，字舍予。生于北京，满族正红旗人。\n1924年赴英，任伦敦大学东方学院华语教员，正式开始文学创作。\n1930年回国，先后在齐鲁大学、山东大学任教，进入创作高峰期。\n1937年奔赴武汉，次年随“文协”迁往重庆。后曾到多地考察慰问。\n1946年赴美讲学。\n1949年归国。\n老舍是公认的幽默大师、语言大师。\n他的文字至真至纯，读来抚慰人心。",
        summary:
          "本书完整收录老舍40年76篇散文经典，特选10篇以上少见篇目。\n有游记闲谈，有小品文论，有日记书信，或说景或写物或谈人或论事，无一不有情、有趣。\n老舍是公认的幽默大师、语言大师。他的文字至真至纯，语言俗白生动。字里行间透着质朴的天真和入世的睿智，又有入木三分的辛辣讽刺，饱含对生活的思考，读来暖心治愈，不忍释卷。\n编辑推荐\n◆百年经典：流传百年的幽默典范，直击心灵的质朴语言，不可不读的名篇佳作！\n◆超值典藏：76篇足量典藏，特选10篇以上少见篇目。内容丰富，轻松幽默，一读到底。\n◆精美设计：独家手绘6幅全彩插图，精心设计文字版式及装帧。让阅读更舒适，更享受。\n◆精编精校：参照民国初刊本与《老舍全集》勘校。\n名人推荐\n◆我很喜欢老舍的作品。\n——勒•克莱齐奥（法国著名文学家，2008年诺贝尔文学奖得主）\n◆据我接触到的世界文学情报，全世界得到公认的中国新文学家也只有沈从文与老舍。\n¬——朱光潜（中国著名美学家、文艺理论家、教育家、翻译家）\n◆他的写作精力是惊人的。他又会利用他的时间，他在朋友谈话、社会活动和栽花、养猫之间，不断地完成着他的杰作。他的为人，更是和他的作品一样，爽朗、幽默、质朴、热情。\n——冰心（中国著名诗人、作家、翻译家）\n◆他的语言生动幽默，是地道的北京话，间或也夹上一点山东俗语。他没有许多作家那种忸怩作态让人读了感到浑身难受的非常别扭的文体，一种新鲜活泼的力量跳动在字里行间。\n——季羡林（国际著名东方学大师、语言学家、文学家）\n◆老舍为自己的故事引用广泛的材料，涉及到与民族悲剧处于同一水平的问题，以及普通人遇到的生活困难。尽管在所有描写中透露出幽默，但在它们上面又都印着痛苦和悲伤。\n——司格林（俄罗斯著名汉学家、翻译家）\n◆他的语言里没有市民口语中的那种俗气，他识别提炼之后，将这种语言变成了一种文化。\n——姜昆（中国国家一级演员，相声演员）",
        ebook_price: "45.00",
        series: {
          id: "37789",
          title: "作家榜经典文库",
        },
        price: "45",
      },
      {
        rating: {
          max: 10,
          numRaters: 886,
          average: "9.1",
          min: 0,
        },
        subtitle: "",
        author: ["（黎巴嫩）纪伯伦"],
        pubdate: "2011-1-1",
        tags: [
          {
            count: 522,
            name: "纪伯伦",
            title: "纪伯伦",
          },
          {
            count: 302,
            name: "散文诗",
            title: "散文诗",
          },
          {
            count: 218,
            name: "诗歌",
            title: "诗歌",
          },
          {
            count: 151,
            name: "散文",
            title: "散文",
          },
          {
            count: 143,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 134,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 108,
            name: "文学",
            title: "文学",
          },
          {
            count: 96,
            name: "阿拉伯文学",
            title: "阿拉伯文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s2612454.jpg",
        binding: "平装",
        translator: ["冰心", "伊宏"],
        catalog:
          "一、先知\n二、先知园\n三、沙与沫\n四、疯人\n五、先驱者\n六、流浪者\n七、大地之神\n",
        pages: "465",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s2612454.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s2612454.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s2612454.jpg",
        },
        alt: "https://book.douban.com/subject/1038291/",
        id: "1038291",
        publisher: "北京燕山出版社",
        isbn10: "7540212330",
        isbn13: "9787540212339",
        title: "纪伯伦散文诗全集",
        url: "https://api.douban.com/v2/book/1038291",
        alt_title: "",
        author_intro: "",
        summary:
          "《纪伯伦散文诗全集》共收录纪伯伦最有代表性的九部散文诗集，分别为《先知》、《先知园》、《沙与沫》、《情与思》、《音乐短章》、《泪与笑》、《疯人》、《暴风集》、《先驱者》。    《纪伯伦散文诗全集》中的《先知》是纪伯伦最优美、最深刻的作品之一，是他诗歌创作的一个高峰。该诗集表达了纪伯伦对人类历史与未来的看法。    《先知园》是《先知》的姊妹篇，也是纪伯伦最后一部散文诗集。    《沙与沫》是一部格言、寓言散文诗集，是作者关于人生和艺术的锦言妙语。    《情与思》是格言、警句、小诗的汇集，也是纪伯伦思想和智慧火花的凝聚。    《音乐短章》是纪伯伦发表的第一部作品，是一篇长篇艺术抒情散文。它以独特的语言表达了作者对音乐的爱和对音乐本质的理解。    《泪与笑》是纪伯伦写得最美的散文诗集之一，展现了纪伯伦最关心的文学主题：爱与美，大自然，生命哲学，人道主义，社会批判，诗人的使命和孤独等等。    《疯人》是纪伯伦用英文发表的第一本散文诗集。该集中大部分篇章都较短，可归入现代寓言或哲理故事类。    《暴风集》是纪伯伦最有力度的散文诗集。    《先驱者》是纪伯伦用英文写成的第二本散文诗集，在风格上与《疯人》中的作品颇为相似，多数具有哲理故事或现代寓言的形式特点，少数则为充满激情、直抒胸臆的典型抒情散文诗。",
        series: {
          id: "11232",
          title: "世界文学文库（全译本）",
        },
        price: "18.0",
      },
      {
        rating: {
          max: 10,
          numRaters: 1043,
          average: "8.8",
          min: 0,
        },
        subtitle: "",
        author: ["钱锺书"],
        pubdate: "1997-07",
        tags: [
          {
            count: 405,
            name: "钱钟书",
            title: "钱钟书",
          },
          {
            count: 310,
            name: "散文",
            title: "散文",
          },
          {
            count: 140,
            name: "钱锺书",
            title: "钱锺书",
          },
          {
            count: 87,
            name: "文学",
            title: "文学",
          },
          {
            count: 80,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 50,
            name: "杂文",
            title: "杂文",
          },
          {
            count: 50,
            name: "中国",
            title: "中国",
          },
          {
            count: 33,
            name: "散文随笔",
            title: "散文随笔",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s28103220.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "589",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s28103220.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s28103220.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s28103220.jpg",
        },
        alt: "https://book.douban.com/subject/1070985/",
        id: "1070985",
        publisher: "浙江文艺出版社",
        isbn10: "753390995X",
        isbn13: "9787533909956",
        title: "钱锺书散文",
        url: "https://api.douban.com/v2/book/1070985",
        alt_title: "",
        author_intro: "",
        summary:
          "本书目前国内唯一的钱先生散文的选本。分论人生、书平、论学、书人、序跋、杂说六辑，收入钱先生的散文九十六篇，其中首录了钱先生的早期集外作品三十二篇",
        price: "26.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 314,
          average: "7.8",
          min: 0,
        },
        subtitle: "余华经典散文",
        author: ["余华"],
        pubdate: "2019-6",
        tags: [
          {
            count: 160,
            name: "余华",
            title: "余华",
          },
          {
            count: 81,
            name: "散文",
            title: "散文",
          },
          {
            count: 49,
            name: "随笔散文杂文",
            title: "随笔散文杂文",
          },
          {
            count: 47,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 42,
            name: "人生",
            title: "人生",
          },
          {
            count: 32,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 30,
            name: "因为喜欢书，所以想看看！",
            title: "因为喜欢书，所以想看看！",
          },
          {
            count: 24,
            name: "活着",
            title: "活着",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s33314506.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "第一辑 一个记忆回来了\n一个记忆回来了\t/003\n最初的岁月\t/013\n爸爸出差时\t/021\n可乐和酒\t/030\n医院里的童年\t/033\n恐惧与成长\t/040\n父子之战\t/046\n录像带电影\t/051\n十九年前的一次高考\t/055\n我的第一份工作\t/058\n纵论人生，纵论自我\t/064\n第二辑 文学·音乐·旅行\n我最初的阅读与写作 /087\n我的文学白日梦\t/094\n一个作家的力量\t/097\n关于回忆和回忆录  /101\n川端康成和卡夫卡的遗产 /104\n博尔赫斯的现实\t/109\n契诃夫的等待\t/122\n三岛由纪夫的写作与生活 /133\n我的书游荡世界的经历 /138\n音乐的叙述\t/144\n音乐影响了我的写作 /160\n灵 感\t/170\n色 彩\t/180\n在日本的细节里旅行 /193\n耶路撒冷 & 特拉维夫笔记 /198\n第三辑 我与这个时代\n一个国家，两个世界\t/207\n没有一种生活是可惜的\t/210\n没有一条道路是重复的\t/217\n别人的城市\t/220\n我与东亚\t/222\n我们生活在巨大的差距里\t/230",
        ebook_url: "https://read.douban.com/ebook/149418754/",
        pages: "",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s33314506.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s33314506.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s33314506.jpg",
        },
        alt: "https://book.douban.com/subject/33444357/",
        id: "33444357",
        publisher: "陕西师范大学出版社",
        isbn10: "7569506154",
        isbn13: "9787569506150",
        title: "没有一种生活是可惜的",
        url: "https://api.douban.com/v2/book/33444357",
        alt_title: "",
        author_intro:
          "余华，1960年4月出生， 1983年开始写作。\n主要作品有《活着》《许三观卖血记》《在细雨中呼喊》《兄弟》《第七天》。\n作品被翻译成35种语言，在美国、英国、法国、德国、意大利、日本等37个国家和地区出版。\n曾获法国文学和艺术骑士勋章，法国国际信使外国小说奖，意大利朱塞佩·阿切尔比国际文学奖等荣誉。",
        summary:
          "一本书读懂一位作家，一系列阅尽当代散文精华。\n新华经典散文文库之余华——《没有一种生活是可惜的》\n-\n身处荒诞的世界\n我们都该读读余华！\n-\n如果说余华的小说是享誉世界的伟大作品\n那么散文则更加体现了他的艺术思想\n最接近现实生活中的余华\n-\n本书是余华的散文作品集。分为“一个记忆回来了”“文学·音乐·旅行”“活着，为了讲述”三大章节，包含对往事的追忆与深思，对文学和音乐的独到见解，旅行中的所见所闻所感，以及对整个社会和历史的反省。\n正如余华所说：“这就是我的写作，从中国人的日常生活出发，经过政治、历史、经济、社会、体育、文化、情感、欲望、隐私等等，然后再回到中国人的日常生活之中。\n-\n【编辑推荐】\n★《活着》之后，余华再论人生与自我\n★ 回顾与思考三十余年创作历程\n★ 从文学到社会，从过去到未来",
        ebook_price: "30.99",
        series: {
          id: "48009",
          title: "新华经典散文文库",
        },
        price: "59.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 2932,
          average: "7.5",
          min: 0,
        },
        subtitle: "张小娴散文精选集",
        author: ["张小娴"],
        pubdate: "2011-6",
        tags: [
          {
            count: 4405,
            name: "张小娴",
            title: "张小娴",
          },
          {
            count: 1678,
            name: "想念",
            title: "想念",
          },
          {
            count: 1277,
            name: "散文",
            title: "散文",
          },
          {
            count: 805,
            name: "爱情",
            title: "爱情",
          },
          {
            count: 495,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 333,
            name: "张小娴散文",
            title: "张小娴散文",
          },
          {
            count: 271,
            name: "張小嫻",
            title: "張小嫻",
          },
          {
            count: 256,
            name: "我想读",
            title: "我想读",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s6339166.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "第一章有多傻\n有多傻 003\n无条件的爱 004\n情之所钟 005\n不要爱我 006\n爱情的祭坛 008\n目光所及之处 009\n可不可以不要牵挂一个人？ 010\n旧情人的怀抱 012\n留在门口的说话 013\n渴望的，才是最好的 014\n自己的量尺 015\n十分和九分半 016\n翻男人的东西 018\n不要跑到办公室找他 019\n追求女人的男人 020\n小气情人 021\n他们需要一个妈咪 023\n夹在你和他之间的男人 024\n把性说成爱 025\n做一个懒惰的男人 026\n爱上一个自私的人 027\n他其实没那么爱你 029\n头发是我的 031\n男女有别之自由身 032\n世上没有你最爱的人 033\n永远不要回头 034\n上半身，下半身 035\n留住男人的胃 036\n寂寞是A女 037\n重回世上十分钟 039\n撒娇的女人 040\n心软，留给心爱的人 041\n美丽的谎言 042\n不属于我的妩媚 043\n千万不要替他生孩子 044\n我没迁就你 045\n不上床是为了你好 046\n现实不宜 047\n即将抛弃的 048\n陌路朋友 049\n两脚动物和四脚动物 050\n等到心都碎了 052\nSold 054\n自己和别人的 055\n忠于自己 056\n再见也无言 058\n第二章严选爱慕者\n恋爱耐力比赛 061\n很想打的人 062\n明知单思苦 063\n爱女人，爱男人 065\n因为我们都寂寞 067\n你来抓我吧 069\n不想孤独终老 070\n互动追求 071\n开始时，别做得太好 072\n美好时光里的人 073\n爱对一个人 074\n严选爱慕者 076\n二十岁的男生 077\n在十天之内失去一个男人 078\n一个爱你的男人 080\n拒绝排骨臀 081\n男人的腿 082\n男人的内衣 083\n吹气娃娃 084\n男人不会错 085\n男儿膝下有玫瑰 087\n高傲，也殷勤 088\n忙？忙些什么？ 089\n他不想别人知道 090\n不谈忠心，只谈本事 092\n我常常辜负女人 093\n男人都爱看色情片吗？ 094\n只能做女朋友 095\n只有男人变蠢 096\n可爱的肥油 097\n一个很man的女友奴 098\n爱情的品位 100\n感谢上天，你没有碰到他 101\n要么就相亲相爱，要么就分手 102\n女人最讨厌什么 103\n死得苍凉 104\n朋友，情人 105\n情人的掌声 107\n热汤或冷饭 109\n是时候铁石心肠了 110\n第三章你爱谁，谁就是你的王子\n爱情的标准 113\n酸苦辣的甜言蜜语 114\n头等情话 115\n最诗意的谎言 116\n这事从来不公平 117\n她回到旧情人身边 118\n同居男友的用途 119\n你还是跟从前一样 120\n对你发脾气 122\n我要把你的东西摔烂 123\n有了××，还需要男人吗？ 124\n爱的双重标准 126\n爱他就要隐藏 127\n男朋友或丈夫 128\n长不大的男人 129\n情人的舌头 130\n好欺负的男人 131\n妒忌男人 132\n同情男人 134\n打开紧紧的瓶盖 135\n最勇敢的懦夫 137\n他们是人间绝配 138\n爱的脸 139\n同居女友的用途 140\n女人的大玩具 141\n我胖不胖？ 142\n成为很好抱的女人 143\n你爱谁，谁就是你的王子 145\n自我的延伸 146\n情场霸王 147\n富翁的穷亲戚 148\n美丽的误会 149\n有一点恨你 150\n不要让我知道 152\n第四章那个过程已经是礼物\n那个过程已经是礼物 155\n最好的时间 156\n爱跟你无聊 157\n我今天比较不爱你 158\n吵架吵赢的 160\n你是我的救赎 161\n有一种遗忘 162\n今宵离别后 164\n意料之外的时候 165\n旧男友的好处 166\n美貌的不幸 167\n男朋友是应声虫 168\n当你把质料放在第一位…… 169\n归宿是一个人的事 170\nK歌女王 172\n旧女友的好处 174\n失恋时不要做的十件事 175\n女人的三个阶段 178\n女人的养老金 179\n爱拼才会靓 180\n你的卵子要存起来吗？ 182\n心中的色相 183\n公主和丑小鸭 185\n丑得有味道 187\n时尚这东西 188\n美女 190\n痛快的逻辑 191\n灵魂的微醺 192\n吃一种心情 194\n失恋的迟早问题 195\n哪怕只是一点点 196\n谢谢你折磨我 198\n有型的讨厌 199\n不喜欢名单 200\n好话和真话 201\n不听的好 202\n心情不好就 203\n可不可以不失恋 204\n很想杀的人 206\n华丽的孤单 208\n最幽微的慰藉 209\n尽情吧！ 211\n放假天的容貌 212\n喝酒的女人 213\n当你抚爱回忆 214\n第五章绚烂的思念\n爱你，永远。 217\n收不起的思念 218\n在一起 219\n绚烂的思念 220\n要有多爱一个人 221\n你是我那宿世的病菌 222\n留鸟 223\n是占有吗？ 224\n一点绚丽的星芒 225\n一段爱情，两个人成长 227\n男同学的爱 228\n男人爱得比女人伟大 229\n做一个懒惰的恋人 230\n恋爱的一部分 231\n用智慧换爱情 234\n女人的花冠 235\n女人的幸福 236\n一生一爱 238\n睡前香 241\n真命天女 243\n留给女人的礼物 244\n我吃了你的巧克力 245\n和你一起睡 247\n曾经有多长 248\n纯粹的友谊 249\n如果可以倒带重来 250\n它曾为我明亮 251\n讨厌自己的时候 252\n如果没有了自己 253\n人生是可以没那么孤独的 254\n圣诞礼物的微笑 255\n单纯的泪水 256\n看似永恒 258\n美丽的颓废 259\n最后留下来的 261",
        pages: "261",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s6339166.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s6339166.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s6339166.jpg",
        },
        alt: "https://book.douban.com/subject/6392678/",
        id: "6392678",
        publisher: "北京十月文艺出版社",
        isbn10: "7530211005",
        isbn13: "9787530211007",
        title: "想念",
        url: "https://api.douban.com/v2/book/6392678",
        alt_title: "",
        author_intro:
          "你一定听过：“世上最遥远的距离，不是生与死的距离，不是天各一方，而是我就站在你面前，你却不知道我爱你。”\n这是张小娴的畅销作品《荷包里的单人床》里的金句。\n你也一定读过：“当你爱着一个人时，连折磨也是一种幸福”。这是引自用张小娴Channel A系列中《那年的梦想》的名句。尔后《那年的梦想》被改编成22集的都会时尚剧《如有月亮有眼睛》，成为她第一部搬上电视屏幕的作品。\n大学毕业后，为《明报》撰写专栏“娴言娴语”，94年因《明报》连载的《面包树上的女人》声名大噪，成为继琼瑶、亦舒后，两岸三地最受欢迎的爱情小说家。\n近年除了持续创作外，98年创办了香港第一本本土女性杂志Amy，担任总编辑，更设立了“Amy Blog”在线部落格，与读者长期保持互动。\n据统计，在香港700万人口中，每70人手里就有一本张小娴的小说。在新加坡、马来西亚等华人世界更拥有无数读者。\n爱情，是她永远的主题。在她笔下，爱，是人生永不落幕的演出。",
        summary:
          "《想念》内容简介：爱情，就是彼此永不止息的思念，是永远放不下的牵挂，是心甘情愿的牵绊。不管相隔多远，无法抑制的仍然是对彼此的想念，然而，乍然相逢的一刻，他翩翩的身影却在你眼里开出了翻翻腾腾的花……想念，在时光中穿梭，一丝一丝地把心抽紧，抽紧……原来，想念是糖，甜而忧伤。《想念》是张小娴的又一散文力作，隶属于“张小娴散文精选集”，《想念》中，小娴仍以细腻的笔触为您讲述思念的个中滋味……",
        series: {
          id: "592",
          title: "张小娴散文精选集",
        },
        price: "25.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 979,
          average: "7.4",
          min: 0,
        },
        subtitle: "从安妮宝贝到庆山 全新散文集",
        author: ["庆山"],
        pubdate: "2018-6",
        tags: [
          {
            count: 206,
            name: "庆山",
            title: "庆山",
          },
          {
            count: 189,
            name: "散文",
            title: "散文",
          },
          {
            count: 164,
            name: "安妮宝贝",
            title: "安妮宝贝",
          },
          {
            count: 143,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 67,
            name: "文学",
            title: "文学",
          },
          {
            count: 49,
            name: "自我提升",
            title: "自我提升",
          },
          {
            count: 42,
            name: "日记",
            title: "日记",
          },
          {
            count: 36,
            name: "阅读",
            title: "阅读",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s29794500.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "三月/ March\n我觉得做一个善良，沉着，真实的人，已经是很富有了。\n四月/ April\n心愿需要接受考验。真正面对时就需要抉择的胆识和接受的勇气。真的经历事情才会真正产生内在力量。\n五月/ May\n一天若是从美丽且良善的事情开始，生命会相对地充满美丽和良善。\n六月/ June\n在有限的时间里，把自己觉得有价值有意义的事情完成，这是对生命负责，不浪费时间。\n七月/ July\n只愿在时间中慢慢成为单纯的人。\n八月/ August\n善和大美像静水流深，终究涤荡人心。\n九月/ September\n不妨认真体会和感受所遇见的任何人。\n十月/ October\n即使不置身于幽深僻静的山谷，也能自留出一片清净天地。\n十一月/ November\n重要的是于这个世间曾经有所创造、分享、布施、给予。\n十二月/ December\n愿清凉自在，得到不匮竭的源泉、不熄灭的灯。",
        pages: "",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s29794500.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s29794500.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s29794500.jpg",
        },
        alt: "https://book.douban.com/subject/30217243/",
        id: "30217243",
        publisher: "北京联合出版公司",
        isbn10: "7559616216",
        isbn13: "9787559616210",
        title: "镜湖",
        url: "https://api.douban.com/v2/book/30217243",
        alt_title: "",
        author_intro:
          "庆山\n著名作家，曾用笔名安妮宝贝。\n著有作品《告别薇安》《八月未央》《彼岸花》《莲花》《素年锦时》《春宴》《月童度河》等。",
        summary:
          "《镜湖》是庆山十八年所著散文的精华集锦，其中有对美好事物直观而单纯的描写，亦有作者关于心性、情感、爱与美、艺术、旅行、创作、自性探索等各方面的深度思考和感悟。作品整体按照日记的形式进行编排，贯穿春、夏、秋、冬四个季节，所选散文篇幅或短或长，内容或浅或深，然每一篇皆带有庆山独特的文字质感和思考方式，皆是从作者内心自然流出的诚挚之作，读者可通过这些文字，体悟蕴藏于世间四季及人类灵魂深处的真意。",
        price: "48.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1305,
          average: "8.8",
          min: 0,
        },
        subtitle: "插图珍藏版",
        author: ["梁实秋"],
        pubdate: "2005-5",
        tags: [
          {
            count: 534,
            name: "梁实秋",
            title: "梁实秋",
          },
          {
            count: 400,
            name: "散文",
            title: "散文",
          },
          {
            count: 167,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 157,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 108,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 77,
            name: "中国",
            title: "中国",
          },
          {
            count: 76,
            name: "文学",
            title: "文学",
          },
          {
            count: 70,
            name: "中国现代文学",
            title: "中国现代文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s6906064.jpg",
        binding: "",
        translator: [],
        catalog: "",
        pages: "287",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s6906064.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s6906064.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s6906064.jpg",
        },
        alt: "https://book.douban.com/subject/1398461/",
        id: "1398461",
        publisher: "人民文学出版社",
        isbn10: "7020051472",
        isbn13: "9787020051472",
        title: "梁实秋散文",
        url: "https://api.douban.com/v2/book/1398461",
        alt_title: "",
        author_intro: "",
        summary:
          "《梁实秋散文》的作品内容丰富，题材各异，构思精巧，文笔精巧、语言幽默、内蕴深厚、风格恬淡，充分显示了梁实秋先生的文学功底及丰富的人生阅历，从一个侧面反映了作者的思想感情及创作风格。作为中国现代典型的自由知识分子，梁实秋“长日无俚，写作自遣，随想随写，不拘篇章”，留下了令后人叹为观止的《冬夜草儿评论》、《骂人的艺术》、《文学的纪律》、《偏见集》、《文艺批评论》、《雅舍小品》、《谈徐志摩》、《清华八年》、《秋室杂文》、《秋室杂忆》、《槐园梦忆》、《看云集》、《梁实秋札记》、《白猫王子及其他》、《雅舍谈吃》、《英国文学史》以及《莎士比亚全集》的中译本等等。他的大女儿梁文茜女士对我说：我父亲的作品在国内已有众多大大小小的版本，且长销不衰，其中《雅舍小品》在海内外也有300多个版本，这充分说明广大读者对他的作品的。",
        series: {
          id: "3096",
          title: "中华散文插图珍藏版",
        },
        price: "21.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 221,
          average: "6.8",
          min: 0,
        },
        subtitle: "余秋雨散文文史差错百例考辨",
        author: ["金文明"],
        pubdate: "2003-07",
        tags: [
          {
            count: 66,
            name: "余秋雨",
            title: "余秋雨",
          },
          {
            count: 42,
            name: "金文明",
            title: "金文明",
          },
          {
            count: 31,
            name: "书评",
            title: "书评",
          },
          {
            count: 24,
            name: "文学评论",
            title: "文学评论",
          },
          {
            count: 15,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 14,
            name: "评论",
            title: "评论",
          },
          {
            count: 14,
            name: "散文",
            title: "散文",
          },
          {
            count: 11,
            name: "历史",
            title: "历史",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1154985.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "前言：石破天惊逗秋雨\n一 人物史事考辨\n1 林逋究竟有没有妻儿？――关于“梅妻鹤子”传说的考辨\n2 此曲何止一脉传，嵇康死后未绝响――《广陵散》琴曲传承小考\n3 《岳阳楼记》传千古，写者不在岳阳楼\n4 是天缘巧合，还是牵强附会？……谈李白、苏轼和天柱山“奇缘”\n5 王安石特别能识别和防范“小人”吗？\n……\n二 时、地、书、名考辨\n1 “差不离”和“一刀切”――余秋雨散文人事纪年差错十例\n2 阴阳混杂，不伦不类――余秋雨散文月日记时差错举例\n3 朱熹之死不在1199年\n4 不合章法的古地今译\n5 沈万三生前有沈厅吗？\n……\n三 职官旧制考辨\n1 尚书吏部郎是“很大的官职”吗？\n2 没做皇帝怎能称“陛下”？\n3 关于中国历史纪年中的“年”和“载”\n四 文词音韵考辨\n1 献给文章高手的一束蔷薇――余秋雨散文词病八例\n2 责人的大师何以不严于律已？――余秋雨散文引书差错27例\n3 又碰到了一个“乎于”\n4 不明词语意义，怎能胡乱发挥？――“撑起炎洲”和“数中原”试释\n5 一味标新立异不等于创造――关于七例词语新用法的商榷\n……\n附录一：两个索引\n附录二：主要征引书目\n附录三：主要参考书目\n后记",
        pages: "292",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1154985.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1154985.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1154985.jpg",
        },
        alt: "https://book.douban.com/subject/1049059/",
        id: "1049059",
        publisher: "书海出版社",
        isbn10: "780550511X",
        isbn13: "9787805505114",
        title: "石破天惊逗秋雨",
        url: "https://api.douban.com/v2/book/1049059",
        alt_title: "",
        author_intro:
          "金文明\n金文明，编审。上海市人。1936年生。1966年毕业于上海师范学院中文系。先后在上海辞书出版社、双语大词典出版社、上海中医药大学出版社工作。曾任汉语大词典编委、主要撰稿人、第一编辑室副主任，上海辞书学会首届理事，上海中医药大学出版社总编辑。1996年被评为“上海十大藏书家”之一。三十余年来，曾应国内十多家出版社之约，审读文、史、哲、政、军以及宗教、文物、地志、音韵、训诂、古建筑、古服饰等社科类著作及学术刊物文稿约八千万字，为提高图书质且作出了一定的贡献。现任复旦大学出版社特约编审、《咬文嚼字》月刊编委。\n主要著作：\n《博异志、集界记注译》（12万字。1984年，浙江古籍出版社》\n《金石录校证》（28万字。1985年，上海书画出版社）\n《汉英综合辞典》（396万字。副主编。1991年，上海外语教育出版社）\n《中华古汉语字典》（192万字。主编。1997年，上海人民出版社）\n《语林拾得――咬文嚼字精选100篇》《30.8万字。2001年，复旦大学出版社）",
        summary:
          "《石破天惊逗秋雨:余秋雨散文文史差错百例考辨》的主要内容包括：唐代的吕洞宾，成了道家的始祖；明初的沈万三，住进了后人筑造的沈厅；未曾结婚的林和靖，有了妻子和孩子；感佩清帝的金圣叹，成了大明的忠臣…… 上述文史知识差错均出自著名散文大家余秋雨的文化散文中。类似这样的文史差错在余秋雨的《文化苦旅》《山居笔记》《霜冷长河》中竟有一百多处。《咬文嚼字》资深编委金文明先生，深感“石破天惊”，于是就有了这部书。",
        price: "18.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 949,
          average: "8.2",
          min: 0,
        },
        subtitle: "",
        author: ["朱自清"],
        pubdate: "2006-7",
        tags: [
          {
            count: 229,
            name: "散文",
            title: "散文",
          },
          {
            count: 208,
            name: "朱自清",
            title: "朱自清",
          },
          {
            count: 126,
            name: "朱自清散文集",
            title: "朱自清散文集",
          },
          {
            count: 116,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 76,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 70,
            name: "修养",
            title: "修养",
          },
          {
            count: 63,
            name: "文学",
            title: "文学",
          },
          {
            count: 61,
            name: "人文",
            title: "人文",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s10042853.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "376",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s10042853.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s10042853.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s10042853.jpg",
        },
        alt: "https://book.douban.com/subject/1826007/",
        id: "1826007",
        publisher: "西苑出版社",
        isbn10: "7802101344",
        isbn13: "9787802101340",
        title: "朱自清散文集",
        url: "https://api.douban.com/v2/book/1826007",
        alt_title: "",
        author_intro: "",
        summary:
          "作为一位散文大家，朱自清以他独特的美文艺术风格，为中国现代散文增添了瑰丽的色彩，为建立中国现代散文全新的审美特征，树立了“白话美文的模范”。朱自清是一位文化多面手，他给后人留下了近200万字的文学遗产。然而，他对中国现代新文学的突出贡献，无疑则是他所擅长的散文小品。他继承了中国古典文学的优秀传统，在中西文化交流的大背景之下，创造了具有中国民族特色的散文体制和风格。",
        price: "19.8",
      },
      {
        rating: {
          max: 10,
          numRaters: 1826,
          average: "8.6",
          min: 0,
        },
        subtitle: "兰波散文诗全集",
        author: ["(法)兰波"],
        pubdate: "2012-5-1",
        tags: [
          {
            count: 821,
            name: "兰波",
            title: "兰波",
          },
          {
            count: 615,
            name: "诗歌",
            title: "诗歌",
          },
          {
            count: 362,
            name: "法国文学",
            title: "法国文学",
          },
          {
            count: 356,
            name: "法国",
            title: "法国",
          },
          {
            count: 273,
            name: "王道乾",
            title: "王道乾",
          },
          {
            count: 201,
            name: "诗",
            title: "诗",
          },
          {
            count: 197,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 142,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s10299680.jpg",
        binding: "精装",
        translator: ["王道乾"],
        catalog:
          "译者前言\n地狱一季\n序诗\n坏血统\n地狱之夜\n谵妄Ⅰ 疯狂的童贞女/下地狱的丈夫\n谵妄Ⅱ 言语炼金术\n不可能\n闪光\n清晨\n永别\n《地狱一季》题解\n彩画集\n洪水之后\n童年\n故事\n滑稽表演\n古意\nBEING BEAUTEOUS\n人生\n出行\n王权\n致某一种理\n沉醉的上午\n片语\n工人\n桥\n城\n轮迹\n城市\n流落\n城市\n守夜\n神秘\n黎明\n花卉\n通俗小夜曲\n海\n冬天的节日\n焦虑\n大都会\n野蛮\n大拍卖\nFAIRY\n战争\n青春\n海角\n演剧\n历史的黄昏\n波顿\nH\n动荡\n虔敬之心\n民主\n守护神\n《彩画集》题解\n片断与残稿\n爱的沙漠\n《爱的沙漠》题解\n福音散文\n《福音散文》题解\n“通灵者”书信（二封）\n兰波致乔治·伊藏巴尔\n兰波致保罗·德莫尼\n《“通灵者”书信》题解\n附录\n评论片断\n关于《彩画集》\n阿尔蒂尔·兰波年表\n我所认识的王道乾（代后记）",
        ebook_url: "https://read.douban.com/ebook/30476412/",
        pages: "239",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s10299680.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s10299680.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s10299680.jpg",
        },
        alt: "https://book.douban.com/subject/10539804/",
        id: "10539804",
        publisher: "上海译文出版社",
        isbn10: "7532757668",
        isbn13: "9787532757664",
        title: "彩画集",
        url: "https://api.douban.com/v2/book/10539804",
        alt_title: "",
        author_intro:
          "兰波（Arthur Rimbaud,1854—1891），法国天才诗人诗人，象征主义大师，超现实主义诗歌的鼻祖。他用谜一般的诗篇和富有传奇色彩的一生吸引了众多的读者，成为法国文学史上最引人注目的诗人之一。",
        summary:
          "精神上的搏斗和人与人之间的战斗一样激烈残酷。\n——兰波《地狱一季》\n他（兰波）是众多流派之父，不是任何流派的亲人。\n——亨利•米勒\n我没有看到写（例如）《地狱一季》的困难，一切都是直接表现，喷涌迸发，烈度。\n词语中的烈度对于我是无谓的，对于我并不提供什么。\n在《彩画集》中的情况却相反，含有极高价值的事物不止于一个方面\n——保罗•瓦莱里\n从十六岁后直到生命最后一息，兰波似乎始终处于一种躁动不安、焦灼求索的状态。他为什么放弃写传统形式的诗作，转而致力于散文诗？这显然与波特莱尔发表著名的散文诗之后，巴黎诗风的变化有关。\n兰波认为，诗人必须成为“通灵者”、“无比崇高的博学的科学家”，“通过长期、广泛和经过推理思考的过程，打乱所有的感觉意识”，通过所谓“言语的炼金术”，寻求一种“综合了芳香、音响、色彩，概括一切，可以把思想与思想连结起来，又引出思想”、“使心灵与心灵呼应相通”的语言，以求达到“不可知”。这“不可知”并非某种形而上的客体，有时与他诗中所说的未来的“社会之爱”有关，又或者是某种理想。以上种种，可以说就是兰波的象征主义。\n本书收入法国天才诗人、象征主义大师兰波所有的散文诗作品，包括《地狱一季》《彩画集》，并附有著名的《“通灵者”书信》二封以及法国结构主义理论家茨维坦•托多罗夫等人的评论。《地狱一季》和《彩画集》虽形式独特，含义诡谲难解，却展现诗人在巴黎诗风转变后，所创造出的新诗学与对创作的探索。作品流露出十九世纪末的法国生活风情，与彼时之文化传统相呼应，字里行间回响着诗人对自我与世间的挑战。",
        ebook_price: "14.99",
        series: {
          id: "1831",
          title: "译文经典（精装本）",
        },
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 97,
          average: "9.2",
          min: 0,
        },
        subtitle: "中国现代散文精品文库",
        author: ["鲁迅 周作人 胡适 许地山 林语堂等"],
        pubdate: "1995年",
        tags: [
          {
            count: 55,
            name: "鲁迅",
            title: "鲁迅",
          },
          {
            count: 31,
            name: "中国现当代文学",
            title: "中国现当代文学",
          },
          {
            count: 23,
            name: "散文",
            title: "散文",
          },
          {
            count: 19,
            name: "現代文學",
            title: "現代文學",
          },
          {
            count: 17,
            name: "名家",
            title: "名家",
          },
          {
            count: 14,
            name: "人文",
            title: "人文",
          },
          {
            count: 14,
            name: "中国",
            title: "中国",
          },
          {
            count: 11,
            name: "散文随笔",
            title: "散文随笔",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s24577269.jpg",
        binding: "",
        translator: [],
        catalog: "",
        pages: "404页",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s24577269.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s24577269.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s24577269.jpg",
        },
        alt: "https://book.douban.com/subject/3320120/",
        id: "3320120",
        publisher: "中国社会科学出版社",
        isbn10: "7500416997",
        isbn13: "9787500416999",
        title: "灯下漫笔",
        url: "https://api.douban.com/v2/book/3320120",
        alt_title: "",
        author_intro: "",
        summary: "鲁迅、周作人、胡适、许地山、林语堂等人的散文。",
        series: {
          id: "8035",
          title: "中国现代散文精品文库",
        },
        price: "16.50",
      },
      {
        rating: {
          max: 10,
          numRaters: 683,
          average: "9.2",
          min: 0,
        },
        subtitle: "",
        author: ["张培基"],
        pubdate: "2007-9",
        tags: [
          {
            count: 329,
            name: "翻译",
            title: "翻译",
          },
          {
            count: 234,
            name: "张培基",
            title: "张培基",
          },
          {
            count: 177,
            name: "英语",
            title: "英语",
          },
          {
            count: 140,
            name: "散文翻译",
            title: "散文翻译",
          },
          {
            count: 101,
            name: "英语学习",
            title: "英语学习",
          },
          {
            count: 86,
            name: "英译中国现代散文选1",
            title: "英译中国现代散文选1",
          },
          {
            count: 81,
            name: "文学",
            title: "文学",
          },
          {
            count: 58,
            name: "语言",
            title: "语言",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s21874442.jpg",
        binding: "",
        translator: [],
        catalog:
          '艰难的国运与雄健的国民   李大钊national crisis vs heroic nation    li dazhao螃蟹    鲁迅the crab   lu xun落花生   许地山peanuts    xu dishan差不多先生传   胡适mr.about-the-same    hu shi不要抛弃学问    胡适never give up the pursuit of learning     hu shi我之于书      夏丐尊books and i    xia mianzun中年人的寂寞    夏丐尊mid-life loneliness     xia mianzun我坐了木船       叶圣陶i took a wooden boat      ye shengtao背影     朱自清the sight of father"s back      zhu ziqing匆匆    朱自清transient days     zhu ziqing木匠老陈      巴金carpenter lao chen     ba jin朋友      巴金friends     ba jin梦    巴金dreams    ba jin《激流》总序     巴金preface to the torrent trilogy     ba jin做一个战士     巴金be a fighter     ba jin笑    冰心smile    bing xin雨雪时候的星辰     冰心stars on a snowy night      bing xin我的父母之乡      冰心the land of my ancestors      bing xin祖父和灯火管制     冰心grandpa and nightly blackout     bing xin话说短文     冰心a chat about short essays    bing xin路畔的蔷薇      郭沫若wayside roses     guo moruo夕暮    郭沫若dusk    guo moruo白发    郭沫若the white hair   guo moruo水墨画     郭沫若an inkwash painting    guo moruo墓     郭沫若the grave     lao she想北平     老舍fond memories of peiping     lao she养花     老舍on growing flowers     lao she白杨礼赞      茅盾tribute to white poplar     mao dun故都的秋   郁达夫autumn in peioing     yu dafu谈结婚     郁夫达a chat about marriage    yu dafu永远的憧憬和追求     萧红my everlasting dream and pursuit     xiao hong当铺      萧红the pawnshop     xiao hong野草      夏衍wild grass      xia yan恋爱不是游戏       庐隐love is not game    lu yin我若为王    聂绀弩if i were king     nie gannu清贫     方志敏honest poverty      fang zhimin离别      郑振铎parting sorrows     zheng zhenduo时间即生命     梁实秋time is life     liang shiqiu学问与趣味     梁实秋learning and personal inclination    liang shiqiu枣核     萧乾date stones     xiao qian黎明前的北京     季羡林predawn beijing     ji xianlin文学批评无用论     季羡林on the futility of literary criticism       ji xianlin父亲    鲁彦father      lu yan母亲的回忆     朱德loving memories of mother      zhu de巷       柯灵the lane      ke ling第二次考试        何为the second test      he wei下蛋·唱鸡及其它     谢逸egglaying,cackling,etc.    xie yi快乐的死亡      陆文夫happy death       lu wenfu耳闻不如一见？     顾均正is the ear less reliable than the eye?      gu junzheng幼年鲁迅       王士菁when lu xun was a child       wang shijing为奴隶的母亲      柔石a slave mother      rou shi至蒋经国信      廖承志',
        pages: "377",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s21874442.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s21874442.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s21874442.jpg",
        },
        alt: "https://book.douban.com/subject/2316607/",
        id: "2316607",
        publisher: "上海外语教育出版社",
        isbn10: "7544604810",
        isbn13: "9787544604819",
        title: "英译中国现代散文选1",
        url: "https://api.douban.com/v2/book/2316607",
        alt_title: "",
        author_intro: "",
        summary:
          "《英译中国现代散文选(1)》精选中国现代散文名篇五十二篇，原著均出自五四以来一些名家之手。书中各篇均为汉英对照，并附详细注释及对原作者的一些必要的简介。对翻译过程中可能遇到的问题，如语言难点、翻译方法、历史背景等，编译者也作了一些分析讲解。",
        series: {
          id: "2318",
          title: "外教社中国文化汉外对照丛书（第二辑）",
        },
        price: "38.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 7,
          average: "0.0",
          min: 0,
        },
        subtitle: "",
        author: ["柳斌"],
        pubdate: "2001-8",
        tags: [
          {
            count: 1,
            name: "纸书",
            title: "纸书",
          },
          {
            count: 1,
            name: "童年",
            title: "童年",
          },
          {
            count: 1,
            name: "文学",
            title: "文学",
          },
          {
            count: 1,
            name: "散文",
            title: "散文",
          },
          {
            count: 1,
            name: "合集",
            title: "合集",
          },
          {
            count: 1,
            name: "<中>",
            title: "<中>",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s9151076.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "189",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s9151076.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s9151076.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s9151076.jpg",
        },
        alt: "https://book.douban.com/subject/1449705/",
        id: "1449705",
        publisher: "人民文学",
        isbn10: "702003506X",
        isbn13: "9787020035069",
        title: "散文",
        url: "https://api.douban.com/v2/book/1449705",
        alt_title: "",
        author_intro: "",
        summary:
          "人民文学出版社和教育部基础教育课程教材发展中心正是从上述原则出发，组织一批专家为小学生编选了这套“小学生课外精读”丛书。丛书精选一批短小精悍、通俗易懂、适合儿童阅读的名家名作，可以帮助学生了解古今中外的优秀文化传统，开阔视野，培养多方面的兴趣。丛书的编选努力体现新的教改精神和教改方向，增加语文实践机会，全面提高学生的综合素质和创新力。我希望，这套丛书能为今天的孩子生、未来的主人提供一份丰富的精神食粮，成为他们的良师益友。\n    本书是小学生课外精读丛书中的散文分册。书中收入了我国历代具有代表性的散文数十篇，每篇散文均有简洁明了的作者介绍，详尽的注释以及精辟的解读。\n    本书内容丰富，图文并茂，篇幅短小精悍，通俗易懂，具有一定的知识性及较强的可读性，可以帮助学生了解古今中外的优秀文化传统，开阔视野，培养多方面的兴趣，全面提高综合素质和创新能力。",
        price: "9.0",
      },
      {
        rating: {
          max: 10,
          numRaters: 3816,
          average: "8.0",
          min: 0,
        },
        subtitle: "张小娴散文精选集",
        author: ["张小娴"],
        pubdate: "2008-3",
        tags: [
          {
            count: 1154,
            name: "张小娴",
            title: "张小娴",
          },
          {
            count: 570,
            name: "散文",
            title: "散文",
          },
          {
            count: 344,
            name: "爱上了你",
            title: "爱上了你",
          },
          {
            count: 280,
            name: "爱情",
            title: "爱情",
          },
          {
            count: 125,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 103,
            name: "张小娴散文精选集：爱上了你",
            title: "张小娴散文精选集：爱上了你",
          },
          {
            count: 94,
            name: "张小娴散文",
            title: "张小娴散文",
          },
          {
            count: 79,
            name: "香港",
            title: "香港",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s3054276.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "第一章 可爱与可恨\n她什么时候觉得对不起家里\n女人和她妈妈\n比任何一个男人更深\n不要寻觅他的过去\n优雅的追求\n我担心你会死\n舍就是取\n一个钱币的两面\n一厘米一厘米地介意\n他要你的电话号码\n女人的弱点\n赐他甘霖雨露\n女人的矛盾\n他曾经给我许多希望\n二合一\n没钱？没工作？没男友？没关系！\n补鞋匠的夏天\n“不”和“是”\n吻无能\n湿湿的舌头\n忘了才可惜\n情史数臭\n酸姜的眼泪\n辜负了旧情人\n最难忘的旧情人\n我应该提起你吗？\n残忍的希望\n光阴之于女人\n忘记了自己的衰相\n多一点，多一点\n穿大V领低胸上衣的旧情人\n钻石是男人的肾石\n星星是穷人的钻石\n这不是暗示\n我想你爱上我\n但愿我比现在年轻\n男人为什么害怕承诺\n可爱与可恨\n他会变成一个怎样的男人？\n我要成为你书里的男人\n天上的星星有几多？\n月台上的三次偶遇\n男人为什么有那么多压力？\n男人在早餐说的话\n对不起\n老婆跟了人\n男人三十五\n毁约的男人\n没有兑现的承诺\n三十年风流\n下半身是情人\n有时笨，有时不笨\n他可以追到你\n男人的世界\n第二章 我不会爱上你\n两个身材不好的人\n就在一瞬间\n不敢相信\n不是恨晚，便是恨早\n有情有债\n包底\n爱情Bodyguard\n如同陌路人\n转机站\n暗恋对象的死亡\n两个女孩子流泪\n心碎先生的选择\n是震撼，也是无力感\n期待，微笑，然后哭泣\n失约和等待\n幸福总被思念所淹没\n爱情挂号\n他们只能做奸夫\n就当是修辞学吧\n究竟爱到什么程度？\n欺骗女人的高手\n贫穷的赌徒\n我永远不要让你知道\n跟三十岁恋爱，被四十岁爱\n守护天使\n我这样去爱有错吗？\n伤人至深的武功\n因为没时间了\n伤心人坐的士\n爱情八件事\n情是永远IN\n不要有那种神情\n愿意冒死一试的病毒\n都是不怕死的\n我不会等到那一天\n与次选漫游\n如果时间变换\nSooooooooooooo\n高傲地发霉\n最难的事\n你爱我百分之几？\n价无情，值有情\n不要看着我换衣服\n照顾与“照住”\n提早离场\n没资格结婚\n到底有还无\n我不想像你这样\n情话转播站\n第三章 你就相信吧\n过客\n永远也不要回头\n突然愿意结婚\n没有回报的等待\n你会为我死吗？\n螺丝钉的承诺\n街头冷战\n不如，我们不要再吵架\n冷战必须结束\n不如重新结束\n最阴毒的陷害\n为了别人的信任\n我没嫌弃你\n当女朋友约了旧男朋友\n填补别人空档的你\n你就相信吧\n怎见得你爱我？\n接吻的处境\n没有我你闷不闷\n昨天晚上找不到他\n三十一岁和二十三岁\n再过一万年之后\n星期五晚的月光\n没有你，我也可以过日子\n到了夏天我就离开\n忽然一走\n他不会永远俯伏在你跟前\n别这样，会让人看到的\n在三十岁前把他换掉\n他才不会这样对我\n以青春换明天\n为了脱离某种生活\n哭泣的踏板\n谁是最后一个？\n不要你怀念她\n爱上两个脑袋和身体\n一支永远不会完的歌\n把你捧到天上的男人\n如果她选择向你说谎\n不要代替任何人\n没有声音的日子\n大家的那个\n扫走肩膀上的灰尘\n没睡过的旧情人\n不是带挈就是负累\n爱火，未许重燃\n我不来，也不走\n了解话的含义\n我待你很好\n三十四天\n累人的幻想\n第四章 爱的游戏\n逝去的诺言\n忏悔是残忍的\n相遇不是巧合\n最终，你想得到什么？\n一推、二托、三安定\n假装看不见你\n是时候做点善事了\n无法沟通的天空\n太老而又太年轻\n世上没有免费汤水\n冷漠的人清醒\n不过是一块跳板\n以改变换改变\n无法不说再见\n被担架床抬回去\n小车厘子的“怀念”\n最后一集\n某年某天某地\n流最多眼泪的一句话\n如果这是情诗\n一生最重要的两个字\n前世\n光源\n为他留一盏暖的灯\n我微笑，是为了你微笑\n得到一个人\n失去时，拥有时\n若即若离\n鸡鲍翅还会远吗？\n把女朋友赶走\n后悔和你睡\n也是一种祝福\n啊！不要长大\n你是聪明的吗？\n他不陪你吃饭？\n永远的地址\n检查他的浴室和厨房\n检查他的书房和客厅\n微妙的巧合\n年龄的秘密\n你无辜的眼睛\n空眼与淫眼\n爱的游戏\nWhy you?Why me?Why not?\n第五章 爱情权力榜\n你还记得他的生日吗？\n盟约\n醒悟\n在这个细小的都市里\n离开女人的手法\n句号，不是由你来画上的\nCall Waiting情人\n他思念的，只是……\n你一定是对的\n不变心的情人\n书和人的回甘\n一辈子饮恨\n他有没有伤害了你？\n粗糙的告别\n我的电话号码还是跟以前一样\n不是怎样，是必须\n上面还是下面\n十四年的耽误\n失意比失恋严重\n复仇的小丑太苍老\n七天的爱情\n过去了，都过去了\n我们变调了\n不想分手的理由\n不要再投资下去了\n爱情勤工奖\n吻一个你不爱的人\n他能抱一个他不爱的人\n再也无觅处\n不要相信有王子\n我们的单车\n想要去睡觉了\n相同的时光\n你曾是我的全部\n除你以外的快乐\n如果没有你\n爱情权力榜\n情人是一种叛逆\n没有嫁给你\n爱情的风光\n万物有时，爱情也有时\n不如暂停一下\n爱情，本来就是邪教\n最伟大的爱原来是——\n我最亲爱的\n一个人的味道\n深情的拒绝\n不变，也是一种能耐\n美好的意外\n等侯适当的时光再遇",
        pages: "268",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s3054276.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s3054276.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s3054276.jpg",
        },
        alt: "https://book.douban.com/subject/3045175/",
        id: "3045175",
        publisher: "北京十月文艺出版社",
        isbn10: "7530209140",
        isbn13: "9787530209141",
        title: "爱上了你",
        url: "https://api.douban.com/v2/book/3045175",
        alt_title: "",
        author_intro:
          "张小娴，香港女作家。1995年推出第一部长篇小说《面包树上的女人》而走红文坛，继亦舒之后，成为香港最受欢迎的言情小说家。她的作品善于描写都市的男欢女爱，深受年轻读者的欢迎，往往新作一出版就会登上畅销榜。",
        summary:
          "我们都曾爱过或被爱过，不管两个人之间后来变成怎样的关系，我们永远会怀念爱上对方的那个瞬间。在悠长的岁月中，在奔流不息的回忆里，那短短的瞬间，我们曾经跟人生的奥秘那么接近。\n爱上了你，身边的世界骤然变得寂静了，就在那短暂的片刻，我在镜花水月的生命中抓住了幸福。只要还跟你一起，就连思念都是甜蜜的折磨。",
        series: {
          id: "592",
          title: "张小娴散文精选集",
        },
        price: "25.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 782,
          average: "8.6",
          min: 0,
        },
        subtitle: "丰子恺散文漫画精选集",
        author: ["丰子恺"],
        pubdate: "2017-7-6",
        tags: [
          {
            count: 987,
            name: "丰子恺",
            title: "丰子恺",
          },
          {
            count: 527,
            name: "此生多珍重",
            title: "此生多珍重",
          },
          {
            count: 423,
            name: "散文",
            title: "散文",
          },
          {
            count: 381,
            name: "我想读这本书",
            title: "我想读这本书",
          },
          {
            count: 317,
            name: "漫画",
            title: "漫画",
          },
          {
            count: 257,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 222,
            name: "文学",
            title: "文学",
          },
          {
            count: 194,
            name: "经典",
            title: "经典",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s29483420.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "第一部分 此生多珍重\n送阿宝出黄金时代\n阿难\n儿女\n作父亲\n中举人\n静观人生\n爱子之心\n学画回忆\n旧话\n吃酒\n第二部分 故人依旧\n怀李叔同先生\n悼夏丏尊先生\n访梅兰芳\n忆弟\n菊林\n阿庆\n第三部分 一花一世界\n梧桐树\n车厢社会\n野外理发师\n敬礼\n西湖春游\n黄山松\n暂时脱离尘世\n塘栖\n纳凉闲话\n第四部分 艺术人生\n我的苦学经验\n我的漫画\n艺术三昧\n自然\n剪网\n《子恺漫画选》自序\n图画与人生\n第五部分 世间真相\n两个“？”\n大人\n无常之恸\n荣辱\n宴会之苦\n旧上海\n元帅菩萨\n清明",
        pages: "256",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s29483420.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s29483420.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s29483420.jpg",
        },
        alt: "https://book.douban.com/subject/27077687/",
        id: "27077687",
        publisher: "天地出版社",
        isbn10: "7545528220",
        isbn13: "9787545528220",
        title: "此生多珍重",
        url: "https://api.douban.com/v2/book/27077687",
        alt_title: "",
        author_intro:
          "丰子恺，画家、散文家，卓有成就的文艺大师。师从弘一法师，学贯中西。朱自清、郁达夫、巴金、叶圣陶、林清玄，对其文章和漫画赞誉有加。日本汉学家吉川幸次郎则说，丰子恺是最中国的中国人。他的散文兼有平易纯朴之风、宽仁隽永之意和童真天然之趣，是现代文学中备受推崇的佳品，多次被选入学生教材，作语文教育典范。漫画幽默风趣，流传广泛，深受人们的喜爱，争相收藏。",
        summary:
          "本书就是关于文艺大师丰子恺的经典散文的漫画本，将他的散文和漫画一并呈现给读者，会使读者大呼过瘾，而且本书是经其女儿丰一吟授权的版本，全面收录了《弘一大师》《送阿宝告别孩提时代》等40篇经典佳作，一本书可以阅尽丰子恺的散文精华。书中的漫画都是原版复制，典雅可爱，且采用特种纸印刷，色彩雅致，触感温润，可堪赏玩，体现了一种有趣、 有心、有情的人生哲学。在心情低谷时翻看，能给人以温暖；在处于顺境时闲读，又像一阵清风，能使我们头脑保持清醒。",
        series: {
          id: "43797",
          title: "丰子恺散文漫画精品集“珍重此生”系列",
        },
        price: "49.80",
      },
      {
        rating: {
          max: 10,
          numRaters: 748,
          average: "7.8",
          min: 0,
        },
        subtitle: "插图珍藏版",
        author: ["余秋雨"],
        pubdate: "2005-05",
        tags: [
          {
            count: 298,
            name: "余秋雨",
            title: "余秋雨",
          },
          {
            count: 235,
            name: "散文",
            title: "散文",
          },
          {
            count: 106,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 96,
            name: "散文和随笔",
            title: "散文和随笔",
          },
          {
            count: 80,
            name: "文化",
            title: "文化",
          },
          {
            count: 61,
            name: "思考",
            title: "思考",
          },
          {
            count: 53,
            name: "美的享受",
            title: "美的享受",
          },
          {
            count: 47,
            name: "当代",
            title: "当代",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1440928.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "一个王朝的背景\n抱愧山西\n风雨天一阁\n苏东坡突围\n历史的暗角\n遥远的绝响\n道士塔\n阳关雪\n沙原隐泉\n青云谱随想\n白发苏州\n江南小镇\n上海人\n这里真安静\n废墟\n信客\n酒公墓\n老屋窗口\n祭侄帖\n叔叔走了\n那一叠纸条\n借往何处",
        pages: "280",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1440928.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1440928.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1440928.jpg",
        },
        alt: "https://book.douban.com/subject/1398460/",
        id: "1398460",
        publisher: "人民文学出版社",
        isbn10: "7020052010",
        isbn13: "9787020052011",
        title: "余秋雨散文",
        url: "https://api.douban.com/v2/book/1398460",
        alt_title: "",
        author_intro:
          "余秋雨，一九四六年生，浙江余姚人。在家乡读完小学后到上海读中学和大学，大学毕业后留校任教至今。在海内外出版过史论专著多部，曾被授予“国家级突出贡献专家”、“上海市十大高教精英”等荣誉称号。做过几年学院院长，辞职后潜心写作，在繁多的头衔中比较重视上海市写作学会一职，因为这个学会由全上海各大学的写作教授们组成，专门研究“写作”究竟是怎么回事。近年来在教学和学术研究之余所著散文集《文化苦旅》先后获上海市文学艺术优秀成果奖、台湾联合报读书最佳书奖、金石堂最具影响力的书奖、上海市出版一等奖等。",
        summary:
          "余秋雨散文早有“文化散文”之代表的定论，其“强烈的理想主义色彩，追求理想人格、美的情怀包括自然美、精神美、艺术美，在批判关怀知识阶层文化人格中心意为出来”。龙去八人中惟有其文集为自选，也许这更能反映作为“八大家”之作品的特质。\n余秋雨的散文素以文采飞扬、思维敏捷、知识丰厚、见解独到而备受万千读者喜爱。他的历史散文更是别具一格，见常人所未见，思常人所未思，善于在美妙的文字中一步步将读者带入文化意识的河流，启迪哲思，引发情致，具有极高的审美价值和史学意义上的文化价值。散文写成美文不易，写出点历史文化意味更难。余秋雨的历史散文，也许可以让人二者兼得。",
        series: {
          id: "3096",
          title: "中华散文插图珍藏版",
        },
        price: "21.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 504,
          average: "7.2",
          min: 0,
        },
        subtitle: "蔡澜散文集（修订版）",
        author: ["蔡澜"],
        pubdate: "2015-8",
        tags: [
          {
            count: 140,
            name: "蔡澜",
            title: "蔡澜",
          },
          {
            count: 78,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 46,
            name: "香港文学",
            title: "香港文学",
          },
          {
            count: 44,
            name: "散文",
            title: "散文",
          },
          {
            count: 41,
            name: "香港",
            title: "香港",
          },
          {
            count: 35,
            name: "好玩",
            title: "好玩",
          },
          {
            count: 26,
            name: "文学",
            title: "文学",
          },
          {
            count: 23,
            name: "散文随笔",
            title: "散文随笔",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s28281824.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "序 （金 庸 ）\n金 庸\n稀奇古怪\n和查先生吃饭\n何铁手\n叽里咕噜\n刁钻\n金庸茶馆 .\n新旧版本\n学术研讨会\n射雕英雄宴\n金语录\n小金庸迷\n亦 舒\n转播站\n情歌\n围棋\n八\n海盗\n澳洲笑话\n三洲书\n文章\n僵\n乐土\n产品\n请安记\n焚香\n汤\n忙\n宠\n儿女\n喝酒\n冧老婆大王\n鼻祖\n喂鱼的故事\n姘头\n香港樱花\n黄 霑\n黄霑再婚记\n黄霑的故事\n黄霑去非洲\n交友之道\n古 龙\n谁来跟我干杯\n古龙和吃\n黄永玉\n万荷堂堂主\n文抄公\n黄永玉画展\n冯康侯\n彼岸\n毛笔和筷子\n同学\n吃鸡蛋\n篮球\n眼高手低\n演员\n印泥\n印稿\n精雕细凿\n菜篮\n何尝不可\n羞耻\n小印\n假如\n汉印\n勉励\n有情无情\n转笔\n养志\n不墨守\n小学\n满足\n冷汗\n老朋友\n最后\n丁雄泉\n不做大师\n上课\n朋友\n天上交响乐\n张生记\n重访张生记\n花钱\n三只猫\n门\n道理\n快乐\n三棵树\n感觉\n蔡志忠\n拜访蔡志忠\n禅机 .\n黄春明\n黄春明\n牵猪哥\n甘健成\n悼甘健成兄\n烧鹅先生\n张 彻\n悼张彻\n张彻的葬礼\n成 龙\n成龙\n成龙的日本影迷\n非洲狩猎记\n自信\n洪金宝\n契妈\n肿了三天\n传统\n洪金宝餐厅\n曾 江\n七老八老\n曾江八十大寿记\n诸 友\n胡金铨\n大岛渚\n吴宇森\n论李安\n狄龙兄\n雪山外景记\n谈论摄影\n周华健\n卜少夫先生\n曾希邦\n何藩\n苏美璐\n只愿无事常相见\n方块佳人",
        pages: "259",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s28281824.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s28281824.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s28281824.jpg",
        },
        alt: "https://book.douban.com/subject/26595343/",
        id: "26595343",
        publisher: "广东人民出版社",
        isbn10: "7218103219",
        isbn13: "9787218103211",
        title: "江湖老友",
        url: "https://api.douban.com/v2/book/26595343",
        alt_title: "",
        author_intro:
          "蔡澜，1941年8月18日出生于新加坡，祖籍广东潮州，电影监制、美食家、专栏作家、电影节目主持人、商人。与金庸、黄沾、倪匡并称为“香港四大才子”，有“食神”美称。\n蔡澜通晓潮州话、英语、粤语、普通话、日语、法语。是世界华人健康饮食协会荣誉主席。中国美食纪录片《舌尖上 的中国》曾特邀蔡澜作为节目总顾。",
        summary:
          "《江湖老友》是著名作家蔡澜的散文结集。本书精选了蔡澜写文化名人的文章，所写者是耳熟能详的名家，如金庸、黄霑、黄永玉、丁雄泉、张彻、胡金铨、古龙、成龙、吴宇森等。作者妙笔生花，对这些人物的描写，妙趣横生，具有很高的文学价值。蔡澜已在国内出版了近百本简体字版的著作，本书选取的角度比较独特，从蔡澜的文章中精选了写人物的文章，其中不少文章是首次结集出版。",
        series: {
          id: "31492",
          title: "世界华文大家经典",
        },
        price: "49.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 139,
          average: "9.1",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993年1月",
        tags: [
          {
            count: 48,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 25,
            name: "散文",
            title: "散文",
          },
          {
            count: 9,
            name: "怀旧",
            title: "怀旧",
          },
          {
            count: 9,
            name: "往事",
            title: "往事",
          },
          {
            count: 9,
            name: "倾城",
            title: "倾城",
          },
          {
            count: 9,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 8,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 6,
            name: "2008以前",
            title: "2008以前",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s3213409.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "186",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s3213409.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s3213409.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s3213409.jpg",
        },
        alt: "https://book.douban.com/subject/3172425/",
        id: "3172425",
        publisher: "陕西旅游出版社",
        isbn10: "7541806579",
        isbn13: "9787541806575",
        title: "倾城",
        url: "https://api.douban.com/v2/book/3172425",
        alt_title: "",
        author_intro: "",
        summary: "",
        series: {
          id: "14322",
          title: "三毛作品集",
        },
        price: "4.30",
      },
      {
        rating: {
          max: 10,
          numRaters: 103,
          average: "9.4",
          min: 0,
        },
        subtitle: "英汉对照：翻译专业名著名译研读本",
        author: ["杨自伍"],
        pubdate: "2010年03月",
        tags: [
          {
            count: 86,
            name: "翻译",
            title: "翻译",
          },
          {
            count: 59,
            name: "散文",
            title: "散文",
          },
          {
            count: 52,
            name: "英国文学",
            title: "英国文学",
          },
          {
            count: 52,
            name: "翻译研读本",
            title: "翻译研读本",
          },
          {
            count: 49,
            name: "英语",
            title: "英语",
          },
          {
            count: 46,
            name: "英文散文",
            title: "英文散文",
          },
          {
            count: 36,
            name: "杨自伍",
            title: "杨自伍",
          },
          {
            count: 26,
            name: "英文",
            title: "英文",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s4348397.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "465 页",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s4348397.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s4348397.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s4348397.jpg",
        },
        alt: "https://book.douban.com/subject/4733799/",
        id: "4733799",
        publisher: "上海外语教育出版社",
        isbn10: "7544615936",
        isbn13: "9787544615938",
        title: "英国散文名篇欣赏(第2版)",
        url: "https://api.douban.com/v2/book/4733799",
        alt_title: "",
        author_intro:
          "杨自伍，1955年生，祖籍安徽怀宁，上海外语教育出版社英语编辑，翻译家。著名翻译家杨岂深教授之子。\n从事文学和学术翻译二十余年。1992年出版艾·阿·理查兹《文学批评原理》，此书为20世纪欧美文论丛书之一，为国家社科项目。1997年至2000年间主编《英国散文名篇欣赏》和《英国文化选本》及《美国文化选本》（共4册）。2004年出版外国经典散文丛书之一《英国经典散文》。1997年至1999年出版《英语诵读菁华》（5册）。1993年由台湾联经出版社出版译著《傲慢与偏见续集》。1986－1997年由上海译文社出版其译著《近代文学批评史》前四卷，2002年至2006年，上海译文社又陆续出版了其翻译的《近代文学批评史》后四卷。经过三年多的修订，2009年金秋，《近代文学批评史》(全八卷修订本)作为世纪出版集团国庆六十周年的献礼书，由上海译文出版社隆重推出。",
        summary:
          "本读本将原文与译文对照排版，方便读者阅读揣摩。译文部分穿插名家对译文的点评。点评从词、句的翻译方法、翻译效果、译语特点、译者用意、译者风格等方面出发，全面指点学生对照阅读原文和译文，细心体会翻译过程，体会译者如何平衡准确性与灵活性，如何使译作风格与原作风格保持一致，等等；当然，点评也指出了译作中可供商榷之处，与读者探讨。点评旨在让读者在揣摩、比较和思考中提高自己的翻译水平和鉴赏能力。对于小说、戏剧等长篇作品，更是请点评者做了全面评介，包括原作的写作特点、语言风格、在我国的接受情况、译者翻译时的心路历程、译者的翻译原则、翻译风格等等，可以帮助学生更好地理解原作和译作。\n每本书的译者和点评者皆为译界名家，有的译者兼做点评者，更能帮助读者体会译文背后的点点考量。\nSIR FRANCIS BACON弗兰西斯·培根\nNarcissus；or Seif-Love 那喀索斯——论自恋(杨自伍译)\nABRAHAM COWLEY亚伯拉罕-考利\nofAvarice 论贪婪(汪义群译)\nJONATHAN swIFT乔纳森·斯威夫特\nA Treatise on Good Manners and Good Breeding\n论礼貌与教养(侯维瑞译)\nLORD CHESTERFIELD切斯特菲尔德\nUpon Affectation 论矫情(汪义群 译)\nJOSEPH ADDISON约瑟夫·艾迪生\nThoughts in Westminster Abbey 威斯敏斯特教堂里的遐想\n(张建平译)\nSIR RICHARD STEELE理查德·斯梯尔\nOn Recollections of Childhood 童年回忆(杨自伍译)\nSAMUEL JOHNSON塞缪尔·约翰逊\nConversation 谈话的艺术(聂振雄译)\nDAVID HUME大卫·休谟\nof the Dignity or Meanness of Human Nature\n论人性的高尚或卑鄙(杨自伍译)\nOLIVER GOLDSMITH奥利弗·哥尔德斯密斯\nA Little Great Man 小小的大人物(虞建华译)\nJAMES BOSWELL詹姆斯·鲍斯韦尔\nFirst Meeting with Johnson 初次与约翰逊会面(程雨民译)\nCHARLES LAMB查尔斯·兰姆\nThe Child Angel：a Dream 小天使：一场梦(张建平译)\nWILLIAM HAZLITT威廉·哈兹里特\nOn a Landscape of Ntcolas Poussin\n论尼古拉·普桑的一幅风景画(杨自伍译)\nJAMES H．L．HUNT詹姆斯·亨·利·亨特\nGetting Up on Cold Mornings 冷天早起(张承谟译)\nTHOMAS DE QUINCEY托马斯·德·昆西\nOn the Knocking at the Gate in‘‘Macbeth”\n论《麦克白》剧中的敲门声(李赋宁译)\nMATTHEW ARNOLD马修·阿诺德\nHeine and the Philistines 海涅与庸人(汪义群译)\nWILLIAM HALE WHITE威廉·黑尔·怀特\nAn@ernoon Walk in October 十月午后漫步(汪梅琼译\nw．H．HUDSON威·亨-赫德森\nHer Own Village她自己的村庄(杨自伍译)\nALICE MEYNELL艾丽丝·梅内尔\nJuly 七月(张增健译)\nRICHARD JEFFERIES理查德·杰弗里斯\nThe Acorn-Gatherer 捡橡果的孩子(虞建华译)\nSIR EDMUND GOSSE埃德蒙·戈斯\nA Visit to Walt Whitman 惠特曼访问记(杨岂深译)\nAUGUSTINE BIRRELL奥古斯丁·比勒尔\nBook—Buying 购书(杨岂深译)\nOSCAR WILDE奥斯卡·王尔德\nImpressions ofAmerica 美国印象(谈瀛洲译)\nARTHUR CLUTTON—BROCK阿瑟·克拉顿\nSunday Before the war 战前星期天(陆谷孙译)\nHILAIRE BELLOC希拉里·贝洛克\nOur Inheritance 我们的遗产(吴简清译)\nSIR MAX BEERBOHM马克斯·比尔博姆\nThe Morris Dancers 跳莫里斯舞的人(杨自伍译)\nBERTRAND RUSSELL伯特兰·罗素\nOn Being Modern—Minded 论具有现代头脑(杨岂深译)\nG．K．cHESTERTON古·基·切斯特顿\nFrench and English 法国人与英国人(柯茗译)\nROBERT LYND罗伯特·林德\nThe Darkness 黑暗(杨岂深译)\nE．M．FORsTER爱·摩·福斯特\nMy Wood 我的树林(郑大民译)\nROSE MACAuLAY罗兹·麦考利\nEvening Parties 晚间聚会(杨自伍译)\nVIRGINIA WOOLF弗吉尼亚·伍尔夫\nOn a Faithful Friend记一位忠实的朋友(黄源深译)\nD．H．LAWRENCE戴·赫·劳伦斯\nInsouciance 闲情逸致(程雨民译)\nJOYCE CARY乔伊斯·凯利\nThe Artist and the World 艺术家与世界(谈瀛洲译)\nALDOUS L．HUXLEY奥尔德斯·伦·赫胥黎\nMeditation on the Moon 关于月亮的沉思(张承谟译)\nT．B．PRIESTLEY约·博·普里斯特利\nThe Toy Farm 玩具农场(张承谟译)\nGEORGE ORWELL乔治·奥威尔\nReflections on Gandhi 甘地之我见(翟象俊译)\nEVELYN WAUGH伊夫林·沃\nTake Your Home into Your Own Hands！\n亲手布置自己的家！(穆国豪译)\nCYRIL CONNoLLY西里尔·康诺利\nThe Ant—Lion蚁狮(杨自伍译)\nWILLIAM EMPSON威廉·燕卜荪\nThe Faces of Buddha 佛的尊容(穆国豪译)\nALFRED AIJVAREz阿尔弗雷德·阿尔瓦雷斯\nDeath ofthe Poet诗人之死(杨自伍译)",
        series: {
          id: "6193",
          title: "翻译专业名著名译研读系列",
        },
        price: "48.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1500,
          average: "7.2",
          min: 0,
        },
        subtitle: "石康新哲理散文",
        author: ["石康"],
        pubdate: "2007-5",
        tags: [
          {
            count: 755,
            name: "石康",
            title: "石康",
          },
          {
            count: 339,
            name: "那些不值钱的经验",
            title: "那些不值钱的经验",
          },
          {
            count: 247,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 189,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 118,
            name: "散文",
            title: "散文",
          },
          {
            count: 78,
            name: "因为活着,所以思考",
            title: "因为活着,所以思考",
          },
          {
            count: 52,
            name: "中国",
            title: "中国",
          },
          {
            count: 50,
            name: "文化",
            title: "文化",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s2398855.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "[爱情] 从姑娘开始说起\n[人生] 敏感的人生\n[读书] 窄巷外的世界\n[世相] 好玩的不好玩的人和事\n[宗教] 槛外谈",
        pages: "189",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s2398855.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s2398855.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s2398855.jpg",
        },
        alt: "https://book.douban.com/subject/2075391/",
        id: "2075391",
        publisher: "上海人民出版社",
        isbn10: "7208069573",
        isbn13: "9787208069572",
        title: "那些不值钱的经验",
        url: "https://api.douban.com/v2/book/2075391",
        alt_title: "",
        author_intro:
          "石康，生于1968年，北京人，联大航天工程学院电子系计算机软件专业毕业，又在哈工大管理学院技术经济专业获理科硕士学位，毕业后编程一年，1993年至今从事写作。著有长篇小说《晃晃悠悠》、《支离破碎》、《一塌糊涂》、《在一起》、《激情与迷茫》、《心碎你好》，随笔集《鸡一嘴鸭一嘴》，代表剧本有《大腕》、《北京风情画》、《奋斗》等。",
        summary:
          "人们热爱回忆青春，是因为他们没有更加拿得出手的东西，他们的精神能力在青春期便停滞了，青春成了人生的顶点；人们喜欢两性关系，因为在普通生活中，只有两性关系才能给他们带来一种接近冒险的新奇与愉悦；这是反复在窄巷中来回游荡的鬼魂，唉，可怜。何时人们才能凌空跃起，去看一看窄巷外面的世界？\n文字如同作者一贯的风格，随意挥洒，北京味十足，语气亲切而轻松。",
        price: "20.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 305,
          average: "9.2",
          min: 0,
        },
        subtitle: "",
        author: ["梁遇春"],
        pubdate: "2010-1",
        tags: [
          {
            count: 142,
            name: "梁遇春",
            title: "梁遇春",
          },
          {
            count: 128,
            name: "散文",
            title: "散文",
          },
          {
            count: 42,
            name: "文学",
            title: "文学",
          },
          {
            count: 36,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 35,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 34,
            name: "中国",
            title: "中国",
          },
          {
            count: 28,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 21,
            name: "美文，可惜斯人命薄",
            title: "美文，可惜斯人命薄",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s4217590.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "春醪集\n序\n讲演\n寄给一个失恋人的信（一）\n醉中梦话（一）\n“还我头来”及其他\n人死观\n查理斯·兰姆评传\n文学与人生\n寄给一个失恋人的信（二）\n文艺杂话\n醉中梦话（二）\n谈“流浪汉\n“春朝”一刻值千金\n“失掉了悲哀”的悲哀\n\n泪与笑\n泪与笑\n天真与经验\n途中\n论智识贩卖所的伙计\n观火\n破晓\n救火夫\n她走了\n苦笑\n坟\n猫狗\n这么一回事\n无情的多情和多情的无情\n毋忘草\n黑暗\n一个“心力克”的微笑\n善言\nKISSINGTHEFIRE（吻火）\n第二度的青春\n又是一年春草绿\n春雨\nGILESLYT To NSTRACHEY．1880-1932\n\n集外\n论麻雀及扑克\n高鲁斯密斯的二百周年纪念\n金室诗集\n东方诗选\n人生艺术（蔼力斯作品的精华）\n变态心理学大纲\n新传记文学谈\n蒙旦的旅行日记\n从孔子到门肯\n《英国小品文选》译者序\n《小品文选》序\n《小品文续选》序\n\n书信\n致石民信（共四十一通）",
        pages: "259",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s4217590.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s4217590.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s4217590.jpg",
        },
        alt: "https://book.douban.com/subject/4267093/",
        id: "4267093",
        publisher: "人民文学出版社",
        isbn10: "7020074693",
        isbn13: "9787020074693",
        title: "梁遇春散文",
        url: "https://api.douban.com/v2/book/4267093",
        alt_title: "",
        author_intro:
          "梁遇春（1906－1932），笔名秋心、驭聪等。福建闽侯人。中国现代散文家、翻译家。1922年就读于北京大学，先进预科后人英文系。1928年毕业后曾到上海暨南大学任教。1930年返回母校，在北京大学图书馆工作。因不幸染上急性猩红热，于1932年6月25日猝然去世，年仅二十六岁。\n作者于1926年开始在《语丝》、《奔流》、《骆驼草》、《新月》等刊物上发表作品。1930年上海北新书局出版了他的第一本散文集《春醪集》，1934年上海开明书店又出版了他的第二本散文集《泪与笑》。他的英语译作有二十多种，以《英国诗歌选》和英国的《小品文选》影响最大。",
        summary:
          "《梁遇春散文(插图珍藏版)》内容简介：那是三年前的一个夏天，我正在北大一院图书馆里，很无聊地翻阅《洛阳伽蓝记》，偶然看到底下这一段：刘白堕善酿酒，饮之香美，经月不醒。青州刺史毛鸿宾赍酒之藩，路逢劫贼，饮之即醉，皆被擒获。游侠语日：“不畏张弓拔刀，但畏白堕春醪。”\n我读了这几句话，想出许多感慨来。我觉得我们年青人都是偷饮了春醪，所以醉中做出许多好梦，但是正当我们梦得有趣时候，命运之神同刺史的部下一样匆匆地把我们带上衰老同坟墓之途。这的确是很可惋惜的一件事情。但是我又想世界既然是如是安排好了，我们还是陶醉在人生里，幻出些红霞般的好梦罢，何苦睁着眼睛，垂头叹气地过日子呢？所以在这急景流年的人生里，我愿意高举盛到杯缘的春醪畅饮。\n惭愧得很。我没有“醉里挑灯看剑”的豪情，醉中只是说几句梦话。这本集子就是我这四年来醉梦的生涯所留下惟一的影子。我知道这十几篇东西是还没有成熟的作品，不过有些同醉的人们看着或者会为之莞尔，我最大的希望也只是如此。",
        series: {
          id: "3096",
          title: "中华散文插图珍藏版",
        },
        price: "20.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 258,
          average: "9.3",
          min: 0,
        },
        subtitle: "",
        author: ["王佐良"],
        pubdate: "1994-08",
        tags: [
          {
            count: 195,
            name: "王佐良",
            title: "王佐良",
          },
          {
            count: 154,
            name: "英国文学",
            title: "英国文学",
          },
          {
            count: 93,
            name: "散文",
            title: "散文",
          },
          {
            count: 60,
            name: "文学",
            title: "文学",
          },
          {
            count: 56,
            name: "英国散文的流变",
            title: "英国散文的流变",
          },
          {
            count: 56,
            name: "文学理论",
            title: "文学理论",
          },
          {
            count: 45,
            name: "英国",
            title: "英国",
          },
          {
            count: 38,
            name: "文学研究",
            title: "文学研究",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1273477.jpg",
        binding: "精装",
        translator: [],
        catalog:
          "序\n第一章 引论：莫尔的历史著作和风格\n第二章 文艺复兴时期\n两种风格的争论；科学家的介入\n英文《圣经》的文学成就\n培根的《随笔》：小作品，大作用\n巴洛克和其它风格\n政治斗争的武器\n世纪中叶的回顾与展望\n第三章 复辟时期与十八世纪上半\n德莱顿和班扬\n报刊文学的兴起\n笛福的现代性\n鲁宾逊的世界意义\n摩尔：现实主义的力量\n叙事散文的进一步发展\n关键人物斯威夫特\n第四章 十八世纪后半\n文明化的进程\n文学商品化：独立作家的出现和文论的社会作用\n散文样式的繁多\n吉朋的罗马史\n鲍斯威尔的传记艺术\n约翰逊的人格与风格\n一个归纳；一点透视\n第五章 浪漫主义时期\n论战的武器\n山水画，流民图\n浪漫派散文诸家\n诗人的散文\n小说家的散文\n第六章 十九世纪\n历史想象力的发挥\n说理散文的各种表现\n纽曼的信仰危机\n密尔的自由观\n科学家的文章\n美学家的忧患感\n文论和文论的背后\n小说散文的厚实与灵气\n世纪末的变化\n第七章 二十世纪（上）\n萧伯纳的散文特点\n作为散文家的罗素\n布卢姆斯伯里街上的高层知识圈\n世界大战；现代主义\n第八章 二十世纪（下）\n邱吉尔的雄辩和文风观\n文风问题的复杂性\n学府的文雅；文雅的限度与扩充\n报刊文的今天\n随意文体；小品文\n两本游记\n新品种：广播与电视上的散文\n口述历史\n第九章 结束语：几点归纳\n参考书目举要\n索引\n",
        pages: "372",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1273477.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1273477.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1273477.jpg",
        },
        alt: "https://book.douban.com/subject/1275735/",
        id: "1275735",
        publisher: "商务印书馆",
        isbn10: "710001333X",
        isbn13: "9787100013338",
        title: "英国散文的流变",
        url: "https://api.douban.com/v2/book/1275735",
        alt_title: "",
        author_intro: "",
        summary: "",
        price: "21.0",
      },
      {
        rating: {
          max: 10,
          numRaters: 8,
          average: "0.0",
          min: 0,
        },
        subtitle: "散文",
        author: ["李碧华"],
        pubdate: "1990",
        tags: [
          {
            count: 4,
            name: "李碧华",
            title: "李碧华",
          },
          {
            count: 3,
            name: "散文",
            title: "散文",
          },
          {
            count: 1,
            name: "繁体",
            title: "繁体",
          },
          {
            count: 1,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1832161.jpg",
        binding: "繁体直排",
        translator: [],
        catalog: "",
        pages: "186",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1832161.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1832161.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1832161.jpg",
        },
        alt: "https://book.douban.com/subject/1889618/",
        id: "1889618",
        publisher: "天地图书",
        isbn10: "9622574378",
        isbn13: "9789622574373",
        title: "个体户",
        url: "https://api.douban.com/v2/book/1889618",
        alt_title: "",
        author_intro: "",
        summary:
          "任何事若不知怎生才好，那就置之死地而后生吧，完全绝望或者可以另辟蹊径，总好过死守不放，同归于尽\r\n                           -------蛋与俺列",
        price: "25。00",
      },
      {
        rating: {
          max: 10,
          numRaters: 235,
          average: "8.9",
          min: 0,
        },
        subtitle: "当代作家学者散文丛书",
        author: ["王小波"],
        pubdate: "1996年11月第一版",
        tags: [
          {
            count: 103,
            name: "王小波",
            title: "王小波",
          },
          {
            count: 42,
            name: "杂文",
            title: "杂文",
          },
          {
            count: 25,
            name: "思维的乐趣",
            title: "思维的乐趣",
          },
          {
            count: 18,
            name: "文学",
            title: "文学",
          },
          {
            count: 11,
            name: "思维",
            title: "思维",
          },
          {
            count: 8,
            name: "文字",
            title: "文字",
          },
          {
            count: 8,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 7,
            name: "我喜欢的",
            title: "我喜欢的",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1681553.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "158页",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1681553.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1681553.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1681553.jpg",
        },
        alt: "https://book.douban.com/subject/1439543/",
        id: "1439543",
        publisher: "北岳文艺出版社",
        isbn10: "7537816506",
        isbn13: "9787537816502",
        title: "思维的乐趣",
        url: "https://api.douban.com/v2/book/1439543",
        alt_title: "",
        author_intro: "",
        summary: "",
        price: "8.70元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1189,
          average: "7.6",
          min: 0,
        },
        subtitle: "林清玄最新散文精选",
        author: [],
        pubdate: "2015-4-28",
        tags: [
          {
            count: 447,
            name: "林清玄",
            title: "林清玄",
          },
          {
            count: 261,
            name: "散文",
            title: "散文",
          },
          {
            count: 165,
            name: "心灵鸡汤",
            title: "心灵鸡汤",
          },
          {
            count: 157,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 117,
            name: "认识自己，在路上！",
            title: "认识自己，在路上！",
          },
          {
            count: 109,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 93,
            name: "个人成长",
            title: "个人成长",
          },
          {
            count: 89,
            name: "我想读这本书",
            title: "我想读这本书",
          },
        ],
        origin_title: "林清玄",
        image: "https://img3.doubanio.com/view/subject/m/public/s28049853.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "第一辑\n修得一颗柔软心\n柔软心\t006\n生命的化妆\t010\n莲花汤匙\t013\n总有群星在天上\t018\n清净之莲\t022\n黄玫瑰的心\t025\n掌中宝玉\t028\n第二辑\n白雪少年\n兵卒无河\t032\n幸福的开关\t042\n飞鸽的早晨\t047\n期待父亲的笑\t055\n红心番薯\t061\n飞入芒花\t068\n在梦的远方\t075\n以直观来面对世界\t080\n迷路的云\t083\n第三辑\n温一壶月光下酒\n温一壶月光下酒\t092\n不要指着月亮发誓\t100\n清风匝地，有声\t103\n养着水母的秋天\t109\n黄昏菩提\t114\n云　散\t122\n正向时刻\t125\n第四辑\n心美，一切皆美\n发芽的心情\t132\n学看花\t138\n梅　香\t143\n素　质\t145\n一　朝\t148\n一只毛虫的圆满\t153\n莲花与冰冻玫瑰\t157\n垂丝千尺，意在深潭\t163\n求　好\t165\n横过十字街口\t167\n第五辑\n人间有味是清欢\n清雅食谱\t172\n茶香一叶\t176\n不是茶\t181\n味之素\t184\n忧欢派对\t191\n牡丹也者\t198\n有情十二帖\t204\n第六辑\n从容彼岸是生活\n拥　有\t216\n欢乐中国节\t218\n只手之声\t222\n来自心海的消息\t227\n欢乐悲歌\t233\n河的感觉\t237\n猫头鹰人　\t245",
        pages: "264",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s28049853.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s28049853.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s28049853.jpg",
        },
        alt: "https://book.douban.com/subject/26367995/",
        id: "26367995",
        publisher: "长江文艺出版社",
        isbn10: "7535478476",
        isbn13: "9787535478474",
        title: "你心柔软，却有力量",
        url: "https://api.douban.com/v2/book/26367995",
        alt_title: "林清玄",
        author_intro:
          "林清玄，台湾高雄人，连续十年雄踞“台湾十大畅销书作家”榜单，被誉为“当代散文八大家”之一。17岁开始发表作品；20岁出版第一本书；30岁前得遍台湾所有文学大奖；35岁入山修行后写成的“身心安顿系列”，是20世纪90年代台湾最畅销的作品；40岁完成“菩提系列”，畅销数百万册，是当代最具影响力的作品之一。文章曾多次入选大陆、中国台湾、中国香港和新加坡中小学华语教材及大学国文选，还曾被收入大陆高考语文试卷，是国际华文世界被广泛阅读的作家。",
        summary:
          "台湾知名作家林清玄最新散文精选：柔软的心最有力量，唯其柔软，我们才能敏感；唯其柔软，我们才能包容；唯其柔软，我们才能精致；也唯其柔软，我们才能超拔自我，在受伤的时候甚至能包容我们的伤口。",
        series: {
          id: "39372",
          title: "“素心四书”——林清玄代表性散文精选系列",
        },
        price: "39.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 956,
          average: "7.2",
          min: 0,
        },
        subtitle: "2000-2005年《萌芽》散文精选",
        author: ["韩寒", "郭敬明"],
        pubdate: "2006-2",
        tags: [
          {
            count: 168,
            name: "韩寒",
            title: "韩寒",
          },
          {
            count: 118,
            name: "那些人，那些事：2000-2005年《萌芽》散文精选",
            title: "那些人，那些事：2000-2005年《萌芽》散文精选",
          },
          {
            count: 63,
            name: "萌芽",
            title: "萌芽",
          },
          {
            count: 58,
            name: "青春",
            title: "青春",
          },
          {
            count: 55,
            name: "郭敬明",
            title: "郭敬明",
          },
          {
            count: 44,
            name: "散文",
            title: "散文",
          },
          {
            count: 32,
            name: "那些人，那些事",
            title: "那些人，那些事",
          },
          {
            count: 32,
            name: "小说",
            title: "小说",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1670629.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "360",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1670629.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1670629.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1670629.jpg",
        },
        alt: "https://book.douban.com/subject/1799942/",
        id: "1799942",
        publisher: "人民文学出版社",
        isbn10: "7020047696",
        isbn13: "9787020047697",
        title: "那些事，那些人",
        url: "https://api.douban.com/v2/book/1799942",
        alt_title: "",
        author_intro: "",
        summary:
          "《那些事 那些人》精选2000年至2005年《萌芽》杂志涌现出来的54篇散文佳作，涉及内容“吃喝玩乐”无所不包，书写方式“天马行空”无所不有，让你在或捧腹或黯然中回想起过去的“那些事，那些人”，慨叹生活，赞美青春。",
        price: "24.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1186,
          average: "7.8",
          min: 0,
        },
        subtitle: "毕淑敏哲理散文精选",
        author: ["毕淑敏"],
        pubdate: "2005-01",
        tags: [
          {
            count: 425,
            name: "毕淑敏",
            title: "毕淑敏",
          },
          {
            count: 208,
            name: "散文",
            title: "散文",
          },
          {
            count: 132,
            name: "励志",
            title: "励志",
          },
          {
            count: 120,
            name: "我很重要",
            title: "我很重要",
          },
          {
            count: 80,
            name: "女性",
            title: "女性",
          },
          {
            count: 79,
            name: "哲理",
            title: "哲理",
          },
          {
            count: 69,
            name: "爱自己",
            title: "爱自己",
          },
          {
            count: 66,
            name: "给我自信，让我勇敢前行！",
            title: "给我自信，让我勇敢前行！",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1216083.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "关于人生沉思\n目标要趁早\n化贫苦为神奇\n我不知道今夏的流行色\n幸福盲\n铁马冰河入梦来\n背着药包上学堂\n假如我能活下去\n提醒幸福\n路远不胜金\n看着别人的眼睛\n钱的极点\n布雷迪的猴子\n我很重要\n童话中的苦难\n被老师读作文的时候\n苦难不是牛痘疫苗\n我在寻找那片野花\n关于生命与命运的遐想\n比对更长久的\n延长中年\n没有一棵小草自惭形秽\n年龄的颜色\n金丝雪片\n当我们离开北京的时候\n你永不要说\n最大的缘分\n灵魂飞翔的地方\n葵花之最\n苍茫之悟\n节令是一种命令\n太平门与非常口\n“我羡慕你”\n崇文门三角洲的马莲\n写作是一种命运\n在火焰中思索\n聆听千年\n关于爱情与友情的絮语\n友情：这棵树上只有一个果子，叫做信任\n……",
        pages: "289",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1216083.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1216083.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1216083.jpg",
        },
        alt: "https://book.douban.com/subject/1051492/",
        id: "1051492",
        publisher: "时代文艺出版社",
        isbn10: "7538719563",
        isbn13: "9787538719567",
        title: "我很重要",
        url: "https://api.douban.com/v2/book/1051492",
        alt_title: "",
        author_intro: "",
        summary:
          "作为一个女人，如果我们拥有天空和海洋，如果我们拥有知识和事业，如果我们拥有自信和尊严，如果我们拥有亲人对我们和我们对亲人的挚爱，我们的生命就很完满。——毕淑敏\n　　她有一种把对于人的关怀和热情悲悯化为冷静处方的集道德、文学、科学于一体的思维方式、写作方式与行为方式。善良与冷静，像孪生姐妹一样地时刻跟着毕淑敏的笔端…… 至于她的散文就更加明澈见底了。——王蒙\n\n　　对于一株新生的树苗，每一片叶子都很重要。对于一个孕育中的胚胎，每一段染色体碎片都很重要。甚至驰骋寰宇的航天飞机，也可以因为一个密封橡皮圈的疏漏而凌空爆炸－－你能说它不重要吗？人们常常从成就事业的角度，断定我们是否重要。但我要说，只要我们在时刻努力着，为光明在奋斗着，我们就是在无比重要的生活着。让我们昂起头，对着我们这颗美丽的星球上无数的生灵，响亮地宣布——我很重要。",
        series: {
          id: "23163",
          title: "毕淑敏哲理散文精选",
        },
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 350,
          average: "7.8",
          min: 0,
        },
        subtitle: "",
        author: ["徐志摩"],
        pubdate: "1999-3-1",
        tags: [
          {
            count: 106,
            name: "徐志摩",
            title: "徐志摩",
          },
          {
            count: 77,
            name: "散文",
            title: "散文",
          },
          {
            count: 32,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 20,
            name: "文学",
            title: "文学",
          },
          {
            count: 14,
            name: "中国",
            title: "中国",
          },
          {
            count: 13,
            name: "杂文随笔",
            title: "杂文随笔",
          },
          {
            count: 13,
            name: "中国近代文学",
            title: "中国近代文学",
          },
          {
            count: 10,
            name: "爱情",
            title: "爱情",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1074648.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "云游心踪\n印度洋上的秋思\n北戴河海滨的幻想\n泰山日出\n山中来函\n翡冷翠山居闲话\n……\n高山氤氲\n曼珠斐儿\n泰戈尔\n济慈的夜莺歌\n拜伦\n丹农雪乌\n罗曼罗兰\n……\n人生随感\n“就使打破了头，也还要保持我灵魂的自由”\n我过的端阳节\n一封信（给抱怨生活干燥的朋友）\n落叶\n守旧与“玩”旧\n迎上前去\n……\n风雨故人\n悼沈叔薇\n我的彼得\n我的祖母之死\n伤双栝老人\n吊刘叔和\n家德",
        pages: "421",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1074648.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1074648.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1074648.jpg",
        },
        alt: "https://book.douban.com/subject/1044812/",
        id: "1044812",
        publisher: "浙江文艺出版社",
        isbn10: "7533903862",
        isbn13: "9787533903862",
        title: "徐志摩散文",
        url: "https://api.douban.com/v2/book/1044812",
        alt_title: "",
        author_intro: "",
        summary:
          "优美而浪漫，让人馨香练怀久久不忘的心灵独白；启迪青春、点缀人生、畅想世纪的人生感悟；最具代表性的或伤感或甜蜜或浪漫或纯情的爱的故事；诗一样的文字，格言一样的论说……尽在徐志摩散文！经典美文，即是伴君品味欣赏之佳作，又为珍藏馈赠之上品。",
        series: {
          id: "8099",
          title: "世纪文存",
        },
        price: "20.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 773,
          average: "8.5",
          min: 0,
        },
        subtitle: "散文选编",
        author: ["[日] 川端康成"],
        pubdate: "2002-2",
        tags: [
          {
            count: 517,
            name: "川端康成",
            title: "川端康成",
          },
          {
            count: 232,
            name: "日本文学",
            title: "日本文学",
          },
          {
            count: 192,
            name: "散文",
            title: "散文",
          },
          {
            count: 183,
            name: "日本",
            title: "日本",
          },
          {
            count: 161,
            name: "花未眠",
            title: "花未眠",
          },
          {
            count: 90,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 60,
            name: "文学",
            title: "文学",
          },
          {
            count: 55,
            name: "外国文学",
            title: "外国文学",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1082017.jpg",
        binding: "平装",
        translator: ["叶渭渠"],
        catalog:
          "一 温泉通信\n二 燕子\n三 伊豆姑娘\n四 初秋山间的幻想\n五 南伊豆纪行\n六 土地和人的印象\n七 伊豆天城\n八 新东京名胜\n九 上野之春\n十 初秋四景\n十一 一个文人的感想\n十二 秋鸟\n十三 临终的眼\n十四 文学自传\n十五 纯真的声音\n……",
        pages: "226",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1082017.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1082017.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1082017.jpg",
        },
        alt: "https://book.douban.com/subject/1059378/",
        id: "1059378",
        publisher: "广西师范大学出版社",
        isbn10: "7563334394",
        isbn13: "9787563334391",
        title: "花未眠",
        url: "https://api.douban.com/v2/book/1059378",
        alt_title: "",
        author_intro:
          "川端康成（1899-1972），日本小说家，新感觉派代表作家之一。他的作品有印象主义色彩，意境新颖，同时由于受佛教影响较深，作品常带有消极悲观情调。代表作有《雪国》、《古都》、《睡美人》、《伊豆的舞女》等。川端康成获1968年诺贝尔文学奖，是继泰戈尔之后第二个获此项殊荣的东方作家。",
        summary:
          "收有“温泉通信”、“伊豆姑娘”、“初秋山间的幻想”、“土地和人的印象”、“临终的眼”、“话说信浓”、“我在美丽的日本”等散文。",
        series: {
          id: "3682",
          title: "川端康成文集",
        },
        price: "15.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 381,
          average: "8.6",
          min: 0,
        },
        subtitle: "长卷散文",
        author: ["徐剑"],
        pubdate: "2008-9",
        tags: [
          {
            count: 45,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 32,
            name: "文学",
            title: "文学",
          },
          {
            count: 30,
            name: "旅行",
            title: "旅行",
          },
          {
            count: 23,
            name: "中国",
            title: "中国",
          },
          {
            count: 14,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 9,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 7,
            name: "宗教",
            title: "宗教",
          },
          {
            count: 3,
            name: "游记",
            title: "游记",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s7626583.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "190",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s7626583.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s7626583.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s7626583.jpg",
        },
        alt: "https://book.douban.com/subject/3266564/",
        id: "3266564",
        publisher: "万卷出版公司",
        isbn10: "7807593245",
        isbn13: "9787807593249",
        title: "灵山",
        url: "https://api.douban.com/v2/book/3266564",
        alt_title: "",
        author_intro:
          "徐剑，云南昆明人，第二炮兵政治部文艺创作室主任，国家一级作家，乘文学的双翼，飞翔于中国战略导弹部队的万里天疆和西藏的天边天蓝，著有《岁月之河》、《大国长剑》《鸟瞰地球》《水患中国》《江南草药王》《砺剑灞上》《导弹旅长》《麦克马洪线》等作品，五百余万字，先后获得鲁迅文学奖、中宣部“五个一”工程奖、中国图书奖和中国人民解放军文艺奖等全国、全军文学大奖二十余项，被中国文联评为全国百名德艺双馨的优秀青年文艺家，荣立二等功一次。",
        summary:
          "《灵山》所写的卡瓦格博是云南省迪庆藏族自治州境内海拔最高的雪峰群，也是云南最高最美的雪山，被称为藏区的十大神山之首。她所雄踞的中国横断山脉腹地，是国家级金沙江、澜沧江、怒江“三江并流”风景名胜区的核心部分。卡瓦格博既是地球历史上版块碰撞托起的一大地质奇观，是“沧海变高山”的地史见证；又是生物南来北往的交汇处，是“生物资源宝库”和“天然高山花园”；它还是中国东部藏区远近闻名的藏传佛教朝觐圣地。百年以来，西方的传教士、冒险家、人类学家，东方学者，纷纷踏上这块神秘的土地，寻找西藏宝典《甘珠尔》里所记载香巴拉的世界，寻找人类最后一块净土，东方学者、法国丽人大卫·妮尔曾化妆成乞丐，穿越其中，英国作家詹姆斯·谢尔顿凭着自己对这片秘境的遥望和想象，写成的书曾洛阳纸贵。而近些年，卡瓦格博正以她集自然风光和藏族文化为一体的魅力，不断吸引着海内外人士进行科学考察、登山探险和旅游观光。这种巨大的地史和历史纵深感，无疑给作者提供了一个天马行空、纵横捭阖的天地。\n徐剑一次次地行走于青藏高原、西部边陲，并用心用情地将其描绘出来。这本《灵山》，可以称作徐剑散文创作的力作。《灵山》所写的卡瓦格博是云南省迪庆藏族自治州境内海拔最高的雪峰群，也是云南最高最美的雪山，被称为藏区的十大神山之首。在《灵山》中，作者游目骋怀，以敏锐的心灵感悟世事，以开阔的视野拥抱自然，以独到的手法复活人物，将自然物象赋予了神性人情，情绪饱满，大气磅礴地壮绘了“我”眼中的大千世界，并抒发着肺腑之言……",
        price: "29.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1034,
          average: "8.3",
          min: 0,
        },
        subtitle: "周国平散文二集",
        author: ["周国平"],
        pubdate: "2000-03",
        tags: [
          {
            count: 338,
            name: "周国平",
            title: "周国平",
          },
          {
            count: 175,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 138,
            name: "散文",
            title: "散文",
          },
          {
            count: 96,
            name: "各自的朝圣路",
            title: "各自的朝圣路",
          },
          {
            count: 50,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 42,
            name: "散文:随笔",
            title: "散文:随笔",
          },
          {
            count: 30,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 28,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s1131476.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "471",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s1131476.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s1131476.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s1131476.jpg",
        },
        alt: "https://book.douban.com/subject/1065241/",
        id: "1065241",
        publisher: "东方出版社",
        isbn10: "7506012537",
        isbn13: "9787506012539",
        title: "各自的朝圣路",
        url: "https://api.douban.com/v2/book/1065241",
        alt_title: "",
        author_intro:
          "周国平，1945年生于上海。1967年毕业于北京大学哲学系，1981年毕业于中国社会科学院研究生院哲学系，现为中国社会科学院哲学研究所研究员。著有学术专著《尼采：在世纪的转折点上》、《尼采与形而上学》，随感集《人与永恒》，散文集《守望的距离》、《各自的朝圣路》、《安静》，纪实作品《妞妞：一个父亲的札记》、《南极无新闻――乔治王岛手记》等，1998年底以前作品结集为《周国平文集》（1－6卷），译有《尼采美学文选》、《尼采诗集》等。",
        summary:
          "专业从事哲学研究的周国平博士在央视《读书时间》中说，搞哲学大致上有三种方式：一是创建新的哲学学说、体系、流派，像康德、黑格尔们那样，他自认“不是这块料”；二是当作学问来搞，研究哲学中的某个小领域，某个范畴，他是吃这碗饭的，“这方面的工作总是要做一些”；三是把哲学当作对人生一些根本问题的感悟和思考，并以合适的方式把这所悟所思表达出来。“在这方面，我觉得散文对于我是一种很好的方式”。\n印象中，周国平仅在广义上才承认自己算得上是个哲学家，言辞谨慎。倒是对“思想者”，他有过一个定义：第一，拥有既具根本性又真正属于自己的、具有重要精神意义的问题；第二，拥有既具哲学性又真正属于自己的眼光。周国平不曾自诩，但他已然是一个深邃的思想者。\n《各自的朝圣路》是周国平前几年发表散文的结集。关于书名，作者解释说，一是因为其中自己比较满意的文章几乎都是读了那些精神朝圣者的书而发的感想；二是因为自己写作时心中常怀想着那些隐藏在人群里的今日的朝圣者。\n周国平说，他此生最大的嗜好就是读书和写作。读写对于任何一位作家乃至业余习作者来说，都是无须赘言的基本活计，但不少人对其重要性的排序及其神圣感却缺乏全面的认识，在周国平看来，读书和写作两者中，读书始终是第一位的。写作固然使他获得了许多快乐，但是，这种快乐并不能代替读书的快乐。他说，“有时候我还觉得，写作侵占了我的读书的时间，使我蒙受了损失。写作毕竟是一种劳动和支出，而读书纯粹是享受和收入。我向自己发愿，今后要少写多读，人生几何，我不该亏待了自己”。\n相对于教科书和专业书这些传统意义上的“有用的书”，周国平更爱读所谓闲书，也即“无用的书”。他觉得，读“有用的书”固然可以获得立足于社会的职业技能，但“无用的书”也并非真的无用，那恰恰是一个人精神生长的领域。对此，他的惊骇之言―――“一个人的成长基本上得益于自己读书，相比之下，课堂上的收获显得微不足道。”\n费尔巴哈说：“人就是他所吃的东西。”至少就精神食物而言，这句话是对的。从一个人的读物大致可以判断他的精神品级。\n真正的好书，都无一例外地真实记录了优秀灵魂的内在生活。一本好书的诞生，就是一次心灵的朝圣，这种朝圣是作者的，也是阅读者的。《在黑暗中并肩行走》是我先于文集出版即已欣赏到的文章之一，也是文集中我最为喜欢的篇什。这篇文章就是周国平对阅读史怀泽《我的青少年时代》的感想记录，篇名即援引史怀泽的话。周在文中写到，“相爱的人们也只是‘在黑暗中并肩行走’，所能做到的仅是各自努力追求心中的光明，并互相感受到这种努力，互相鼓励，而‘不需要注视别人的脸和探视别人的心灵’。”正是阅读，引发了周国平与史怀泽思想的共鸣，以及精神上的“惺惺相惜”，并在此基础上有了新升华和展开；“在最内在的精神生活中，我们每个人都是孤独的，爱并不能消除这种孤独，但正因为由己及人地领悟到了别人的孤独，我们内心才会对别人充满最真挚的爱”。\n作为一位散文作家，周国平是非职业的，却是出色的。对于写作，他主张“对自己说话”。他崇尚一种真正自由的写作心态，相信，不为发表而写作，是具备这种自由心态的必要条件。对时下极其流行的小散文，周国平不客气地归纳出了其模式：小故事＋小情调＋小哲理。模式化的小散文是最容易写的，也易于在大众报刊发表，这些泛滥的小散文们都有着惊人的相似，读了很多，却无法给人留下确切的印象。周国平无意于此，并且“确信这种东西是有害的，它们会使读者的感觉和理解力趋于肤浅，丧失了领悟生活实质和社会真相的能力。”因此，他“拒绝加入今日的小散文合唱”。\n周国平的哲理散文在当代散文界占有重要一席，其精神价值和文学水准是那些急功近利、好为人师、胡乱解读和“感悟”生活的作坊匠们无法企及的。作为一位特立独行的思想者，他“不时髦的读书”观和无功利的写作态度，值得我们学习；他孤独却执著的跋涉，值得我们崇敬。",
        price: "25.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 6,
          average: "0.0",
          min: 0,
        },
        subtitle: "散文",
        pubdate: "1983年初版印",
        image: "https://img1.doubanio.com/view/subject/m/public/s3596899.jpg",
        binding: "",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s3596899.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s3596899.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s3596899.jpg",
        },
        alt: "https://book.douban.com/subject/3533400/",
        id: "3533400",
        title: "沈从文选集（一）",
        author_intro: "",
        tags: [
          {
            count: 4,
            name: "沈从文",
            title: "沈从文",
          },
          {
            count: 3,
            name: "近现代文学",
            title: "近现代文学",
          },
          {
            count: 1,
            name: "随笔",
            title: "随笔",
          },
        ],
        origin_title: "",
        price: "1.75",
        translator: [],
        catalog: "",
        pages: "480",
        publisher: "四川人民出版社",
        isbn10: "SH10118-668",
        alt_title: "",
        url: "https://api.douban.com/v2/book/3533400",
        author: ["沈从文"],
        summary: "",
      },
      {
        rating: {
          max: 10,
          numRaters: 297,
          average: "7.4",
          min: 0,
        },
        subtitle: "张小娴十年至爱散文",
        author: ["张小娴"],
        pubdate: "2015-9",
        tags: [
          {
            count: 304,
            name: "张小娴",
            title: "张小娴",
          },
          {
            count: 120,
            name: "散文",
            title: "散文",
          },
          {
            count: 109,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 88,
            name: "女性",
            title: "女性",
          },
          {
            count: 80,
            name: "青春",
            title: "青春",
          },
          {
            count: 77,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 75,
            name: "文学",
            title: "文学",
          },
          {
            count: 73,
            name: "爱情",
            title: "爱情",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s28292457.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "序言：我们都曾经渴望爱情是一场盛宴\n第一章 属蜈蚣的女人\n脚上的星星\n爱穿凉鞋的女子\n属蜈蚣的女人\n每个早晨和晚上，淋浴之后\n心情沐浴\n双蒸酒浴\n没有的东西\n一米六三的潇洒\n睡得像公主\n我的指标裤\n好爱好爱的颜色\n弥勒佛的牛仔裤\n与自己相逢\n只是一个心愿\n第二章 时光茌苒，珍珠吾爱\n二十四个包包\n打不好的蝴蝶结\n但愿人长久\n时光茌苒，珍珠吾爱\n瑰丽的小东西\n到手的那天\n缠绵后的睫毛膏\n漫漫长途，终有回归\n一抹淡妆，慈悲澹泊\n第三章 你为什么需要一个男朋友\n男人的性感\n你把什么留给我\n我爱你\n爱的两个人\n心冷的时候\n小奴隶\n我爱你爱到舍得放手\n你为什么需要一个男朋友\n你为什么需要一个女朋友\n你恨我吗？\n折翼的天使\n风从指间掠过\n徘徊在爱情的边缘上\n所有不珍惜的人，都会成为过去\n第四章 好日子清单\n好日子清单\n爱的答案清单\n残酷女友的“恶行”清单\n八号台风的夜晚\n家中的一脚\n有相聚，就有离别\n老在那\n那一天的繁星\n在梦里悠游\n眼睛累了\n第五章 情人的卡路里\n奶酪的爱与罪\n跟你吃海鲜\n六月吃香鱼\n何以解忧？\n二亿年与须臾之间\n五粮液苦巧克力冰激凌\n牛奶、僧侣和酒\n情人的卡路里\n干酪的盛宴\n覆盆子伏特加冰激凌\n第六章 繁花将尽\n罗曼蒂克的杀人者\n《教父》的爱情\n你总有爱我的一天\n把天空还给你\n他是爱我的\n无望的浪漫\n你做了哪些事，足以证明你并未虚度人生？\n被排斥的孩子\n繁花将尽\n我要为你聪明\n我们有过美丽的约定\n另一个时空的故事\n第七章 年轻多么傻\n老了那一抹微笑\n不再相见\n为什么要长大\n年轻多么傻\n你会想念你自己吗？\n曾经……然后……\n早着呢\n朋友这花红\n第八章 三个愿望\n不做现在的我\n千古的难题\n爱上自己\n赞美与谩骂\n能够依赖，也要能够独立\n沉默最美\n说谎的理由\n笨赌徒\n最好不知道\n爱欲里的艺术家\n虽不爱，也不恨\n心中的颠覆与怜悯\n承认\n三个愿望\n第九章 他是别人的好\n两个大近视的相逢\n备胎的眼泪\n藏起来的爱\n最心酸的两个字\n爱一个人\n爱情不是避难所\n他是人还是神？\n爱是多大的负担？\n爱你，不爱你\n有一种可能\n傻到底\n有什么是笃定的？\n他是别人的好\n曾经的汹涌\n子虚乌有\n张小娴，你还相信爱情吗？",
        pages: "256",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s28292457.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s28292457.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s28292457.jpg",
        },
        alt: "https://book.douban.com/subject/26590273/",
        id: "26590273",
        publisher: "中信出版社",
        isbn10: "7508651871",
        isbn13: "9787508651873",
        title: "你会想念你自己吗",
        url: "https://api.douban.com/v2/book/26590273",
        alt_title: "",
        author_intro:
          "张小娴\n全世界华人的爱情知己。\n她以小说描绘爱情的灼热与冷却，\n以散文倾诉恋人的微笑与泪水，\n至今已出版超过四十本小说和散文集。\n她对人性的洞察，\n使她开创了一种既温柔又犀利的爱情文学。\n她的新浪和腾讯微博拥有超过八千万名粉丝，\n那些温柔细腻的字字句句抚慰了我们，\n而我们也从她的作品豁然明白，\n爱情的得失从来就不重要，\n当你舍弃一些，\n也许得到更多，\n只要曾深深爱过，\n你的人生将愈加完整。",
        summary:
          "我们遇到的人，都并非偶然。无论他们给予的是快乐还是痛苦，都是来度我的。\n深深爱着我，把我捧在掌心里的，是用爱来度我。\n伤害我，浪掷我的深情的，是用苦来度我，使我学会自爱，觉悟无常，\n世间的一切每时每分都在变。美好的时光留不住，悲伤的时光也同样会过去；有的爱始终相守，有的爱无法善终。\n这就是无常。\n既然如此，那就珍惜已拥有的，努力做好自己，了知缘分，对人无求。\n写了那么多悲伤的故事，但我并不悲观。只愿以悲心拥抱每一个际遇，每一个在我生命里驻足的人和深深爱着的人。\n当青春走到尽头，我会想念那个微笑的，年轻的，无忧亦无惧的自己。",
        price: "39.80",
      },
      {
        rating: {
          max: 10,
          numRaters: 967,
          average: "7.8",
          min: 0,
        },
        subtitle: "周国平最新散文精选",
        author: ["周国平"],
        pubdate: "2015-6-15",
        tags: [
          {
            count: 327,
            name: "周国平",
            title: "周国平",
          },
          {
            count: 190,
            name: "愿生命从容",
            title: "愿生命从容",
          },
          {
            count: 128,
            name: "散文",
            title: "散文",
          },
          {
            count: 115,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 109,
            name: "我想读这本书",
            title: "我想读这本书",
          },
          {
            count: 107,
            name: "温暖的书",
            title: "温暖的书",
          },
          {
            count: 99,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 82,
            name: "心灵",
            title: "心灵",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s28100289.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "壹// 活得简单才能活得自由\n论真性情 012\n活得简单才能活得自由 015\n对理想主义的温和坚持 018\n我更愿意做我自己 022\n享受生命的快乐 026\n善良、丰富、高贵 032\n童心 034\n贰// 幸福是一种能力\n论幸福 040\n快感离幸福有多远 044\n幸福和苦难都属于灵魂 047\n比成功更重要的 049\n做人比事业和爱情更重要 052\n快乐工作的能力 055\n杂感059\n青春不能错过的十件事 066\n叁// 孤独是爱最意味深长的赠品\n论孤独 072\n在黑暗中并肩行走 076\n最奇妙的是灵与肉的结合 078\n独处是一种能力 080\n心静是一种境界 083\n安静的位置 086\n世界愈喧闹，我内心愈安静 088\n肆// 爱情是理想的，婚姻是现实的\n爱情的质量 092\n我眼中的好女人 094\n有时候爱是一种错觉 100\n两性之间 102\n伴侣之情 107\n为爱筑一个好巢 111\n婚姻中没有天堂 112\n婚姻中的爱情 116\n宽容偶然的出轨行为 120\n伍 // 孩子，是坠落人间的天使\n童年的价值 124\n城里的孩子没有童年 125\n我给女儿当秘书 127\n素质是熏陶出来的 135\n携小女远游 140\n快乐地战胜应试体制 144\n今天怎样做父母（1） 156\n今天怎样做父母（2）158\n今天怎样做父母（3） 161\n陆//即使脸上有疤痕，活着也是美好的\n想念 168\n智慧和信仰 171\n哭铁生 176\n没有一丝浮躁和媚俗 178\n受伤记 181\n柒//生命本来没有名字\n《妞妞》新版自序 188\n让世界适合于小王子们居住 190\n生存的现实和寓言 194\n你爱动物有几分 198\n成为你自己 204\n人生边上的智慧 212\n时光村落里的往事 220\n表达你心中的爱和善意 224\n生命本来没有名字 226\n捌//恋家不需要理由\n家 232\n都市里的外乡人 236\n车窗外 238\n没有目的的旅行 240\n记住回家的路 244",
        ebook_url: "https://read.douban.com/ebook/146515690/",
        pages: "256",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s28100289.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s28100289.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s28100289.jpg",
        },
        alt: "https://book.douban.com/subject/26416276/",
        id: "26416276",
        publisher: "北京十月文艺出版社",
        isbn10: "7530214942",
        isbn13: "9787530214947",
        title: "愿生命从容",
        url: "https://api.douban.com/v2/book/26416276",
        alt_title: "",
        author_intro:
          "周国平，当代著名学者、作家。其散文以哲思和文采著称，寓哲理于常情中，深入浅出，平易之中多见理趣，多年来深受读者喜爱。\n周国平说，我写作从来不是为了影响世界,而只是为了安顿自己。我是为自己写作，所思所写大多是为了解决自己的问题。这是实话。读者的反馈表明，许多人与我面临着相似的问题，所以发生了共鸣，我对此感到欣慰。\n读者评论说，周国平的散文总有一种白玉兰一般的芳香，清清爽爽的，干干净净的。无论什么时候读他的散文，都可以使人感受到从喧嚣的闹市，飞到若禅若道的平静世界，从烦恼丛生的惆怅，回到无根无欲的无邪时代。徜徉在他优美的文字中，总会逆溯到一份难得的清醒。",
        summary:
          "★ 周国平2015最新精选散文集，亲笔序文推荐。人生任何美好的享受都有赖于一颗澄明的心。唯有内心富有充盈，方能从容抵抗世间所有的不安与躁动。\n★ 迄今为止最全面、最经典、最值得收藏的周国平散文精选集。收录豆瓣、人人、百度、新浪、网易、腾讯等亿万网友感动和推荐最多的篇目，横跨周国平三十载创作经典，诚如周国平在自序中言，“我嫌我的作品选本已经太多，对于出版新的选本总是十分犹豫，可是这个选本很特别，我决定开绿灯。好比烹饪，点菜率高反映了某种普遍的口味，把这些品种集中起来，专开一间餐厅，对于人们未尝不是提供了方便。”选篇经典全面，绝对值得再三阅读，细细品味。\n★ 周国平首部精美图文集，特别订制近50幅国家地理级别摄影配图，图文并茂，16开大开本，四色全彩印刷，视觉效果与阅读体验俱佳，值得收藏。\n★ “享受人生而不沉湎，看透人生而不消极”，在周国平诗化的语言和凝练的哲思中，愿你能从浮躁的世界找到内心的平静。",
        ebook_price: "23.88",
        series: {
          id: "48916",
          title: "新经典文库：周国平作品",
        },
        price: "39.80",
      },
      {
        rating: {
          max: 10,
          numRaters: 207,
          average: "7.9",
          min: 0,
        },
        subtitle: "茨维塔耶娃散文选",
        author: ["（俄）茨维塔耶娃"],
        pubdate: "2012-7",
        tags: [
          {
            count: 278,
            name: "茨维塔耶娃",
            title: "茨维塔耶娃",
          },
          {
            count: 136,
            name: "诗歌",
            title: "诗歌",
          },
          {
            count: 127,
            name: "俄罗斯",
            title: "俄罗斯",
          },
          {
            count: 79,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 74,
            name: "散文",
            title: "散文",
          },
          {
            count: 54,
            name: "苏俄文学",
            title: "苏俄文学",
          },
          {
            count: 40,
            name: "茨维塔耶娃作品系列",
            title: "茨维塔耶娃作品系列",
          },
          {
            count: 39,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s10292641.jpg",
        binding: "平装",
        translator: ["苏杭"],
        catalog:
          "“活到头——才能嚼完那苦涩的艾蒿！”（译序）\n自传\n母亲和音乐\n我的普希金\n老皮缅处的宅子\n亚历山大三世博物馆\n桂冠\n博物馆揭幕\n一首献诗的经过\n译后记",
        ebook_url: "https://read.douban.com/ebook/645746/",
        pages: "304",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s10292641.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s10292641.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s10292641.jpg",
        },
        alt: "https://book.douban.com/subject/10589335/",
        id: "10589335",
        publisher: "广西师范大学出版社",
        isbn10: "7549515093",
        isbn13: "9787549515097",
        title: "刀尖上的舞蹈",
        url: "https://api.douban.com/v2/book/10589335",
        alt_title: "",
        author_intro:
          "玛丽娜•茨维塔耶娃（Марина Цветаева，1892—1941），二十世纪最响亮、最动人心魄的诗人、散文家之一。少女时期即以诗行占卜了自己的青春、未来与死亡。她的诗句饱含热情、赞美、痛苦，大胆奔放，横溢斜出，应和了她跌宕的人生。她的散文如抒情诗般锋利、跳跃、灵动，意象纷至沓来，令人应接不暇。她死于绝望，终结于她寻觅了一辈子的钩子。她的墓地无人知晓。她栖于天空。“玛丽娜，谢谢你，为了这一切！”\n\n译者介绍\n苏杭，中国社科院外国文学研究所编审，俄罗斯哈巴洛夫斯克国立师范大学外语教研室教授。享受政府特殊津贴，中国作家协会会员，获资深翻译家荣誉证书。主要译著有诗集《莫阿比特狱中诗抄》、《叶夫图申科诗选》（合译）、《婚礼》、《致一百年以后的你》、《普希金抒情诗选》（合译）、《普希金文集》（合译），小说《一寸土》（合译）、《西西里柠檬》，散文《提前撰写的自传》、《老皮缅处的宅子》，文艺理论《继往开来——论苏联文学发展中的若干问题》（合译）、《美学简明辞典》等。",
        summary:
          "茨维塔耶娃作品系列\n致一百年以后的你：茨维塔耶娃诗选\n刀尖上的舞蹈：茨维塔耶娃散文选\n火焰的喷泉：茨维塔耶娃书信选",
        ebook_price: "9.99",
        series: {
          id: "12519",
          title: "茨维塔耶娃作品系列",
        },
        price: "30.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 14,
          average: "6.8",
          min: 0,
        },
        subtitle: "散文",
        author: ["念地儿"],
        pubdate: "2010-2",
        tags: [
          {
            count: 1,
            name: "小说",
            title: "小说",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s6144625.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "195",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s6144625.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s6144625.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s6144625.jpg",
        },
        alt: "https://book.douban.com/subject/4724621/",
        id: "4724621",
        publisher: "湖北出版社",
        isbn10: "7535442676",
        isbn13: "9787535442673",
        title: "浪漫的逃亡",
        url: "https://api.douban.com/v2/book/4724621",
        alt_title: "",
        author_intro:
          "作者简介 · · · · · ·\n念地儿，八十年代中期生于重庆，市场营销专业，研究生，《浪漫的逃亡》是其第一部长篇小说。",
        summary:
          "《浪漫的逃亡》内容简介：如果你爱过一个偶像，这《浪漫的逃亡》只是一个曾经，如果你正爱着一个偶像，这《浪漫的逃亡》会让你奢求一个有他的将来。林正荣完美得不像现实里的人，但每一个读者心中都会有一个他的真实原型，而在《浪漫的逃亡》作者念地儿心中的那一个，无疑是最接近的。",
        price: "22.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1045,
          average: "8.9",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993-7-1",
        tags: [
          {
            count: 325,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 112,
            name: "散文",
            title: "散文",
          },
          {
            count: 61,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 52,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 38,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 36,
            name: "文学",
            title: "文学",
          },
          {
            count: 36,
            name: "当代文学",
            title: "当代文学",
          },
          {
            count: 28,
            name: "背影",
            title: "背影",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s3186463.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "179",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s3186463.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s3186463.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s3186463.jpg",
        },
        alt: "https://book.douban.com/subject/1471687/",
        id: "1471687",
        publisher: "湖南文艺出版社",
        isbn10: "754041149X",
        isbn13: "9787540411497",
        title: "背影",
        url: "https://api.douban.com/v2/book/1471687",
        alt_title: "",
        author_intro: "",
        summary: "",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "4.20",
      },
      {
        rating: {
          max: 10,
          numRaters: 221,
          average: "8.1",
          min: 0,
        },
        subtitle: "小津安二郎人生散文",
        author: ["小津安二郎"],
        pubdate: "2013-2",
        tags: [
          {
            count: 266,
            name: "小津安二郎",
            title: "小津安二郎",
          },
          {
            count: 137,
            name: "日本",
            title: "日本",
          },
          {
            count: 106,
            name: "电影",
            title: "电影",
          },
          {
            count: 67,
            name: "散文",
            title: "散文",
          },
          {
            count: 46,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 38,
            name: "日本文学",
            title: "日本文学",
          },
          {
            count: 33,
            name: "電影研究",
            title: "電影研究",
          },
          {
            count: 29,
            name: "電影",
            title: "電影",
          },
        ],
        origin_title: "小津安二郎 僕はトウフ屋だからトウフしか作らない",
        image: "https://img9.doubanio.com/view/subject/m/public/s26294264.jpg",
        binding: "平装",
        translator: ["陳寶蓮"],
        catalog:
          "導讀  生活的，小津安二郎   文/易智言\nI　我是電影小導演\nII　電影沒有文法\nIII 在戰地思考電影\nIV　寄自戰地的信件\nV   活在對電影的愛情中\n小津談自己的五十三部劇情作品",
        pages: "240",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s26294264.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s26294264.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s26294264.jpg",
        },
        alt: "https://book.douban.com/subject/21345526/",
        id: "21345526",
        publisher: "新經典圖文傳播有限公司",
        isbn10: "9868885485",
        isbn13: "9789868885486",
        title: "我是賣豆腐的，所以我只做豆腐",
        url: "https://api.douban.com/v2/book/21345526",
        alt_title: "小津安二郎 僕はトウフ屋だからトウフしか作らない",
        author_intro:
          "小津安二郎（1903-1963）\n一九○三年生於東京深川，一九六三年歿。電影導演。日本影史十大導演。一九二三年進入松竹蒲田片廠擔任攝影助理。一九二七年以《懺悔之刃》步上導演之路。獲頒紫授勳章、獲頒藝術院賞，並在一九六二年榮膺藝術院會員。\n小津電影作品達五十四部（其中一部為紀錄片），早期作品產量豐富，類型非常廣泛，大多是溫馨喜劇居多。戰後則多為描寫一般庶民生活題材的電影，其中又以《麥秋》、《晚春》、《東京物語》、《秋刀魚之味》為其代表作。",
        summary:
          "雖然有人跟我說，「偶爾也拍些不同的東西如何？」但我說過，因為我是「賣豆腐」的，「做豆腐」的人去做咖哩飯或炸豬排，怎麼會好吃呢。──小津安二郎\n看過小津的電影，讀過那麼多崇敬小津的影評。\n這一次，小津親自寫下自己的人生故事，\n拍電影四十年，只走自己的路。\n不追求新穎技法、不因襲電影文法；\n拍普通人，說簡單故事。\n因為他相信：電影和人生都是以餘味定輸贏。\n◎侯孝賢、吳念真熱情推薦，易智言導讀；日本電影巨匠逝世50週年紀念版。\n本書為小津安二郎唯一文集，獲小津家族首肯，在適逢這位日本電影巨匠冥誕110歲的時候紀念出版，獨具意義。書中精選39篇小津安二郎在各大報章雜誌上的電影見解、幕後花絮，文字透露出他對電影的愛、拍片時的各種堅持。同時另收15件小津於二戰期間在戰地時與家人朋友往來書信與投稿文字、1篇獨家專訪、小津自評53部劇情作品，極有珍藏意義。\n◎代表作《東京物語》60週年，依然深深影響國際影壇\n我試著透過親子的成長、描寫日本的家族制度如何崩潰。是我最接近通俗劇傾向的作品。──小津安二郎自評《東京物語》\n眾所皆知小津安二郎其獨特拍片技巧與平靜的說故事方式，在他去世後深刻地影響了無數後輩導演。《東京物語》在2012年英國影藝學院出品的權威雜誌《Sight & Sound》票選十大影片肯定，358位國際導演評選榮獲影史第一，更勝《2001太空漫遊》、《大國民》、《教父》……在時隔60年後的今日，將這部小津安二郎的代表作推上最高峰。小津以其作品中獨一無二的人生況味征服了國際大導們的心。\n這位代表日本的國民導演過世後，在松竹電影公司的穿針引線下推出兩次向小津安二郎致敬之作：邀請侯孝賢導演於小津安二郎100年冥誕時完成了《珈琲時光》。山田洋次導演更以《東京物語》家庭故事為原型，拍出《東京家族》於2013年上映。",
        price: "NT$300",
      },
      {
        rating: {
          max: 10,
          numRaters: 399,
          average: "8.0",
          min: 0,
        },
        subtitle: "林清玄经典散文精选",
        author: ["林清玄"],
        pubdate: "2016-1",
        tags: [
          {
            count: 237,
            name: "林清玄",
            title: "林清玄",
          },
          {
            count: 105,
            name: "散文",
            title: "散文",
          },
          {
            count: 104,
            name: "禅意美文",
            title: "禅意美文",
          },
          {
            count: 86,
            name: "温暖的书",
            title: "温暖的书",
          },
          {
            count: 84,
            name: "我想读这本书",
            title: "我想读这本书",
          },
          {
            count: 61,
            name: "生活",
            title: "生活",
          },
          {
            count: 49,
            name: "好书，值得一读",
            title: "好书，值得一读",
          },
          {
            count: 47,
            name: "欢喜心",
            title: "欢喜心",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s28368176.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "【第一辑  身心安顿 烦恼平息】\n清欢\n得意的一天\n吃饭皇帝大\n随缘与任运\n采更多雏菊\n人在江湖\n纯心走天下\n步步起清风\n三十岁后始觉悟\n【第二辑  放下过后更澄明】\n欢喜心过生活\n检点自己的宝盒\n真正的桂冠\n一心一境\n如果没有明天\n常想一二\n记忆的版图\n写在水上的字\n转动\n让开心成为一种习惯\n【第三辑  心若香茗 静听花开】\n猫空半日\n小千世界\n光之四书\n吾心似秋月\n这一站到那一站\n晴窗一扇\n野姜花\n世界的中心\n【第四辑  处处莲花开】\n飞翔的木棉子\n屋顶上的田园\n莲子面包与油焖香菇\n油面摊子\n孔雀菜\n弹性的生命\n无风絮自飞\n桃花心木\n心田上的百合花开\n【第五辑  以爱为灯】\n鳝鱼骨的滋味\n长途跋涉的肉羹\n过火\n和时间赛跑\n鸳鸯香炉\n情重\n黄昏月娘要出来的时候\n一生一会\n【第六辑  总有群星在天上】\n一味\n家家有明月清风\n好雪片片\n无关风月\n月光下的喇叭手\n岁月的灯火都睡了\n生命的酸甜苦辣\n夏花之绚烂\n走向生命的大美",
        pages: "272",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s28368176.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s28368176.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s28368176.jpg",
        },
        alt: "https://book.douban.com/subject/26693234/",
        id: "26693234",
        publisher: "长江文艺出版社",
        isbn10: "7535485634",
        isbn13: "9787535485632",
        title: "心有欢喜过生活",
        url: "https://api.douban.com/v2/book/26693234",
        alt_title: "",
        author_intro:
          "林清玄\n著名散文家、诗人、学者，连续十年上榜“台湾十大畅销书作家”，“当代散文八大家”之一，是国际华文世界被广泛阅读的作家。\n17岁开始发表作品；20岁出版第一本书；30岁前得遍台湾所有文学大奖；35岁入山修行后写成的“身心安顿系列”，是20世纪90年代台湾最畅销的作品；40岁完成“菩提系列”，畅销数百万册，是当代最具影响力的作品之一。文章曾多次入选大陆、中国台湾、中国香港和新加坡中小学华语教材及大学国文选，更是大陆高考语文试卷的热门材料。\n笔耕四十余年，摹写散落在生活各处的禅机，持续给国人带来清雅的享受和禅意的领悟。",
        summary:
          "心所要的，不是足够多，是足够欢喜。\n本书围绕“欢喜心”，集结林清玄备受好评的经典作品53篇。在清雅文字和禅意插图的引领中，重探生活原味，启发心灵的敏锐。\n欢喜心是敢于超越自我，虽在尘网中生活，但永远不忘想飞的心，不忘飞翔的姿势；\n欢喜心是坦然承担此刻，生活不在别处，当下的每一刻都活得饱满、有力量，自己亦是风景；\n欢喜心是懂得转化苦乐，人生的境遇不可捉摸，心智却可以扭转，心有正念，一切欢喜；\n欢喜心是积极融入外境，保持着对世界新鲜而有希望的心情，时时  发射和接受幸福的信号。\n归根结底，欢喜心是一种敏感，一种韧性，使我们能享受好的生活，也能承受坏的际遇。\n本书还是畅销50万册的口碑佳作《你心柔软，却有力量》系列书，世事维艰，以柔软心除挂碍，以欢喜心过生活。",
        series: {
          id: "39372",
          title: "“素心四书”——林清玄代表性散文精选系列",
        },
        price: "39.8",
      },
      {
        rating: {
          max: 10,
          numRaters: 715,
          average: "8.8",
          min: 0,
        },
        subtitle: "最具魅力的小说和散文",
        author: ["张爱玲"],
        pubdate: "2003年4月",
        tags: [
          {
            count: 267,
            name: "张爱玲",
            title: "张爱玲",
          },
          {
            count: 94,
            name: "小说",
            title: "小说",
          },
          {
            count: 57,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 47,
            name: "经典张爱玲",
            title: "经典张爱玲",
          },
          {
            count: 40,
            name: "文学",
            title: "文学",
          },
          {
            count: 33,
            name: "散文",
            title: "散文",
          },
          {
            count: 28,
            name: "经典",
            title: "经典",
          },
          {
            count: 23,
            name: "现代文学",
            title: "现代文学",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s2755497.jpg",
        binding: "汤靖",
        translator: [],
        catalog: "",
        pages: "414",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s2755497.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s2755497.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s2755497.jpg",
        },
        alt: "https://book.douban.com/subject/1457148/",
        id: "1457148",
        publisher: "浙江文艺出版社",
        isbn10: "7533917669",
        isbn13: "9787533917661",
        title: "经典张爱玲",
        url: "https://api.douban.com/v2/book/1457148",
        alt_title: "",
        author_intro: "",
        summary: "",
        price: "28：00",
      },
      {
        rating: {
          max: 10,
          numRaters: 5,
          average: "0.0",
          min: 0,
        },
        subtitle: "散文",
        author: ["张仁健"],
        pubdate: "2003-05",
        tags: [
          {
            count: 5,
            name: "散文",
            title: "散文",
          },
          {
            count: 4,
            name: "文学",
            title: "文学",
          },
          {
            count: 2,
            name: "长寻书籍",
            title: "长寻书籍",
          },
          {
            count: 2,
            name: "国内文学",
            title: "国内文学",
          },
          {
            count: 2,
            name: "严肃文学",
            title: "严肃文学",
          },
          {
            count: 1,
            name: "高中",
            title: "高中",
          },
          {
            count: 1,
            name: "新华",
            title: "新华",
          },
          {
            count: 1,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s8452115.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "1 蔡元培\n2 梁启超\n3 陈独秀\n4 李大钊\n5 鲁迅\n6 周作人\n7 刘半农\n8 胡适\n9 郭沫若\n10 许地山\n张恨水\n林语堂\n徐志摩\n朱自清\n闻一多\n张爱玲\n丰子恺\n俞平伯\n沈从文\n冰心\n梁实秋\n聂绀弩\n艾芜\n丁玲\n巴金\n戴望舒\n傅雷\n吴伯箫\n张中行\n钱钟书\n季羡林\n杨朔\n严文井\n林海音\n王蒙\n张晓风\n三毛\n",
        pages: "666",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s8452115.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s8452115.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s8452115.jpg",
        },
        alt: "https://book.douban.com/subject/1526393/",
        id: "1526393",
        publisher: "北岳文艺出版社",
        isbn10: "7537824835",
        isbn13: "9787537824835",
        title: "中华百年经典散文",
        url: "https://api.douban.com/v2/book/1526393",
        alt_title: "",
        author_intro: "",
        summary:
          "本书前言淡淡的，只是那么一点的，过去，现在与将来，人生的画卷轻轻地描绘，绘出天，绘出地，绘出山，绘出水；绘出落下的泪，绘出展开的笑……都用那淡淡的笔画随着那淡淡的颜色，人生的佳境便在这淡然中悄然而生了。特色及评论文章节选\n图书目录\n1 蔡元培 2 梁启超 3 陈独秀 4 李大钊 5 鲁迅 6 周作人 7 刘半农 8 胡适 9 郭沫若 10 许地山张恨水林语堂徐志摩朱自清闻一多张爱玲丰子恺俞平伯沈从文冰心梁实秋聂绀弩艾芜丁玲巴金戴望舒傅雷吴伯箫张中行钱钟书季羡林杨朔严文井林海音王蒙张晓风三毛",
        price: "29.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 572,
          average: "8.4",
          min: 0,
        },
        subtitle: "古龙散文选",
        author: ["古龙 著", "刘国辉", "陈晓林 选编"],
        pubdate: "2002-1",
        tags: [
          {
            count: 300,
            name: "古龙",
            title: "古龙",
          },
          {
            count: 146,
            name: "散文",
            title: "散文",
          },
          {
            count: 92,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 62,
            name: "酒",
            title: "酒",
          },
          {
            count: 55,
            name: "杂文",
            title: "杂文",
          },
          {
            count: 54,
            name: "武侠",
            title: "武侠",
          },
          {
            count: 41,
            name: "文学",
            title: "文学",
          },
          {
            count: 40,
            name: "台湾",
            title: "台湾",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s4123614.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "谁来跟我干杯？\n――总代序\n前编：人在江湖\n1 不是幸福\n2 不是离别\n3 不是东西\n4 不是音乐\n5 不是珍贵\n后编：谈武侠小说及其他\n1 牛哥的“三奇”\n2 看《小李飞刀》第一集\n3 谈我看过的武侠小说（一）\n4 谈我看过的武侠小说（二）\n5 谈我看过的武侠小说（三）\n",
        pages: "161",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s4123614.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s4123614.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s4123614.jpg",
        },
        alt: "https://book.douban.com/subject/1207626/",
        id: "1207626",
        publisher: "百花文艺出版社",
        isbn10: "7530631667",
        isbn13: "9787530631669",
        title: "谁来跟我干杯",
        url: "https://api.douban.com/v2/book/1207626",
        alt_title: "",
        author_intro:
          "古龙（1937-1985），本名熊耀华，祖籍江西。14岁时随父母从香港移居台湾读书，不久因父母离异生活陷于困境，靠朋友接济和半工半读念完淡江大学外文系。毕业后，先在台北美军顾问团任职，后专门从事文学创作。古龙以其大量可读性极强的武侠小说享誉文坛，代表作有：《风云第一刀》、《绝代双骄》、《楚留香传奇》系列、《陆小凤传奇》系列等。1985年古龙病逝于台湾。",
        summary:
          "收有古龙的散文《不是幸福》《不是离别》《不是东西》《酒界转生》《黄昏时的小夜曲》《人生如戏》等篇。",
        series: {
          id: "6696",
          title: "侠骨诗心丛书",
        },
        price: "11.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 579,
          average: "8.8",
          min: 0,
        },
        subtitle: "散文、诗与画",
        author: ["[德]赫尔曼·黑塞"],
        pubdate: "2011-6",
        tags: [
          {
            count: 266,
            name: "赫尔曼·黑塞",
            title: "赫尔曼·黑塞",
          },
          {
            count: 141,
            name: "散文",
            title: "散文",
          },
          {
            count: 106,
            name: "德国",
            title: "德国",
          },
          {
            count: 86,
            name: "黑塞",
            title: "黑塞",
          },
          {
            count: 85,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 80,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 76,
            name: "德国文学",
            title: "德国文学",
          },
          {
            count: 75,
            name: "诗歌",
            title: "诗歌",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s6523641.jpg",
        binding: "",
        translator: ["窦维仪"],
        catalog: "",
        ebook_url: "https://read.douban.com/ebook/9063608/",
        pages: "254",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s6523641.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s6523641.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s6523641.jpg",
        },
        alt: "https://book.douban.com/subject/6509470/",
        id: "6509470",
        publisher: "上海译文出版社",
        isbn10: "7532754286",
        isbn13: "9787532754281",
        title: "堤契诺之歌",
        url: "https://api.douban.com/v2/book/6509470",
        alt_title: "",
        author_intro:
          "赫尔曼·黑塞（Hesse Hermann，1877-1962），原籍德国，1923年入瑞士籍,以后长期在瑞士隐居乡间。他被称为德国浪漫派最后一位骑士，其代表作《荒原狼》（1927）曾轰动欧美，被托马斯·曼誉为德国的《尤利西斯》。1946年，“由于他的富于灵感的作品具有遒劲的气势和洞察力，也为崇高的人道主义理想和高尚风格提供了一个范例”，获诺贝尔文学奖。",
        summary:
          "本书作者黑塞（1877-1962）是20世纪欧洲最有影响的小说家之一，也是全世界范围内最受欢迎、影响最大、拥有读者和研究者最多的作家，他的作品已被译成53种语言，742种译本，总发行量达3000多万册，其中德文版600多万册，仅占五分之一，其余2400万册为各种文字的外文版。全世界研究黑塞及其作品的专著达50余种，博士论文2000多篇，刊登在各种报刊杂志上的介绍黑塞及其作品的文章有5000多篇。\n黑塞的作品能在各个不同的历史时期、各个不同的国家和民族中引起共鸣，是因为他的作品可读性强，反映的内容具有多元性，在承继西方人文主义传统思想的同时，又将东方的文化和哲学思想揉合其中。\n\n本书《堤契诺之歌》可以说是黑塞作品的精髓，它是一本散文、诗歌集，亦是作者对他在此之前所有作品的艺术理念、创作方法和哲学思想的归纳、总结和诠释，被许多专家和学者看作是一把开启黑塞思想之门的钥匙。\n书中配有30余幅由作者本人绘制的水彩画和钢笔画，这给作品增添了画龙点睛的作用。",
        ebook_price: "9.99",
        series: {
          id: "8148",
          title: "黑塞文集（精装）",
        },
        price: "32.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 380,
          average: "7.4",
          min: 0,
        },
        subtitle: "台湾学人散文丛书",
        author: ["汉宝德"],
        pubdate: "2009年1月",
        tags: [
          {
            count: 221,
            name: "建筑",
            title: "建筑",
          },
          {
            count: 95,
            name: "汉宝德",
            title: "汉宝德",
          },
          {
            count: 71,
            name: "散文",
            title: "散文",
          },
          {
            count: 53,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 47,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 24,
            name: "艺术",
            title: "艺术",
          },
          {
            count: 23,
            name: "建筑笔记",
            title: "建筑笔记",
          },
          {
            count: 19,
            name: "设计",
            title: "设计",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s3407662.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "260",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s3407662.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s3407662.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s3407662.jpg",
        },
        alt: "https://book.douban.com/subject/3339097/",
        id: "3339097",
        publisher: "上海人民出版社",
        isbn10: "7208083134",
        isbn13: "9787208083134",
        title: "建筑笔记",
        url: "https://api.douban.com/v2/book/3339097",
        alt_title: "",
        author_intro:
          "汉宝德（1934—  ），当代建筑学家，祖籍山东日照。美国哈佛大学建筑硕士、普林斯顿大学建筑硕士。曾任东海大学建筑系主任、中兴大学理工学院院长、自然科学博物馆馆长、台南艺术学院校长、台湾文艺基金会董事长。现任世界宗教博物馆馆长。\n汉宝德老师是台湾建筑界的大师，又常常跨界至艺术、教育，经年撰稿写文，把其对建筑、艺术、美育的理解用浅显易懂的文字传达给大众。他的文字，影响了台湾建筑界的发展。",
        summary:
          "登琨艳（著名设计师）      杨惠姗（琉璃工房创始人）\n联合推荐\n——————————————————\n建筑乃地上之文章，文章亦纸上之建筑\n——————————————————\n编辑推荐：\n从时代背景上说，汉宝德老师是胡适之的信徒，相信理性、自由、民主的价值；从在文学创作谈，他主张文字简明易懂，说理清楚明白，抒情平淡而有普遍性。他以学人的胸怀关注着以建筑为发散点的物理环境、人文环境，从建筑的入眼点来解读文化。虽是清浅散文，却能引发层次思考。\n————————————————————\n作者手绘插图：ttp://www.douban.com/photos/album/21290982/\n——————————————————\n目录及内容简介：\n第一辑：伦敦散记（穿行街头小巷，记录伦敦之景）\n第二辑：欧美建筑之旅（品谈西方建筑，漫步文化之旅）\n第三辑：建筑与文化（文化如何雕琢建筑之外形）\n第四辑：艺术与美育（谈美说画论抽象，书香满纸）",
        series: {
          id: "638",
          title: "台湾学人散文丛书",
        },
        price: "25.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1983,
          average: "8.3",
          min: 0,
        },
        subtitle: "纪伯伦经典散文诗选",
        author: ["纪伯伦"],
        pubdate: "2012-6",
        tags: [
          {
            count: 719,
            name: "纪伯伦",
            title: "纪伯伦",
          },
          {
            count: 416,
            name: "诗集",
            title: "诗集",
          },
          {
            count: 338,
            name: "我的心只悲伤七次",
            title: "我的心只悲伤七次",
          },
          {
            count: 324,
            name: "诗歌",
            title: "诗歌",
          },
          {
            count: 289,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 186,
            name: "文学",
            title: "文学",
          },
          {
            count: 150,
            name: "沙与沫",
            title: "沙与沫",
          },
          {
            count: 130,
            name: "先知",
            title: "先知",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s11117267.jpg",
        binding: "平装",
        translator: ["冰心"],
        catalog:
          "译者序一\n译者序二：我为什么翻译《先知》和《吉檀迦利》\n推荐序：介绍纪伯伦的《先知》和《沙与沫》\n先知\n船的到来\n爱\n婚姻\n孩子\n施与\n饮食\n工作\n欢乐与悲哀\n居室\n衣服\n买卖\n罪与罚\n法律\n自由\n理性与热情\n苦痛\n自知\n教授\n友谊\n谈话\n时光\n善恶\n祈祷\n逸乐\n美\n宗教\n死\n言别\n沙与沫",
        pages: "285",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s11117267.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s11117267.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s11117267.jpg",
        },
        alt: "https://book.douban.com/subject/10732771/",
        id: "10732771",
        publisher: "江苏文艺出版社",
        isbn10: "753995261X",
        isbn13: "9787539952611",
        title: "我的心只悲伤七次",
        url: "https://api.douban.com/v2/book/10732771",
        alt_title: "",
        author_intro:
          "哈利勒·纪伯伦，黎巴嫩著名诗人、作家兼画家，被认为是20世纪与泰戈尔比肩的东方文学大师、二十世纪全世界最杰出的诗人，在西方被誉为“二十世纪的威廉？布莱克”。他和泰戈尔一样都是近代东方文学走向世界的先驱，并称为“站在东西方文化桥梁上的巨人”。\n正如西方世界所描绘的，纪伯伦象是“从东方吹来横扫西方的风暴。”他善于在平易中发掘隽永，诗与画都散发着浪漫与抒情，但在芬芳的背后是理性的思考，是严肃，是冷峻，是令某个人乃至某个民族值得深思的哲理。他那从灵魂深处传来的生命之歌，富有神秘天启预言式的语句，宛如天籁之音，传达出人生的真理，成为融合东西方心灵精髓、超越时空的永恒箴言，为心灵迷失于尘世的人们起着洗涤灵魂的作用。\n纪伯伦足以堪称人类精神修养大师，他的文字历久弥新，传遍了全世界，超越了时空与国界的限制，他的散文诗，大半个世纪以来，驰誉东西方世界，征服了一代又一代的东西方读者。诗人说，它是诗化的哲学；哲人说，它是充满哲理的诗。\n谢婉莹，笔名冰心。著名诗人、作家、翻译家、儿童文学家。她的译作如纪伯伦的《先知》《沙与沫》，泰戈尔的《吉檀迦利》《园丁集》及戏剧集多种，都是公认的文学翻译精品，1995年曾因此经黎巴嫩共和国总统签署授予国家级雪松勋章。她的文学影响超越国界，作品被翻译成各国文字，得到海内外读者的赞赏。\n插画作者简介：约翰·辛格尓·萨金特（John Singer Sargent， 1856年1月12日-1925年4月14日)，世界著名画家，有“现代米开朗琪罗”之称，是19世纪末、20世纪初活跃在欧美的世界最优秀的肖像画大师，同时也是一位卓越的水彩画大师。美国的哈佛大学、耶鲁大学都曾授予他博士学位。在水彩画领域，杰出的光与形的技法处理，受到世界各国的艺术家及艺术爱好者们的广泛赞赏。",
        summary:
          "《我的心只悲伤七次:纪伯伦经典散文诗选》收录了著名诗人纪伯伦最著名的两部诗集：代表真理的“小圣经”《先知》和智慧格言集《沙与沫》，由著名文学家冰心翻译，是一本关于生命、艺术、爱情、人生的箴言书。“一花一世界，一沙一天国”，在纪伯伦的笔下，四季流转，云朵变幻，生命的解答蕴藏其中。",
        price: "32.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 1,
          average: "0.0",
          min: 0,
        },
        subtitle: "",
        author: ["谢楚发"],
        pubdate: "1998-01",
        tags: [
          {
            count: 2,
            name: "文学理论",
            title: "文学理论",
          },
          {
            count: 1,
            name: "古代",
            title: "古代",
          },
          {
            count: 1,
            name: "入门",
            title: "入门",
          },
          {
            count: 1,
            name: "中国",
            title: "中国",
          },
          {
            count: 1,
            name: "0.文学研究",
            title: "0.文学研究",
          },
          {
            count: 1,
            name: ".已有",
            title: ".已有",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s28038119.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s28038119.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s28038119.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s28038119.jpg",
        },
        alt: "https://book.douban.com/subject/1015542/",
        id: "1015542",
        publisher: "人民文学出版社",
        isbn10: "7020018262",
        isbn13: "9787020018260",
        title: "散文",
        url: "https://api.douban.com/v2/book/1015542",
        alt_title: "",
        author_intro: "",
        summary: "",
        series: {
          id: "28856",
          title: "中国古代文体丛书",
        },
        price: "3.90",
      },
      {
        rating: {
          max: 10,
          numRaters: 340,
          average: "8.0",
          min: 0,
        },
        subtitle: "劳伦斯散文精选",
        author: ["D.H·劳伦斯"],
        pubdate: "2006-9",
        tags: [
          {
            count: 128,
            name: "D·H·劳伦斯",
            title: "D·H·劳伦斯",
          },
          {
            count: 73,
            name: "散文",
            title: "散文",
          },
          {
            count: 51,
            name: "劳伦斯",
            title: "劳伦斯",
          },
          {
            count: 48,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 35,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 32,
            name: "英国文学",
            title: "英国文学",
          },
          {
            count: 30,
            name: "文学",
            title: "文学",
          },
          {
            count: 28,
            name: "英国",
            title: "英国",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s9119821.jpg",
        binding: "平装",
        translator: ["姚暨荣"],
        catalog:
          "目录\n在文明的束缚下\n论做人\n人生\n论人的命运\n个人意识与社会意识\n论《意识的社会基础》\n真正的研究\n生活的真谛\n想一想自己\n惊恐之状\n画的介绍\n民主\n好人\n安宁的现实\n论信教\n乏味的伦敦\n在文明的束缚下\n生活中的赞美诗\n性与可爱\n性与可爱\n色情与淫秽\n爱情\n我们彼此需要\n没有人爱我\n骄横的女人与懦弱的男人\n全副身心\n文学与艺术\n小说和情感\n道德与小说\n小说为什么重要\n作画\n墙上的画\n诗的实质\n书\n瞧，这个人\n我的小传\n译后记\n附录：劳伦斯著作年表",
        pages: "220",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s9119821.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s9119821.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s9119821.jpg",
        },
        alt: "https://book.douban.com/subject/1884499/",
        id: "1884499",
        publisher: "新华出版社",
        isbn10: "7501176310",
        isbn13: "9787501176311",
        title: "在文明的束缚下",
        url: "https://api.douban.com/v2/book/1884499",
        alt_title: "",
        author_intro:
          "戴·赫·劳伦斯，（David Herbert Lawrence，1885～1930）英国诗人、小说家、散文家。出生于矿工家庭，当过屠户会计、厂商雇员和小学教师，曾在国内外漂泊十多年，对现实抱批判否定态度。他写过诗，但主要写长篇小说，共有10部，最著名的为《虹》（1915）、《爱恋中的女人》（1921）和《查太莱夫人的情人》（1928）。\r\n劳伦斯生于1885年。父亲是矿工，缺少教育；母亲出身上流社会，有良好的修养。这种文化上的差异，使他们经常吵吵闹闹。但这种差异使劳伦斯从父亲那里得到了丰富的社会经验，从母亲那里至高无上的关怀。也许是母亲过分溺爱，劳伦斯有严重的恋母情结。他在给朋友的信中说：“我们相互爱着，几乎像丈夫跟妻子那样的爱，同时又是母亲与儿子的爱。我们俩就像一个人，彼此那样敏感，我们之间不要语言。这挺可怕，弄得我有些方面不正常。”\r\n劳伦斯是最富想象力的作家，他如不过早地逝世，肯定会有更惊世的作品问世，也许更会被列为禁书。",
        summary:
          "《在文明的束缚下》是劳伦斯散文合集，收录了他绝大多数的散文篇目，堪称精品集。主要分为对文明的反思、讨论文学和艺术、对两性关系的分析和对自己的评述几大部分。二十年前，劳伦斯的作品当属“前卫”，尽管作品完成于更早的几十年前。思想之门刚刚打开的国人，读劳伦斯的作品感受是震惊。尽管劳伦斯认为自己是思想家，但是读者们感知的恐怕更多是其中的“性”的部分。二十年后，重新出版劳伦斯作品是为了让读者在喧嚣后以冷静的心重新阅读和体会。姚暨荣先生是解放后最早翻译劳伦斯作品的译者之一，这次重新出版，译者又重新梳理了文字。选定的作品是劳伦斯夫人的回忆录和劳伦斯的散文集。读了回忆录才能更好地理解劳伦斯在创作时的境遇，由此体会到文字深层内涵。而散文集没有延用首次出版时的《性与可爱》，而是选用了更能体现劳伦斯思想精髓的《在文明的束缚下》。其实，所有的性啊、解放啊、反抗啊，都可归于这个标题，原来劳伦斯要摆脱的是文明的束缚。",
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 691,
          average: "8.6",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993",
        tags: [
          {
            count: 184,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 78,
            name: "散文",
            title: "散文",
          },
          {
            count: 37,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 24,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 22,
            name: "雨季不再来",
            title: "雨季不再来",
          },
          {
            count: 17,
            name: "台湾文学",
            title: "台湾文学",
          },
          {
            count: 15,
            name: "文学",
            title: "文学",
          },
          {
            count: 14,
            name: "小说",
            title: "小说",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s3135821.jpg",
        binding: "平装",
        translator: [],
        catalog: "\n      ",
        pages: "165",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s3135821.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s3135821.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s3135821.jpg",
        },
        alt: "https://book.douban.com/subject/1471693/",
        id: "1471693",
        publisher: "湖南文艺出版社",
        isbn10: "7540411619",
        isbn13: "9787540411619",
        title: "雨季不再來",
        url: "https://api.douban.com/v2/book/1471693",
        alt_title: "",
        author_intro:
          "三毛 台湾著名作家，1943年3月26日出生于重庆，浙江省定海县人。本名为陈懋平，1946年改名陈平，笔名“三毛”。1964年进入文化大学哲学系，肄业后曾留学欧洲，婚后定居西属撒哈拉沙漠加那利岛，并以当地的生活为背景，写出一连串情感真感真挚的作品。1981年因到台湾，曾在文化大学任教，1984年辞辞去教职，专职从事写作和演讲。1991年1月4日去世，享年48岁。 三毛的足迹遍及世界各地，平生著作、译作十分丰富，其中《撒哈拉的故事》、《雨季不再来》、《哭泣的骆驼》、《我的宝贝》、《闹学记》、《滚滚红尘》等散文、小说、剧本更是脍炙人口，在全球华人社会广为流传，在大陆风靡一时，影响了整整一代人。",
        summary:
          "本书介绍：当三毛还是二毛的时候，写下了《雨季不再来》，这些在她17岁到22岁之间所发表的文稿，真实呈现出三毛少女时代的成长成感受。\n看过《撒哈拉的故事》，再回顾三毛在《雨季不再来》中透露的纯势情怀和异质美感，可以清楚地印证她传奇般性格的痕迹。",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "3.90",
      },
      {
        rating: {
          max: 10,
          numRaters: 683,
          average: "8.9",
          min: 0,
        },
        subtitle: "三毛散文全编",
        author: ["三毛"],
        pubdate: "1993-7",
        tags: [
          {
            count: 224,
            name: "三毛",
            title: "三毛",
          },
          {
            count: 70,
            name: "散文",
            title: "散文",
          },
          {
            count: 44,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 34,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 30,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 24,
            name: "温柔的夜",
            title: "温柔的夜",
          },
          {
            count: 18,
            name: "文学",
            title: "文学",
          },
          {
            count: 14,
            name: "当代文学",
            title: "当代文学",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s2972773.jpg",
        binding: "平装",
        translator: [],
        catalog: "\n      ",
        pages: "177",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s2972773.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s2972773.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s2972773.jpg",
        },
        alt: "https://book.douban.com/subject/1471696/",
        id: "1471696",
        publisher: "湖南文艺出版社",
        isbn10: "7540411627",
        isbn13: "9787540411626",
        title: "温柔的夜",
        url: "https://api.douban.com/v2/book/1471696",
        alt_title: "",
        author_intro: "",
        summary: "\n      ",
        series: {
          id: "2082",
          title: "三毛散文全编",
        },
        price: "4.10",
      },
      {
        rating: {
          max: 10,
          numRaters: 596,
          average: "8.4",
          min: 0,
        },
        subtitle: "席慕蓉散文典藏版",
        author: ["席慕蓉"],
        pubdate: "2011-4-1",
        tags: [
          {
            count: 259,
            name: "席慕容",
            title: "席慕容",
          },
          {
            count: 157,
            name: "散文",
            title: "散文",
          },
          {
            count: 92,
            name: "散文＆随笔",
            title: "散文＆随笔",
          },
          {
            count: 65,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 65,
            name: "蝶翅",
            title: "蝶翅",
          },
          {
            count: 57,
            name: "清新",
            title: "清新",
          },
          {
            count: 50,
            name: "温暖",
            title: "温暖",
          },
          {
            count: 47,
            name: "席慕蓉",
            title: "席慕蓉",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s6383523.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "篇一  窗前的青春003／谦卑的心004／母亲最尊贵005／窗前的青春006／白色山茶花007／幸福008／理想009／明镜010／岁月011／再会012／我的苦闷014／哭泣的女孩016／夜校生018／春回020／生日卡片023／母子024／夫妻026／同学028／同胞    篇二  栀子花031／回顾所来径033／我的选择034／孤独的行路者035／严父036／贝壳037／荷叶038／马樱丹040／鸡蛋花042／十字路口043／台湾百合045／争夺047／栀子花049／唯美    篇三  孤独的树053／桐花056／眠月站059／飞翔061／独白063／镜里与镜外065／给我一个岛067／天真纯朴的心069／书与时光——写给栋栋071／孤独的树073／此刻075／我的抗议077／寒夜079／开端081／雾里    篇四  意向的暗记087／回音089／躯壳091／意向的暗记093／昨日095／“古典主义”097／山芙蓉099／绿水·天祥102／山草小住104／本分106／驿站108／无题110／此生·此世·此时112／昔时    篇五  生命的讯息117／成见119／生命的讯息122／伤痕125／窗前127／唯一？129／诗教131／诗人啊！诗人！——之一133／诗人啊！诗人！——之二135／待遇    篇六  透明的哀伤139／雾布一之一142／雾布——之二144／雾布——之三146／雾布——之四148／雾布——之五150／恍如一梦——给隐地152／蝶翅154／透明的哀伤155／河流与歌157／泰姬玛哈158／面貌160／荷田手记——之一162／荷田手记——之二    篇七  写生167／暑假·暑假169／“扎须客”俱乐部171／写生173／圆梦175／昨日177／？！179／骗婚记181／妆台183／魔手185／旧事187／海洋189／默契191／虚幻的栅栏193／琴音195／徒然草    篇八  芳香盈路199／常玉201／论席慕蓉203／诗与诗人205／傅先生207／傅太太209／芳香盈路211／睡莲213／山樱216／等待中的岁月218／山火221／山中日课223／火种225／花之音227／三句话229／说创作一之一231／说创作一之二233／美术课235／“品位”两则237／美术教育239／最后的一笔    篇九  写给生命245／画幅之外的248／写给生命253／妇人之见258／玛利亚262／老伊凡265／阿克塞268／童心与童画271／莲池276／矛盾篇279／永远的诱惑",
        pages: "289",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s6383523.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s6383523.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s6383523.jpg",
        },
        alt: "https://book.douban.com/subject/6429571/",
        id: "6429571",
        publisher: "上海文艺出版社",
        isbn10: "7532141276",
        isbn13: "9787532141272",
        title: "蝶翅",
        url: "https://api.douban.com/v2/book/6429571",
        alt_title: "",
        author_intro:
          "席慕蓉\n祖籍内蒙古，出生于四川，童年在香港度过，成长在台湾。台湾师范大学艺术系毕业后，赴比利时深造，专攻油画。1966年以第一名的成绩毕业于布鲁塞尔皇家艺术学院。曾获比利时皇家金牌奖、布鲁塞尔市政府金牌奖、1968年欧洲美协两项铜牌奖及1987年台湾中兴文艺奖章新诗奖等。\n曾在国内外举行十余次个人画展。出版有诗集、画册、散文集及选本等六十余种。曾任台湾新竹师范学院油画及素描专职教授。现为专业画家，并为内蒙古大学、南开大学、宁夏大学、南通工学院、呼偏贝尔学院及呼和浩特民族学院六校的名誉（或客座）教授，内蒙古博物院荣誉馆员，亦是鄂温克族与鄂偏春族的荣誉公民。",
        summary:
          "《蝶翅》是一本散文集，记录了作者有关艺术，有关美，有关生命的思考，也让读者感受到了一些自己曾经忽略的感动。《蝶翅》一共分九章，文章淡淡的，有点暖，有丝凉，又有些剪不断理还乱的愁绪在里面。整部散文集平实易懂，书中文字渗出的那些温暖和希望让人不由自主的平静下来，余味无穷。\n\n岁月飞逝，世事果然都如浮光掠影。\n可是，那炽热的红字刻在灰黑色的纸页间，如蝶翅般颤动着的片段，\n不知道为什么，在又隔了这么多年之后， 依旧会不时地飞进她的心中。",
        series: {
          id: "10799",
          title: "席慕容 上海文艺出版社",
        },
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 886,
          average: "8.9",
          min: 0,
        },
        subtitle: "大家散文文存•完美典藏版",
        author: ["汪曾祺"],
        pubdate: "2012-8",
        tags: [
          {
            count: 224,
            name: "汪曾祺",
            title: "汪曾祺",
          },
          {
            count: 191,
            name: "散文",
            title: "散文",
          },
          {
            count: 116,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 106,
            name: "美食",
            title: "美食",
          },
          {
            count: 68,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 53,
            name: "生活",
            title: "生活",
          },
          {
            count: 52,
            name: "中国",
            title: "中国",
          },
          {
            count: 49,
            name: "文学",
            title: "文学",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s11133716.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "第一辑人间草木\n花园\n昆明的雨\n夏天\n冬天\n人间草木\n葡萄月令\n北京人的遛鸟\n罗汉\n草巷口\n岁朝清供\n第二辑五味\n故乡的食物\n故乡的元宵\n昆明菜\n五味\n肉食者不鄙\n手把肉\n豆腐\n贴秋膘\n栗子\n豆汁儿\n寻常茶话\n第三辑脚底烟云\n西山客话\n四川杂忆\n初访福建\n严子陵钓台\n泡茶馆\n七载云烟\n西南联大中文系\n第四辑师友相册\n沈从文先生在西南联大\n星斗其文，赤子其人\n金岳霖先生\n闻一多先生上课\n第五辑平淡人生\n我的祖父祖母\n无事此静坐\n我的父亲\n我的母亲\n多年父子成兄弟\n随遇而安\n我的家\n我的创作生涯\n文章杂事",
        pages: "243",
        images: {
          small:
            "https://img9.doubanio.com/view/subject/s/public/s11133716.jpg",
          large:
            "https://img9.doubanio.com/view/subject/l/public/s11133716.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s11133716.jpg",
        },
        alt: "https://book.douban.com/subject/11527556/",
        id: "11527556",
        publisher: "江苏文艺出版社",
        isbn10: "7539952547",
        isbn13: "9787539952543",
        title: "五味",
        url: "https://api.douban.com/v2/book/11527556",
        alt_title: "",
        author_intro:
          "汪曾祺（1920.3.5～1997.5.16），江苏高邮人，中国当代文学史上著名的作家、散文家、戏剧家，京派作家的代表人物。早年毕业于西南联大，历任中学教师、北京市文联干部、《北京文艺》编辑、北京京剧院编辑。在短篇小说创作上颇有成就。著有小说集《邂逅集》，小说《受戒》《大淖记事》，散文集《蒲桥集》，还写了他的父亲（多年父子成兄弟），大部分作品收录在《汪曾祺全集》中。被誉为“抒情的人道主义者，中国最后一个纯粹的文人，中国最后一个士大夫。”其散文《端午的鸭蛋》被选入中学语文课本。",
        summary:
          "大家散文文存•完美典藏版\n十年打磨 众多专家学者权威修订 完美典藏9卷本\n鲁迅、周作人、徐志摩、朱自清、丰子恺、汪曾祺、季羡林、张中行、黄裳\n9位文学大师700篇经典散文\n纪念那些回不去的文学时光  在最美的文字中遇见真实的自己\n倾情赠送创意藏书票",
        series: {
          id: "15287",
          title: "大家散文文存·完美典藏版",
        },
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 3460,
          average: "8.4",
          min: 0,
        },
        subtitle: "北岛散文集",
        author: ["北岛"],
        pubdate: "2004-10",
        tags: [
          {
            count: 1653,
            name: "北岛",
            title: "北岛",
          },
          {
            count: 1032,
            name: "散文",
            title: "散文",
          },
          {
            count: 478,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 272,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 248,
            name: "诗人",
            title: "诗人",
          },
          {
            count: 184,
            name: "文学",
            title: "文学",
          },
          {
            count: 175,
            name: "中国",
            title: "中国",
          },
          {
            count: 138,
            name: "诗歌",
            title: "诗歌",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1134203.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "自序\n第一辑 空山\n艾伦•金斯堡\n诗人之死\n盖瑞•施耐德\n纽约骑士\n克雷顿和卡柔\n异乡人迈克\n上帝的中国儿子\n约翰和安\n美国房东\n帕斯\n蓝房子\n空山\n鲍尔•博鲁姆\n布莱顿•布莱顿巴赫\n依萨卡庄园的主人\n马丁国王\n第二辑 如果天空不死\n彭刚\n波兰来客\n胡金铨导演\n单线联络\n师傅\n芥末\n如果天空不死\n怪人家楷\n刘伯伯\n第三辑 乌鸦\n乌鸦\n猫的故事\n女儿\n夏天\n纽约一日\n后院\n乡下老鼠\n午餐\n杜伦\n搬家记\n开车记\n赌博记\n朗诵记\n饮酒记\n第四辑 他乡的天空\n南非行\n午夜之门\n巴黎故事\n卡夫卡的布拉格\n纽约变奏\n他乡的天空\n附录\n游历，中文是我惟一的行李\n北岛创作年表",
        pages: "295",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1134203.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1134203.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1134203.jpg",
        },
        alt: "https://book.douban.com/subject/1008732/",
        id: "1008732",
        publisher: "汕头大学出版社",
        isbn10: "7810368710",
        isbn13: "9787810368711",
        title: "失败之书",
        url: "https://api.douban.com/v2/book/1008732",
        alt_title: "失败之书",
        author_intro:
          "原名赵振开，祖籍浙江湖州，生于北京。1969年当建筑工人，后在某公司工作。80年代末移居国外。著有诗集《太阳城札记》、 《北岛诗选》、《北岛顾城 诗选》等。\n北岛的诗歌创作开始于十年动乱后期，反映了从迷惘到觉醒的一代青年的心声， 十年动乱的荒诞现实，造成了诗人独特的冷抒情”的方式――出奇的冷静和深刻的思辨性。他在冷静的观察中，发现了“那从蝇眼中分裂的世界”如何造成人的价值的全面崩溃、人性的扭曲和异化。他想“通过作品建立一个自己的世界，这是一个真诚而独特的世界，正直的世界，正义和人性的世界。” 在这个世界中，北岛建立了自己的“理性法庭”，以理性和人性为准绳，重新确定人的价值，恢复人的本性；悼念烈士，审判刽子手；嘲讽怪异和异化的世界，反思历史和现实；呼唤人性的富贵，寻找“生命的湖”和红帆船”。清醒的思辨与直觉思维产生的隐喻、象征意象相结合，是北岛诗显著的艺术特征，具有高度概括力的悖论式警句，造成了北岛诗独有的振聋发聩的艺术力量。",
        summary:
          "《失败之书》是诗人北岛的散文集，这本散文是诗人在流浪的路上的一些采撷。诗人北岛说，散文和漂泊之间，按时髦的说法，有一种互文关系：散文是文字中的漂泊，而漂泊是地理与社会意义上的书写。在一九八九年到一九九三四年间，他曾住过七个国家，搬了十五次家，这就是一种散文语境。北岛自80年代末移居国外后，就开始了其漂泊的一生，在流浪中不断进行创作……",
        price: "28.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 276,
          average: "8.6",
          min: 0,
        },
        subtitle: "叔本华散文选",
        author: ["叔本华"],
        pubdate: "2013-4",
        tags: [
          {
            count: 260,
            name: "叔本华",
            title: "叔本华",
          },
          {
            count: 204,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 117,
            name: "思考",
            title: "思考",
          },
          {
            count: 82,
            name: "散文",
            title: "散文",
          },
          {
            count: 77,
            name: "心灵",
            title: "心灵",
          },
          {
            count: 60,
            name: "存在主义",
            title: "存在主义",
          },
          {
            count: 46,
            name: "自由",
            title: "自由",
          },
          {
            count: 46,
            name: "德国",
            title: "德国",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s26558830.jpg",
        binding: "",
        translator: ["张宁"],
        catalog:
          "人世的命运\n生命的旅程\n论人世的痛苦\n论生存的虚无\n“灵魂不朽”对话录\n自由意志与宿命论\n通往救赎之路\n人的自身\n人的所有\n论天才\n论名誉\n论名声\n论批评\n论教育\n论女人\n论噪音\n关于疯狂\n论自杀\n关于性格\n观相论\n阅读与书籍\n关于几种文学形式的讨论\n论作者\n论风格\n论学者\n论拉丁文的研究\n天才与美德\n心理散论\n独自思考\n泛神论略谈\n人生智慧之警句\n杂喻\n要么孤独，要么庸俗",
        pages: "353",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s26558830.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s26558830.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s26558830.jpg",
        },
        alt: "https://book.douban.com/subject/24301821/",
        id: "24301821",
        publisher: "江苏文艺出版社",
        isbn10: "7539960361",
        isbn13: "9787539960364",
        title: "要么孤独要么庸俗",
        url: "https://api.douban.com/v2/book/24301821",
        alt_title: "",
        author_intro: "",
        summary:
          "《世界大师散文坊•要么孤独要么庸俗:叔本华散文选》内容简介：常识，于社会而言是公民意识，于个人而言则是一种觉悟。这是一本常识普及书，相对于梁文道先生娓娓道来的方式，阅读它需要多一点脑力。某种意义上，这位出身富二代的德国怪老头就是治愈系的开山鼻祖。\n尼采在阅读他的著作时感慨道，“就犹如一处森林高地——在这里，我们深深地呼吸着清新的空气，整个人感觉耳目一新，重又充满了勃勃生机”。",
        series: {
          id: "33571",
          title: "世界大师散文坊",
        },
        price: "28.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 442,
          average: "7.9",
          min: 0,
        },
        subtitle: "季羡林经典散文新结集",
        author: ["季羡林"],
        pubdate: "2007-9-1",
        tags: [
          {
            count: 162,
            name: "季羨林",
            title: "季羨林",
          },
          {
            count: 95,
            name: "散文",
            title: "散文",
          },
          {
            count: 76,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 54,
            name: "思考",
            title: "思考",
          },
          {
            count: 43,
            name: "人文",
            title: "人文",
          },
          {
            count: 29,
            name: "文学",
            title: "文学",
          },
          {
            count: 24,
            name: "散文，随笔",
            title: "散文，随笔",
          },
          {
            count: 24,
            name: "季羡林",
            title: "季羡林",
          },
        ],
        origin_title: "",
        image: "https://img9.doubanio.com/view/subject/m/public/s8898955.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "第一篇 纵浪大化中\n人生/3\n再谈人生/4\n人生的意义与价值/5\n不完满才是人生/7\n世态炎凉/9\n走运与倒霉/10\n缘分与命运/11\n做人与处世/13\n牵就与适应/14\n谦虚与虚伪/15\n容忍/17\n时间/18\n成功/21\n爱情/22\n知足知不足/26\n有为有不为/27\n漫谈伦理道德/28\n论朋友/35\n论压力/36\n谈孝/37\n老年谈老/39\n老年四“得”/42\n老年十忌/43\n八十述怀/55\n梦游21世纪/58\n迎新怀旧/60\n新世纪新千年寄语/64\n九十述怀/65\n九三述怀/72\n狗年元旦抒怀/75\n九十五岁初度/77\n第二篇 学海泛槎\n国学漫谈/83\n国学日益为全世界所重视但仍任重而道远/86\n略说中国传统文化及其特点/87\n从宏观上看中国文化/90\n传统文化与现代化/102\n21世纪：东方文化的时代/104\n西方不亮东方亮/108\n东学西渐与“东化”/116\n“天人合一”新解/124\n我们要奉行“送去主义”/137\n“天下第一好事，还是读书”/138\n对我影响最大的几本书/140\n我最喜爱的书/141\n藏书与读书/144\n勤奋、天才（才能）与机遇/146\n才、学、识/147\n如何搜集资料/149\n如何利用时间/150\n没有新意，不要写文章/151\n学术良心或学术道德/154\n思想家与哲学家/155\n辞“国学大师”/157\n辞学界（术）泰斗/158\n辞“国宝”/158\n第三篇 流年碎影\n陈寅恪先生的道德文章/167\n陈寅恪先生的治学方法/169\n中国的考据学/170\n德国的考据学/171\n中国文化的内涵/174\n外来文化与本土文化/177\n文化与气节/179\n爱国主义/180\n陈寅恪先生一家三代的爱国主义/181\n晚节善终大节不亏——悼念冯芝生（友兰）先生/185\n汤用彤先生的为人与为学/189\n朱光潜先生的为人与为学/191\n记张岱年先生/195\n为胡适说几句话/196\n我记忆中的老舍先生/200\n回忆梁实秋先生/203\n站在胡适之先生墓前/205\n扫傅斯年先生墓/214\n痛悼钟敬文先生/217\n悼念邓广铭先生/219\n悼组缃/222\n悼巴老/226\n悼念沈从文先生/227\n痛悼克家/231\n怀念乔木/233\n悼念赵朴老/238\n元旦思母/240\n我的家/241\n第四篇 相期以茶\n一个预言的实现/247\n爱国与奉献/248\n再谈爱国主义/249\n温馨，家庭不可或缺的气氛/251\n关于人的素质的几点思考/253\n当时只道是寻常/258\n我的座右铭/259\n座右铭（老年时期）/260\n我的美人观/261\n赞“代沟”/264\n笑着走/267\n封笔问题/268\n我害怕“天才”/269\n目中无人/270\n大放光明/272\n西苑医院/277\n艰苦挣扎/278\n三○一医院/280\n死的浮想/281\n病房里的日常生活/282\n简短的评估/284\n反躬自省/286\n医生也要向病人学点什么/291\n对未来的悬思/293\n回家/294\n三进宫/297\n唐常建的一首诗/302\n中西医学的结合问题/303\n白衣天使新赞/305\n护士长/307",
        pages: "309",
        images: {
          small: "https://img9.doubanio.com/view/subject/s/public/s8898955.jpg",
          large: "https://img9.doubanio.com/view/subject/l/public/s8898955.jpg",
          medium:
            "https://img9.doubanio.com/view/subject/m/public/s8898955.jpg",
        },
        alt: "https://book.douban.com/subject/2279756/",
        id: "2279756",
        publisher: "陕西师范大学出版社",
        isbn10: "7561338155",
        isbn13: "9787561338155",
        title: "阅世心语",
        url: "https://api.douban.com/v2/book/2279756",
        alt_title: "",
        author_intro:
          "季羡林，1911年出生于山东省清平县(现并入临清市)。曾在济南三合街小学、济南一中、山东大学就学。1930年考入清华大学西洋文学系。1935年考取清华大学与德国的交换研究生，赴德国入哥廷根大学学习梵文、巴利文和吐火罗文等。1941年获哲学博士学位。1946年回国，同年秋，经陈寅恪推荐，季羡林被聘为北京大学教授，创建东方语文系，任北京大学教授兼东方语言文学系主任。1956年当选为中国科学院哲学社会科学部委员。19 78年任北京大学副校长、中国社会科学院与北京大学合办的南亚研究所所长。1984年研究所分设，改任北京大学南亚东南亚研究所所长。他先后担任中国外国文学学会会长、中国南亚学会会长、中国民族古文字学会名誉会长、中国语言学会会长、中国外语教学研究会会长、中国高等教育学会副会长和中国敦煌吐鲁番学会会长等。著作已经汇编成《季羡林文集》，共有24卷，内容包括印度古代语言、中印文化关系、印度历史与文化、中国文化和东方文化、佛教、比较文学与民间文学、糖史、叶火罗文、散文、序跋以及梵文与其他语种文学作品的翻译。",
        summary:
          "季羡林先生是著名学者、国学大师、同时它还是著名的散文大家。他襟怀坦荡、学贯中西，读他的散文是一种享受，开怀释卷，典雅清丽的文字拂面而来，纯朴而不乏味，情浓而不矫作，庄重而不板滞，典雅而不雕琢。无论记人、状物或摹事，笔下流淌的是炙热的人文情怀，充满着趣味和韵味。本书收录了季羡林先生关于人生、治学、生活等方面的文章，从中可以窥见国学大师的生活态度，耄耋老人的人生感悟、对于人生意义与价值的追寻、缘分与命运、做人与处世、容忍、成功、知足、朋友、毁誉、压力、长寿之道、伦理道德等方面。是学术大家季羡林先生结合自己九十多年的生活体验，对于人生和世事的感悟的集大成之作。",
        price: "29.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 653,
          average: "8.3",
          min: 0,
        },
        subtitle: "刘亮程自选集 ·散文",
        author: ["刘亮程"],
        pubdate: "2013-10-1",
        tags: [
          {
            count: 173,
            name: "散文",
            title: "散文",
          },
          {
            count: 137,
            name: "刘亮程",
            title: "刘亮程",
          },
          {
            count: 102,
            name: "农村",
            title: "农村",
          },
          {
            count: 78,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 64,
            name: "文学",
            title: "文学",
          },
          {
            count: 63,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 62,
            name: "一个人的村庄",
            title: "一个人的村庄",
          },
          {
            count: 55,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s27057121.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "第一辑 人畜共居的村庄\n狗这一辈子\t3\n我改变的事物\t6\n通驴性的人\t10\n逃跑的马\t16\n与虫共眠\t23\n冯四\t25\n剩下的事情\t33\n住多久才算是家\t56\n人畜共居的村庄\t63\n村东头的人和村西头的人\t66\n黄沙梁\t69\n春天的步调\t80\n干点错事\t87\n别人的村庄\t90\n寒风吹彻\t99\n野地上的麦子\t106\n一个人的村庄\t115\n第二辑 风中的院门\n风中的院门\t141\n炊烟是村庄的根\t142\n鸟叫\t144\n捉迷藏\t150\n风改变了所有人的一生\t159\n天边大火\t161\n谁的影子\t165\n那时候的阳光和风\t167\n共同的家\t170\n两条狗\t174\n永远一样的黄昏\t176\n最后一只猫\t178\n追狗\t181\n两窝蚂蚁\t184\n我的树\t189\n树会记住许多事\t192\n我认识那根木头\t196\n老根底子\t201\n一个长梦\t204\n老皇渠村的地窝子\t211\n春天多远\t218\n高处\t224\n谁惊扰了我\t225\n我受的教育\t227\n韩老二的死\t228\n村庄的头\t233\n走着走着剩下我一个人\t235\n偷苞谷的贼\t242\n空气中多了一个人的呼吸\t250\n一场叫刘二的风\t253\n第三辑 家园荒芜\n只有故土\t257\n一个人回来 258\n走近黄沙梁\t263\n扔掉的路\t266\n有人死了\t268\n房子的主人回来了\t275\n一顿晚饭\t283\n好多树\t286\n留下这个村庄\t290\n只剩下风\t294\n闭着眼睛走路\t296\n父亲\t301\n木匠\t304\n坑洼地\t308\n一截土墙\t311\n狗全挣死了\t316\n两个村子\t320\n清点人数\t324\n一村懒人\t328\n成长\t333\n大树根\t335\n那些鸟会认人\t341\n坡上的村子\t344\n我们家的一段路\t348\n远远的敲门声\t353\n家园荒芜\t363\n柴禾\t376\n我的死 380\n谁喊住我\t386\n今生今世的证据\t387\n我挡住了什么\t390\n最后时光\t393\n寻找“一个人的村庄”\t397",
        pages: "432",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s27057121.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s27057121.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s27057121.jpg",
        },
        alt: "https://book.douban.com/subject/25718753/",
        id: "25718753",
        publisher: "浙江文艺出版社",
        isbn10: "7533937570",
        isbn13: "9787533937577",
        title: "一个人的村庄",
        url: "https://api.douban.com/v2/book/25718753",
        alt_title: "",
        author_intro:
          "刘亮程\n1962年生，新疆沙湾县人。种过地，放过羊，当过十多年农机管理员，现任新疆作协副主席，被誉为“乡村哲学家”和“20世纪中国最后的散文家”，是继沈从文、汪曾祺之后，当代作品最经典，最常销的乡土文学作家。\n著有诗集《晒晒黄沙梁的太阳》，散文集《一个人的村庄》《在新疆》及长篇散文《虚土》，长篇小说《凿空》等。《鸟叫》《我改变的事物》《对一朵花微笑》《寒风吹彻》《今生今世的证据》等多篇作品入选内地和香港小学、中学、大学教材。\n刘亮程的写作赓续着中国悠久灿烂的散文传统。他单纯而丰饶的生命体验来自村庄和田野，以中国农民在苍茫大地上的生死衰荣，庄严地揭示了民族生活中素朴的真理，在对日常岁月的诗意感悟中通向“人的本来”。他的语言素淡、明澈，充满欣悦感和表达事物的微妙肌理，展现了汉语所独具的纯真和瑰丽。\n——冯牧文学奖授奖词\n这些年来，刘亮程醉心于新疆的风土人情、民俗文化，慢慢地感受、慢慢地记录。他的写作姿态、讲述节奏，乃至关注的切入点，都呈现出独到之处。他写耳闻目睹的新疆风物、凡人轶事，也写自己的亲情、交游、内心触动，但他往往透过上述内容，深入到人的精神世界、信仰层面，深入到风景和遗迹背后的地理历史背景。\n——《中华读书报》2012十大好书评语\n刘亮程是中国二十世纪的最后一位散文家……他的作品，阳光充沛，令人想起高更笔下的塔西提岛，但是又没有那种原始的浪漫情调，在那里夹杂地生长着的，是一种困苦，一种危机，一种天命中的无助、快乐和幸福。\n——林贤治（40后代表作家，著名学者）\n真是很少读到这么朴素、沉静而又博大、丰富的文字了。我真是很惊讶作者是怎么在黄沙滚滚的旷野里，同时获得里对生命和语言如此深刻的体验。在这片垃圾遍地、精神腐败、互相复制的沙漠上，谈到刘亮程的这组散文，真有来到绿洲的喜悦和安慰。\n——李锐（50后代表作家，著名小说家）\n刘亮程是一个善意到家的人，他对世界没有什么苛刻的要求，到处都充满了欢喜，他见什么都很欢喜，见什么都顺眼，哪怕是一只偷吃他麦穗的老鼠他也很顺眼，哪怕是一只吸了他血的蚊子，他也很顺眼，在他身上睡觉的虫子，他同样顺眼。这种顺眼正是源自他内心的善意。他以这种善意与世界相处。\n——摩罗（60后代表作家，著名学者）\n他站在村庄中心，目不斜视，缓缓写尽一切温暖的踏实的事物：人畜共处的村庄，柔软欢欣的日常生活细节，古老庄严的秩序，公平而优美的命运。一只手写出，一只手遮盖，像呵护火苗一样呵护一个一个的字眼，待它们渐渐站稳了才松开手，看着它们一个一个孤零零地站在无边无际的空旷世界里，一动也不敢动。\n——李娟（70后代表作家）\n我总是喜欢读一些和自己的生活比较贴近的文章，可是刘亮程的书是个例外。我是个城市里长大的孩子，对农村最大的印象就是大片大片的田野以及田野上七零八落的牲口。可是刘亮程却将他居住的村庄写出了世外桃源的味道，甚至有点伊甸园的味道。\n——郭敬明（80后代表作家）\n《凿空》是一部描写中国式孤独的罕见作品……令人读时欣喜连连，掩卷又惆怅不已。在这死寂般村子的地下进行着热火朝天的挖凿活动，寻宝的农民在凿，油田工人在凿，考古专家在凿，盗墓贼在凿，矿工在凿，工程队在凿，管道工在凿，光缆工也在凿。人人为财富而凿，为极端功利目的而凿。但在他们中间却有一个“为凿而凿”的人，那就是农民张旺财，其动力来自人类“凿空”的本能，似乎只有不停地挖掘，才能平息心中难言的渴望……\n——《亚洲周刊》2010年度十大长篇小说授奖词\n所获奖项\n2001年，《一个人的村庄》，第二届冯牧文学奖\n2009年，《虚土》，天山文艺奖\n2011年，《凿空》，《亚洲周刊》2010十大长篇小说\n2011年，《凿空》，入围第八届茅盾文学奖\n2013年，《在新疆》，《中华读书报》2012年度十大好书",
        summary:
          "《一个人的村庄》（散文集）\n《一个人的村庄》为刘亮程散文创作的巅峰杰作，自1998年出版以来，在全国引起巨大反响，得到众多知名作家、评论家的赞誉，曾荣获第二届冯牧文学奖。书中多篇文章被选入全国各地语文教材，铭刻了一代人的乡土记忆，已成为乡村散文作品中无法超越的经典。\n刘亮程亲自修订后，为精装珍藏版《一个人的村庄》写道——\n在我二三十岁最寂寞的时光里，我糊里糊涂写出了一部好书。那时我能听懂风声，可以对花微笑。我信仰万物有灵。作家就是那种能跟石头说话的人。我让自己单独地处在一个村庄的地老天荒中，静悄悄听万物的灵说话。后来我说话时，感觉万物在听。",
        series: {
          id: "20320",
          title: "刘亮程自选集",
        },
        price: "42.80元",
      },
      {
        rating: {
          max: 10,
          numRaters: 325,
          average: "8.6",
          min: 0,
        },
        subtitle: "散文译丛",
        pubdate: "1985",
        series: {
          id: "118",
          title: "散文译丛",
        },
        image: "https://img3.doubanio.com/view/subject/m/public/s11169871.jpg",
        binding: "平装本",
        images: {
          small:
            "https://img3.doubanio.com/view/subject/s/public/s11169871.jpg",
          large:
            "https://img3.doubanio.com/view/subject/l/public/s11169871.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s11169871.jpg",
        },
        alt: "https://book.douban.com/subject/1742145/",
        id: "1742145",
        title: "一个孤独的散步者的遐想",
        author_intro: "",
        tags: [
          {
            count: 136,
            name: "卢梭",
            title: "卢梭",
          },
          {
            count: 76,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 69,
            name: "哲学",
            title: "哲学",
          },
          {
            count: 49,
            name: "一个孤独的散步者的遐想",
            title: "一个孤独的散步者的遐想",
          },
          {
            count: 34,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 30,
            name: "法国",
            title: "法国",
          },
          {
            count: 27,
            name: "散文",
            title: "散文",
          },
          {
            count: 19,
            name: "精神狂躁时代的阅读",
            title: "精神狂躁时代的阅读",
          },
        ],
        origin_title: "",
        price: "1.40",
        translator: ["张驰"],
        catalog: "",
        pages: "211",
        publisher: "湖南人民出版社",
        isbn10: "SH10109-1979",
        alt_title: "",
        url: "https://api.douban.com/v2/book/1742145",
        author: ["(法)卢梭"],
        summary: "",
      },
      {
        rating: {
          max: 10,
          numRaters: 277,
          average: "8.4",
          min: 0,
        },
        subtitle: "选修　中国古代诗歌散文欣赏",
        author: [
          "人民教育出版社",
          "课程教材研究所",
          "中学语文课程教材研究开发中心",
          "北京大学中文系",
          "语文教育研究所",
        ],
        pubdate: "2006-11",
        tags: [
          {
            count: 65,
            name: "语文",
            title: "语文",
          },
          {
            count: 64,
            name: "教材",
            title: "教材",
          },
          {
            count: 51,
            name: "课本",
            title: "课本",
          },
          {
            count: 50,
            name: "高中",
            title: "高中",
          },
          {
            count: 38,
            name: "选修",
            title: "选修",
          },
          {
            count: 37,
            name: "高中语文选修",
            title: "高中语文选修",
          },
          {
            count: 37,
            name: "中国",
            title: "中国",
          },
          {
            count: 28,
            name: "汉语",
            title: "汉语",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s33567669.jpg",
        binding: "平装",
        translator: [],
        catalog: "诗歌之都\n散文之都",
        pages: "126",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s33567669.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s33567669.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s33567669.jpg",
        },
        alt: "https://book.douban.com/subject/5955945/",
        id: "5955945",
        publisher: "人民教育出版社",
        isbn10: "7107201425",
        isbn13: "9787107201424",
        title: "语文 选修  中国古代诗歌散文欣赏",
        url: "https://api.douban.com/v2/book/5955945",
        alt_title: "",
        author_intro: "",
        summary: "语文 选修  中国古代诗歌散文欣赏，ISBN：9787107201424，作者：",
        series: {
          id: "45425",
          title: "普通高中课程标准实验教科书",
        },
        price: "5.50元",
      },
      {
        rating: {
          max: 10,
          numRaters: 79,
          average: "8.8",
          min: 0,
        },
        subtitle: "约翰逊 散文作品选",
        author: ["[英] 塞缪尔·约翰逊"],
        pubdate: "2015-3",
        tags: [
          {
            count: 113,
            name: "塞缪尔·约翰逊",
            title: "塞缪尔·约翰逊",
          },
          {
            count: 62,
            name: "散文",
            title: "散文",
          },
          {
            count: 60,
            name: "英国文学",
            title: "英国文学",
          },
          {
            count: 55,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 42,
            name: "文学",
            title: "文学",
          },
          {
            count: 34,
            name: "英国",
            title: "英国",
          },
          {
            count: 34,
            name: "外国文学",
            title: "外国文学",
          },
          {
            count: 30,
            name: "文学批评",
            title: "文学批评",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s28038767.jpg",
        binding: "平装",
        translator: ["叶丽贤"],
        catalog:
          "译序：饥渴的想象......1\n《漫游者》第4期 新现实小说......1\n《漫游者》第8期 想象的节制：过去、现在与未来......8\n《漫游者》第17期 展望死亡......15\n《漫游者》第18期 婚嫁的动机......21\n《漫游者》第28期 自我欺骗的手段......28\n《漫游者》第32期 斯多葛精神......35\n《漫游者》第36期 田园诗歌（一）......41\n《漫游者》第37期 田园诗歌（二）......47\n《漫游者》第39期 单身与已婚女子的不幸 ......54\n《漫游者》第47期 化解悲怨......59\n《漫游者》第49期 身前身后名......65\n《漫游者》第60期 传记......70\n《漫游者》第93期 批评的成见与善变......76\n目 录\n《漫游者》第114期 论死刑......81\n《漫游者》第121期 文学模仿......87\n《漫游者》第129期 进取的精神......93\n《漫游者》第137期 求知与生活......98\n《漫游者》第142期 农村的暴君......103\n《漫游者》第145期 对待普通作家......109\n《漫游者》第148期 父母的专制......114\n《漫游者》第156期 戏剧的规则......119\n《漫游者》第168期 论文学措辞......125\n《漫游者》第172期 论平步青云......130\n《漫游者》第191期 一位大家闺秀的苦恼......135\n《冒险者》第45期 论团结之难......141\n《冒险者》第67期 社会的益处......146\n《冒险者》第84期 公共马车中的虚荣......153\n《冒险者》第99期 成败论英雄......159\n《冒险者》第119期 匮缺与幸福......166\n《懒散者》第5期 筹建娘子军的倡议......172\n《懒散者》第10期 论政治偏信......176\n《懒散者》第14期 侵占时间的人......181\n《懒散者》第22期 秃鹰眼中的人类......184\n《懒散者》第22期 欠债与坐牢（一）......188\n《懒散者》第23期 友情的消亡......192\n《懒散者》第31期 懒散的伪装......196\n《懒散者》第38期 欠债与坐牢（二） ......200\n《懒散者》第60期 如何成为批评家（一）......204\n《懒散者》第61期 如何成为批评家（二）......211\n《懒散者》第68期 翻译的历史（一）......215\n《懒散者》第69期 翻译的历史（二）......218\n《懒散者》第81期 印第安酋长的演说......222\n《懒散者》第84期 传记写作......225\n《懒散者》第88期 人的局限性......229\n《懒散者》第97期 游记写作......232\n《莎士比亚戏剧集》序言（节选）......235\n《英语词典》序（节选）......257\n论墓志铭......264\n论宣传册与时政文的起源与价值......274\n论英国普通士兵的英勇......282\n1756年形势观察......285\n爱国者：致大不列颠的选举人......296\n致杜赫德，关于《中国史》（1738）......308\n评乔纳斯·汉韦《八日游记》中论茶的书信（节选）......312\n《苏格兰西群岛游记》（节选）......322\n《英国诗人传》（节选）......333\n弥尔顿传......333\n德莱顿传......346\n考利传......351\n艾迪生传......355\n蒲柏传......361\n饥",
        pages: "366",
        images: {
          small:
            "https://img1.doubanio.com/view/subject/s/public/s28038767.jpg",
          large:
            "https://img1.doubanio.com/view/subject/l/public/s28038767.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s28038767.jpg",
        },
        alt: "https://book.douban.com/subject/26300028/",
        id: "26300028",
        publisher: "生活·读书·新知三联书店",
        isbn10: "7108052334",
        isbn13: "9787108052339",
        title: "饥渴的想象",
        url: "https://api.douban.com/v2/book/26300028",
        alt_title: "",
        author_intro:
          "“约翰生时代或约翰生和他的世纪”，这是耶鲁及哈佛大学人文学系用一个人来概括一个世纪文学的讲授课程或研究出版书目。就像16世纪的莎士比亚，17世纪的弥尔顿，19世纪的托尔斯泰，20世纪的艾略特一样，18世纪的约翰生，无论从哪方面来看，都是那个世纪的一个恰当的代表。\n约翰生的传奇色彩和丰富个性，在鲍斯威尔的《约翰生传》中已有过充分描述。尤其是他的栩栩如生的文字，使他成为文学上史至今无人可以替代的最出色的谈话家；他是诗人，写有《伦敦》和《人类希望的幻灭》。艾略特曾说，如果他的诗不是诗，那么他将不知道什么叫诗；他是散文家，出版过《漫步者》、《冒险者》和《懒散者》；他是小说家，他的《幸福谷》（即拉塞拉斯）自问世后，几乎每年都有再版。鲍斯威尔在生前，每年必读一遍约翰生，否则会感到遗憾；他是批评家，写有52位诗人的评传；他是莎士比亚专家，编订《莎士比亚戏剧集》，留下了论文学批评之艺术的重要的“前言”；他是《英文词典》编撰家，写出了同样具有现代语言观念的“前言”；他是虔诚的宗教信仰者，多篇反省或忏悔的祈祷文一直被人们传诵；他是政治评论家，几个为英国保守政府辩护的小册子曾惹起强烈争议；他还是一位旅行作家，其《苏格兰西部群岛旅行记》的线路，不时被人们按图索骥行走一遍。2009年，他诞辰三百周年的纪念活动，将以由专家学者领队、沿这条线路行走并最终抵达伦敦的活动揭开序幕。约翰生以其独立之精神，自由之思想，善良之人格而为后人景仰。",
        summary:
          "本书以牛津和企鹅为选本参考，收入塞缪尔·约翰逊散文作品六十篇，涵盖伦理道德、时速政治、文学批评三大领域、纵跨约翰逊四十年写作生涯。约翰逊大多数的作品，包括《拉塞勒斯》和文学批评著述在内，都有很鲜明的喻世明理，内观自省的特点，美国学者哈罗德·布鲁姆将他的作品归为智慧文学，称他是“文学与人生的经验性批评家”。约翰逊善于知人论世，也善于反省自我；“饥渴的想象”正是他在读书、察世和内省中对人类心灵状态的提炼，是他思考诸多道德问题要回溯的起点。",
        series: {
          id: "782",
          title: "文化生活译丛（新版）",
        },
        price: "47.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 0,
          average: "0.0",
          min: 0,
        },
        subtitle: "",
        author: [],
        pubdate: "1999-07",
        tags: [],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s1254770.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "目 录\n祖国\n长城\n慕情\n稻米\n分忧\n黄土地\n我属于你，祖国！\n今夕是何年\n西藏，远方的呼唤\n祖国和我\n――一个幻想者的飞行\n乡思\n乡思\n小镇\n幽巷\n梦回家园\n古城的风\n柳笛声声\n白帆之歌\n黄土歌谣\n――献给故乡的那群人\n啊，厚厚的黄土\n故乡的小荷塘\n我爱家乡的小河\n梦里榆钱香\n成长\n成长\n童心\n星之迹\n――献给我的日记\n人与路\n宁静的心\n美丽的心\n蓝色的纸船\n成功属于己\n欢乐与忧伤\n一个美丽的错\n我心中有一首歌\n我选择了文组\n悠悠文学之旅\n花季\n年轻的花季\n花・人\n年龄\n心海拾零\n人生组曲\n感谢的心\n感受音乐\n年轻，真好！\n短歌行\n我要出发\n年轻的我们\n――写给同班的女孩\n女孩与色彩\n请为我鼓掌\n寻找失去的\n走出心灵的荒草地\n唱给小妹的挽歌\n――给徘徊在爱河之岸的少女们\n友情\n伞\n伞\n相信生命\n有情世界\n别了，吾友！\n归来吧，白天鹅\n朋友――充实的绿梦\n天边，那一朵白云\n心底，有几处风景\n思念\n思念\n火炬\n母亲的微笑\n为奶奶“送行”\n一柱清香\n啊，矿山\n小雨伞\n雨中的童年\n一双推动摇篮的手\n我有一个秘密\n永远的草原歌手\n月色\n明月千里\n故乡的月\n竹林月色\n读月\n圆月\n中秋月\n美景\n晨雾\n山雾\n观落日\n运河落日\n梨园美景\n奔流的河\n花园一景\n花园小记\n小雨和蓝天\n清华园的绿\n奶奶的小花园\n我的小天地\n风景这边独好\n我赞美你，洁白的雪花\n记忆中最美的地方\n水之歌\n雨\n听雨\n我爱小溪\n故乡的小溪\n清清的小溪\n我爱湖\n那片池塘\n山泉\n小河风情\n小河赞\n海之行\n海之音\n大海抒情\n大海――伟大的母亲\n看看那大海\n春华秋实\n春华秋实\n春之歌\n三月\n春雨\n春天的色彩\n春天的情怀\n写给秋天\n秋是黄昏\n金色的秋天\n秋天的恋歌\n保护环境\n我爱大自然\n大自然・妈妈\n绿\n绿\n绿色是我家\n我梦中的绿色\n为人类绣地球\n我被高楼“封杀”\n",
        pages: "327",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s1254770.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s1254770.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s1254770.jpg",
        },
        alt: "https://book.douban.com/subject/1075967/",
        id: "1075967",
        publisher: "知识出版社",
        isbn10: "7501521972",
        isbn13: "9787501521975",
        title: "散文",
        url: "https://api.douban.com/v2/book/1075967",
        alt_title: "",
        author_intro: "",
        summary: "",
        price: "11.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 210,
          average: "7.6",
          min: 0,
        },
        subtitle:
          "本书含《文化苦旅》、《秋雨散文》、《山居笔记》、《霜冷长河》、《文明的碎片》",
        author: ["余秋雨"],
        pubdate: "1998.11",
        tags: [
          {
            count: 73,
            name: "余秋雨",
            title: "余秋雨",
          },
          {
            count: 52,
            name: "散文",
            title: "散文",
          },
          {
            count: 26,
            name: "文化",
            title: "文化",
          },
          {
            count: 20,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 16,
            name: "文集",
            title: "文集",
          },
          {
            count: 11,
            name: "旅游",
            title: "旅游",
          },
          {
            count: 11,
            name: "文学",
            title: "文学",
          },
          {
            count: 11,
            name: "文化苦旅",
            title: "文化苦旅",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s4465047.jpg",
        binding: "简精装",
        translator: [],
        catalog: "",
        pages: "670",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s4465047.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s4465047.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s4465047.jpg",
        },
        alt: "https://book.douban.com/subject/2973065/",
        id: "2973065",
        publisher: "青海人民出版社",
        isbn10: "7225011634",
        isbn13: "9787225011639",
        title: "余秋雨文集",
        url: "https://api.douban.com/v2/book/2973065",
        alt_title: "",
        author_intro:
          "1968年8月毕业于上海戏剧学院戏剧文学系。当时正逢浩劫，受尽屈辱，家破人亡，被迫赴农场劳动。学校复课后又参加过教材编写，直到文化大革命结束。\n1983年之后，由于出版了一系列学术著作如《戏剧思想史》、《中国戏剧史》、《观众心理学》、《艺术创造论》以及Some Observations on the Aesthetics of Primitive Theatre等，先后获全国戏剧理论著作奖、上海市哲学社会科学著作奖、全国优秀教材一等奖。\n1985年成为当时中国大陆最年轻的文科正教授。\n1986年获“国家级突出贡献专家”称号，当时获此称号的全国仅十五名。\n1986年开始被任命为上海戏剧学院副院长、院长，上海市写作学会会长，上海市委咨询策划顾问，并被选为“上海十大高教精英。”\n八十年代后期开始写作《文化苦旅》等文化散文，辞职后更以亲身历险考察国内外各大文明为人生主业。所写的《山居笔记》、《霜冷长河》、《千年一叹》、《行者无疆》等，开启一代文风，长期位踞全球华文书畅销排行榜前列，已被公认目前全世界各华人社区中影响力最大的作家之一。\n在大陆公布近十年来全国最畅销书籍前十名中，余秋雨一人独占了四本。这些著作，获中国作家协会鲁迅文学奖、中国出版奖、上海优秀文学作品奖、台湾联合报读书人最佳书奖（连续两届）、金石堂最有影响力书奖、台湾中国时报白金作家奖、马来西亚最受欢迎的华语作家奖、香港电台最受欢迎书籍奖等。\n他的近作《借我一生》又创立了“记忆文学”的新体裁，刚出版就引起海内外广泛关注，被香港《亚洲周刊》评为年度“全亚十大最重要的华语书籍”之一。\n由于1999年之后主持香港凤凰卫视对人类各大文明遗址的历史考察，成为目前世界上唯一贴地穿越数万公里危险地区的人文学科教授，也是9.11事件之前最早向文明世界报告恐怖主义控制区域实际状况的学者。他相继被联合国选为研讨《2004年人类发展报告》和参加“2005年世界文明大会”的唯一中国文化学者。近年来，他在“中华文明和世界文明”的总标题下，应邀在美国哈佛大学、耶鲁大学、马里兰大学、纽约亨特学院和华盛顿美国国会图书馆发表演讲，场场爆满，引起很大的社会轰动。2005年春季在台湾各大城市的巡回演讲，每场都拥挤了数千名听众，被台湾媒体称之为“难以想象的余秋雨旋风”。天下文化出版公司所编的《倾听秋雨》一书，记录了这一盛况。\n2004年底，被联合国教科文组织、北京大学、中华英才编辑部等单位选为“中国十大艺术精英”和“中国文化传播坐标人物”。",
        summary: "",
        price: "39.80",
      },
      {
        rating: {
          max: 10,
          numRaters: 191,
          average: "7.6",
          min: 0,
        },
        subtitle: "台湾学人散文丛书",
        author: ["黄碧端"],
        pubdate: "2008-08",
        tags: [
          {
            count: 64,
            name: "台湾",
            title: "台湾",
          },
          {
            count: 56,
            name: "黄碧端",
            title: "黄碧端",
          },
          {
            count: 36,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 33,
            name: "散文",
            title: "散文",
          },
          {
            count: 29,
            name: "散文随笔",
            title: "散文随笔",
          },
          {
            count: 15,
            name: "文学",
            title: "文学",
          },
          {
            count: 13,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 11,
            name: "文化",
            title: "文化",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s3218009.jpg",
        binding: "平装32",
        translator: [],
        catalog: "",
        pages: "334",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s3218009.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s3218009.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s3218009.jpg",
        },
        alt: "https://book.douban.com/subject/3175597/",
        id: "3175597",
        publisher: "世纪文景 上海人民出版社",
        isbn10: "7208078203",
        isbn13: "9787208078208",
        title: "昨日风景",
        url: "https://api.douban.com/v2/book/3175597",
        alt_title: "",
        author_intro:
          "黄碧端，1945年出生，祖籍福建惠安。台湾当代女作家。台湾大学政治学硕士、美国威斯康星大学文学博士。曾任台湾暨南大学人文学院院长，现任台南艺术大学校长。为台湾《联合报》专栏主笔，曾入选“当代台湾十二大散文名家”，并获台湾中兴文艺奖章与吴鲁芹散文奖。\n本书是她在《联合报》副刊所发文章结集，分“时光的声音”、“时代的面目”、“创造力的吊诡”、“忽忽昨日”四辑。黄碧端身在学界，关注社会，其文博雅通达，兼“理性与感性的交光互影”。因其在文中显露的“优雅的城府”，被痘弦称为“穿裙子的士”。",
        summary:
          "《昨日风景》是黄碧端在《联合报》副刊所发文章结集，分“时光的声音”、“时代的面目”、“创造力的吊诡”、“忽忽昨日”四辑。黄碧端身在学界，关注社会，其文博雅通达，兼“理性与感性的交光互影”。因其在文中显露的“优雅的城府”，被台湾评论界称为“穿裙子的士”。",
        series: {
          id: "638",
          title: "台湾学人散文丛书",
        },
        price: "29.00",
      },
      {
        rating: {
          max: 10,
          numRaters: 79,
          average: "8.6",
          min: 0,
        },
        subtitle: "",
        author: ["周晓枫"],
        pubdate: "2011-7",
        tags: [
          {
            count: 64,
            name: "散文",
            title: "散文",
          },
          {
            count: 62,
            name: "周晓枫",
            title: "周晓枫",
          },
          {
            count: 15,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 13,
            name: "当代文学",
            title: "当代文学",
          },
          {
            count: 13,
            name: "【中】周晓枫",
            title: "【中】周晓枫",
          },
          {
            count: 9,
            name: "文学",
            title: "文学",
          },
          {
            count: 8,
            name: "文集",
            title: "文集",
          },
          {
            count: 8,
            name: "中国",
            title: "中国",
          },
        ],
        origin_title: "",
        image: "https://img3.doubanio.com/view/subject/m/public/s7644452.jpg",
        binding: "平装",
        translator: [],
        catalog:
          "斑纹\n翅膀\n黑童话\n后窗\n琥珀\n来自美术的暗示\n聋天使\n马戏与杂技\n墓农\n你的身体是个仙境\n铅笔\n桃花烧\n夏至\n仙履\n写给匹诺曹\n焰火\n幼儿园\n月亮上的环形山\n与姜广平先生对话（代跋）",
        pages: "297",
        images: {
          small: "https://img3.doubanio.com/view/subject/s/public/s7644452.jpg",
          large: "https://img3.doubanio.com/view/subject/l/public/s7644452.jpg",
          medium:
            "https://img3.doubanio.com/view/subject/m/public/s7644452.jpg",
        },
        alt: "https://book.douban.com/subject/6866113/",
        id: "6866113",
        publisher: "百花文艺出版社",
        isbn10: "7530659294",
        isbn13: "9787530659298",
        title: "周晓枫散文选集",
        url: "https://api.douban.com/v2/book/6866113",
        alt_title: "",
        author_intro:
          "1969年6月生于北京。1992年毕业于山东大学中文系，在中国少年儿童出版社做过8年儿童文学编辑，2000年调入北京出版社《十月》杂志社，2011年调入《人民文学》杂志社。出版有个人散文集《上帝的隐语》、《鸟群》、《收藏——时光的魔法书》和《斑纹——兽皮上的地图》、《你的身体是个仙境》、《雕花马鞍》、《聋天使》等。曾获冯牧文学奖、冰心文学奖、庄重文文学奖、十月文学奖、人民文学奖等奖项。",
        summary:
          "《周晓枫散文选集》是“新百花散文书系”中的一本，收录了由周晓枫创作的散文作品。《周晓枫散文选集》收录了《斑纹》、《翅膀》、《黑童话》、《后窗》、《琥珀》、《来自美术的暗示》、《聋天使》、《马戏与杂技》、《墓农》、《你的身体是个仙境》、《铅笔》、《桃花烧》、《夏至》、《仙履》、《写给匹诺曹》、《焰火》、《幼儿园》等文章。",
        series: {
          id: "12371",
          title: "新百花散文书系",
        },
        price: "37.00元",
      },
      {
        rating: {
          max: 10,
          numRaters: 350,
          average: "9.1",
          min: 0,
        },
        subtitle: "散文Ⅰ",
        author: ["杨绛"],
        pubdate: "2004-05",
        tags: [
          {
            count: 143,
            name: "杨绛",
            title: "杨绛",
          },
          {
            count: 109,
            name: "散文",
            title: "散文",
          },
          {
            count: 33,
            name: "杨绛作品精选:散文1",
            title: "杨绛作品精选:散文1",
          },
          {
            count: 28,
            name: "中国文学",
            title: "中国文学",
          },
          {
            count: 21,
            name: "随笔",
            title: "随笔",
          },
          {
            count: 18,
            name: "中国",
            title: "中国",
          },
          {
            count: 16,
            name: "文学",
            title: "文学",
          },
          {
            count: 11,
            name: "钱钟书",
            title: "钱钟书",
          },
        ],
        origin_title: "",
        image: "https://img1.doubanio.com/view/subject/m/public/s1314468.jpg",
        binding: "平装",
        translator: [],
        catalog: "",
        pages: "290",
        images: {
          small: "https://img1.doubanio.com/view/subject/s/public/s1314468.jpg",
          large: "https://img1.doubanio.com/view/subject/l/public/s1314468.jpg",
          medium:
            "https://img1.doubanio.com/view/subject/m/public/s1314468.jpg",
        },
        alt: "https://book.douban.com/subject/1059418/",
        id: "1059418",
        publisher: "人民文学出版社",
        isbn10: "7020045170",
        isbn13: "9787020045174",
        title: "杨绛作品精选:散文1",
        url: "https://api.douban.com/v2/book/1059418",
        alt_title: "",
        author_intro:
          "杨绛，原名杨季康，中国著名女作家、文学翻译家和外国文学研究家。祖籍江苏无锡，1911年7月17日生于北京。少年时代先后在北京、上海、苏州等地读书。1932年毕业于苏州东吴大学，获文学学士学位，当年考入清华大学研究生院，为外国语言文学研究生。1935年与钱锺书结婚，同年夏季与丈夫同赴英国、法国留学。1938年秋回国，曾任上海震旦女子文理学院外语系教授、清华大学外语系教授。1949年后，调任中国社会科学院外国文学研究所研究员。 　　杨绛的第一部作品为短篇小说《璐璐，不用愁！》，于1934年初发表于《大公报文艺副刊》。40年代初，她连续创作了喜剧《称心如意》和《弄假成真》，这两部剧本写作和上演于抗战时期沦陷后的上海，当时引起很大反响。80年代以来，是杨绛创作的“新时期”，她以散文和小说两方面的创作成就引起世人注目。其散文代表作《干校六记》出版于1981年，畅销于整个80年代，在港澳台均出版了繁体字单行本，并被译成多种外国文字在国外出版。小说代表作《洗澡》（意即洗脑筋,系国内最早反映知识分子改造的文学作品），出版于1988年，在知识分子当中引起很大反响，作品亦被译成多种外国文字出版。 　　作为外国文学研究家，杨绛写过多篇评析西班牙和英国文学名著的理论作品，如评论《堂吉诃德》、《小癞子》（Lazarillo del Tormes）和《塞莱斯蒂娜》（La Celestina）等的文章以及论英国作家菲尔丁等。 　　作为翻译家，杨绛的文学翻译成就卓著，除《堂吉诃德》外，她还翻译了西班牙流浪汉小说《小癞子》、法国文学名著《吉尔・布拉斯》（Alain Rene Le Sage: ）以及古希腊散文柏拉图(plato)的“对话录”《斐多》(Phaedo)等。 　　跨入新世纪之后，杨绛在整理编订钱锺书遗稿之余，又创作了《怀念陈衡哲》、《难忘的一天》和《我在启明上学》等多篇忆旧散文；出版于2003年6月的家庭纪事散文《我们仨》， 则因其真挚的情感和优美隽永的文笔而深深打动读者，成为2003年的超级畅销书。",
        summary:
          "本书选收作者创作于八十年代的《干校六记》，《回忆我的父亲》和《丙午丁末年纪事》等重要散文二十三篇。其中怀人忆旧的文章，为读者提供了许多鲜为人知的珍贵史料，而《丙午丁末年纪事》，则记述了作者在“文化大革命”中的亲历亲见，以及她在那场运动中充当“陪斗者”的种种经历，和一般的“文革”纪事不同，一当年的造反派读完本文后说，感谢杨绛揭掉了披在我们身上的“狼皮”。",
        price: "30.00",
      },
    ],
    bookRecomond: [],
    bookNum: 0,
    isShow: false,
  },
  totalPages: 0,
  pageNum: 1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { bookRecomond } = this.data;
    let { bookRecomondList } = this.data;
    this.getRandomList().forEach((e) => {
      bookRecomond.push(bookRecomondList[e]);
    });
    this.setData({
      bookRecomond,
    });
  },
  getRandomList() {
    var arr = new Array();
    for (var k = 0; k < 10; k++) {
      var id = Math.floor(Math.random() * 100);
      if (arr.indexOf(id) === -1) {
        arr.push(id);
      } else {
        k = k - 1;
        continue;
      }
    }
    return arr;
  },
  onShow() {
    // 看是否有查询缓存
    let tag = wx.getStorageSync("classifytag");
    // 有，准备查询
    if (tag) {
      // 清除现有数据
      this.resetData();

      let q = "param.q";
      this.setData({
        // param数据
        [q]: tag,
        // 搜索框设定关键词
        inpValue: tag,
        isShow: true,
      });
      let { param } = this.data;
      // 查询
      this.qsearch(param);

      // 删除本地缓存，防止二次读取
      wx.removeStorage({
        key: "classifytag",
        success(res) {
          console.log("删除");
        },
      });
    }
  },
  handleInputShow() {
    this.setData({
      inputShow: !this.data.inputShow,
    });
  },
  handleListShow() {
    this.setData({
      listShow: !this.data.listShow,
    });
  },
  handleInput(e) {
    // 1 获取输入框的值
    const { value } = e.detail;
    console.log(value);
    // 2 检测合法性
    if (!value.trim()) {
      this.setData({
        isShow: false,
        isFocus: false,
      });
      // 值不合法
      return;
    }
    // 3 清空之前的数据
    this.resetData();

    // 4 准备发送请求获取数据
    var q = "param.q";

    this.setData({
      isFocus: true,
      isShow: true,
      [q]: value,
    });
    let { param } = this.data;
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(param);
    }, 1000);
  },
  // 发送请求获取搜索建议 数据
  async qsearch(param) {
    // console.log(param);
    const res = await request({ url: "/search", param });
    console.log(res.data);
    // 获取现在已有数据数据
    let { bookList } = this.data;
    // 拼接后才不会被新数据覆盖
    bookList = bookList.concat(res.data.books);
    // let bookList = res.data.books;
    let bookNum = res.data.total;

    this.setData({
      bookList,
      bookNum,
    });
  },
  // 点击 取消按钮
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      bookList: [],
      bookNum: [],
    });
  },
  // 页面上滑 滚动条触底事件
  onReachBottom() {
    let { bookList } = this.data;
    try {
      // 搜索框正常请求数据
      if (bookList.length !== 0) {
        // 总数
        console.log(this.data.bookNum);
        // 每页书籍数
        console.log(this.data.param.count);
        // 计算可分为多少页
        this.totalPages = Math.ceil(this.data.bookNum / this.data.param.count);
        console.log(this.totalPages);
        //  1 判断还有没有下一页数据
        if (this.pageNum >= this.totalPages) {
          // 没有下一页数据
          console.log("没有下一页数据");
          wx.showToast({ title: "没有下一页数据" });
        } else {
          // 还有下一页数据
          //  console.log('%c'+"有下一页数据","color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
          let { param } = this.data;
          console.log(start);
          let start = "param.start";
          this.setData({
            [start]: param.start + 10,
          });
          console.log("有下一页数据");
          this.pageNum++;
          this.qsearch(param);
        }
      } else {
        // 推荐书籍展示
        wx.showToast({
          title: "没有下一页了~",
          icon: "none",
          mask: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  // 下拉刷新事件
  onPullDownRefresh() {
    // 1 重置数组
    this.setData({
      bookList: [],
      bookNum: 0,
    });
    // 2 重置请求参数
    this.data.param.start = 0;
    let { param } = this.data;
    // 3 发送请求
    this.qsearch(param);

    // 4 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错
    wx.stopPullDownRefresh();
  },
  handleGetId(e) {
    let { index } = e.currentTarget.dataset;
    let { bookList } = this.data;
    console.log(index);
    console.log(bookList);
    console.log(bookList[index]);
    wx.navigateTo({
      url: "../book/book?id=" + bookList[index].id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log("1", data);
        },
        someEvent: function (data) {
          console.log("2", data);
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", bookList[index]);
      },
    });
  },
  handleGetLikeId(e) {
    let { index } = e.currentTarget.dataset;
    let { bookRecomond } = this.data;
    console.log(index);
    console.log(bookRecomond);
    console.log(bookRecomond[index]);
    wx.navigateTo({
      url: "../book/book?id=" + bookRecomond[index].id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log("1", data);
        },
        someEvent: function (data) {
          console.log("2", data);
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", bookRecomond[index]);
      },
    });
  },
  resetData() {
    this.setData({
      bookList: [],
      bookNum: 0,
      param: {
        apikey: "0df993c66c0c636e29ecbb5344252a4a",
        q: "",
        start: 0,
        count: 10,
      },
    });
  },
  //回到顶部
  handleToTop() {
    // 一键回到顶部
    wx.pageScrollTo({ scrollTop: 0, duration: 500 });
  },
  scroll(e) {
    // console.log(e)
  },
  scrolltoupper: function (e) {
    console.log(e);
    let t = e.detail.scrollTop;
    if (t > 100 && !this.data.floorstatus) {
      // 避免重复setData
      this.setData({
        floorstatus: true,
      });
    }

    if (t <= 100 && this.data.floorstatus) {
      this.setData({
        floorstatus: false,
      });
    }
  },
});
