import * as ActionTypes from './ActionTypes';

export const Deals = (state = {isLoading: true,
   errMess: null,
   deals: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_DEALS:
              return{...state, isLoading: false, errMess: null, deals: action.payload};
          case ActionTypes.DEALS_LOADING:
              return{...state, isLoading: true, errMess: null, deals: []};
          case ActionTypes.DEALS_FAILED:
              return{...state, isLoading: false, errMess: action.payload, deals: []};
          default:
              return state;
      }
};