import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

const cache = new InMemoryCache();
Vue.config.productionTip = false
const apolloClient = new ApolloClient({
    cache,
   uri: 'https://testtaskss.herokuapp.com/v1/graphql',
  headers: {
     'x-hasura-admin-secret' : 'heofrfhneh555605'
  }
})

const apolloProvider = new VueApollo({
 defaultClient: apolloClient,
  defaultOptions : {
   $loadingKey : "loading"
  }
})
cache.writeData({
    data: {
         ids : [
        ],
    }
}
);

new Vue({
  router,
    cache,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
