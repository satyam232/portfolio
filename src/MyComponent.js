import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Select elements using React refs instead of document.querySelectorAll
    const designCardButtons = document.querySelectorAll('.design-card');
    const introductionText = document.querySelectorAll('.introduction-text');
    const singleProfileCard = document.querySelectorAll('.single-profile-card');
    const testimonialCard = document.querySelectorAll('.testimonial-card');
    const form = document.getElementById('contact-form');

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
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      sendData(data);
    });

    function sendData(data) {
      const API_URL = 'https://garni-alignment.000webhostapp.com/banksystem/portfolio.php';

      fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((responseData) => {
          console.log('Data sent successfully:', responseData);
          // Optionally, display a success message to the user
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          // Display an error message to the user
        });
    }
  }, []); // Empty dependency array means this effect runs once after initial render

}

export default MyComponent;
