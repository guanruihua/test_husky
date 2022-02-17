import {
  observable,
  makeObservable,
  configure,
  action,
  computed,
  makeAutoObservable
} from 'mobx'

// const AppStore = makeAutoObservable({
//   count: 1,
//   get double() {
//     return this.count * 2
//   }
// })

// type tLang = 'zh_CN' | 'en_US' | 'zh_TW'
// configure({ useProxies: 'never' })
class AppStore {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }
  // name = 'ruihuag'
  // lang: tLang = localStorage.lang || 'en_US'
  // constructor() {
  //   makeObservable(this, {
  //     lang: observable,
  //     name: observable
  //   })
  // }

  // updateLang(lang: tLang): void {
  //   this.lang = lang
  // }
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

// export default new AppStore()
export default AppStore
