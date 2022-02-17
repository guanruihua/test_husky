import React from 'react'
import { Button } from 'antd'
import styles from './style.module.less'
import './index.less'

function App() {
  return (
    <div className={styles.test}>
      App
      <Button type="primary">btn</Button>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  )
}

export default App
