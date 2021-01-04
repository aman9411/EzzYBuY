import * as ActionTypes from './ActionTypes';

export const Womens = (state = {isLoading: true,
   errMess: null,
   womens: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_WOMENS:
              return{...state, isLoading: false, errMess: null, womens: action.payload};
          case ActionTypes.WOMENS_LOADING:
              return{...state, isLoading: true, errMess: null, womens: []};
          case ActionTypes.WOMENS_FAILED:
              return{...state, isLoading: false, errMess: action.payload, womens: []};
          default:
              return state;
      }
};