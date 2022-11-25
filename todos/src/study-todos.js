// react、react-dom 的引用是 index.ejs 文件中 import-map 中指定的版本
import React from "react"
import ReactDOM from "react-dom"
// single-spa-react 用于创建使用 React 框架实现的微前端应用
import singleSpaReact from "single-spa-react"
// 用于渲染在页面中的根组件
import Root from "./root.component"

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  // 错误边界函数
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null
  },
  // 指定根组件的渲染位置
  domElementGetter: () => document.getElementById("root")
})

// 暴露必要的生命周期函数
export const { bootstrap, mount, unmount } = lifecycles
