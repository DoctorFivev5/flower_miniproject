// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "加载中...", // 状态
    list: [], // 数据列表
    type: "", // 数据类型
    loading: true // 显示等待框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = "http://192.168.0.1/miniprogramtest/test";
      // 请求数据
      wx.request({
        url: url,
        data: {},
        header: {
          "content-type": "json" // 默认值
        },
        success: function (res) {
          console.log(res.data);
          // 赋值
          _this.setData({
            title: res.data.title,
            list: res.data.subjects,
            type: "top250",
            loading: false // 关闭等待框
          })
        }
      })
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