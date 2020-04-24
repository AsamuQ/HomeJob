//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,//首页标签页切换
    //轮播
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    imageIndexPath: "../img/index/index01.png",
    imageLocationPath: "../img/index/index_location.png",
    imageSearchPath: "../img/index/index_search.png",
    imageCompanyBluePath: "../img/index/index_k_blue.png",
    imageCompanyPinkPath: "../img/index/index_k_pink.png",
    functionArr: [
      { imagePath: "../img/index/index_f1.png", title: "招聘" },
      { imagePath: "../img/index/index_f2.png", title: "简历" },
      { imagePath: "../img/index/index_f3.png", title: "会员" },
      { imagePath: "../img/index/index_f4.png", title: "企业" }
    ],
    lunboArr:[
      "../img/index/index01.png",
      "../img/evaluate/10.png",
      "../img/evaluate/12.png",
    ],
  },
  gotoJobDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '../jobDetails/jobDetails?id=' + id,
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight + res.windowHeight
        });
      }
    });

    wx.request({
      url: 'http://47.96.28.17/select',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data)
        var app = getApp();
        app.globalData.jobArr_global = res.data.data;
        that.setData({
          jobArr: getApp().globalData.jobArr_global
        })
      }
    })
  },
  //  tab切换逻辑
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
