// pages/wechatmp_bilibili/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInputPwd:false,
    imgLoginUrls:[
      'images/login-username.png',
      'images/login-password.png',
    ],

    textPwd:"显示密码",
    isSeePwd:true
    
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
  
  },

  // 是否显示密码
  see_pwd: function () {
    if (this.data.isSeePwd == false) {
      this.setData({ textPwd: "显示密码" }, { isSeePwd: true });
    }
    else {
      this.setData({ textPwd: "隐藏密码" }, { isSeePwd: false });
    }
  }
})