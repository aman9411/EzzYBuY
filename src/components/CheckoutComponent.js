import React, { Component } from 'react';
import { Button } from 'reactstrap';
import formatCurrency from '../util';


class Checkout extends Component {


    render() {

        const { cartItems } = this.props;

        return(
        <div className="container">

            {cartItems.length === 0 ? (
                <div className="empty">
                    <img src="/assets/images/bag.jpg" />
                    <p>ooppss... cart is Empty</p>
                    </div>
                ) : 

         <div className="d-flex">
            <div className="col-12 col-md menitem">
                {cartItems.length === 1 ? (
                <div>
                you have {cartItems.length}item in the cart{" "}
                </div>
                ) : (
                    <div className="m-4">
                    you have {cartItems.length} items in the cart {" "}
                    </div>
                )}
                    {cartItems.map(item =>(
                        <div key={item.id}>
                            <div className="mensitem d-flex">
                                    <img src={item.image} alt={item.name} />
                                    <div className="m-2">
                                        {item.brand}<br />
                                        <p className="visible">{item.name}</p>
                                        {formatCurrency(item.price)} x {item.count} {" "}
                                    </div>
                                    <Button outline onClick={() => this.props.removeFromCart(item)}>
                                    Remove
                                    </Button>
                             </div>
                        </div>
                    ))}
            </div>

            <div>
                <div className="m-3">
                    <p className="visible">PRICE DETAILS ({cartItems.length} items)</p>
                    <div className="m-2 total">
                        Total MRP {" "} {formatCurrency(
                           cartItems.reduce((a, c) => a + c.price * c.count, 0)
                       )} 
                       <br /><br/>
                        Discount on MRP   
                    </div>
                   <div className="m-2">
                       Total Amount:{" "}
                       {formatCurrency(
                           cartItems.reduce((a, c) => a + c.price * c.count, 0)
                       )}
                   </div>
                   <Button className="proceed" outline>Place Order</Button>
                </div>
            </div>
        </div>}

        </div>
        );
    }
}

export default Checkout;