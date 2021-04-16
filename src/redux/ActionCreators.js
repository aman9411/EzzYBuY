import * as ActionTypes from './ActionTypes';
import { MENS } from '../shared/mens';
import { WOMENS } from '../shared/womens';
import { KIDS } from '../shared/kids';
import { BRANDS } from '../shared/brands';
import { DEALS } from '../shared/deals';
import { CLOTHS } from '../shared/cloths';
import { OFFERCLOTHS } from '../shared/offercloths';

import { baseUrl } from '../shared/baseUrl';

export const postComment = (comment) => ({
     type: ActionTypes.ADD_COMMENT,
     payload: comment
});


export const addComment = (dishId, rating, author, comment) => (dispatch) => {
     
     const newComment = {
         dishId: dishId,
         rating: rating,
         author: author,
         comment: comment
     }
     newComment.date = new Date().toISOString();

     return fetch(baseUrl + 'comments', {
         method: 'POST',
         body: JSON.stringify(newComment),
         headers: {
             'Content-Type': 'application/json'
         },
         credentials: 'same-origin'
     })
     .then(response => {
        if (response.ok) {
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(postComment(response)))
    .catch(error => { console.log('Post comments', error.message);
         alert('Your comment could not be posted\nError: ' + error.message);
        });
};


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});




// export const addComment = (dishId, rating , author, comment) => ({
//      type: ActionTypes.ADD_COMMENT,
//      payload: {
//          dishId: dishId,
//          rating: rating,
//          author: author,
//          comment: comment
//      }
// });

export const addToBasket = (id, name, brand, image, category, price, description) => ({
    type: ActionTypes.ADD_TO_BASKET,
    payload:{
        id: id,
        name: name,
        brand: brand,
        image: image,
        category: category,
        price: price,
        description: description
    }
});


export const addLoginDetails = (personId, username , password, remember) => ({
    type: ActionTypes.ADD_LOGIN,
    payload: {
        personId: personId,
        username: username,
        password: password,
        remember: remember
    }
});


export const postSignup = (signup) => ({
    type: ActionTypes.ADD_SIGNUP,
    payload: signup
});

// export const addSignupDetails = (personId, firstname , lastname, email, dateOfBirth, password, confirmpassword) => ({
//     type: ActionTypes.ADD_SIGNUP,
//     payload: {
//         personId: personId,
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         dateOfBirth: dateOfBirth,
//         password: password,
//         confirmpassword: confirmpassword
//     }
// });
export const addSignupDetails = (personId, firstname , lastname, email, dateOfBirth, password, confirmpassword) => (dispatch) => {
     
    const newSignup = {
        personId: personId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        dateOfBirth: dateOfBirth,
        password: password,
        confirmpassword: confirmpassword
    }
    newSignup.date = new Date().toISOString();

    return fetch(baseUrl + 'signups', {
        method: 'POST',
        body: JSON.stringify(newSignup),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
       if (response.ok) {
           return response;
       }
       else{
           var error = new Error('Error ' + response.status + ': ' + response.statusText);
           error.response = response;
           throw error;
       }
   },
   error => {
       var errmess = new Error(error.message);
       throw errmess;
   })
   .then(response => response.json())
   .then(response => dispatch(postSignup(response)))
   .catch(error => { console.log('Post signup details', error.message);
        alert('Your signup details could not be posted\nError: ' + error.message);
       });
};


export const fetchSignups = () => (dispatch) => {
    return fetch(baseUrl + 'signups')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(signups => dispatch(addSignups(signups)))
        .catch(error => dispatch(signupsFailed(error.message)));
}

export const signupsFailed = (errmess) => ({
    type: ActionTypes.SIGNUPS_FAILED,
    payload: errmess
});

export const addSignups = (signups) => ({
    type: ActionTypes.ADD_SIGNUPS,
    payload: signups
});



export const postAddress = (address) => ({
    type: ActionTypes.ADD_ADDRESS,
    payload: address
});


export const addAddressDetails = (personId, name, contact, pincode, address, locality, city, state) => (dispatch) => {
     
    const newAddress = {
        personId: personId,
        name: name,
        contact: contact,
        pincode: pincode,
        address: address,
        locality: locality,
        city: city,
        state: state
    }
    newAddress.date = new Date().toISOString();

    return fetch(baseUrl + 'address', {
        method: 'POST',
        body: JSON.stringify(newAddress),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
       if (response.ok) {
           return response;
       }
       else{
           var error = new Error('Error ' + response.status + ': ' + response.statusText);
           error.response = response;
           throw error;
       }
   },
   error => {
       var errmess = new Error(error.message);
       throw errmess;
   })
   .then(response => response.json())
   .then(response => dispatch(postAddress(response)))
   .catch(error => { console.log('Post address details', error.message);
        alert('Your address details could not be posted\nError: ' + error.message);
       });
};


