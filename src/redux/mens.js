import * as ActionTypes from './ActionTypes';

export const Mens = (state = {isLoading: true,
   errMess: null,
   mens: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_MENS:
              return{...state, isLoading: false, errMess: null, mens: action.payload};
          case ActionTypes.MENS_LOADING:
              return{...state, isLoading: true, errMess: null, mens: []};
          case ActionTypes.MENS_FAILED:
              return{...state, isLoading: false, errMess: action.payload, mens: []};
          default:
              return state;
      }
};