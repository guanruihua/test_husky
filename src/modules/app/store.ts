import { observable, makeObservable } from 'mobx'
type tLang = 'zh_CN' | 'en_US' | 'zh_TW'

class AppStore {
  public lang: tLang = localStorage.lang || 'en_US'

  constructor() {
    makeObservable(this, {
      lang: observable
    })
  }

  updateLang = (lang: tLang): void => {
    this.lang = lang
  }
}

export default new AppStore()
