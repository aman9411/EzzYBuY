import React, { Component } from 'react';
import { Card, CardImg, Breadcrumb ,BreadcrumbItem, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import formatCurrency from '../util';
import Filter from './Filter';
 

class FilterProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      offercloth: props.offercloth,
      size: "",
      sort: "",
      color: ""
  };
}


sortProducts = (event) => {
  const sort = event.target.value;
  console.log(event.target.value);
  this.setState({
    sort: sort,
    offercloth: this.state.offercloth
    .slice()
    .sort((a, b) => 
      sort === "Lowest"
       ? a.price < b.price
         ? 1
         :-1
       : sort === "Highest"
       ? a.price > b.price
         ? 1
         :-1
       :a.id > b.id
         ? 1
         :-1   
    )
  });
};


filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === "All") {
      this.setState({
        size: event.target.value, offercloth: this.props.offercloth
      });
    } else{
      this.setState({
        size: event.target.value,
        offercloth: this.props.offercloth.filter(
          (offercloths) => offercloths.availableSizes.indexOf(event.target.value) >= 0
          ),
      });
    }   
};

filterProductsColor = (event) => {
  console.log(event.target.value);
  if(event.target.value === "All") {
    this.setState({
      color: event.target.value, offercloth: this.props.offercloth
    });
  } else{
    this.setState({
      color: event.target.value,
      offercloth: this.props.offercloth.filter(
        (offercloths) => offercloths.name.indexOf(event.target.value) >= 0
        ),
    });
  }   
};


render() {

 const offercloth = this.state.offercloth.map((offercloth) => {
    return (
      <RenderBrandsItem offercloth={offercloth} />
    );
  });

  return(
    <div>
            <Filter 
            count={this.state.offercloth.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            filterProductsColor={this.filterProductsColor} /> 
            {offercloth}
    </div>      
  );
}
}



function RenderBrandsItem({offercloth}) {
  return(

        <Card className="backg1 m-3 offerItem2">
           <Link className="link-text" to={`/brandsclothing/${offercloth.id}`} >
             <CardImg src={offercloth.image} alt={offercloth.name} />
             <CardBody>
                {offercloth.brand}<br />
                <p className="visible">{offercloth.name}</p>
                <p className="mrp">{formatCurrency(offercloth.price)}</p>
             </CardBody>
           </Link>
        </Card>
    
  );
}
    
  
const Various = (props) => {


      if (props.offercloths.isLoading) {
        return(
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
    }
    else if (props.offercloths.errMess) {
      return(
        <div className="container">
          <div className="row">
            <h4>{props.offercloths.errMess}</h4>
          </div>
        </div>
      );
    }
    else 
      return (
        <div className="container-fluid">  
          <div className="row">
            <Breadcrumb>
               <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
               <BreadcrumbItem active>Offers</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Offers</h3>
              <hr />
            </div>
          </div>
          <div className="row align-items-center">
          <div className="main2">
          <FilterProduct offercloth={props.offercloths.offercloths}/>
          </div>
          </div>
        </div>
      );
      }
    
       
    

export default Various;