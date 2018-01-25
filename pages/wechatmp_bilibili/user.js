//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mapUrl: './map',

    userName: "",
    userImgUrl: "",
    uid: "27782459",
    userGender: "",
    userBirth: "",
    userAddress: "",
    userText: ""
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
        that.setData({ userAddress: res.userInfo.city + ", " + res.userInfo.province })
        that.setData({ userText: "沉迷游戏无法自拔" })
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
  },
  btn_preview_image: function () {
    var that = this;
    wx.previewImage({
      // current: res.tempFilePaths[0],
      // urls: res.tempFilePaths
      current: 'https://raw.githubusercontent.com/revang/wechatmp-study/master/pages/wechatmp_bilibili/images/img2.png',
      urls: ['https://raw.githubusercontent.com/revang/wechatmp-study/master/pages/wechatmp_bilibili/images/img2.png']
    })
  },
  btn_choose_image: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // var tempFilePaths = res.tempFilePaths
        that.setData({ userImgUrl: res.tempFilePaths });
      }
    })
  },
  setUserText: function () {
    // var utext
    // this.dataSet({utext:userText})
    // console.log(utext)
    // wx.setStorage({
    //   key: 'userText',
    //   data: '沉迷游戏无法自拔',
    // })
    wx.navigateTo({
      url: './user-text?&userText=沉迷游戏无法自拔',
    })
  },
  
  onShow: function () {
    wx.startPullDownRefresh()
    var that=this
    wx.getStorage({
      key: 'userText',
      success: function (res) {
        that.setData({ userText: res.data })
        console.log(res.data)
      },
    })
  }
})
