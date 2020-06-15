// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    modelShow:false,
    userInfo:{
      avatarUrl:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1388647394,240988450&fm=111&gp=0.jpg",
      nickName:"呜啦啦",
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 发布功能
  onLogin() {
    // 判断用户是否授权
    wx.getSetting({
      success: (res) => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
              complete: (res) => {
               console.log(res)
               this.onLoginSuccess({
                detail:res.userInfo
               })
            }
          })
        } else {
          this.setData({
            modelShow: true,
          })
        }
      }
    })
  },
onLoginSuccess(event){
  this.setData({
    userInfo:event.detail
   })
},
onLoginFail(){
  wx.showModal({
    title:'授权用户才能使用小程序',
    content:''
  })
},
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
              complete: (res) => {
               this.onLoginSuccess({
                detail:res.userInfo
               })
            }
          })
        }
      }
    })
  },
});
