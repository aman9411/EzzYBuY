import * as ActionTypes from './ActionTypes';

export const Cloths = (state = {isLoading: true,
   errMess: null,
   cloths: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_CLOTHS:
              return{...state, isLoading: false, errMess: null, cloths: action.payload};
          case ActionTypes.CLOTHS_LOADING:
              return{...state, isLoading: true, errMess: null, cloths: []};
          case ActionTypes.CLOTHS_FAILED:
              return{...state, isLoading: false, errMess: action.payload, cloths: []};
          default:
              return state;
      }
};