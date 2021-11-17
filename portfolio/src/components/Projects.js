import React, { Component } from "react";
import gameSearch from "../assets/imgs/gamesearchappresize.png";
import lotr from "../assets/imgs/lotrrpgresize.png";
import hcc from "../assets/imgs/hccdemo.gif";

export default class Projects extends Component {
  render() {
    if (this.props.data) {
    return (
      <section className="cards">
                <div className="card project-card">
          <div className="card-image">
            <img src={hcc} alt="project screenshot" />
          </div>
          <div className="card-title">
            <h2 data-testid="h2tag">
              <a href="https://holiday-chaos-coordinator.herokuapp.com">
                Holiday Chaos Coordinator: A MERN-stack list-building application to help with holiday shopping
              </a>
            </h2>
          </div>
          <div className="card-body">
            <p>
            <a href="https://github.com/katharinechumble/musical-telegram">
              View Repository
            </a>
            .<a href="https://holiday-chaos-coordinator.herokuapp.com/">View Live App</a>
            </p>
          </div>
        </div>
        <div className="card project-card">
          <div className="card-image">
            <img src={lotr} alt="project screenshot" />
          </div>
          <div className="card-title">
            <h2 data-testid="h2tag">
              <a href="https://lotr-rpg.herokuapp.com/">
                The LotR RPG, an interactive text-based RPG
              </a>
            </h2>
          </div>
          <div className="card-body">
            <p>
            <a href="https://github.com/katharinechumble/LOTR-RPGII">
              View Repository
            </a>
            .<a href="https://lotr-rpg.herokuapp.com/">View Live App</a>
            </p>
          </div>
        </div>
        <div className="card project-card">
          <div className="card-image">
            <img src={gameSearch} alt="project screenshot" />
          </div>
          <div className="card-title">
            <h2 data-testid="h2tag">
              <a href="https://katharinechumble.github.io/miniature-fiesta/">
                GameSearch - A video game search engine
              </a>
            </h2>
          </div>
          <div className="card-body">
            <p><a href="https://github.com/katharinechumble/miniature-fiesta">
              View Repository
            </a>
            .
            <a href="https://katharinechumble.github.io/miniature-fiesta/">
              View Live App
            </a>
            </p>
          </div>
        </div>
      </section>
    );
    }
  }
};