import { plugin, defaultConfig } from '@formkit/vue'
import AddHostnameForm from './AddHostnameForm.vue'

describe('<AddHostnameForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AddHostnameForm, {
      global: {plugins: [plugin, defaultConfig]}
    })
  })
})