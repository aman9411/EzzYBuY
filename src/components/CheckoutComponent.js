import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import formatCurrency from '../util';
import { Link } from 'react-router-dom';



function Tip() {
   
    function renderTooltip(props) {
      return (
        <Tooltip id="button-tooltip" {...props}>
             You can try our product at home and can buy if you like it or return it easily through delivery man at the same time.
        </Tooltip>
      );
    }
      
    return (
      <div className="container">
    
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button variant="success">Try & Buy</Button>
          </OverlayTrigger>
     
      </div>
    );
  }


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: " "
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
            this.setState({value: event.target.value}); 
    }


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

         <div className="col-12 checkout">
            <div className="col-12 col-md-8 menitem">
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
                                    <Link className="link-text" to={`/brandsclothing/${item.id}`} >
                                        <img src={item.image} alt={item.name} />
                                    </Link>
                                    <div className="m-2 checkout_product">
                                        {item.brand}<br />
                                        <p className="visible">{item.name}</p>
                                        <p>{formatCurrency(item.price)} x {item.count} {" "}</p>
                                        <p>Size: {this.props.size}</p>
                                        Qty:{" "}
                                        <select  onChange={this.handleChange}>
                                            <option value="1" selected>1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <Button outline onClick={() => this.props.removeFromCart(item)}>
                                    Remove
                                    </Button>
                             </div>
                        </div>
                    ))}
            </div>

            <div>
                <div className="add_item m-3">
                    <p className="visible">PRICE DETAILS ({cartItems.length} items)</p>
                    {this.state.value === 1 ? (
                          <div className="m-2 total">
                          Total MRP {" "} {formatCurrency(
                             cartItems.reduce((a, c) => a + c.price * c.count, 0)
                         )} 
                         <br /><br/>
                          Discount on MRP   
                      </div>  
                     ) : (
                        <div className="m-2 total">
                        Total MRP {" "} {formatCurrency(
                           cartItems.reduce((a, c) => a + c.price * c.count, 0)
                       )} 
                       <br /><br/>
                        Discount on MRP   
                    </div> 
                     )}
                    
                   <div className="m-2">
                       Total Amount:{" "}
                       {formatCurrency(
                           cartItems.reduce((a, c) => a + c.price * c.count, 0)
                       )}
                   </div>
                   <div>
                   <Link className="link-text" to={`/address`} >
                   <Button className="proceed" outline>Proceed</Button>
                   </Link>
                   </div>
                </div>
                <div>
                    <Tip />
                </div>
            </div>
        </div>}

        </div>
        );
    }
}

export default Checkout;