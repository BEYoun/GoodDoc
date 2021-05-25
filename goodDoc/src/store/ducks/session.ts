// actions

const CLEAR = 'session/CLEAR'
const SET = 'session/SET'

//type
export interface ISession {
  username: string
  role: string
}
type SessionAction = {
  type: string
  payload: ISession
}
// type DispatchType = (args: SessionAction) => SessionAction

const DEFAULT_STATE: ISession | null = null

// reducer
const sessionReducer = (
  state: ISession | null = DEFAULT_STATE,
  action: SessionAction
) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        username: action.payload.username,
        role: action.payload.role,
      }
    case CLEAR:
      return null
  }
  return state
}
export default sessionReducer

// action creators
export const setSession = (payload: ISession) => {
  return { payload, type: SET }
}

export const clearSession = () => {
  return { type: CLEAR }
}
