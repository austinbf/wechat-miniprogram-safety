// pages/index/indexItem/myMsg/myMsg.js
const { get, post } = require('../../../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myMsgDataObj:'',
  },
  onClose(event) {
    wx.showModal({
      title: '确认删除',
      content: '是否确认删除该条记录？',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../../../coverPage/cover?confirmDelete=false',
          })
        }
      }
    })
  },
showData(){


console.log(this.data.myMsgDataObj);
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})