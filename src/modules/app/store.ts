import {
  observable,
  makeObservable,
  configure,
  action,
  computed,
  makeAutoObservable
} from 'mobx'

import { Lang } from '@/assets/type/commom'
configure({ enforceActions: 'always' })

class AppStore {
  secondsPassed = 0
  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }
  name = 'ruihuag'
  lang: Lang = localStorage.lang || 'en_US'
  // constructor() {
  //   makeObservable(this, {
  //     lang: observable,
  //     name: observable
  //   })
  // }

  updateLang(lang: Lang): void {
    this.lang = lang
  }
  // @observable count = 0
  // constructor() {
  //   makeObservable(this)
  // }
  // @action increment() {
  //   this.count++
  // }
  // @action decrement() {
  //   this.count--
  // }
  // @computed get double() {
  //   return this.count * 2
  // }
}

export default new AppStore()
