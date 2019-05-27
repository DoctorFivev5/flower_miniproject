const app = getApp();

Page({
  data: {
    currentTab: 0,
    allList: [
      {
        type: '待付款',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
      {
        type: '待付款',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
      {
        type: '待付款',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
    ],
    fail: [
      {
        type: '已取消',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
    ],
    noPayList: [
      {
        type: '待付款',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
    ],
    noGetList: [
      {
        type: '待签收',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
    ],
    noCommentList: [
      {
        type: '待评价',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
    ],
    finishedList: [
      {
        type: '已完成',
        productList: [
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          },
          {
            image: '../../images/test.jpg',
            name: '玫瑰',
            money: 10,
            count: 10
          }
        ],
        total: 200
      },
    ],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    const { current } = options;
    this.setData({
      currentTab: current
    })
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
  }

})