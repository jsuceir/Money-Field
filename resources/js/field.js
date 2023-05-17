import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-money', IndexField)
  app.component('detail-money', DetailField)
  app.component('form-money', FormField)
})
