import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay,Breadcrumb ,BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import SliderMen from './SliderMenComponent';
import { DEALS } from  '../shared/deals';
import { Loading } from './LoadingComponent';


function RenderDeals() {
  const deal = DEALS.map((deal) => {
      return(
          <Card className="m-5 day">
          <CardImg src={deal.image} alt={deal.name} />
          <CardBody>
              {deal.description}
          </CardBody>
      </Card>   
      );
});

return (
  <div className=" col-12 deals">
          {deal}
  </div>
);
}

function RenderBrands() {
  return(
      <div className="main">
          <div className="backg m-3">
                 <img src="/assets/images/c1.jpg" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c3.png" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c1.jpg" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c3.png" />
                 <p>50-70% OFF</p>
          </div>
          <div className="backg m-3">
                 <img src="/assets/images/c1.jpg" />
                 <p>50-70% OFF</p>
          </div>
          
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

     function RenderKidsItem({kid, onClick}) {
       return(
        <Card className="mensitem">
          <Link to={`/kidsclothing/${kid.id}`} >
              <CardImg className="circle" src={kid.image} alt={kid.name} />
              <CardBody>
                {kid.description}
              </CardBody>
            </Link>
        </Card>
       );
     }
    
  
      const Kidsclothing = (props) => {
        const kid = props.kids.kids.map((kid) => {
          return (
            <div className="col-12 col-md">
             <RenderKidsItem kid={kid} />
            </div>
          );
      });

      if (props.kids.isLoading) {
        return(
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
    }
    else if (props.kids.errMess) {
      return(
        <div className="container">
          <div className="row">
            <h4>{props.kids.errMess}</h4>
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
               <BreadcrumbItem active>Kids</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Kids</h3>
              <hr />
            </div>
            <SliderMen />
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
          <div className="row align-items-center m-4">
               <RenderOffers />
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
          <div className="row align-items-center m-1">
                {kid}
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
         <div className="row align-items-center m-4">
               <RenderBrands />
          </div>
          <div className="heading">
              <h2>BIGGEST DEALS ON TOP BRANDS</h2>
            </div>
          <div className="row">
                    <RenderDeals />
            </div>
        </div>
      );
      }
    
       
    

export default Kidsclothing;