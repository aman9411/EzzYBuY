import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Label, Col, Modal, ModalBody, ModalHeader,Input } from 'reactstrap';
import { Control ,LocalForm ,Errors} from 'react-redux-form';
import formatCurrency from '../util';
import { Link } from 'react-router-dom';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class AddressForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFormOpen: false
    };
  
       this.toggleForm = this.toggleForm.bind(this);
       this.handleAddress = this.handleAddress.bind(this);
  }
  
  
  toggleForm() {
    this.setState({
        isFormOpen: !this.state.isFormOpen
    });
  }
  
  handleAddress(values) {
    this.toggleForm();
    this.props.addAddressDetails(parseInt(this.props.personId), values.name, values.contact, values.pincode, values.address, values.locality, values.city, values.state);
  }
  
  render() {
    return(
      <div>
         <Button outline onClick={this.toggleForm} type="button" name="button"><span className="fa fa-map-marker"> ADD NEW ADDRESS</span></Button> 
         <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
                     <ModalHeader toggle={this.toggleForm}><span className="fa fa-map-marker"></span> Submit Address</ModalHeader>
                      <ModalBody>
                            <LocalForm onSubmit={(values) => {this.handleAddress(values)} }>
                                 <Row className="form-group">
                                     <Label htmlFor="name" md={12}>
                                       CONTACT DETAILS
                                       </Label>
                                     <Col md={12}>
                                     <Control.text model=".name" id="name" name="name"
                                      placeholder="Your Name"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".name"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>

                                 <Row className="form-group">
                                     <Col md={12}>
                                     <Control.text model=".contact" id="contact" name="contact"
                                      placeholder="Mobile No."
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".contact"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>

                                 <Row className="form-group">
                                     <Label htmlFor="address" md={12}>
                                       ADDRESS
                                       </Label>
                                     <Col md={12}>
                                     <Control.text model=".pincode" id="pincode" name="pincode"
                                      placeholder="Pincode"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".pincode"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>

                                 <Row className="form-group">
                                     <Col md={12}>
                                     <Control.text model=".address" id="address" name="address"
                                      placeholder="Address"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(60)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".address"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>

                                 <Row className="form-group">
                                     <Col md={12}>
                                     <Control.text model=".locality" id="locality" name="locality"
                                      placeholder="Locality"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(30)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".locality"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>

                                 <Row className="form-group">
                                     <Col md={6}>
                                     <Control.text model=".city" id="city" name="city"
                                      placeholder="City"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".city"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>

                                     <Col md={6}>
                                     <Control.text model=".state" id="state" name="state"
                                      placeholder="State"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".state"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>

                                 {/* <Row className="form-group">
                                     <Label htmlFor="address" md={12}>
                                       SAVE ADDRESS AS
                                       </Label>
                                     <Col md={12} className="d-flex">
                                     <Button outline className="mr-3" type="submit" value="Home" color="success">Home</Button>
                                     <Button outline type="submit" value="Work" color="secondary">Work</Button>
                                     </Col>
                                 </Row>

                                 <Row className="form-group">
                            <Col md={12}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree"
                                        className="form-check-input"
                                        /> {' '}
                                        <p>Save address as default.</p>
                                    </Label>
                                </div>
                            </Col>
                        </Row> */}

                                 <Row className="form-group">
                                   <Col md={12}>
                                 <Button type="submit" value="submit" color="primary">Submit</Button>
                                 </Col>
                                 </Row>
                            </LocalForm>
                      </ModalBody>
                   </Modal>
      </div>
  
      
           
    );
  }
  
  }



class Address extends Component {

    render () {
        const { cartItems } = this.props;
        return (
            <div className="container">
                    <video className='videoTag' autoPlay loop muted>
                        <source src="assets/images/a2.mov" type='video/mp4' />
                    </video>
                <div className="project">
                    <div className="shipping">
                                <div className="address col-12 col-md">
                                <p>Select Shipping Address</p>
                                <AddressForm addAddressDetails={this.props.addAddressDetails} />
                                </div>
                            <div className="d_add">
                            <h6>DEFAULT ADDRESS</h6>
                            {this.props.address1.map(add =>(
                                            <div className="default">
                                                <Input type="radio" name="button"></Input> <strong>{add.name}</strong> <span>Home</span>
                                                <p>Address: {add.add},{add.locality},{add.city},{add.state}</p>
                                                <p>Mobile: {add.contact}</p>
                                                <Button type="button" name="button" className="mb-2" >Remove</Button>
                                                <Button type="button" name="button" className="mb-2" >Edit</Button>
                                            </div>
                                        ))}
                            <h6>OTHER ADDRESS</h6>
                                <div className="default">
                                <Input type="radio" name="button"></Input> <strong>Aman jain</strong> <span>Home</span>
                                    <p>Address: A-5 inku society, Manjalpur, Vadodara, Gujarat</p>
                                    <p>Mobile: xxxxxxx154</p>
                                    <Button type="button" name="button" className="mb-2" >Remove</Button>
                                    <Button type="button" name="button" className="mb-2" >Edit</Button>
                                </div>
                                <div className="default">
                                <Input type="radio" name="button"></Input> <strong>Aman jain</strong> <span>Home</span>
                                    <p>Address: 1180,chatta madan gopal,parothe wali gali..lal-kila,chandni chowk,delhi che</p>
                                    <p>Mobile: xxxxxxx154</p>
                                    <Button type="button" name="button" className="mb-2" >Remove</Button>
                                    <Button type="button" name="button" className="mb-2" >Edit</Button>
                                </div>
                            <div className="default">
                                <a href="Shipping.html">+ ADD NEW ADDRESS</a>
                            </div>
                            </div>
                            </div>
                            <div className="total">
                                <p>DELIVERY ESTIMATES</p>
                                    {cartItems.map(item =>(
                                        <div key={item.id} className="product">
                                            <img src={item.image} alt={item.name} />
                                            <span> Estimated delivery by 20 Mar 2021</span>
                                        </div>
                                    ))}
                                    <div>
                                    <div className="add_item m-3">
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
                                    <div>
                                    <Link className="link-text" to={`/address`} >
                                    <Button className="proceed" outline>Continue</Button>
                                    </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </div>                           
        )
    }
}

export default Address;