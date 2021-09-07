import type { App } from 'vue'
import 'element-plus/dist/index.css'
import { ElButton, ElForm, ElFormItem, ElInput, ElRadio } from 'element-plus'

const components = [ElButton, ElForm, ElFormItem, ElInput, ElRadio]

export default function registerApp(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
