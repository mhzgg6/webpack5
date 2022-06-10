import add from "./js/add"

import "./css/index.css"
import "./css/iconfont.css"

let result = add(1,2)
console.log(result)

if (module.hot) {
  //  判断是否支持热模块替换功能
  module.hot.accept("./js/add")
}