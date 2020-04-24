// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageEvaluatePath:"../img/evaluate/5.png",
    imageLocationPath:"../img/index/index_location.png",
    imageSearchPath:"../img/index/index_search.png",
    imageCompanyBluePath:"../img/index/index_k_blue.png",
    imageCompanyPinkPath:"../img/index/index_k_pink.png",
    navArr:[
      {id:1,imgPath:"../img/evaluate/evaluate_f1.png",title:"你的职业水平"},
      {id:2, imgPath:"../img/evaluate/evaluate_f2.png",title:"公司层压测试"},
      {id:3, imgPath: "../img/evaluate/evaluate_f3.png",title:"公司需求测试"},
    ],
    jobArr:[
      // 测试用数据
      {jid:1,title:"UI设计师",salary_min:9,salary_max:12,location:"北京",address:"中关村",experience:"1-3年",education:"本科",company:"千库科技有限公司",type:"电子商务",belong:"移动互联网",employee_min:500,employee_max:1000,status:true},
      {jid:2,title:"UI设计师",salary_min:9,salary_max:12,location:"北京",address:"中关村",experience:"1-3年",education:"本科",company:"千库科技有限公司",type:"电子商务",belong:"移动互联网",employee_min:500,employee_max:1000,status:false}
    ],
  },

  //跳转职位详情页面
  gotoJobDetails:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '../jobDetails/jobDetails?id='+id,
    })
  },
  //跳转水平测试页面
  gotoLevel:function(e){
    wx.navigateTo({
      url: '../level/level',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
        that.setData({
          jobArr: getApp().globalData.jobArr_global
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