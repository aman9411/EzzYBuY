import React, { Component } from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, Button, Row, Label, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control ,LocalForm ,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import formatCurrency from '../util';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false
  };

     this.toggleForm = this.toggleForm.bind(this);
     this.handleComment = this.handleComment.bind(this);
}


toggleForm() {
  this.setState({
      isFormOpen: !this.state.isFormOpen
  });
}

handleComment(values) {
  this.toggleForm();
  this.props.addComment(parseInt(this.props.dishId), values.rating, values.author, values.comment);
}

render() {
  return(
    <div>
          <div className="">
          <div className="wishlist d-flex">
            {/* <Link to={`/checkout`} > */}
            <Button className="mr-3" type="submit" value="submit" color="primary" onClick={()=> this.props.addToCart(this.props.offercloth)} ><span className="fa fa-shopping-bag fa-lg"> ADD TO BAG </span></Button>
                      {/* </Link> */}
            <Button outline className="m-0" type="submit" value="submit" onClick={()=> this.props.addToWishlist(this.props.offercloth)}><span className="fa fa-heart fa-lg"> WISHLIST </span></Button>
          </div>
          <div className="description">
          <h4 className="mt-4">DELIVERY OPTIONS</h4>
          <p className="m-4">100% Original Products<br />Free Delivery on order above Rs. 799<br />Pay on delivery might be available<br />Easy 30 days returns and exchanges<br />Try &amp; Buy might be available</p>
          <h4 className="mt-3">PRODUCT DETAILS</h4>
          
          <RenderDescription offercloth={this.props.offercloth} />
          </div>
          </div> 
          <h4 className="mt-3 mb-3">Comments</h4>
       <Button className="ml-3 wishlist" outline onClick={this.toggleForm}><span className="fa fa-pencil fa-lg">Submit Comment</span></Button> 
       <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
                   <ModalHeader toggle={this.toggleForm}>Submit Comment</ModalHeader>
                    <ModalBody>
                          <LocalForm onSubmit={(values) => {this.handleComment(values)} }>
                               <Row className="form-group">
                               <Label htmlFor="rating" md={2}>
                                 Rating
                                 </Label>
                               <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating"
                                className="form-control"
                                >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Control.select>
                            </Col>
                               </Row>
                               <Row className="form-group">
                                   <Label htmlFor="author" md={12}>
                                     Your Name
                                     </Label>
                                   <Col md={12}>
                                   <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                   className="form-control"
                                   validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} />
                                 <Errors 
                               className="text-danger"
                               model=".author"
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
                                  <Label htmlFor="comment" md={12}>
                                       Comment
                                  </Label>
                                  <Col md={12}>
                                  <Control.textarea model=".comment" id="comment" name="comment"
                                   rows="6"
                                   className="form-control"
                                  >
                                  </Control.textarea>
                                  </Col>

                               </Row>
                               <Row className="form-group">
                                 <Col md={{sixe: 10, offset: 2}}>
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

function RenderDescription({offercloth}) {
  return(
      <div>
        <p className="m-4">{offercloth.description}</p>
      </div>
  );
}



function RenderDish({offercloth}) {
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
             <CardImg src={offercloth.image} alt={offercloth.name} />
              </Card>
           </div>
          );

}

function RenderDetails({comments, addComment, dishId, offercloth, addToCart, addToWishlist}) {
          if (comments != null) {
  
          const coms = comments.map((com) => {
  
            return(
                    <li key={com.id}>
                      <p>{com.comment}</p>
                      <p>--{com.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                    </li>
                );
          });
  
          return(
            <div className="col-12 col-md-5 m-2">
              <CommentForm dishId={dishId} addComment={addComment} offercloth={offercloth} addToCart={addToCart} addToWishlist={addToWishlist} />
              <ul className="list-unstyled">
              {coms}
              </ul>
            </div>
          );
    
       }
           
           else{
            return(
               <div></div>
                 );
          }
        }


  const Offer = (props) => {
    if (props.isLoading) {
      return(
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
  }
  else if (props.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if(props.offercloth != null) {
      return (
        <div className="container">
           <div className="row ml-5">
            <Breadcrumb>
               <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
               <BreadcrumbItem active>{props.offercloth.brand}</BreadcrumbItem>
            </Breadcrumb>
          </div>
        <div className="row m-4">
          <RenderDish offercloth = {props.offercloth} />
          <div className="col-12 col-md m-3">
          <div className="col-12">
              <h3>{props.offercloth.brand}</h3>
              <h6 className="visible">{props.offercloth.name}</h6>
              <hr />
            </div>
            <h2 className="ml-3 mt-3">{formatCurrency(props.offercloth.price)}</h2>
            <p className="tax mt-1 ml-3">inclusive of all taxes</p>
            <h4 className="ml-3 mb-3">SELECT SIZE</h4>
            <span className="ml-3">
            {props.offercloth.availableSizes.map((x) => (
                  <span>
                    {" "}
                    <Button outline className="ml-1 mb-3">{x}</Button>
                  </span>
                ))}
            </span>
          
          <RenderDetails comments={props.comments}
          addComment={props.addComment}
          dishId={props.offercloth.id} offercloth={props.offercloth} addToCart={props.addToCart} addToWishlist={props.addToWishlist} />
          </div>
          </div>
        
    </div>
    );
  }

    else {
      return(
         <div></div>
      );
        
    }
 
}
export default Offer;

