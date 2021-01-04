import * as ActionTypes from './ActionTypes';

export const Offercloths = (state = {isLoading: true,
   errMess: null,
   offercloths: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_OFFERCLOTHS:
              return{...state, isLoading: false, errMess: null, offercloths: action.payload};
          case ActionTypes.OFFERCLOTHS_LOADING:
              return{...state, isLoading: true, errMess: null, offercloths: []};
          case ActionTypes.OFFERCLOTHS_FAILED:
              return{...state, isLoading: false, errMess: action.payload, offercloths: []};
          default:
              return state;
      }
};