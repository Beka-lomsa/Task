import React, { Component } from "react";
import ferrari from "../assets/img/ferrari.jpg";



class Ferrari extends Component {
  render() {
    return (
      <div className="cards">
        <article>
          <img className="img" src={ferrari} alt="#" />
          <div className="cards-brand-year-section">
            <p>Ferrari</p>
            <p>2023</p>
          </div>
          <p className="description">
            The Ferrari 488 2023 comes in Convertible and Coupe. 
            The Ferrari 488 2023 is available in Premium Unleaded Petrol.
            Engine sizes and transmissions vary from the Convertible 3.9L 7 SP
            Auto Man Dual Clutch to the Coupe 3.9L 7SP Auto Dual Clutch...
          </p>
          <a className="moreinfo-link" rel="noopener" target="_blank" href="https://www.carexpert.com.au/ferrari/488/2023">See more...</a>
        </article>
      </div>
    )
  }
}

export default Ferrari