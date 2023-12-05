// pages/my/settingsPages/zhaomu/zhaomu.js
const { get, post } = require('../../../../utils/request');
const db = wx.cloud.database()
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
dataObj:''
  },
getData(){
wx.request({
  url: 'http://localhost:9090/user/login',
  method:"POST",
  data:{
    "username":"root",
    "password":"123456"
  },
  success:(res)=>{
    console.log(res);
  }
})
},
postData(){
// 调用 request 函数
post('/register',{
  username:'five123',
  password:'123123'
}).then(data => {
  console.log('请求成功', data);
})
.catch(error => {
  console.log('请求失败', error);
});
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