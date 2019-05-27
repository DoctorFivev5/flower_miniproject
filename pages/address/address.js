const app = getApp();

Page({
  data: {
    addressList: [
      {
        info: {
          name: "张三",
          phone: "12345678910"
        },
        address: "杭州市滨江区网商路699号",
        isDefault: 1
      },
      {
        info: {
          name: "李四",
          phone: "12345678910"
        },
        address: "杭州市滨江区网商路699号",
        isDefault: 0
      }
    ]
  },

  edit: function(e) {
    const { item } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../editAddress/editAddress?item=${item}`
    });
  },

  add: function() {
    wx.navigateTo({
      url: '../editAddress/editAddress'
    })
  }
})