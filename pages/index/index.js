/*
首页
获取接口数据 轮播图
*/
Page({
  data: {
    // 轮播图数组
    swiperList: []
  },

  onLoad() {
    this.getSwiperData()
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
  }
})
