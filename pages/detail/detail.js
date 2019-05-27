// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLike: true,
    // banner
    imgUrls: [],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    showDialog: false,
    // 商品详情介绍
    detailImg: [],
    product: '',
    baseUrl: getApp().globalData.baseUrl,
    // 购买数量是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled'
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/shop/shop'
    })
  },
  // 立即购买
  toastBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
  // 加入购物车成功
  toastShopCar() {
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    });
  },
  toggleDialog(){
    this.setData({
      showDialog: true
    })
  },
  closeDialog(){
    this.setData({
      showDialog: false
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  },
  addCar(){
    const _this = this;
    wx.request({
      url: _this.data.baseUrl + '/shopCar/addShopCar',
      data: {
        productId: _this.data.product.id ,
        number: _this.data.num,
        userId: getApp().globalData.myUserInfo.id
      },
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        //响应添加购物车成功
      }
    })
    _this.closeDialog();
    _this.toastShopCar();
  },
  buy(){
    var _this = this;
    var id = _this.data.product.id;
    var number = _this.data.num;
    wx.navigateTo({
      url: '../buy/buy?id='+id+'&number='+number
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ hidd_load: false })
    var id = options.id;
    console.log(id);
    const _this = this;
    wx.request({
      url: _this.data.baseUrl +'/product/detail',
      data: { id: id },
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          imgUrls: res.data.data[0].image,
          detailImg: res.data.data[0].image,
          product: res.data.data[0],
          hidd_load: true // 关闭等待框
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