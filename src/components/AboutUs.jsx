import React from "react";
import "../components/AboutUs.scss";

export const About = () => {
  return (
    <div>
      <div className="AboutUs">
        <div className="container">
          <div className="row">
            <div className="col-6 left">
              <img src="./images/About us plant.png" alt="Tree" />
            </div>
            <div className="col-6 right">
              <div className="title">
                <b>About Us</b>
                <h2>Continue to Develop to Became Global Company</h2>
                <p className="first">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus. Nec tristique at in
                  erat lectus mas sa diam. Lectus elit, nulla elementum
                  fringilla at. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus.
                  Nec tristique at in erat lectus mas sa diam. Lectus elit,
                  nulla elementum fringilla at.
                </p>
                <p className="second">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus.
                </p>
                <button className="btn read">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Stars">
        <div className="container">
          <div className="head-title">
            <h2>Our Best Product</h2>
            <span>
              <p>New Plants</p>
              <p>New Arrivals</p>
              <p>Sale</p>
            </span>
          </div>
          <div className="products">
            <div className="item first">
              <img src="./images/Tree.png" alt="Tree" className="Rasm" />
              <h2>Outdoor Plant</h2>
              <img src="./images/Stars.png" alt="yulduz" className="star" />
              <b className="itemPrice">$50.00</b>
            </div>
            <div className="item second">
              <img
                src="./images/About us image 2.png"
                alt="Tree"
                className="Rasm"
              />
              <h2>Monstera Plant</h2>
              <img src="./images/Stars.png" alt="yulduz" className="star" />
              <b className="itemPrice">$50.00</b>
            </div>
            <div className="item third">
              <img
                src="./images/About us image 3.png"
                alt="Tree"
                className="Rasm"
              />
              <h2>Pottel Plant</h2>
              <img src="./images/Stars.png" alt="yulduz" className="star" />
              <b className="itemPrice">$50.00</b>
            </div>
            <div className="item fourth">
              <img
                src="./images/About us image 4.png"
                alt="Tree"
                className="Rasm"
              />
              <h2>Indoor Plant</h2>
              <img src="./images/Stars.png" alt="yulduz" className="star" />
              <b className="itemPrice">$50.00</b>
            </div>
          </div>
          <button className="btn view">View All</button>
        </div>
      </div>
      <div className="opinion">
        <div className="container">
          <div className="row">
            <div className="col-6 left">
              <div className="title">
                <h2>What Our Customers Says</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus. Nec tristique at in
                  erat lectus mas sa diam. Lectus elit, nulla elementum
                  fringilla at.
                </p>
                <div className="fikr">
                  <div className="man">
                    <img src="./images/Man.png" alt="Man" className="bola" />
                    <img src="./images/Group.png" alt="rasm" className="rasm" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                    tempor, accumsan sit amet nunc cursus. Nec tristique at in
                    erat lectus mas sa diam. Lectus elit, nulla elementum
                    fringilla at.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 right">
              <img src="./images/About us girl.png" alt="Qiz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
