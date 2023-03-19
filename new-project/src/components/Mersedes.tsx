import React, { Component } from "react";
import mercedes from "../assets/img/mercedes.jpg";



class Mercedes extends Component {
  render() {
    return (
      <div className="cards">
        <article>
          <img className="img" src={mercedes} alt="#" />
          <div className="cards-brand-year-section">
            <p>Mercedes-Benz</p>
            <p>2023</p>
          </div>
          <p className="description">
           CLS 450 4MATIC® is equipped with a 362-hp 3.0L turbo inline-6 
           engine with mild hybrid drive. Some key performance features 
           include: An electrified 48-volt Integrated Starter-Generator 
           that is capable of adding up to 21 horsepower while allowing 
           fuel-free coasting and lower emissions</p>
          <a className="moreinfo-link" rel="noopener" target="_blank" href="https://www.caranddriver.com/mercedes-benz/cls-class">See more...</a>
        </article>
      </div>
    )
  }
}

export default Mercedes