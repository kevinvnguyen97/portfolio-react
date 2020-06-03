import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className= {`${props.type} card h-100 text-white bg-dark md-3 m-3 grow`}>
            <a href={props.href} target="_blank">
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                </div>
            </a>
        </div>
    );
}

export default Card;
