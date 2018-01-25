function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    // vedioSrc:"http://ugcyd.qq.com/x0147bzcyqe.p702.1.mp4?sdtfrom=v1010&guid=240d97f222c985b6b5b74dc365a5c992&vkey=CC7F7B2961CC2EEE2F0E02112E721C195A4E3DD61B2E1DEA3FC0D19F646BDA3D2DBC922816D334D18C303108A499F24771638F12B3A689290AD155865D6BE47D79F4FB229C32E7B9F4C87C8359C4424A8BAE4E6321A793C9F7D078F3656FA0AC881CFA30D376798A3A957EEC74BD0D5BE667D3776FDD3307#t=8",
    vedioSrc:'http://ugcyd.qq.com/u0530fvgeul.p712.1.mp4?sdtfrom=v1010&guid=240d97f222c985b6b5b74dc365a5c992&vkey=DE4160B27C8B883890843389384EE7EADCBFE0AB5C2222FDDE3EB976CA92B67E63A71D4084D6100CBD66BB3CFB4F2798908A496BB6D9FBB37FD2181E06829D3F7A4D0C4E59DC0CB278839202CC156D349BC4D0725B48076B9C3A65CF3CC3D857B06CEFBB1E76538A7204EED2F5FA537D54B43B7CCD168169#t=8',
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})