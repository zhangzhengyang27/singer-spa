let lagouContainer = null

// 必须要导出三个生命周期函数
export async function bootstrap() {
  console.log("应用正在启动")
}
export async function mount() {
  console.log("应用正在挂载")
  lagouContainer = document.createElement("div")
  lagouContainer.id = "lagouContainer"
  lagouContainer.innerHTML = "Hello Lagou"
  document.body.appendChild(lagouContainer)
}
export async function unmount() {
  console.log("应用正在卸载")
  document.body.removeChild(lagouContainer)
}
