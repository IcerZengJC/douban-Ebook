// components/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modelShow:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    footerBottom:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGetUserInfo(event){
      console.log(event)
      const userInfo=event.detail.userInfo;
      if(userInfo){
        this.setData({
          modelShow:false
        })
        this.triggerEvent('loginsuccess',userInfo);
      }else{
        this.triggerEvent('loginfail')

      }
    }
  }
})
