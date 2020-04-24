Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    modalHidden:true
  },
 
  //表单提交
  formSubmit:function(e){
    var that=this;
    var information= e.detail.value;
    var isCompelete=1;
    console.log("baseData:"+information);
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
      wx.showModal({
        cancelColor: 'cancelColor',
        title:'确认提交',
        content:'请确认信息无误',
        success:function(){
          wx.showToast({
            title: '提交成功',
            icon:'success'
          })
          setTimeout(function () {
            wx.navigateBack({
              url: '../baseData/baseData',
            })
          }, 2000) 
          // 此处写传递数据给服务器
          wx.request({
            url: '接口路径',
            header:{
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method:"post",
            data:{
              name:information.name,
              phone:information.phone,
              email:information.email,
              date :information.date,
              bornDate:information.bornDate,
              education:information.education,
              married:information.married
            },
            //成功回调函数
            success:function(res){
              console.log(res);
              if (res.data.status == 0) {
                wx.showToast({
                  title: '提交失败！！！',
                  icon: 'loading',
                  duration: 1500
                })
              } else {
                wx.showToast({
                  title: '提交成功！！！',
                  icon: 'success',
                  duration: 1000
                })
                
              }
    
            }
          })
        }
      });
    }
    this.setData({
      modalHidden:false
    });
  },
 
  onLoad: function (options) {
  
  }
})