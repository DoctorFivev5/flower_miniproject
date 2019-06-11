const app = getApp();

Page({
  data: {

  },


  navigateTo: function() {
    wx.switchTab({
      url: '../mine/mine',
    });
  },

  send: function(e) {
    const { advice } = e.detail.value;
    const userId = wx.getStorageSync('userId');

    const data = {
      userId,
      content: advice
    }

    var reqTask = wx.request({
      url: 'http://127.0.0.1/flower/feedback/addFeedback',
      data,
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        wx.showToast({
          title: '反馈成功',
          icon: 'success',
          duration: 1500,
          mask: true,
          success: (result)=>{
            setTimeout(this.navigateTo, 1500);
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      fail: ()=>{
        wx.showToast({
          title: '反馈失败',
          icon: 'none',
          duration: 1500,
          mask: true,
          success: (result)=>{
            setTimeout(this.navigateTo, 1500);
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      complete: ()=>{}
    });
  }
})