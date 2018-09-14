import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
import Root from './Root'

const { store, runSaga, history } = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <Root history={history} />
  </Provider>,
  document.getElementById('app-root')
)

runSaga()
