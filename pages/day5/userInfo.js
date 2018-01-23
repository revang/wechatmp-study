// pages/day5/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    userImgUrl: null,
    userGender: "",
    userProvince:"",
    userCity: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var tempGender
        // var userInfo = res.userInfo
        // var nickName = userInfo.nickName
        // var avatarUrl = userInfo.avatarUrl
        // var gender = userInfo.gender //性别 0：未知、1：男、2：女
        // var province = userInfo.province
        // var city = userInfo.city
        // var country = userInfo.country

        console.log(res);

        that.setData({ userName: res.userInfo.nickName })
        that.setData({ userImgUrl: res.userInfo.avatarUrl })
        that.setData({ tempGender: res.userInfo.gender })
        that.setData({ userProvince: res.userInfo.province })
        that.setData({ userCity: res.userInfo.city })
        if (tempGender == 0) {
          that.setData({ userGender: "不明" })
        }
        else if(tempGender==1){
          that.setData({ userGender: "男" })
        }
        else{
          that.setData({ userGender: "女" })
        }
        if(res.userInfo.province==""){that.setData({userProvince:"不明"})}
        if (res.userInfo.city == "") { that.setData({ userCity: "不明" }) }
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