// map.js
Page({
  data: {
    markers: [{
      iconPath: "./images/people.png",
      id: 0,
      latitude: 30.3180623215120,
      longitude: 120.1562261581,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 120.156227,
        latitude: 30.318063
      }, {
        longitude: 120.156226,
        latitude: 30.318062
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: './images/cars.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  // 返回
  return_user: function () {
    wx.navigateBack({
      
    })
  }
})