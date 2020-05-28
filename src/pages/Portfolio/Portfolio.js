import React from "react";

import PortfolioSection from "./PortfolioSection";
import Card from "../../components/Card";

import "./style.css";

function Portfolio() {
    return (
        <div>
            <PortfolioSection
                title="Main"
                cards={[
                    <Card
                        title="LinkedIn"
                        img="/images/linkedin_logo.png"
                        href="https://www.linkedin.com/in/kevin-nguyen-344466111/"
                        type="medium-card"
                    />,
                    <Card
                        title="Github"
                        img="/images/github_logo.png"
                        href="https://github.com/ThaNinjaPower"
                        type="medium-card"
                    />,
                    <Card
                        title="Resume"
                        img="/images/document.png"
                        href="/documents/Resume.pdf"
                        type="medium-card"
                    />
                ]}
            />
            <hr></hr>
            <PortfolioSection
                title="Projects"
                cards={[
                    <Card
                        title="Project 1: Video Game Stat Quest"
                        img="/images/controller_logo.png"
                        href="https://thaninjapower.github.io/project-1"
                        type="wide-card"
                    />,
                    <Card
                        title="Project 2: Bookshelf"
                        img="/images/bookshelf_logo.png"
                        href="https://fierce-caverns-99313.herokuapp.com/"
                        type="wide-card"
                    />,
                    <Card
                        title="Project 3: Adventure Routes"
                        img="/images/bookshelf_logo.png"
                        href=""
                        type="wide-card"
                    />
                ]}
            />
            <hr></hr>
            <PortfolioSection
                title="Homework Assignments"
                cards={[
                    <Card
                        title="Homework 3: Password Generator"
                        img="/images/super_mario_question_block.png"
                        href="https://thaninjapower.github.io/homework-3"
                        type="medium-card"
                    />,
                    <Card
                        title="Homework 5: Kevin's Day Planner App"
                        img="/images/super_mario_question_block.png"
                        href="https://thaninjapower.github.io/homework-5"
                        type="medium-card"
                    />,
                    <Card
                        title="Homework 6: Kevin's Weather App"
                        img="/images/clouds.jpg"
                        href="https://thaninjapower.github.io/homework-6"
                        type="medium-card"
                    />,
                    <Card
                        title="Homework 9: Kevin's README Generator"
                        img=""
                        href="https://github.com/ThaNinjaPower/homework-9"
                        type="medium-card"
                    />,
                    <Card
                        title="Homework 10: Kevin's Team Builder App"
                        img=""
                        href="https://github.com/ThaNinjaPower/homework-10"
                        type="medium-card"
                    />,
                    <Card
                        title="Homework 13: Kevin's Burger App"
                        img=""
                        href="https://afternoon-lake-90980.herokuapp.com/"
                        type="medium-card"
                    />
                ]}
            />
            <hr></hr>
            <PortfolioSection
                title="Hobbies"
                cards={[
                    <Card
                        title="Chess"
                        img="/images/chess.jpg"
                        type="medium-card"
                    />,
                    <Card
                        title="Gaming"
                        img="/images/gaming.jpg"
                        type="medium-card"
                    />,
                    <Card
                        title="Anime"
                        img="/images/mha.jpg"
                        type="medium-card"
                    />,
                    <Card
                        title="Computers and Coding"
                        img="/images/pc.jpg"
                        type="medium-card"
                    />,
                    <Card
                        title="Drawing and Painting"
                        img="/images/ipad.jpg"
                        type="medium-card"
                    />,
                    <Card
                        title="Modding"
                        img="/images/gamemods.jpg"
                        type="medium-card"
                    />
                ]}
            />
        </div>
    );
}

export default Portfolio;