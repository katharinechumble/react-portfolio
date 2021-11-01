import React, { Component } from "react";
import gameSearch from '../assets/imgs/gamesearchapp.png';
import lotr from '../assets/imgs/lotrrpg.png';

export default class Projects extends Component {
  render() {
    const projectList = this.props.portfolioList;
    return (
      <section>
        <div className="card">
          <div className="card-image">
          <img src={lotr} alt="project screenshot" />
          </div>
          <div className="card-title">
          <h2 data-testid="h2tag">
            <a href="https://lotr-rpg.herokuapp.com/">The LotR RPG, an interactive text-based RPG</a>
          </h2>
          </div>
          <div className="card-body">
          <a href="https://github.com/katharinechumble/LOTR-RPGII">View Repository</a>
          </div>
        </div>
        <div className="card">
          <img src={ gameSearch } alt="project screenshot" />
          <h2 data-testid="h2tag">
            <a href="https://katharinechumble.github.io/miniature-fiesta/">GameSearch - A video game search engine</a>
          </h2>
          <a href="https://github.com/katharinechumble/miniature-fiesta">View Repository</a>
        </div>
      </section>
    );
  }
}
