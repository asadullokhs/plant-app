import React from "react";
import "../components/Header.scss"

export const Header = () => {
    return <div>
         <header>
         <nav>
            <div className="container">
            <div className="logo">
                <h3>Plant</h3>
            </div>
            <div className="links">
                <div className="list">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="btns">
                        <a href="#">Login</a>
                        <button className="btn sign">Sign up</button>
                    </div>
                </div>
            </div>
            </div>
         </nav>
         <div className="grow">
            <div className="container">
                <div className="row">
                    <div className="col-6 left">
                        <div className="title">
                            <h1>Growing Beautiful Plants at Home</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
                            <button className="btn learn">Learn more</button>
                        </div>
                        <div className="info">
                            <div className="item">
                            <b>2000+ </b>
                            <p>Delivery</p>
                            </div>
                            <div className="item">
                            <b>1200+ </b>
                            <p>Customers</p>
                            </div>
                            <div className="item">
                            <b>1000+ </b>
                            <p>Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 right">
                        <img src="./images/Plant header.png" alt="plant" />
                    </div>
                </div>
            </div>
         </div>
         <div className="plants">
            <div className="container">
                <div className="row">
                    <div className="col-5 left">
                        <div className="title">
                        <h2>
                        We have lots of plants collection for you and your family
                        </h2>
                        <p>See all collection <span> --&gt; </span></p>
                        </div>
                    </div>
                    <div className="col-7 right">
                        <img src="./images/Header plants.png" alt="img" />
                    </div>
                </div>
            </div>
         </div>
         </header>
    </div>
}
