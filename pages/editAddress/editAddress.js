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

  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  nameInput: function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  addressInput: function(e) {
    this.setData({
      address: e.detail.value
    })
  },

  submit: function(e) {
    console.log(e);
  },

  formSubmit: function(e) {
    console.log(e.detail.value);
  }
})