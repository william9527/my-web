import { combineReducers } from 'redux-immutable'

import { handleActions } from 'redux-actions';
import {State, InitQuery} from '../constants/API';

const dataReducer = handleActions({
  LOGIN:(state, { payload })=> {
     let new_state = state.setIn(['status'],'login');     
     
     return new_state;
  }
}, State);

const rootReducer = combineReducers({
  data: dataReducer
})

export default rootReducer
/**
 * (state, { payload })
 */