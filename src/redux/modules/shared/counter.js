import { createAction } from 'redux-actions'
import produce from 'immer'

/*==================================
Actions
==================================*/
const COUNT = 'counter/count'

/*==================================
Action Creators
==================================*/
export const actions = {
  count: createAction(COUNT, num => num, (num, key) => ({ key: key }))
}

/*==================================
Saga
==================================*/
// function* counterSaga() {
//   while (true) {}
// }

// export function* saga() {
//   yield all([fork(counterSaga)]);
// }

/*==================================
Initial State
==================================*/
const initialState = {
  value: 0
}

/*==================================
Reducer
==================================*/
export default function reducer(state = initialState, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case COUNT: {
        const { key } = action.meta
        const num = action.payload
        if (key === 'increment') {
          draft.value += num
        } else {
          draft.value -= num
        }
        break
      }
    }
  })
}
