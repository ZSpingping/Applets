//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [{
      id:'北京恒升科创科技有限公司',
      time:'2016年2月~至今',
      bumen:'技术部',
      jinenga:'优化用户体验，公司主页的编写',
      jinengb:'实现空气净化系统的一整套页面',
      jinengc:'完成公司小程序，公众号等开发',
      jinengd:'掌握了git,webpack,vue-cli等开发工具',
      jinenge:'GitHub地址:http://www.github.com/zengdexing'
    },{
      id:'河北跃蓝网络科技公司',
      time:'2016年7月~2016年12月',
      bumen:'技术部',
      jinenga:'优化用户体验，电商页面编写',
      jinengb:'用HTML5，CSS3，JS，jQuery,Ajax等相关技术',
      jinengc:'协同其他人员工作，能够更好地更高效的完成项目',
      jinengd:'完成多个游戏的的开发和实现',
      jinenge:'GitHub地址:http://www.github.com/zengdexing'
    },
    ],
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
