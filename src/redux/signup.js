// import { SIGNUP } from '../shared/signup';
// import * as ActionTypes from './ActionTypes';

// export const Signups = (state = SIGNUP, action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_SIGNUP:
//             var signup = action.payload;
//             signup.id = state.length;
//             signup.date = new Date().toISOString();
//             console.log("Signup: ", signup);
//             return state.concat(signup);

//         default:
//             return state;
//     }
// };


import * as ActionTypes from './ActionTypes';

export const Signups = (state = {
    errMess: null,
    signups: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SIGNUPS:
            return{...state, isLoading: false, errMess: null, signups: action.payload};

        case ActionTypes.SIGNUPS_FAILED:
             return{...state, errMess: action.payload};

        case ActionTypes.ADD_SIGNUP:
            var signup = action.payload;
            console.log("Signup: ", signup);
            return {...state, signups: state.signups.concat(signup)};
            
        default:
            return state;
    }
};