export const fetchAddress = () => (dispatch) => {
    return fetch(baseUrl + 'address')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(address => dispatch(addAddress(address)))
        .catch(error => dispatch(addressFailed(error.message)));
}

export const addressFailed = (errmess) => ({
    type: ActionTypes.ADDRESS_FAILED,
    payload: errmess
});

export const addAddress = (address) => ({
    type: ActionTypes.ADD_ADDRESS1,
    payload: address
});



export const fetchMens = () => (dispatch) => {
    dispatch(mensLoading(true));
    setTimeout(() => {
        dispatch(addMens(MENS));
    }, 2000);
}

export const mensLoading = () => ({
    type: ActionTypes.MENS_LOADING
});

export const mensFailed = (errmess) => ({
    type: ActionTypes.MENS_FAILED,
    payload: errmess
});

export const addMens = (mens) => ({
    type: ActionTypes.ADD_MENS,
    payload: mens
});



export const fetchWomens = () => (dispatch) => {
    dispatch(womensLoading(true));
    setTimeout(() => {
        dispatch(addWomens(WOMENS));
    }, 2000);
}

export const womensLoading = () => ({
    type: ActionTypes.WOMENS_LOADING
});

export const womensFailed = (errmess) => ({
    type: ActionTypes.WOMENS_FAILED,
    payload: errmess
});

export const addWomens = (womens) => ({
    type: ActionTypes.ADD_WOMENS,
    payload: womens
});



export const fetchKids = () => (dispatch) => {
    dispatch(kidsLoading(true));
    setTimeout(() => {
        dispatch(addKids(KIDS));
    }, 2000);
}

export const kidsLoading = () => ({
    type: ActionTypes.KIDS_LOADING
});

export const kidsFailed = (errmess) => ({
    type: ActionTypes.KIDS_FAILED,
    payload: errmess
});

export const addKids = (kids) => ({
    type: ActionTypes.ADD_KIDS,
    payload: kids
});



export const fetchBrands = () => (dispatch) => {
    dispatch(brandsLoading(true));
    setTimeout(() => {
        dispatch(addBrands(BRANDS));
    }, 2000);
}

export const brandsLoading = () => ({
    type: ActionTypes.BRANDS_LOADING
});

export const brandsFailed = (errmess) => ({
    type: ActionTypes.BRANDS_FAILED,
    payload: errmess
});

export const addBrands = (brands) => ({
    type: ActionTypes.ADD_BRANDS,
    payload: brands
});




export const fetchDeals = () => (dispatch) => {
    dispatch(dealsLoading(true));
    setTimeout(() => {
        dispatch(addDeals(DEALS));
    }, 2000);
}

export const dealsLoading = () => ({
    type: ActionTypes.DEALS_LOADING
});

export const dealsFailed = (errmess) => ({
    type: ActionTypes.DEALS_FAILED,
    payload: errmess
});

export const addDeals = (deals) => ({
    type: ActionTypes.ADD_DEALS,
    payload: deals
});



export const fetchCloths = () => (dispatch) => {
    dispatch(clothsLoading(true));
    setTimeout(() => {
        dispatch(addCloths(CLOTHS));
    }, 2000);
}

export const clothsLoading = () => ({
    type: ActionTypes.CLOTHS_LOADING
});

export const clothsFailed = (errmess) => ({
    type: ActionTypes.CLOTHS_FAILED,
    payload: errmess
});

export const addCloths = (cloths) => ({
    type: ActionTypes.ADD_CLOTHS,
    payload: cloths
});



export const fetchOffercloths = () => (dispatch) => {
    dispatch(offerclothsLoading(true));
    setTimeout(() => {
        dispatch(addOffercloths(OFFERCLOTHS));
    }, 2000);
}

export const offerclothsLoading = () => ({
    type: ActionTypes.OFFERCLOTHS_LOADING
});

export const offerclothsFailed = (errmess) => ({
    type: ActionTypes.OFFERCLOTHS_FAILED,
    payload: errmess
});

export const addOffercloths = (offercloths) => ({
    type: ActionTypes.ADD_OFFERCLOTHS,
    payload: offercloths
});
