import * as ActionTypes from './ActionTypes';

export const Baskets = (state = {baskets: []}, action) => {
      switch (action.type) {
          case ActionTypes.ADD_TO_BASKET:
            return{...state, baskets: action.payload};
          
          default:
              return state;
      }
};