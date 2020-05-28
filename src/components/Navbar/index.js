import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand grow" href="index.html">Kevin Nguyen</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item grow">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item grow">
                        <a class="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item grow">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
