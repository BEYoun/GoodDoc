import { combineReducers, createStore } from 'redux'
import * as ducks from './ducks'

const reducers = combineReducers(ducks)

const store = createStore(
  reducers,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
)

export default store
