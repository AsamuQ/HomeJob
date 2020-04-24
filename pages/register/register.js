// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageCompanyBluePath: "../img/index/login.png",
  },

  //表单提交
  formSubmit:function(e){
    var information= e.detail.value;
    var isCompelete=1;
    for (var i in information){
      if (information[i.toString()]==0){
        wx.showToast({
          title: '还有信息未填写',
          icon:'none'
        })
        isCompelete=0;
        break;
      }
    }
    if (isCompelete==1){
      console.log(information)
      var app=getApp();      
      app.globalData.account_global=information["account"];
      app.globalData.password_global=information["password"];
      console.log(app.globalData.account_global+" "+app.globalData.password_global)
      wx.showToast({
        title: '注册成功',
        icon:'sucess',
        duration: 2000,
      });
      setTimeout(function () {
        wx.reLaunch({
          url: '../index/index',
        })
      }, 2000) 
    }
    
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