import { observable, action } from 'mobx-miniprogram'
export const store = observable({
  activeTabBarIndex: 0, 
  updateActiveTabBarIndex: action(function(index) {
    this.activeTabBarIndex = index
  })
})