import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { fork, all } from 'redux-saga/effects'

import app from './modules/app'
import pages, { pagesSaga } from './modules/pages'
import shared from './modules/shared'

const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({})
const reducer = combineReducers({ app, pages, shared })
const sagaMiddleware = createSagaMiddleware()
const middleweare = [sagaMiddleware, routerMiddleware(history)]

function* rootSaga() {
  yield all([fork(pagesSaga)])
}

export default initialState => {
  const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    composeEnhancers(applyMiddleware(...middleweare))
  )
  const runSaga = () => {
    sagaMiddleware.run(rootSaga)
  }
  return { store, runSaga, history }
}
