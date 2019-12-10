import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// actionの種類によって処理を分岐
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // {
      //   1: {"id": 1, "title": ...}
      // }
      // 上の形でstateに入れる
      return _.mapKeys(action.response.data, 'id')
    default:
      return state
  }
}  