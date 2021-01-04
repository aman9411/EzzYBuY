import * as ActionTypes from './ActionTypes';

export const Kids = (state = {isLoading: true,
   errMess: null,
   kids: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_KIDS:
              return{...state, isLoading: false, errMess: null, kids: action.payload};
          case ActionTypes.KIDS_LOADING:
              return{...state, isLoading: true, errMess: null, kids: []};
          case ActionTypes.KIDS_FAILED:
              return{...state, isLoading: false, errMess: action.payload, kids: []};
          default:
              return state;
      }
};