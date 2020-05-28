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
                        img="/linkedin_logo.png"
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
            <PortfolioSection
                title="Homework Assignments"
                cards={[
                    <Card
                        title="Homework 3: Password Generator"
                        img=""
                        href="https://thaninjapower.github.io/homework-3"
                    />,
                    <Card
                        title="Homework 5: Kevin's Day Planner App"
                        img=""
                        href="https://thaninjapower.github.io/homework-5"
                    />,
                    <Card
                        title="Homework 6: Kevin's Weather App"
                        img=""
                        href="https://thaninjapower.github.io/homework-6"
                    />,
                    <Card
                        title="Homework 9: Kevin's README Generator"
                        img=""
                        href="https://github.com/ThaNinjaPower/homework-9"
                    />,
                    <Card
                        title="Homework 10: Kevin's Team Builder App"
                        img=""
                        href="https://github.com/ThaNinjaPower/homework-10"
                    />,
                    <Card
                        title="Homework 13: Kevin's Burger App"
                        img=""
                        href="https://afternoon-lake-90980.herokuapp.com/"
                    />
                ]}
            />
            <hr></hr>
            <PortfolioSection
                title="Hobbies"
                cards={[
                    <Card
                        title="Chess"
                    />,
                    <Card
                        title="Gaming"
                    />,
                    <Card
                        title="Anime"
                    />,
                    <Card
                        title="Computers and Coding"
                    />,
                    <Card
                        title="Drawing and Painting"
                    />,
                    <Card
                        title="Modding"
                    />
                ]}
            />
        </div>
    );
}

export default Portfolio;