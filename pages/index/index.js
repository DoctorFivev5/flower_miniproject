//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    imgUrls: ["http://localhost:8080/flower/image/meigui.jpg","http://localhost:8080/flower/image/meigui.jpg"],
    week: "周一",
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    productData: [],
    baseUrl: getApp().globalData.baseUrl
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getWeek(){
    const weekNum = new Date().getDay();
    var str = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    this.setData({
      week: str[weekNum]
    })
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  onLoad: function () {
    var _this = this;
    const weekNum = new Date().getDay();
    var str = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    _this.setData({
      week: str[weekNum]
    })
    wx.request({
      url: _this.data.baseUrl + "/product/type",
      data: { type: weekNum },
      header: {
        "content-type": "json" // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          productData: res.data.data,
        })
      }
    })
  }
})
