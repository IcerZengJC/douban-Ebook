//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'test-peovn',
        traceUser: true,
      })
    }

    this.getOpedid()

  },
  globalData: {
    userInfo: null,
    openid:-1,
  },
  getOpedid(){
    wx.cloud.callFunction({
      name:'login'
    }).then((res)=>{
      const openid=res.result.openid
      this.globalData.openid=openid
      if(wx.getStorageSync(openid)==''){
        wx.setStorageSync(openid, [])
      }    
    })
  }
})