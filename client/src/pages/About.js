import React from "react";

function About() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 class="page-title">Welcome to My Personal Page!</h2>
      <div
        class="card-deck large-card text-white bg-dark mb-3"
        style={{ width: "500px" }}
      >
        <img src="/images/kevin_mackinac.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">About Me</h5>
          <p class="card-text">
            I am currently a student who graduated a year ago. Seeking further
            improvement in coding skills and learning to be a web developer, I
            chose to enroll in Coding Boot Camp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
