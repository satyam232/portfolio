import React from "react";

const BodyIntroduction = function () {
  return (
    <div>
      <body>
      <section id="introduction">
        <div className="cards">
          <div className="design-card active">
            <div>
              <h3>Flutter Developer</h3>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <p>Create design products with unique ideas that matter</p>
            <a href=""> 4 PROJECTS</a>
          </div>

          <div className="design-card">
            <div>
              <h3>Backend Development</h3>
              <i className="fa-solid fa-terminal"></i>
            </div>
            <p>Building the Web’s Backbone</p>
            <a href="">8 PROJECTS</a>
          </div>
        </div>
        <div className="introduction-text">
          <p>Introduction</p>
          <h2>Hello! I'm Satyam Rana</h2>
          <h4>Crafting User Experiences that Delight and Inspire</h4>
          <p>
            Container(
            child: Text("Passionate Flutter developer with a strong
            foundation in mobile app development. Skilled in building visually
            appealing and highly functional cross-platform applications using
            Flutter framework. Proficient in UI/UX design, state management,
            REST API integration, and responsive layouts. Dedicated to
            delivering user-centric solutions with clean code and robust
            performance. Excited to contribute to innovative projects that
            showcase the power of Flutter in creating seamless user experiences.")
            )
          </p>
        </div>
        <div className="introduction-text" style={{ display: 'none' }}>
          <p>Introduction</p>
          <h2>Hello! I'm Satyam Rana</h2>
          <h4> The Web’s & Mobile’s Magician</h4>
          <p>
            As a frontend developer, I create stunning and responsive web pages
            that capture the attention and imagination of the users. I use my
            skills in HTML, Nodejs, MongoDB, SQL, and various frameworks and
            libraries to design and implement user interfaces that are both
            visually appealing and user-friendly.
          </p>
        </div>
        <div className="introduction-text" style={{ display: 'none' }}>
          <p>Introduction</p>
          <h2>Hello! Satyam Rana</h2>
          <h4>Coding with Efficiency</h4>
          <p>
            As a backend developer, I create robust and scalable web
            applications that handle the logic and data behind the scenes. I
            use my skills in Python, Django, SQL, and various APIs and tools to
            develop and deploy backend systems that are secure, reliable, and
            efficient.
          </p>
        </div>
      </section>
      </body>
    </div>
  );
};

export default BodyIntroduction;
