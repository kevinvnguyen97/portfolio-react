import React from "react";
import "./style.css";

function PortfolioSection(props) {
    return (
        <div>
            <h2 class="page-title">{props.title}</h2>
            <div class="row portfolio-section">
                {props.cards}
            </div>
        </div>
    );
}

export default PortfolioSection;