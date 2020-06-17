// components/blog-ctrl/blog-ctrl.js
let userInfo = {};
const db = wx.cloud.database();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    blogId: {
      type: String,
      value: "",
    },
    blog: { type: Object, value: [] },
    blogLike: { type: Number, value: 0 },
    blogComment: { type: Number, value: 0 },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loginShow: false,
    //底部弹出层是否显示
    modelShow: false,
    content: "",
    footerBottom: 0,
    isLike: false,
    likeNum: 0,
    getCommentNum: 0,
  },

  lifetimes: {
    ready: function () {
      // 在组件实例进入页面节点树时执行

      let getCommentNum;
      let { blogId } = this.properties;

      db.collection("blog-comment")
        .where({
          blogId,
        })
        .count()
        .then((res) => {
          getCommentNum = res.total;
          // console.log("commentNum", commentNum);
          this.setData({
            getCommentNum,
          });
        });
      // console.log(blogLike);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onComment() {
      //判断用户是否授权
      wx.getSetting({
        success: (res) => {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: (res) => {
                userInfo = res.userInfo;
                //显示评论弹出层
                this.setData({
                  modelShow: true,
                });
              },
            });
          } else {
            this.setData({
              loginShow: true,
            });
          }
        },
      });
    },
    onLike(e) {
      console.log(this.properties);

      let { commentNum } = this.data;

      console.log(commentNum);
      let { isLike } = this.data;
      let { likeNum } = this.data;
      // 已经点赞，进行取消点赞操作
      if (isLike) {
        likeNum--;
      } else {
        // 未点赞，进行点赞操作
        likeNum++;
      }
      db.collection("blog")
        .where({
          _id: this.properties.blogId,
        })
        .update({
          data: {
            likeNum,
          },
        });
      this.setData({
        isLike: !isLike,
        likeNum,
      });
    },
    onLoginSuccess(event) {
      userInfo = event.detail;
      //授权框消失，评论框显示
      this.setData(
        {
          loginShow: false,
        },
        () => {
          this.setData({
            modelShow: true,
          });
        }
      );
    },
    onLoginFail() {
      wx.showModal({
        title: "授权用户才能进行评价",
        content: "",
      });
    },
    onSend(event) {
      //插入数据库
      //let formId=event.detail.formId
      let content = event.detail.value.content;
      if (content.trim() == "") {
        wx.showModal({
          title: "评论内容不能为空",
          content: "",
        });
        return;
      }
      wx.showLoading({
        title: "上传评论ing...",
        mask: true,
      });
      db.collection("blog-comment")
        .add({
          data: {
            content,
            createTime: db.serverDate(),
            blogId: this.properties.blogId,
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl,
          },
        })
        .then((res) => {
          console.log(res);

          wx.hideLoading();
          wx.showToast({
            title: "评论成功",
          });
          this.setData({
            modelShow: false,
            content: "",
          });
        });
      //父元素刷新
      this.triggerEvent("refreshCommentList");
    },
    onFocus(event) {
      console.log(event);
      this.setData({
        footerBottom: event.detail.height,
      });
    },
    onBlur(event) {
      console.log(event);
      this.setData({
        footerBottom: 0,
      });
    },
  },
});
