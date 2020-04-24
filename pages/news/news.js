// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { Image: "../img/news/1.jpg", name: "来自系统的消息", a: "系统消息", b: "1分钟前", Imag: "../img/news/5.jpg"},
      { Image: "../img/news/2.jpg", name: "花样首饰招聘", a: "你的简历能发一份吗？", b: "15分钟前", Imag: "../img/news/6.jpg" },
      { Image: "../img/news/3.jpg", name: "东怀", a: "看了你的作品，整体还不错", b: "30分钟前" },
      { Image: "../img/news/4.jpg", name: "东方快乐", a: "稍等，我给人事说一下你的情况", b: "1小时前"}
    ]
  },

  changeColor: function () {
    var color = this.data.color == "black" ? "blue" : "black";
    this.setData({
      color: color
    })
  },
  onTapDayWeather: function () {
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },
  goto : function(){
    wx.navigateTo({
      url: '/pages/content/content',
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