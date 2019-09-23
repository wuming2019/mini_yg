/*
首页
1获取接口数据 轮播图
2使用封装好的异步代码来发送请求
3统一在request文件中加入了调用的loading方法
（需要在发送出去的请求都回来了，再加上loading）
*/

import { request } from "../../request/index.js"

Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    catitemList: [],
    // 楼层数组
    floorList: []
  },

  onLoad() {
    this.getSwiperData()
    this.getCatitems()
    this.getfloorList()
  },

  // 获取轮播图数据
  getSwiperData() {
    request({
      url: "/home/swiperdata"
    }).then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })
  },

  // 获取导航数据
  getCatitems() {
    request({
      url: "/home/catitems"
    }).then(result => {
      this.setData({
        catitemList: result.data.message
      })
    })
  },

  // 获取楼层数据
  getfloorList() {
    request({
      url: "/home/floordata"
    }).then(result => {
      this.setData({
        floorList: result.data.message
      })
    })
  }
})
