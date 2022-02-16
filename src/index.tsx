import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from './index.less'

function App() {
  const a = 123
  let c: number = a
  c++
  // a++
  const dd = 123
  return (
    <div className={styles.testDiv}>
      Appp{c}
      {dd}
    </div>
  )
}

ReactDOM.render(
  <div>
    loadding
    <div className={styles.a}>
      aaa
      <div className={styles.ac}>aaaaaac</div>
    </div>
    <App />
  </div>,
  document.getElementById('root')
)
