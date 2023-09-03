import React from "react";

const Header=function(){
    return(
        <div>
            <body>
            <section id="header">
        <div className="contain">
          <h3 className="title-first-name">
            Satyam
            <h3 className="title-last-name">Rana</h3>
          </h3>
        </div>
        <div>
          <ul className="navbar-menu">
            <li><a className="active" href="#">Home</a></li>
            <li><a className="" href="#introduction">Notes</a></li>
            <li><a id='contacts'href='#footer' >Contacts</a></li>
          </ul>
        </div>
        <div>
          <ul className="social-media">
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/satyam-rana-68938117b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
              <a href="https://github.com/satyam232?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:satyamr232@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </section>
      </body>
        </div>
    );
}

export default Header;