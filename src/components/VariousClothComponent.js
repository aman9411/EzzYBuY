import React, { Component } from 'react';
import { Card, CardImg, Breadcrumb ,BreadcrumbItem, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import formatCurrency from '../util';
import Filter from './Filter';



class FilterProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // offercloth: data.offercloth,
      size: "",
      sort: ""
  };
}


// sortProducts = (event) => {
//   const sort = event.target.value;
//   console.log(event.target.value);
//   this.setState({
//     sort: sort,
//     offercloth: this.state.offercloth.slice().sort((a, b) => (
//       sort === "lowest"?
//       ((a.price < b.price)? 1:-1):
//       sort === "highest"?
//       ((a.price > b.price)? 1:-1):
//       ((a.id > b.id)? 1:-1)
//     ))
//   });
// };


// filterProducts = (event) => {
//     console.log(event.target.value);
//     if(event.target.value === "") {
//       this.setState({
//         size: event.target.value, offercloth:data.offercloth
//       });
//     } else{
//       this.setState({
//         size: event.target.value,
//         offercloth: data.offercloth.filter(offercloth => offercloth.availableSizes.indexOf(event.target.value) >= 0)
//       })
//     }   
// };


render() {
  return(
    <Filter 
    // count={this.state.offercloth.length}
    size={this.state.size}
    sort={this.state.sort}
    filterProducts={this.filterProducts}
    sortProducts={this.sortProducts} />       
  );
}
}



function RenderBrandsItem({offercloth}) {
  return(

        <Card className="offerItem">
           <Link className="link-text" to={`/brandsclothing/${offercloth.id}`} >
             <CardImg src={offercloth.image} alt={offercloth.name} />
             <CardBody>
                {offercloth.brand}<br />
                <p className="visible">{offercloth.name}</p>
                {formatCurrency(offercloth.price)}
             </CardBody>
           </Link>
        </Card>
    
  );
}
    
  
const Various = (props) => {
        const offercloth = props.offercloths.offercloths.map((offercloth) => {
          return (
            
            <div className="col-12 col-md-2 m-4">
            <RenderBrandsItem offercloth={offercloth} />
           </div>
            
          );
      });

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
          <div className="row align-items-center m-2" >
          <FilterProduct offercloth={props.offercloth}/>
          </div>
          <div className="row align-items-center m-2" >

                {offercloth}

          </div>
        </div>
      );
      }
    
       
    

export default Various;