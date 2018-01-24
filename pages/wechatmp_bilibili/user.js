//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '你好，世界！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    userName: "",
    userImgUrl: "",
    uid:"27782459",
    userGender: "",
    userBirth:"",
    userAddress:"",
    userText:""
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var tempGender
        // var userProvince
        // var userCity
        // var userInfo = res.userInfo
        // var nickName = userInfo.nickName
        // var avatarUrl = userInfo.avatarUrl
        // var gender = userInfo.gender //性别 0：未知、1：男、2：女
        // var province = userInfo.province
        // var city = userInfo.city
        // var country = userInfo.country
        console.log(res);

        that.setData({ userImgUrl: res.userInfo.avatarUrl })
        that.setData({ userName: res.userInfo.nickName })
        that.setData({ uid: "27782459" })
        that.setData({ img2: "./images/img2.png" })
        that.setData({ tempGender: res.userInfo.gender })
        that.setData({ userBirth: "1997-08-01" })
        that.setData({ userAddress: res.userInfo.city + ", " + res.userInfo.province})
        that.setData({userText:"沉迷游戏无法自拔"})
        if (tempGender = 0) {
          that.setData({ userGender: "不明" })
        }
        else if (tempGender = 1) {
          that.setData({ userGender: "男" })
        }
        else {
          that.setData({ userGender: "女" })
        }
      }
    })
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
