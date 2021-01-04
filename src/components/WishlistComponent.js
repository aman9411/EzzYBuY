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

         <div className="col-12 col-md ">
            <div className="col-12 col-md menitem">
                {wishlistItems.length === 1 ? (
                <div>
                you have {wishlistItems.length}item in the wishlist{" "}
                </div>
                ) : (
                    <div className="m-4">
                    you have {wishlistItems.length} items in the wishlist {" "}
                    </div>
                )}
                <div className="">
                    {wishlistItems.map(item =>(
                        <div key={item.id}>
                            <div className="wishlistItem m-2">
                                    <img className="mt-2" width="200px" src={item.image} alt={item.name} />
                                    <div className="m-2">
                                        {item.brand}<br />
                                        <p className="visible">{item.name}</p>
                                        {formatCurrency(item.price)}
                                    </div>
                                    <Button className="m-2" outline onClick={() => this.props.removeFromWishlist(item)}>
                                    Remove
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