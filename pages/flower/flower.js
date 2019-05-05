// pages/obtaining/obtaining.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    tip: '请输入关键字',
    focus: false,
    searchValue: '',
    hidd_load: true, // 隐藏加载框
    productData: [],
    productType: '',
    dataType:[0,1,2,3,4,5,6],
    baseUrl: getApp().globalData.baseUrl
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindSearchByWord: function (e) {
    this.setData({hidd_load:false})
    console.log(e.detail.value);
    const _this = this;
    // 拼接请求url
    const url = _this.data.baseUrl+"/product/search";
    console.log(url);
    // 请求数据
    wx.request({
      url: url,
      data: { key: e.detail.value},
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          productData: res.data.data,
          hidd_load: true // 关闭等待框
        })
      }
    })
  },
  bindFindProductByType: function(e) {
    const _this = this;
    if(e==''){
      var type =0;
    }else{
    console.log(e);
    this.setData({ hidd_load: false })
    var type = e.currentTarget.dataset.type;
    console.log(type);
    }
    // 拼接请求url
    const url = _this.data.baseUrl + "/product/type";
    console.log(url);
    // 请求数据
    wx.request({
      url: url,
      data: { type: type},
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          productData: res.data.data,
          hidd_load: true // 关闭等待框
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindFindProductByType('');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})