import { createStore, combineReducers } from 'redux';
import { MOVE_CAR, CHANGE_SIGNAL } from './actionCreators';

const INITIAL_STATE_MOVECAR = {cars: { redCar: false, blueCar: false, yellowCar: false }}
const INITIAL_STATE_SIGNAL = {payload: 'green'}

const changeSignalReducer = (state = INITIAL_STATE_SIGNAL, actions) => {
  switch (actions.type) {
    case CHANGE_SIGNAL:
      return { payload: actions.payload }
    default:
      return state
  }
}

const moveCarReducer = (state = INITIAL_STATE_MOVECAR, actions) => {
  switch (actions.type) {
  case MOVE_CAR:
    return {cars: { ...state.cars, [actions.car]: !state.cars[actions.car] }}
  default:
    return state
  }
}

const rootReducer = combineReducers({ moveCarReducer, changeSignalReducer })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
