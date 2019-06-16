const app = getApp();

Page({
  phone: '',
  name: '',
  address: '',

  onLoad: function(options) {
    if (Object.keys(options).length !== 0) {
      const { address } = options;
      let name;
      let phone;
      if (options.info) {
        name = options.info.name;
        phone = options.info.phone;
      }
      this.setData({
        name,
        phone,
        address
      })
    }
  },

  navigateTo: function() {
    wx.switchTab({
      url: '../mine/mine',
    });
  },

  submit: function(e) {
    const { name, phone, province, city, area, address } = e.detail.value;
    const userId = wx.getStorageSync('userId');

    const data = {
      userId,
      name,
      phone,
      isDefault: 1,
      province,
      city,
      area,
      detail: address,
    };

    var reqTask = wx.request({
      url: 'http://127.0.0.1:8080/flower/address/addAddress',
      data,
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        wx.showToast({
          title: '操作成功',
          icon: 'success',
          duration: 1500,
          mask: true,
          success: (result)=>{
            setTimeout(this.navigateTo, 1500);
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
    });
  },
})