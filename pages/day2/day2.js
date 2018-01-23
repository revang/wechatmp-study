// pages/pb/pb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


    indicatorDots: true,
    imgUrls: [
      './images/haibao/haibao-1.jpg',
      './images/haibao/haibao-2.jpg',
      './images/haibao/haibao-3.jpg',
      './images/haibao/haibao-4.jpg',
      './images/haibao/haibao-5.jpg'
    ],
    product: [
      {
        pic: './images/list/pic-1.jpg',
        title: '爱心早餐',
        mNum: 26,
        star: 230,
        plcount: 1134
      },
      {
        pic: './images/list/pic-2.jpg',
        title: '营养炖菜',
        mNum: 33,
        star: 430,
        plcount: 3454
      },
      {
        pic: './images/list/pic-3.jpg',
        title: '主食也不单调',
        mNum: 26,
        star: 230,
        plcount: 134
      },
      {
        pic: './images/list/pic-4.jpg',
        title: '中式简餐菜肴',
        mNum: 54,
        star: 567,
        plcount: 5463
      },
      {
        pic: './images/list/pic-5.jpg',
        title: '犯懒专用宝宝饭',
        mNum: 67,
        star: 435,
        plcount: 4343
      }
    ]

  },
  seeDetail: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../subjectDetail/subjectDetail?id=' + id
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