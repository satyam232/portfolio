import React, { useEffect, useState } from 'react';

const BodyContent = () => {
  const [text, setText] = useState('');
  const fullText = "Crafting Robust Backend Solutions and Engaging Flutter Apps";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed here (e.g., 100 milliseconds)
  }, []);

  return (
    <section id="content-body">
      <div className="body-part-1">
        <div className="developer-intro">
          <p>Full-Stack Developer</p>
          <p>UI Designer</p>
        </div>
        <div className="body-title">
          <h1>Catalyzing Seamless Experiences: {text}</h1>
          <p>I design and code beautifully simple things,<br />and I love what I do.</p>
          <a href="#">LET'S CHAT!</a>
        </div>
        <div className="body-tail">
          <h1>2nd</h1>
          <p>YEAR B.TECH<br />STUDENT</p>
          <h1>8</h1>
          <p>PROJECTS<br />COMPLETED</p>
        </div>
      </div>
      <div className="body-part-2">
        <div className="hoodie-guy-animation-class">
          <div className="hoodie-guy"></div>
          <div className="circle">
            {/* Replace the image URLs with your actual image paths */}
            <span style={{ '--i': 1 }}><img src="assets/SVGIcons/flutter.svg" alt="Flutter" height="75px" /></span>
<span style={{ '--i': 2 }}><img src="assets/SVGIcons/python.svg" alt="Python" height="75px" /></span>
<span style={{ '--i': 3 }}><img src="assets/SVGIcons/adobe-photoshop.svg" alt="Adobe Photoshop" height="75px" /></span>
<span style={{ '--i': 4 }}><img src="assets/SVGIcons/django.svg" alt="Django" height="75px" /></span>
<span style={{ '--i': 5 }}><img src="assets/SVGIcons/adobe-premiere-pro.svg" alt="Adobe Premiere Pro" height="75px" /></span>
<span style={{ '--i': 6 }}><img src="assets/SVGIcons/html-5.svg" alt="HTML 5" height="70px" /></span>
<span style={{ '--i': 7 }}><img src="assets/SVGIcons/figma.svg" alt="Figma" height="75px" /></span>
<span style={{ '--i': 8 }}><img src="assets/SVGIcons/css3.svg" alt="CSS 3" height="70px" /></span>
<span style={{ '--i': 9 }}><img src="assets/SVGIcons/javascript.svg" alt="JavaScript" height="75px" /></span>
<span style={{ '--i': 10 }}><img src="assets/SVGIcons/adobe-illustrator.svg" alt="Adobe Illustrator" height="75px" /></span>
<span style={{ '--i': 11 }}><img src="assets/SVGIcons/dart.svg" alt="Dart" height="75px" /></span>
<span style={{ '--i': 12 }}><img src="assets/SVGIcons/PostgreSQL-Dark.svg" alt="PostgreSQL" height="75px" /></span>
<span style={{ '--i': 13 }}><img src="assets/SVGIcons/MySQL-Dark.svg" alt="MySQL" height="75px" /></span>
<span style={{ '--i': 14 }}><img src="assets/SVGIcons/Firebase-Dark.svg" alt="Firebase" height="75px" /></span>
<span style={{ '--i': 15 }}><img src="assets/SVGIcons/Github-Dark.svg" alt="GitHub" height="75px" /></span>
            {/* Your image spans */}
          </div>
        </div>
        <div className="background-circle"></div>
      </div>
    </section>
  );
};

export default BodyContent;
