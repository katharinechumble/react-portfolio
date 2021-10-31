import React from "react";

function Navigation(props) {
    const tabs = ["About Me", "Portfolio", "Contact"];
    return (
        <div className="tabs">
            <ul className="nav navbar">
                {tabs.map((tab) => (
                    <li className={props.currentPage === tab ? "nav-item is-active" : "nav-item"} key={tab}>
                        <a href={"#" + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={props.currentPage === tab ? "nav-link active" : "nav-link"}>
                                {tab}
                            </a>
                    </li>
                )
                )}
            </ul>
        </div>
    );
}

export default Navigation;