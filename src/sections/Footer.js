import React, { useEffect, useState } from 'react';

const Footer = function () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const form = document.getElementById('form'); // Select the form element by its ID

    if (form) {
      // Check if the form element exists
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        sendData(data);
        setFormData({ name: '', email: '', message: '' }); // Clear form inputs
      });
    }

    function sendData(data) {
      const API_URL = 'https://sss3245.onrender.com/port/createdata';

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

    let currentIndex = 0;
    const fullText = 'Your full text here...'; // Replace with your desired text
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed here (e.g., 100 milliseconds)

    setIsLoading(false); // Set loading state to false
  }, []);

  const [text, setText] = useState('');

  return (
    <div>
      <body>
        <section id="footer">
          <div className="footer-left">
            <h2>Let's make something amazing together</h2>

            <div className="email-form">
              <form id="form">
                <h2>
                  Start by <span>saying hi</span>
                </h2>
                <p>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="message"
                    id=""
                    placeholder="Text"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </p>
                <div>
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>

            <div className="footer-title">
              <h3 className="title-first-name">Satyam</h3>
              <h3 className="title-last-name">Rana</h3>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-email-intro">
              <p>Information</p>
              <h6>Currently at VIT University, Amravati, Andhra Pradesh</h6>
              <h3>satyamr232@gmail.com</h3>
              <h3>Instagram:</h3>
            </div>
            <div className="footer-nav-menu">
              <ul className="footer-menu">
                <li>
                  <a className="active" href="#">
                    {' '}
                    Service{' '}
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Footer;
