import React, { useState } from 'react';
import Projects from "./Projects";

const projectList = [
    {
        id: 0,
        name: "Game Search",
        image: '../assets/imgs/gamesearchapp.png',
        live: 'https://katharinechumble.github.io/miniature-fiesta/',
        github: 'https://github.com/katharinechumble/miniature-fiesta'

    },
    {
        id: 1,
        name: "LotR RPG",
        image: '../assets/imgs/lotrrpg.png',
        live: 'https://lotr-rpg.herokuapp.com/',
        github: 'https://github.com/katharinechumble/LOTR-RPGII'
    }
];

function projectsList() {
    return (
        <div>
            <h1 className="portfolioh">Portfolio</h1>

            <Projects projectList={projectList} />
        </div>
    )
}

export default projectsList;