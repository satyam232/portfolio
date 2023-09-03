import React, { useEffect, useState, useRef } from 'react';



import BodyIntroduction from './sections/Introduction';
import './style.css';
import Header from './sections/header';
import BodyContent from './sections/BodyContent';
import LatestWork from './sections/Latestwork';
import Testonomials from './sections/Testinomials';
import Footer from './sections/Footer';





function App(){

  useEffect(() => {
    const designCardButtons = document.querySelectorAll('.design-card');
    const introductionText = document.querySelectorAll('.introduction-text');
    const singleProfileCard = document.querySelectorAll('.single-profile-card');
    const testimonialCard = document.querySelectorAll('.testimonial-card');
    

    designCardButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        introductionText.forEach((introduction, introductionIndex) => {
          if (index === introductionIndex) {
            introduction.style.display = 'block';
          } else {
            introduction.style.display = 'none';
          }
        });
        designCardButtons.forEach((btn, btnIndex) => {
          if (index === btnIndex) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      });
    });

    singleProfileCard.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        testimonialCard.forEach((testimonialCard, testimonialCardIndex) => {
          if (index === testimonialCardIndex) {
            testimonialCard.style.display = 'block';
          } else {
            testimonialCard.style.display = 'none';
          }
        });
        singleProfileCard.forEach((cardBtn, cardIndex) => {
          if (index === cardIndex) {
            cardBtn.classList.add('profile-card-active');
          } else {
            cardBtn.classList.remove('profile-card-active');
          }
        });
      });
    });})
    const [text, setText] = useState('');
  const fullText = "Crafting Robust Backend Solutions and Engaging Flutter Apps";

  





  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <Header/>
    <BodyContent/>
    
    <BodyIntroduction/>

    <LatestWork/>
    <Testonomials/>
    <Footer/>
     
    </div>
  );
  
}


export default App;




