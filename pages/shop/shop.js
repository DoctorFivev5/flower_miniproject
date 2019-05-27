// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: getApp().globalData.baseUrl,
    title: "加载中...", // 状态
    list: [], // 数据列表
    type: "", // 数据类型
    loading: true, // 显示等待框
    minusStatus: 'disabled',
    priceAll:0,
    checkAll: false,
    checkArray: []
  },
  numberChange: function (index) {
    var _this = this;
    var url = _this.data.baseUrl + '/shopCar/updateShopCar';
    wx.request({
      url: url,
      data: {
        id: _this.data.list[index].id,
        productId: _this.data.list[index].productId,
        userId: _this.data.list[index].userId,
        number: _this.data.list[index].number,
        selected: _this.data.list[index].selected 
      },
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          // // title: res.data.title,
          // list: res.data.data,

        })
      }
    })
  },
  checkboxChange(e){
    console.log(e);
    var _this = this;
    var index = e.detail.value
    var _list = _this.data.list;

    var price = 0;
    for(var i = 0; i < _list.length; i++){
      _list[i].selected = 0;
    }
    for (var i in index) {
      var code = index[i];
      price += _list[code].price * _list[code].number;
      _list[code].selected = 1;
    }
    _this.setData({
      checkAll: (index.length == _list.length),
      priceAll: price,
      list: _list
    })

    var url = _this.data.baseUrl + '/shopCar/updateShopCars';
    console.log(url);
    console.log(_list);
    wx.request({
      url: url,
      method: "POST",
      data: {
        list: JSON.stringify(_list)
        // list: _list
      },
      header: {
        "content-type": "application/x-www-form-urlencoded", // 默认值
        "charset": "UTF-8"
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          // // title: res.data.title,
          // list: res.data.data,

        })
      }
    })

  },
  checkboxAllChange(e){
    console.log(e);
    var _this = this;
    var _list = this.data.list;
    var _checkAll = this.data.checkAll;
    var _priceAll = 0;
    if (_checkAll == 0){
      _checkAll = 1;
      for (var item in _list) {
        _list[item].selected = _checkAll;
        _priceAll += _list[item].price * _list[item].number;
      }
    }else{
      _checkAll = 0;
      for (var item in _list) {
        _list[item].selected = _checkAll;
      }
    }
    console.log(_list);
    console.log(_checkAll);
    console.log(_priceAll);
    _this.setData({
      list: _list,
      checkAll: _checkAll,
      priceAll: _priceAll
    });
    var url = _this.data.baseUrl + '/shopCar/updateShopCars';
    console.log(url);
    console.log(_list);
    wx.request({
      url: url,
      method: "POST",
      data: {
        list: JSON.stringify(_list)
        // list: _list
      },
      header: {
        "content-type": "application/x-www-form-urlencoded", // 默认值
        "charset": "UTF-8"
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          // // title: res.data.title,
          // list: res.data.data,

        })
      }
    })
    
  },
  /* 点击减号 */
  bindMinus: function (e) {
    var index = e.currentTarget.dataset['index'];
    var num = this.data.list[index].number;
    var _list = this.data.list;
    var _this = this;
    var _priceAll = 0;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
      _list[index].number = num;
      _this.numberChange(index);
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    //改变本地的价格
    for (var item in _list) {
      if (_list[item].selected == 1)
        _priceAll += _list[item].price * _list[item].number;
    }
    // 将数值与状态写回
    this.setData({
      list: _list,
      minusStatus: minusStatus,
      priceAll: _priceAll
    });
  },
  /* 点击加号 */
  bindPlus: function (e) {
    console.log(e);
    var index = e.currentTarget.dataset['index'];
    var num = this.data.list[index].number;
    var _list = this.data.list;
    var _this = this;
    var _priceAll = 0;
    // 不作过多考虑自增1
    num++;
    _list[index].number = num;
    //改变本地的价格
    for(var item in _list){
      if (_list[item].selected == 1)
        _priceAll += _list[item].price * _list[item].number;
    }
    //发送改变数量的网络请求
    _this.numberChange(index);
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      list: _list,
      minusStatus: minusStatus,
      priceAll: _priceAll
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () { // options 为 board页传来的参数
    
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
    const _this = this;
    // 拼接请求url
    const url = _this.data.baseUrl + '/shopCar';
    // 请求数据
    wx.request({
      url: url,
      data: { id: getApp().globalData.myUserInfo.id },
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        var price = 0;
        var count = 0;
        for (var item in res.data.data) {
          if (res.data.data[item].selected == 1){
            count++;
            price += res.data.data[item].price * res.data.data[item].number;
          }
        }
        // 赋值
        _this.setData({
          // title: res.data.title,
          priceAll: price,
          checkAll: (count == res.data.data.length && count>0),
          list: res.data.data,
          loading: false // 关闭等待框
        })
      }
    })
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