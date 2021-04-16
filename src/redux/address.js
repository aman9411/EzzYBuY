import * as ActionTypes from './ActionTypes';

export const Address = (state = {
    errMess: null,
    address: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ADDRESS1:
            return{...state, isLoading: false, errMess: null, address: action.payload};

        case ActionTypes.ADDRESS_FAILED:
             return{...state, errMess: action.payload};

        case ActionTypes.ADD_ADDRESS:
            var address = action.payload;
            console.log("Address: ", address);
            return {...state, address: state.address.concat(address)};
            
        default:
            return state;
    }
};