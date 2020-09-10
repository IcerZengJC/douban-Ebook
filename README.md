<!--
 * @Description: 
 * @Author: Zjc
 * @Date: 2020-09-10 16:42:20
 * @LastEditTime: 2020-09-10 22:37:08
 * @LastEditors: Do not edit
-->

# douban-EBook

一个豆瓣图书微信小程序

## 安装教程

1. git clone https://gitee.com/IcerZengJC/EBook-douban.git
2. 用微信开发者工具打开
3. 因为用到了云函数，运行需开通云服务，并在开发者工具中同步云函数列表

**tips:** 若有api调用出错，豆瓣api无效所致，当时找可用的api都找了很久

## API介绍
API文档 [链接](https://douban-api-docs.zce.me/book.html)

API整理介绍  [github](https://github.com/zce/douban-api-docs)

若API请求数据失败

1. API无效
2. API中要带一个名为apikey的参数，该参数失效，请自寻解决办法

``` 
  https://api.douban.com/v2/book/4913064?start=0&count=10&apikey=0df993c66c0c636e29ecbb5344252a4a
```

  代码将请求的apikey封装在 **\miniprogram\request\index.js** 中，自行替换apikey的值

## 效果展示

### 首页

![选择](https://gitee.com/IcerZengJC/iamge-system/raw/master/1.png)

![首页](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ%E5%9B%BE%E7%89%8720200910170016.jpg)

![首页](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170106.jpg)

### 分类

![分类](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170026.jpg)


### 探索

![探索](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170028.jpg)

![搜索](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170021.png)

![书籍详情](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170024.png)

### 社区

![社区展示](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170042.jpg)

![评论](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170050.png)

![发布](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170053.png)

### 我的
![我的](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170117.jpg)

![最近观看](https://gitee.com/IcerZengJC/iamge-system/raw/master/QQ图片20200910170114.png)

