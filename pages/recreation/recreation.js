// pages/recreation/recreation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ title: "美丽的蝴蝶花", upic: "/images/1.jpg", user: " 赵大宝", content: "像一只五彩斑斓的蝴蝶在我心中飞舞！", pic: "/images/hd.jpg" }, { title: "亲爱的桂花树", upic: "/images/2.jpg", user: "庄雨蝶", content: "承载着我的欢笑与我的泪水！", pic: "/images/gh.jpg" }, { title: "校门口的栀子花", upic: "/images/3.jpg", user: "张珈榕", content: "褪去了淡绿的青涩，瓣瓣花瓣盛开的刚刚好。", pic: "/images/zzh.jpg" }, { title: "迷人的桃花园", upic: "/images/4.jpg", user: "王思蘅", content: "一簇簇粉红的花瓣挤满了枝头。", pic: "/images/th.jpg" }, { title: "浪漫樱花", upic: "/images/5.jpg", user: "徐洁璐", content: "樱花树轻轻摇，眼前是下起了粉红的花瓣雨。", pic: "/images/yh.jpg" }],
    imgUrls: [
      '/images/lb1.jpg',
      '/images/lb2.jpg',
      '/images/lb3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
toContent: function(event){
  wx.navigateTo({
    url: '../content/content?title='+ event.currentTarget.dataset.title ,
  })

},
  toCreat: function () {
    wx.navigateTo({
      url: '../creatContent/creatContent',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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