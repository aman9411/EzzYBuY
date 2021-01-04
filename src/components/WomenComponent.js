import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, CardImgOverlay ,Breadcrumb ,BreadcrumbItem, Button, Row, Label, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control ,LocalForm ,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';

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
       <Button outline onClick={this.toggleForm}><span className="fa fa-pencil fa-lg">Submit Comment</span></Button> 
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


function RenderDish({women}) {
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
             <CardImg src={women.image} alt={women.name} />
               <CardBody>
                 <CardTitle>{women.name}</CardTitle>
                <CardText>{women.description} </CardText>
              </CardBody>
              </Card>
           </div>
          );

}

function RenderDetails({comments, addComment, dishId}) {
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
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className="list-unstyled">
              {coms}
              </ul>
              <CommentForm dishId={dishId} addComment={addComment} />
            </div>
          );
    
       }
           
           else{
            return(
               <div></div>
                 );
          }
        }


  const Women = (props) => {
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
  else if(props.women != null) {
      return (
        <div className="container">
           <div className="row">
            <Breadcrumb>
               <BreadcrumbItem><Link to='/women'>Womens</Link></BreadcrumbItem>
               <BreadcrumbItem active>{props.women.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.women.name}</h3>
              <hr />
            </div>
          </div>
        <div className="row">
          <RenderDish women = {props.women} />
          <RenderDetails comments={props.comments}
          addComment={props.addComment}
          dishId={props.women.id} />
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
export default Women;

