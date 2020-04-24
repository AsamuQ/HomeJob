// pages/jobDetails/jobDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    jobId:1,
    imageCompanyBluePath:"../img/index/index_k_blue.png",
    imageCompanyPinkPath:"../img/index/index_k_pink.png",
    // jobArr:[
    //   // 测试用数据
    //   {jid:1,title:"UI设计师",salary_min:9,salary_max:12,location:"北京",address:"中关村",experience:"1-3年",education:"本科",company:"千库科技有限公司",type:"电子商务",belong:"移动互联网",employee_min:500,employee_max:1000,status:true},
    //   {jid:2,title:"UI设计师",salary_min:9,salary_max:12,location:"北京",address:"中关村",experience:"1-3年",education:"本科",company:"千库科技有限公司",type:"电子商务",belong:"移动互联网",employee_min:500,employee_max:1000,status:false}
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取全局变量jobArr_global
    that.setData({
      id:options.id,
      jobArr:getApp().globalData.jobArr_global
    });

    wx.getSystemInfo( {
      success: function( res ) {
          that.setData( {
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
          });
      }

  });
  },
   //  tab切换逻辑
   swichNav: function( e ) {

    var that = this;

    if( this.data.currentTab === e.target.dataset.current ) {
        return false;
    } else {
        that.setData( {
            currentTab: e.target.dataset.current
        })
    }
},
bindChange: function( e ) {

    var that = this;
    that.setData( { currentTab: e.detail.current });

},

  /**
   * 投递确认框
   */
  completeConfirm:function(){
    var that = this
    wx.showModal({
      title: '投递提示',
      content: '资料完善度低影响企业对投递者的判断，请尽快完善个人信息',
      success:function(res){
            if(res.confirm){
              console.log('弹框后点确定');
              wx.navigateTo({
                url: '../baseData/baseData',
              })
            }else{
                console.log('弹框后点取消')
            }
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