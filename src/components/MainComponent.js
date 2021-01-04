import React, { Component } from 'react';
import Home from './HomeComponent';
import Mensclothing from './MenClothComponent';
import Womensclothing from './WomenClothComponent';
import Kidsclothing from './KidClothComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Various from './VariousClothComponent';
import Offer from './OfferComponent';
import Men from './MenComponent';
import Checkout from './CheckoutComponent';
import Wishlist from './WishlistComponent';
import Women from './WomenComponent';
import Kid from './KidComponent';
import Header from './HeaderComponent'; 
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, addToBasket, addLoginDetails, addSignupDetails, fetchMens, fetchWomens, fetchKids ,fetchBrands, fetchDeals, fetchCloths, fetchOffercloths } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return{
    offercloths: state.offercloths,
    cloths: state.cloths,
    deals: state.deals,
    brands: state.brands,
    mens: state.mens,
    womens: state.womens,
    kids: state.kids,
    comments: state.comments,
    logins: state.logins,
    signups: state.signups,
    promotions: state.promotions,
    leaders: state.leaders,
    baskets: state.baskets
  }
}


const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  addToBasket: (id, name, brand, image, category, price, description) => dispatch(addToBasket(id, name, brand, image, category, price, description)),
  addLoginDetails: (personId, username, password, remember) => dispatch(addLoginDetails(personId, username, password, remember)),
  addSignupDetails: (personId, firstname, lastname, email, dateOfBirth, password, confirmpassword) => dispatch(addSignupDetails(personId, firstname, lastname, email, dateOfBirth, password, confirmpassword)),
  fetchOffercloths: () => {dispatch(fetchOffercloths())},
  fetchCloths: () => {dispatch(fetchCloths())},
  fetchDeals: () => {dispatch(fetchDeals())},
  fetchBrands: () => {dispatch(fetchBrands())},
  fetchMens: () => { dispatch(fetchMens())},
  fetchWomens: () => { dispatch(fetchWomens())},
  fetchKids: () => { dispatch(fetchKids())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      wishlistItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],

    }

}


removeFromCart = (offercloth) => {
   const cartItems = this.state.cartItems.slice();
   this.setState({
     cartItems: cartItems.filter(x=>x.id !== offercloth.id) 
   });
   localStorage.setItem(
     "cartItems",
     JSON.stringify(cartItems.filter(x=>x.id !== offercloth.id))
   );
   };


addToCart = (offercloth) => {
  const cartItems = this.state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if(item.id === offercloth.id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if(!alreadyInCart){
    cartItems.push({...offercloth, count: 1});
  }
  this.setState({cartItems});
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};


removeFromWishlist = (offercloth) => {
  const wishlistItems = this.state.wishlistItems.slice();
  this.setState({
    wishlistItems: wishlistItems.filter(x=>x.id !== offercloth.id) 
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(wishlistItems.filter(x=>x.id !== offercloth.id))
  );
  };


addToWishlist = (offercloth) => {
  const wishlistItems = this.state.wishlistItems.slice();
  let alreadyInWishlist = false;
  wishlistItems.forEach((item) => {
    if(item.id === offercloth.id) {
      item.count++;
      alreadyInWishlist = true;
    }
  });
  if(!alreadyInWishlist){
    wishlistItems.push({...offercloth, count: 1});
  }
  this.setState({wishlistItems});
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
};



componentDidMount() {
  this.props.fetchMens();
  this.props.fetchWomens();
  this.props.fetchKids();
  this.props.fetchBrands();
  this.props.fetchDeals();
  this.props.fetchCloths();
  this.props.fetchOffercloths();

}



  render() {


    const KidWithId = ({match}) => {
      return(
        <Kid kid={this.props.kids.kids.filter((kid)=> kid.id === parseInt(match.params.kidId,10)) [0]}
        isLoading={this.props.kids.isLoading}
        errMess={this.props.kids.errMess}
        comments={ this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.kidId,10))}
        addComment={this.props.addComment}
        />
        
      );

};



    const WomenWithId = ({match}) => {
      return(
        <Women women={this.props.womens.womens.filter((women)=> women.id === parseInt(match.params.womenId,10)) [0]}
        isLoading={this.props.womens.isLoading}
        errMess={this.props.womens.errMess}
        comments={ this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.womenId,10))}
        addComment={this.props.addComment}
        />
        
      );

};




const OfferWithId = ({match}) => {
  return(
    <Offer addToCart={this.addToCart} addToWishlist={this.addToWishlist} offercloth={this.props.offercloths.offercloths.filter((offercloth)=> offercloth.id === parseInt(match.params.offerclothId,10)) [0]}
    isLoading={this.props.offercloths.isLoading}
    errMess={this.props.offercloths.errMess}
    comments={ this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.offerclothId,10))}
    addComment={this.props.addComment}
    />
    
  );

};


   const MenWithId = ({match}) => {
            return(
              <Men men={this.props.mens.mens.filter((men)=> men.id === parseInt(match.params.menId,10)) [0]}
              isLoading={this.props.mens.isLoading}
              errMess={this.props.mens.errMess}
              comments={ this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.menId,10))}
              addComment={this.props.addComment}
              />
              
            );

   };

//    const UserIdDetails = ({match}) => {
//     return(
//       <Person signups={ this.props.signups.filter((signup) => signup.personId === parseInt(match.params.signupId,10))} 
//       addLoginDetails={this.props.addLoginDetails}
//        addSignupDetails={this.props.addSignupDetails}
//       />
      
//     );

// };

    return (
      <div>
        <Header cartItems={this.state.cartItems} signups={this.props.signups} addLoginDetails={this.props.addLoginDetails} addSignupDetails={this.props.addSignupDetails} />
         <Switch>
           <Route path="/home" component={() => <Home brands={this.props.brands} deals={this.props.deals} cloths={this.props.cloths}/>}  />
           <Route exact path="/brandsclothing" component={() => <Various offercloths={this.props.offercloths} /> } />
           <Route path="/brandsclothing/:offerclothId" component={OfferWithId} />
           <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
           <Route exact path="/mensclothing" component={() => <Mensclothing mens={this.props.mens}/>} />
           <Route path="/mensclothing/:menId" component={MenWithId} />
           <Route exact path="/womensclothing" component={() => <Womensclothing womens={this.props.womens}/>} />
           <Route path="/womensclothing/:womenId" component={WomenWithId} />
           <Route exact path="/kidsclothing" component={() => <Kidsclothing kids={this.props.kids}/>} />
           <Route path="/kidsclothing/:kidId" component={KidWithId} />
           <Route exact path="/contactus" component={ () => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
           <Route exact path="/checkout" component={ ()=> <Checkout cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />} />
           <Route exact path="/wishlist" component={ ()=> <Wishlist wishlistItems={this.state.wishlistItems} removeFromWishlist={this.removeFromWishlist} />} />
           <Redirect to="/home" />
         </Switch>
        <Footer />
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));