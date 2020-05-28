import React from "react";

import PortfolioSection from "./PortfolioSection";
import Card from "../../components/Card"

function Portfolio() {
    return (
        <div>
            <PortfolioSection
                title="Main"
                cards={[
                    <Card
                        title="LinkedIn"
                        img=""
                        href="https://www.linkedin.com/in/kevin-nguyen-344466111/"
                    />,
                    <Card
                        title="Github"
                        img=""
                        href="https://github.com/ThaNinjaPower"
                    />,
                    <Card
                        title="Resume"
                        img=""
                        href=""
                    />
                ]}
            />
            <hr></hr>
            <PortfolioSection
                title="Projects"
                cards={[
                    <Card
                        title="Project 1: Video Game Stat Quest"
                        img=""
                        href="https://thaninjapower.github.io/project-1"
                    />,
                    <Card
                        title="Project 2: Bookshelf"
                        img=""
                        href="https://fierce-caverns-99313.herokuapp.com/"
                    />,
                    <Card
                        title="Project 3: Adventure Routes"
                        img=""
                        href=""
                    />
                ]}
            />
            <hr></hr>
            <PortfolioSection title="Homework Assignments"></PortfolioSection>
            <hr></hr>
            <PortfolioSection title="Hobbies"></PortfolioSection>
        </div>
    );
}

export default Portfolio;