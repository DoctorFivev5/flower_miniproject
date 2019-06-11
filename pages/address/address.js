const app = getApp();

Page({
  data: {
    addressList: [],
  },

  getInfo: function() {
    const userId = wx.getStorageSync('userId');

    var reqTask = wx.request({
      url: 'http://127.0.0.1/flower/address/getAddress',
      data: {
        userId
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData({
          addressList: result.data.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  onShow: function(e) {
    this.getInfo();
  },

  delete: function(e) {
    const { id } = e.currentTarget.dataset.item;
    
    var reqTask = wx.request({
      url: 'http://127.0.0.1/flower/address/deleteAddress',
      data: {
        id
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          image: '',
          duration: 1500,
          mask: false,
          success: (result)=>{
            this.getInfo();
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  add: function() {
    wx.navigateTo({
      url: '../editAddress/editAddress'
    })
  }
})