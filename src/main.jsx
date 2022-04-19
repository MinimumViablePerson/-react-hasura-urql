import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'https://graphql-session-hox.hasura.app/v1/graphql',
  fetchOptions () {
    return {
      headers: {
        'x-hasura-admin-secret':
          'L0G5bPBSOGLz39fE3Vx1LP36embkzi6A8Kip7HNeYQ7aTS0MKJ2CWQDYK3HSDRzV'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider value={client}>
    <App />
  </Provider>
)
