import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import SliderMen from './SliderMenComponent';
import { Loading } from './LoadingComponent';
import { PRACTICE } from  '../shared/practice';




function RenderCloths({cloth}) {
  return(
    <div className="backg m-3">
      <Link to={`/dealsclothing/${cloth.id}`} >
           <img src={cloth.image} alt={cloth.name} />
           <p>{cloth.description}</p>
      </Link>
    </div>    
);
}


function RenderOffers() {
  return(
      <div className="main">
          <div className="backg m-3">
                 <img src="/assets/images/c1.jpg" />
                 <p>50-70% OFF</p>
                 <img src="/assets/images/c2.png" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c3.png" />
                 <p>50-70% OFF</p>
                 <img src="/assets/images/c5.jpg" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c1.jpg" />
                 <p>50-70% OFF</p>
                 <img src="/assets/images/c2.png" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c3.png" />
                 <p>50-70% OFF</p>
                 <img src="/assets/images/c5.jpg" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c1.jpg" />
                 <p>50-70% OFF</p>
                 <img src="/assets/images/c5.jpg" />
                 <p>50-70% OFF</p>
          </div>
          
      </div>
      
  );
}

// -----------practice-------------




function RenderDealers({deal}) {
  const slider = PRACTICE.map((slider) => {
  return(
      <div className="backg m-3">
        <Link to={`/dealsclothing/${deal.id}`} >
        <img src={`${slider.image}`.image} /> 
        <p>{`${slider.image}`.name}</p>
        </Link>
      </div>    
 );
});
return (
  <div className="col-12 col-md">
          {slider}
  </div>
);
}

          
              


// --------practice---------



    function RenderDeals({deal}) {
      return(
          <div className="backg m-3">
            <Link to={`/dealsclothing/${deal.id}`} >
                 <img src={deal.image} alt={deal.name} />
                 <p>{deal.description}</p>
            </Link>
          </div>    
      );
}


     function RenderBrandsItem({brand, onClick}) {
       return(
        <Card className="offerItem">
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


      const dealer = props.deals.deals.map((deal) => {
        return(
          <div className="col-12 col-md">
         <RenderDealers deal ={deal} />
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
                {brand}
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
            <div className="row align-items-center m-4">
               <RenderOffers />
          </div>
          <div className="row align-items-center m-3">
            <div className="main">
                   { dealer } 
            </div>
            </div>
          
        </div>
      );
      }
    
       
    

export default Home;