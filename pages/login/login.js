// pages/login/login.js
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
    var app=getApp();
    var acc=app.globalData.account_global;
    var pwd=app.globalData.password_global;
    console.log("login:"+information);
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
      console.log(acc+" "+pwd)
      if (information.account==acc&&information.password==pwd){
        wx.showToast({
          title: '登陆成功',
          icon:'sucess',
          duration:2000
        });
        setTimeout(function () {
          wx.reLaunch({
            url: '../index/index',
          })
        }, 2000) 
        
      }
      else{
        wx.showToast({
          title: '账号不存在或密码错误',
          icon:'none'
        });
      }
    }
    
  },

  /**
   * 跳转注册页面
   */
  gotoRegister:function(){
    wx.navigateTo({
      url: '../register/register',
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