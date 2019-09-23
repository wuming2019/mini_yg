// 同时发送异步请求的次数
let requestTimes = 0

export const request = (params) => {
    // 发送了几次 被递增几个 
    requestTimes++

    wx.showLoading({
        title: "加载中",
        // 遮罩层、用户无法再次点击屏幕
        mask: true
    })      

    // 公共的url
    const baseUrl = "https://api.zbztb.cn/api/public/v1"
    return new Promise((resolve,reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
              // console.table(result.data.message)
              resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                // console.log(requestTimes)
                requestTimes--
                requestTimes===0&& wx.hideLoading()
                // 等同于
                // if(requestTimes===0){
                //   console.log(requestTimes)
                //   wx.hideLoading()
                // }
            }
        })
    })
}