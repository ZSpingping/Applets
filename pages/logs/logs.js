//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    phone:'15900334435',
    mailbox:'15900334435@163.com',
    github:'https://github.com/zengdexing'
  },
  Call:function(){
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.phone//仅为示例，并非真实的电话号码
    })
  },
  onLoad: function () {

  }
})
