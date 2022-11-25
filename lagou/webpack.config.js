const singleSpaDefaults = require("webpack-config-single-spa")
const { merge } = require("webpack-merge")

module.exports = () => {
  // 调用 singleSpaDefaults会提供默认的配置  组织名称、微应用名称
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "lagou"
  })
  return merge(defaultConfig, {
    devServer: {
      port: 9001
    }
  })
}
