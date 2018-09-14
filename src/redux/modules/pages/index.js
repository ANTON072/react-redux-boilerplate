import { combineReducers } from 'redux'
import { fork, all } from 'redux-saga/effects'

import home, { homeSaga } from './home'

export function* pagesSaga() {
  yield all([fork(homeSaga)])
}

export default combineReducers({ home })
