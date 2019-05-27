const app = getApp();

Page({
  data: {
    avatar: '../../images/test.jpg'
  },

  onLoad: function(e) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              wx.switchTab({
                url: '../index/index'
              })
            }
          })
        }
      }
    })
  },

  toIndex: function(e) {
    const { errMsg } = e.detail;

    if (errMsg === 'getUserInfo:fail auth deny') {
      wx.showModal({
        title: 'Error!',
        content: '如果不授权将无法正常使用该小程序',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
  }
})