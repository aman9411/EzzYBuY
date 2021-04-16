import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import formatCurrency from '../util';



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
    
  
const Search = (props) => {


  let filterProducts = props.offercloths.offercloths.filter((offercloth) => {
    return offercloth.name.toLowerCase().includes(props.searchProduct.toLowerCase())
  })
 
        const offercloth = filterProducts.map((offercloth) => {
          return (
            <RenderBrandsItem offercloth={offercloth} />
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
          <div className="row align-items-center" >
            <div className="main2">
            {offercloth}
            </div>
          </div>
        </div>
      );
      }
    
       
    

export default Search;