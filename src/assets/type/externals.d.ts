declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.json'
declare module '*.ico'
declare module 'qs'
declare module '@loadable/component'
declare module '@ant-design/icons'
declare module '@assets*'
declare module 'moment'
// declare module 'style.module.less'
declare module '*style.module.less' {
  const resource: { [key: string]: string }
  export = resource
}

declare module '*.(less|css)' {
  const resource: { [key: string]: string }
  export = resource
}
