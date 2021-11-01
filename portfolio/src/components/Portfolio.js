import React, { Component } from "react";
import Projects from "./Projects";

export default class Portfolio extends Component {

  render() {
    const portfolioList = [
      {
        id: 0,
        name: "Game Search",
        screenshot: "../assets/imgs/gamesearchapp.png",
        live: "https://katharinechumble.github.io/miniature-fiesta/",
        github: "https://github.com/katharinechumble/miniature-fiesta",
      },
      {
        id: 1,
        name: "LotR RPG",
        screenshot: "../assets/imgs/lotrrpg.png",
        live: "https://lotr-rpg.herokuapp.com/",
        github: "https://github.com/katharinechumble/LOTR-RPGII",
      },
    ];


      return (
        <div>
          <h1 className="portfolio">Portfolio</h1>

          <Projects portfolioList={portfolioList} />
        </div>
      );
    }
  }

