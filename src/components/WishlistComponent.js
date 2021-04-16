import React, { Component } from 'react';
import { Button } from 'reactstrap';
import formatCurrency from '../util';


class Wishlist extends Component {


    render() {

        const { wishlistItems } = this.props;

        return(
        <div className="container">

            {wishlistItems.length === 0 ? (
                <div className="empty">
                    <img src="/assets/images/bag.png" />
                    <p>ooppss... no item in the wishlist</p>
                    </div>
                ) : 

         <div className="col-12 col-md wish">
            <div className="col-12 col-md menitem">
                {wishlistItems.length === 1 ? (
                <div className="mt-4 wishlistCount">
                you have {wishlistItems.length}item in the wishlist{" "}
                </div>
                ) : (
                    <div className="mt-4 wishlistCount">
                    you have {wishlistItems.length} items in the wishlist {" "}
                    </div>
                )}
                <div className="row align-items-center m-1">
                    {wishlistItems.map(item =>(
                        <div key={item.id} className="ml-5">
                            <div className="wishlistItem">
                                    <img className="mt-2" width="220px" height="300px" src={item.image} alt={item.name} />
                                    <div className="m-2">
                                        {item.brand}<br />
                                        <p className="visible">{item.name}</p>
                                        {formatCurrency(item.price)}
                                    </div>
                                    <Button className="m-2" outline onClick={() => this.props.removeFromWishlist(item)}>
                                    Remove
                                    </Button>
                                    <Button className="m-2" color="primary" onClick={() => {this.props.addToCart(item); this.props.removeFromWishlist(item);}}>
                                    Add To Cart
                                    </Button>
                             </div>
                        </div>
                    ))}
            </div>
            </div>
        </div>}
        </div>
        );
    }
}

export default Wishlist;