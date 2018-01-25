// pages/pb/pb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


    indicatorDots: true,
    imgUrls: [
      // './images/top1.png',
      // './images/top2.png',
      // './images/top3.png',
      // './images/top4.png',
      'https://raw.githubusercontent.com/revang/wechatmp-study/master/pages/wechatmp_bilibili/images/top1.png',
      'https://raw.githubusercontent.com/revang/wechatmp-study/master/pages/wechatmp_bilibili/images/top2.png',
      'https://raw.githubusercontent.com/revang/wechatmp-study/master/pages/wechatmp_bilibili/images/top3.png',
      'https://raw.githubusercontent.com/revang/wechatmp-study/master/pages/wechatmp_bilibili/images/top4.png',
      
    ],

    listSum:[
      {
        pic:'./images/list/pic-1.jpg',
        title:'title1',
        text:'text1',
        pic1: './images/list/pic-1.jpg',
        title1: 'title1',
        text1: 'text1'
      },
      {
        pic: './images/list/pic-1.jpg',
        title: 'title1',
        text: 'text1',
        pic1: './images/list/pic-1.jpg',
        title1: 'title1',
        text1: 'text1'
      }
    ],

    imgItem:[
      {
        pic:'./images/item1.png',
        title: '【雷安/手书】Finale-Original Edit',
        text:'bgm：finale-original edit-madeon'
      },
      {
        pic: './images/item2.jpg',
        title: '【黑执事MMD】一样可以保护你',
        text: '丽兹小天使生日快乐啊啊(/≧▽≦)/~┴┴ '
      },
      {
        pic: './images/item4.jpg',
        title: '【tiki】红昭愿',
        text: '作词: 荒唐客(偏生梓归 作曲: 殇小谨 编曲 ：朱鸽 后期/混音: mr.鱼'
      },
      {
        pic: './images/item3.jpg',
        title: '【五五开】目标是开挂大师',
        text: '推荐一下全明星版：av17505741'
      }
      
    ]
 

  },

  goto_player:function(){

    wx.navigateTo({
      url: './player',
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