import React from "react";

const LatestWork = function () {
  return (
    <div>
      <body>
      <section id="latest-works">
        <div className="left-project">
          <div className="latest-work-title">
            <h3>Latest Works</h3>
            <p>Perfect solutions for digital experience</p>
          </div>

          <div className="project-card project-card-1">
            <div className="title">
              <h3>Youtube UI Clone</h3>
              <div className="tech-stack">
                
                <p>HTML</p>
                <p>CSS</p>
                
              </div>
            </div>
            <img src="assets/Projects/project4.png" alt="" className="project-img-2" />
          </div>

          <div className="all-projects">
            <a href="">
              <h3>ALL PROJECTS</h3>
            </a>
            <p>
              if you want to see more. <a href="">CONTACT</a>
            </p>
          </div>
        </div>
        <div className="right-project">
          <div className="project-card project-card-2">
            <div className="title">
              <h3>Video Streaming Application</h3>
              <div className="tech-stack">
                <p>Flutter</p>
                <p>Nodejs</p>
                <p>MongoDB</p>
              </div>
            </div>
            <img src="assets/Projects/profo2.png" alt="" className="project-img-1" />
            <img src="assets/Projects/profo.png" alt="" className="project-img-1" />
          </div>
          <div className="project-card project-card-3">
            <div className="title">
              <h3>Bank Management Application</h3>
              <div className="tech-stack">
                <p>AndroidStudio</p>
                <p>Java</p>
                <p>pHpMyadmin</p>
              </div>
            </div>
            <img src="assets/Projects/bank1.jpg" alt="" className="project-img-3" />
            <img src="assets/Projects/bank2.jpg" alt="" className="project-img-3" />
          </div>
        </div>
      </section>
      </body>
    </div>
    
  );
};

export default LatestWork;
