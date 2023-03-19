import React, { Component } from "react";
import bmw from "../assets/img/Bmw.jpg";



class Bmw extends Component {
  render() {
    return (
      <div className="cards">
        <article>
          <img className="img" src={bmw} alt="#" />
          <div className="cards-brand-year-section">
            <p>BMW</p>
            <p>2023</p>
          </div>
          <p className="description">
          BMW M8 Competition Gran Coupe includes 4-zone climate control,
          sport-designed rear seats, and an extended center console.
          Enjoy the exclusive comfort of M Sport seats covered with 
          Merino Leather upholstery, an Alcantara headliner...
          </p>
          <a className="moreinfo-link" rel="noopener" target="_blank" href="https://www.porsche.com/central-eastern-europe/en/_georgia_/modelstart/all/?modelrange=718&gclid=Cj0KCQjwwtWgBhDhARIsAEMcxeA6S9QlOq1sFcx5oXa23kQ5-2nrQzk1uWIDls_ugGAezOURN7Us5n8aAto3EALw_wcB&gclsrc=aw.ds">See more...</a>
        </article>
      </div>
    )
  }
}

export default Bmw