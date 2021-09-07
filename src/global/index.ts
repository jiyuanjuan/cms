import type { App } from 'vue'
import registerElement from '../global/registerElement'

export default function globalRegister(app: App): void {
  // registerElement(app)
  //app.use里会自动执行函数
  app.use(registerElement)
}
