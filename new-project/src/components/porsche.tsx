import React, { Component } from "react";
import porsche from "../assets/img/Porsche.jpg";



class CardsHeader extends Component {
  render() {
    return (
      <div className="cards">
        <article>
          <img className="img" src={porsche} alt="#" />
          <div className="cards-brand-year-section">
            <p>Porsche</p>
            <p>2023</p>
          </div>
          <p className="description">The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance 
            rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. 
            It has a rear-mounted flat-six engine and originally a torsion bar suspension</p>
          <a className="moreinfo-link" rel="noopener" target="_blank" href="https://www.porsche.com/central-eastern-europe/en/_georgia_/modelstart/all/?modelrange=718&gclid=Cj0KCQjwwtWgBhDhARIsAEMcxeA6S9QlOq1sFcx5oXa23kQ5-2nrQzk1uWIDls_ugGAezOURN7Us5n8aAto3EALw_wcB&gclsrc=aw.ds">See more...</a>
        </article>
      </div>
    )
  }
}

export default CardsHeader