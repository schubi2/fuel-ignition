import { mount } from '@vue/test-utils'
import { plugin, defaultConfig } from '@formkit/vue'

// The component to test
const FormkitComponent = {
  template: '<FormKit :name="testName" label="testLabel"/>'
}

test('renders a FormkitComponent', async () => {
  const wrapper = mount(FormkitComponent, {
    global: {
      plugins: [plugin, defaultConfig]
    }
  })
})