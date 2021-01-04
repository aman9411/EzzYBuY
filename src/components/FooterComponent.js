import React from 'react';
import { Link } from 'react-router-dom';

 function Footer(props) {
     return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h6>ONLINE SHOPPING</h6>
                    <ul className="list-unstyled">
                        <li><Link to="/mensclothing">Men</Link></li>
                        <li><Link to="/womensclothing">Women</Link></li>
                        <li><Link to="/kidsclothing">Kids</Link></li>
                        <li><Link to="/mensclothing">Offers</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h6>USEFUL LINKS</h6>
                    <ul className="list-unstyled">
                   <li><a href="#">FAQ</a></li>
                   <li><a href="#">T&amp;C</a></li>
                   <li><a href="#">Terms Of Use</a></li>
                   <li><a href="#">Track Order</a></li>
                   <li><a href="#">Shipping</a></li>
                   <li><a href="#">Cancellation</a></li>
                   <li><a href="#">Returns</a></li>
                   <li><a href="#">Whitehat</a></li>
                   <li><a href="#">Blog</a></li>
                   <li><a href="#">Careers</a></li>
                   <li><a href="#">Privacy policy</a></li>
                   <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact US</Link></li>
                 </ul>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                <h6>KEEP IN TOUCH</h6>
                <ul className="list-unstyled d-flex">
                   <li className="m-2"><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
                   <li className="m-2"><i class="fa fa-instagram" aria-hidden="true"></i></li>
                   <li className="m-2"><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
                   <li className="m-2"><i class="fa fa-twitter" aria-hidden="true"></i></li>
                 </ul>
                   
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 EzzYBuY</p>
                </div>
            </div>
        </div>
    </div>
     )
 }

 export default Footer;