import { SIGNUP } from '../shared/signup';
import * as ActionTypes from './ActionTypes';

export const Signups = (state = SIGNUP, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SIGNUP:
            var signup = action.payload;
            signup.id = state.length;
            signup.date = new Date().toISOString();
            console.log("Signup: ", signup);
            return state.concat(signup);

        default:
            return state;
    }
};