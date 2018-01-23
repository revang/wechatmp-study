// pages/day-4/day-4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  // 跳转 audio-study 页面
  goto_audio_page:function(){
    wx.navigateTo({
      url: './audio-study',
    })
  },

  // 跳转 vedio-study 页面
  goto_vedio_page:function(){
    wx.navigateTo({
      url: './vedio-study',
    })
  },

  // 跳转 map-study 页面
  goto_map_page:function(){
    wx.navigateTo({
      url: './map-study',
    })
  },

  // 跳转 upload-image-study 页面
  goto_upload_image_page:function(){
    wx.navigateTo({
      url: './upload-image-study',
    })
  }
})