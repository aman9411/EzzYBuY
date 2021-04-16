import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import SliderMen from './SliderMenComponent';
import { Loading } from './LoadingComponent';
import { PRACTICE } from  '../shared/practice';




function RenderCloths({cloth}) {
  return(
    <div className="backg m-3 offerItem">
      <Link to={`/dealsclothing/${cloth.id}`} >
           <img src={cloth.image} alt={cloth.name} />
           <p>{cloth.description}</p>
      </Link>
    </div>    
);
}


    function RenderDeals({deal}) {
      return(
          <div className="backg m-3 offerItem">
            <Link to={`/dealsclothing/${deal.id}`} >
                 <img src={deal.image} alt={deal.name} />
                 <p>{deal.description}</p>
            </Link>
          </div>    
      );
}


     function RenderBrandsItem({brand, onClick}) {
       return(
        <Card className="backg1 offerItem1">
          <Link to={`/${brand.link}`}>
              <CardImg className="circle" src={brand.image} alt={brand.name} />
              <CardBody>
                {brand.description}
              </CardBody>
            </Link>
        </Card>
       );
     }
    
  
      const Home = (props) => {

        const brand = props.brands.brands.map((brand) => {
          return (
            <div className="col-12 col-md">
             <RenderBrandsItem brand={brand} />
            </div>
          );
      });


       const deal = props.deals.deals.map((deal) => {
        return (
           <RenderDeals deal={deal} />
        );
      });
       const cloth = props.cloths.cloths.map((cloth) => {
      return (
         <RenderCloths cloth={cloth} />
      );
      });

  

      if (props.brands.isLoading) {
        return(
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
    }
    else if (props.brands.errMess) {
      return(
        <div className="container">
          <div className="row">
            <h4>{props.brands.errMess}</h4>
          </div>
        </div>
      );
    }
    
    else 
      return (
        <div className="container-fluid">
          <div className="row">
            <SliderMen />
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
            <div className="row align-items-center m-3">
            <div className="main">
                   {deal}
            </div>
            </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
          <div className="row align-items-center m-1">
            <div className="main">
            {brand}
            </div>
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
         <div className="row align-items-center m-3">
               {cloth}
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
            <div className="row align-items-center m-3">
               {deal}
          </div>
          
        </div>
      );
      }
    
       
    

export default Home;