import { mount } from '@vue/test-utils'
import { plugin, defaultConfig } from '@formkit/vue'
import AddHostname from './src/components/forms/AddHostnameForm.vue'


test('renders a AddHostname', async () => {
  expect(AddHostname).toBeTruthy()
  
  const wrapper = mount(AddHostname, {
    global: {
      plugins: [plugin, defaultConfig]
    }
  })
//  expect(wrapper.text()).toContain('H')

})