const app = getApp();

Page({
  data: {
    currentTab: 0,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    const { current } = options;
    this.setData({
      currentTab: current
    })

    this.getInfo();
  },

  getInfo: function() {
    const userId = wx.getStorageSync('userId');

    var reqTask = wx.request({
      url: 'http://127.0.0.1:8080/flower/order/getOrderByType',
      data: {
        userId,
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        const { data } = result.data;
        let allList = [], fail = [], noPayList = [], noGetList = [], noCommentList = [], finishedList = [];

        data.forEach(element => {
          switch(element.status) {
            case 0:
              element.type = '已取消';
              fail.push(element);
              allList.push(element);
              break;
            case 1:
              element.type = '待支付';
              noPayList.push(element);
              allList.push(element);
              break;
            case 2:
              element.type = '待发货';
              noGetList.push(element);
              allList.push(element);
              break;
            case 3:
              element.type = '待收货';
              noCommentList.push(element);
              allList.push(element);
              break;
            case 4:
              element.type = '待评价';
              finishedList.push(element);
              allList.push(element);
              break;
            case 5:
              element.type = '已评价';
              finishedList.push(element);
              allList.push(element);
              break;
            default:
              console.log("订单状态码为：" + element.status);
          }
        });

        this.setData({
          allList,
          noGetList,
          noPayList,
          noCommentList,
          finishedList,
          fail
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  delete: function (e) {
    const { id } = e.currentTarget.dataset;

    var reqTask = wx.request({
      url: 'http://127.0.0.1:8080/flower/order/deleteOrder',
      data: {
        orderId: id
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if (result.data.code == 400) {
          wx.showToast({
            title: '删除失败',
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
        } else {
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
        }
        
      },
      fail: ()=>{},
      complete: ()=>{}
      });
  }

})