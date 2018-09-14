import { createAction } from 'redux-actions'
import produce from 'immer'
import { call, fork, put, take, all, select } from 'redux-saga/effects'

import { apiSample } from '../../../api/'

/*==================================
Actions
==================================*/
const INPUT = 'home/input'
const SEND_REQUEST = 'home/sendRequest'
const SEND_SUCCESS = 'home/sendSuccess'
const SEND_FAILURE = 'home/sendFailure'

/*==================================
Action Creators
==================================*/
export const actions = {
  input: createAction(INPUT),
  submit: createAction(SEND_REQUEST)
}

/*==================================
Saga
==================================*/
function* submitSaga() {
  while (true) {
    yield take(SEND_REQUEST)
    try {
      const sendData = yield select(state => state.pages.home.input)
      const response = yield call(apiSample, sendData)
      if (response) {
        alert('送信完了')
        console.log(response)
        yield put({ type: SEND_SUCCESS })
      } else {
        // エラー処理
      }
    } catch (error) {
      console.log(error)
      yield put({ type: SEND_FAILURE })
    }
  }
}

export function* homeSaga() {
  yield all([fork(submitSaga)])
}

/*==================================
Initial State
==================================*/
const initialState = {
  loading: false,
  input: {
    name: '',
    email: ''
  }
}

/*==================================
Reducer
==================================*/
export default function reducer(state = initialState, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case INPUT: {
        const { key, value } = action.payload
        draft.input[key] = value
        break
      }
      case SEND_REQUEST: {
        draft.loading = true
        break
      }
      case SEND_SUCCESS: {
        draft.loading = false
        break
      }
      case SEND_FAILURE: {
        draft.loading = false
        break
      }
    }
  })
}
