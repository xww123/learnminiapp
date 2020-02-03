// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'codewhy',
    age: 18,
    students: [
      {id:110,name: 'kobe', age:30},
      {id:111,name: 'james',age:28},
      {id:112,name:'curry',age:32},
      {id:113,name:'why',age: 18}
    ],
    counter: 0
  },
  handleBtnClick(){
    // 1界面上的数据不会刷新
    this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData
    // this.setData({
    //   counter:100
    // })
    this.setData({
      counter: this.data.counter
    })
  },
  handleBtnSub(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})