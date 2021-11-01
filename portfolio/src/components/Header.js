import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About />;
            case "Contact":
                return <Contact />;
            case "Portfolio":
                return <Projects />;

            default:
                return <About />;
        }
    }

    return (
        <div>
            <nav className="navbar">
                <a href="https://github.com/katharinechumble">
                    <h1 className="title-text">Katharine C Humble</h1>
                </a>
            </nav>
            <Navigation
                currentPage={ currentPage }
                handlePageChange={ handlePageChange } />
            <main>
                <div>{ renderPage(currentPage) }</div>
            </main>
        </div>
    );
}

export default Header;