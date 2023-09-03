import React, { useEffect, useState } from 'react';

const Testimonials = function () {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_URL = 'https://sss3245.onrender.com/port/fetchdata';

    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.data)) {
          setData(responseData.data);
        } else {
          console.error('Data is not an array:', responseData);
          setData([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <section id="testimonial" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="testimonial-title">
          <h2>SKILLS</h2>
          <p>The Reason Why You Searched Me</p>
        </div>

        <div className="testimonial-card">
          <div className="star-rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <h>
              <li>Python</li>
              <li>Flutter</li>
              <li>Java(oops,DSA,AndroidStudio)</li>
              <li>Web Development (React,Nodejs,Mongodb,MypHpAdmin)</li>
              <li>R (Data analytics)</li>
            </h>
          </div>
          <i className="fa-solid fa-quote-right"></i>
        </div>
        <div className="testimonial-title">
          <h2>Comments</h2>
          
          
        </div>

        <div className="testimonial-card1" style={{ overflowY: 'auto', flex: 1, height: '300px', paddingLeft: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {data.map((item) => (
            <li key={item._id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0', padding: '0', color: '#007BFF' }}>{item.name}</h4>
              <p style={{ fontSize: '14px', margin: '0', paddingTop: '5px' }}>{item.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  )}
</div>

      </section>
    </div>
  );
};

export default Testimonials;
