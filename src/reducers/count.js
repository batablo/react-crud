import { INCREMENT, DECREMENT } from '../actions'

// stateの初期値
const initialState = { value: 0 }

// actionの種類によって処理を分岐
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: 
      return { value: state.value + 1 }
    case DECREMENT: 
      return { value: state.value - 1 }
    default:
      return state
  }
}  