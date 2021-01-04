import React, { Component, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Input, Row, Label, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Control ,LocalForm ,Errors} from 'react-redux-form';
import { NavLink } from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isModal2Open: false,
            show: false,
            showButton: true,
            value: " "
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleModal2() {
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });
    }

    handleLogin(values) {
           this.toggleModal();
           this.props.addLoginDetails(parseInt(this.props.personId), values.username, values.password, values.remember);
    }

    handleSignup(values) {
        this.toggleModal2();
        this.props.addSignupDetails(parseInt(this.props.PersonId), values.firstname, values.lastname, values.email, values.dateOfBirth, values.password, values.confirmPassword);
        alert("Current State is " + JSON.stringify(values));
 }


    handleChange(event) {
            this.setState({value: event.target.value});  
    }

render() {
    const validConfirmPassword = (val) => (val === this.state.value);
  return(
    <div>
        <div className="d-flex">
        {
      this.state.show? <RenderSignupDetails signups={this.props.signups} /> : null
        }
        {
       this.state.showButton? <Button outline onClick={this.toggleModal} >Login</Button> : null
        }
        </div>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                          <LocalForm  onSubmit={(values) => {this.handleLogin(values)} }>
                          <Row className="form-group">
                                   <Label htmlFor="email" md={12}>
                                   Email
                                    </Label>
                                   <Col md={12}>
                                   <Control.text model=".email" id="email" name="email"
                                    placeholder="email"
                                   className="form-control"
                                   validators={{
                                    required, validEmail
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".email"
                               show="touched"
                               messages={{
                                   required: 'Required',
                                   validEmail: 'Invalid Email Address'
                               }}
                               />
                                   </Col>
                               </Row>
                               <Row className="form-group">
                                   <Label htmlFor="password" md={12}>
                                     Password
                                     </Label>
                                   <Col md={12}>
                                   <Control.password model=".password" id="password" name="password"
                                    placeholder="password"
                                   className="form-control"
                                   validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".password"
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
                            <Col md={{size:6, offset: 2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree"
                                        className="form-check-input"
                                        /> {' '}
                                        <strong>Remember Me..</strong>
                                    </Label>
                                </div>
                            </Col>
                        </Row>
                                
                               <Button className="m-1" type="submit" value="submit" color="primary">Login</Button>
                              
                               <Button className="float-right" outline onClick={this.toggleModal2}>
                                    Sign up
                                </Button>

                          </LocalForm>
                    </ModalBody>
                </Modal>
               
                <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>Sign up</ModalHeader>
                    <ModalBody>
                          <LocalForm onSubmit={(values) => {this.handleSignup(values)} }>

                          <Row className="form-group">
                                   <Label htmlFor="firstname" md={12}>
                                     Firstname
                                     </Label>
                                   <Col md={12}>
                                   <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="Firstname"
                                   className="form-control"
                                   validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".firstname"
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
                                   <Label htmlFor="lastname" md={12}>
                                     Lastname
                                     </Label>
                                   <Col md={12}>
                                   <Control.text model=".lastname" id="lastname" name="lastname"
                                    placeholder="Lastname"
                                   className="form-control"
                                   validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".lastname"
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
                                   <Label htmlFor="email" md={12}>
                                     Email
                                     </Label>
                                   <Col md={12}>
                                   <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                   className="form-control"
                                   validators={{
                                    required, validEmail
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".email"
                               show="touched"
                               messages={{
                                   required: 'Required',
                                   validEmail: 'Invalid Email Address'
                               }}
                               />
                                   </Col>
                               </Row>

                               <Row className="form-group">
                                   <Label htmlFor="date" md={12}>
                                     Date Of Birth
                                     </Label>
                                   <Col md={12}>
                                   <Control.text type="date" model=".date" id="dateOfBirth" name="dateOfBirth"
                                    placeholder="Date Of Birth"
                                   className="form-control"
                                   validators={{
                                    required
                                   }}
                                    />
                                     <Errors 
                               className="text-danger"
                               model=".date"
                               show="touched"
                               messages={{
                                   required: 'Required'
                               }}
                               />
                                   </Col>
                               </Row>

                               <Row className="form-group">
                                   <Label htmlFor="password" md={12}>
                                     Password
                                     </Label>
                                   <Col md={12}>
                                   <Control.text model=".password" id="password" name="password"
                                    placeholder="Password"
                                   className="form-control"
                                   onChange={this.handleChange}
                                   validators={{
                                    required, minLength: minLength(5), maxLength: maxLength(15)
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".password"
                               show="touched"
                               messages={{
                                   required: 'Required',
                                   minLength: 'Must be greater than 4 characters',
                                   maxLength: 'Must be 15 characters or less' 
                               }}
                               />
                                   </Col>
                               </Row>


                               <Row className="form-group">
                                   <Label htmlFor="confirmpassword" md={12}>
                                     Confirm Password
                                     </Label>
                                   <Col md={12}>
                                   <Control.text model=".confirmpassword" id="confirmpassword" name="confirmpassword"
                                    placeholder="ConfirmPassword"
                                   className="form-control"
                                   validators={{
                                    required, minLength: minLength(5), maxLength: maxLength(15), validConfirmPassword
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".confirmpassword"
                               show="touched"
                               messages={{
                                   required: 'Required',
                                   minLength: 'Must be greater than 4 characters',
                                   maxLength: 'Must be 15 characters or less',
                                   validConfirmPassword: "Password confirmation does not match"
                               }}
                               />
                                   </Col>
                               </Row>

                               <Row className="form-group">
                                 <Col md={{sixe: 10, offset: 2}}>
                                 <Button type="submit" value="submit" color="primary" onClick={()=>{this.setState({show:!this.state.show, showButton:!this.state.showButton})}}>Sign up</Button>
                               </Col>
                               </Row>

                          </LocalForm>
                    </ModalBody>
                </Modal>
    </div>
         
  );
}
}


function RenderSignupDetails({signups}) {
    if (signups != null) {

    const sin = signups.map((sin) => {

      return(
              <div key={sin.id}>
                <p>Hi!...{sin.firstname}</p>
              </div>
          );
    });

    return(
        <div className="d-flex">
            {sin}
        </div>
    );

 }
     
     else{
      return(
         <div></div>
           );
    }
  }



  function RenderSignupForm({signups, addLoginDetails,addSignupDetails, personId}) {
    return(
      <div className="col-12 col-md-5 m-2">
         <Signup personId={personId} addLoginDetails={addLoginDetails} addSignupDetails={addSignupDetails} signups={signups} />
      </div>
    );
  }




class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        const { cartItems } = this.props;
        return(

            // <React.Fragment></React.Fragment>
 
                    //   or

            <>
                <Navbar light expand="md">
                    <div className="container-fluid">
                    <NavbarBrand className='mr-auto' href="/">
                            <img src="assets/images/logo.png" height="50" width="170" alt="EzzYBuY" />
                    </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="hyper" navbar>
                            <NavItem className="men">
                                <NavLink className="nav-link mr-1" to="/mensclothing">
                                     Men
                                </NavLink>
                            </NavItem>
                            <NavItem className="women">
                                <NavLink className="nav-link mr-1" to="/womensclothing">
                                     Women
                                </NavLink>
                            </NavItem>
                            <NavItem className="kids">
                                <NavLink className="nav-link mr-1" to="/kidsclothing">
                                    Kids
                                </NavLink>
                            </NavItem>
                            <NavItem className="offers">
                                <NavLink className="nav-link mr-1" to="/mensclothing">
                                    Offers
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem> 
                            <div className="pull-right search">
                                <Input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </div> 
                            <div className="pull-right">
                                <Button outline type="submit" value="submit">
                                    <span className="fa fa-search fa-sm"></span>
                                </Button>
                            </div>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <RenderSignupForm signups={this.props.signups} addLoginDetails={this.props.addLoginDetails} addSignupDetails={this.props.addSignupDetails} />
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/wishlist">
                                    <Button outline type="submit" value="submit" >
                                    <span className="fa fa-heart fa-sm"></span>
                                    </Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/checkout">
                                    <Button outline type="submit" value="submit">
                                    <span className="fa fa-shopping-bag fa-sm"></span>

                                    {cartItems.length === 0 ? (
                                         <div>
                                            {" "}
                                         </div>
                                    ) : (
                                         <div className="notification">
                                            {cartItems.length}
                                         </div>
                                    )}
                                        
                                    </Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}
export default Header;