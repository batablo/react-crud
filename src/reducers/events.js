import { READ_EVENTS } from '../actions'

// actionの種類によって処理を分岐
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS: 
      return state
    default:
      return state
  }
}  