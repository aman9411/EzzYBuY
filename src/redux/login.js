import { LOGIN } from '../shared/login';
import * as ActionTypes from './ActionTypes';

export const Login = (state = LOGIN, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGIN:
            var login = action.payload;
            login.id = state.length;
            login.date = new Date().toISOString();
            console.log("Login: ", login);
            return state.concat(login);

        default:
            return state;
    }
};