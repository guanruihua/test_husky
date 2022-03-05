import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { ConfigProvider, DatePicker } from 'antd'
// import { BrowserRouter as Router } from 'react-router-dom'
// import styles from './style.module.less'
// import { Route, BrowserRouter as Router } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { locales } from '@assets'
import icon from '@assets/resource/image/favicon.ico'
// const { locales } = Locales

const iconDom: any = document.querySelector('link[rel="short icon"]')
iconDom.href = icon

// @inject('AppStore')
// @observer
// class Test extends React.Component {
//   render() {
//     console.log(this.props)
//     return <div>test</div>
//   }
// }
type Lang = 'zh_CN' | 'en_US' | 'zh_TW'

const App = inject('AppStore')(
  observer((props: any) => {
    console.log({ props })
    const { AppStore } = props
    const { lang }: { lang: Lang } = AppStore
    // const lang = 'zh_CN'
    // // const lang: tLang = AppStore.lang
    // React.useEffect(() => {
    //   AppStore.updateLang(localStorage.lang || 'en_US')
    // }, [localStorage.lang])
    console.log({ AppStore })
    return (
      <ConfigProvider locale={locales[lang].antd}>
        <IntlProvider
          messages={locales[lang].mess}
          locale="en"
          defaultLocale="en"
        >
          <div>
            {AppStore.lang || 'undefined'}
            <br />
            {lang}
            <button
              onClick={() => {
                AppStore.updateLang('en_US')
              }}
            >
              en_us
            </button>
            <FormattedMessage
              id="global.app.info.yes"
              defaultMessage="Today is {ts, date, ::yyyyMMdd}"
              values={{ ts: Date.now() }}
            />
            <DatePicker />
          </div>
        </IntlProvider>
      </ConfigProvider>

      // <IntlProvider
      //   locale={locales[lang].locale}
      //   messages={locales[lang].messages}
      // >
      // <ConfigProvider locale={locales['en_US'].antd}>
      //   <Router basename="/">
      //     {/* <Route exact path={'/login'}>
      //           <Login />
      //         </Route> */}
      //     {/* {appRouters.map((item: iRouter): any => {
      //           const { module, ...rest } = item
      //           return <Route component={module} {...rest} />
      //         })} */}
      //   </Router>
      // </ConfigProvider>
      // </IntlProvider>
    )
  })
)

export default App

// import React from 'react'
// import { Button } from 'antd'
// import styles from './style.module.less'

// function App() {
//   return (
//     <div className={styles.test}>
//       App
//       <Button type="primary">btn</Button>
//       <Button type="primary">Primary Button</Button>
//       <Button>Default Button</Button>
//       <Button type="dashed">Dashed Button</Button>
//       <br />
//       <Button type="text">Text Button</Button>
//       <Button type="link">Link Button</Button>
//     </div>
//   )
// }

// export default App
