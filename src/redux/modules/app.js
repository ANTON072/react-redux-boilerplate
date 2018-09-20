import { createAction } from 'redux-actions'
import produce from 'immer'

/*==================================
* Actions
==================================*/
const SET_LOADING = 'app/setLoading'

/*==================================
* Action Creators
==================================*/
export const actions = {
  count: createAction(SET_LOADING)
}

/*==================================
Initial State
==================================*/
const initialState = {
  loading: false
}

/*==================================
* Reducer
==================================*/
export default function reducer(state = initialState, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case SET_LOADING: {
        draft.loading = action.payload
      }
    }
  })
}
