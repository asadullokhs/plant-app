import React from "react";
import "../components/Oyog.scss"

export const Oyog = () =>{
    return <div>
        <div className="gul">
                <div className="container">
                <div className="row">
                    <div className="col-7 left">
                        <div className="title">
                            <h2>Subscribe Our Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </p>
                            <input type="e-mail" placeholder="Enter mail..." />
                            <button className="btn sub">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-5 right">
                        <img src="./images/footer plant.png" alt="Rasm" />
                    </div>
                </div>
                </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="head-title">
                     <h2>Follow Us on Instagram</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu <br /> msan sit amet nunc cursus. Nec tristique at in erat lectus</p>
                </div>
                <div className="images">
                    <img src="./images/Footer plants.png" alt="rasm" />
                </div>
                <div className="list">
                    <div className="row">
                        <div className="col-5 left">
                              <div className="title">
                                <h2>Plant</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.</p>
                                <img src="./images/Frame 151.png" alt="public" />
                              </div>
                        </div>
                        <div className="col-7 right d-flex">
                            <ul>
                                <li><b>Navigation</b></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Product</a></li>
                            </ul>
                            <ul>
                                <li><b>About us</b></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Address</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                            <ul>
                                <li><b>Help</b></li>
                                <li><a href="#">Coustomers Services</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">We Are Hiring</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
