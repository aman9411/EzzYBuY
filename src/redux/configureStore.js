import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Cloths } from './cloths';
import { Brands } from './brands';
import { Deals } from './deals';
import { Mens } from './mens';
import { Womens } from './womens';
import { Kids } from './kids';
import { Offercloths } from './offercloths';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Baskets } from './basket';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Login } from './login';
import { Signups } from './signup';
import { Address } from './address';

export const ConfigureStore = () => {
    const store = createStore(
         combineReducers({
             offercloths: Offercloths,
             cloths: Cloths,
             deals: Deals,
             brands: Brands,
             mens: Mens,
             womens: Womens,
             kids: Kids,
             comments: Comments,
             login: Login,
             signups: Signups,
             address: Address,
             promotions: Promotions,
             leaders: Leaders,
             baskets: Baskets,
            ...createForms({
                feedback: InitialFeedback
            })
         }),
         applyMiddleware(thunk, logger)
    );

    return store;
}