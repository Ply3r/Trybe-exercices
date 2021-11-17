import { IS_AUTH, CHANGE_CLIENTS } from '../actions';

const INITIAL_STATE = {
  auth: false,
  clients: [],
}

const rootReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case IS_AUTH:
    return { ...state, auth: actions.auth }

  case CHANGE_CLIENTS:
    return { ...state, clients: actions.clients }
  
  default:
    return state;
  }
}

export default rootReducer;
