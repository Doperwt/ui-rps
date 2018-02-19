import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()

export default (id,symbol) =>{
  console.log('test',id,symbol)

  return (dispatch) => {
    api.patch(`/games/${id}`, {symbol})
    .then(() =>{
      dispatch({ type: LOAD_SUCCESS })
    })
    .catch((error) => {
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })

  }
}
