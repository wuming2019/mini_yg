/*
首页
获取接口数据 轮播图
*/
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    catitemList: []
  },

  onLoad() {
    this.getSwiperData()
    this.getCatitems()
  },

  // 获取轮播图数据
  getSwiperData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        // console.table(result.data.message)
        this.setData({
          swiperList: result.data.message
        })
      }
    })
  },

  // 获取导航数据
  getCatitems() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (result) => {
        // console.table(result.data.message)
        this.setData({
          catitemList: result.data.message
        })
      }
    })
  }
})
