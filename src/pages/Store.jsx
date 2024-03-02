//Home page
import React, { useState, useEffect } from 'react';
import CommandButton from '../components/CommandButton';
import MainTopic from '../components/MainTopic';
import './Home.css';


const images = [
  '/Images/about1.jpg',
  '/Images/about2.jpg',
  '/Images/about3.jpg',
];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <><><div className="Home1">
          <div
              className="background-image"
              style={{
                  backgroundImage: `url(${images[imageIndex]})`,
              }}
          >
              <div className="overlay" />
              <div className="home1content">
                  <h1 className='home1h1'>Welcome to</h1>
                  <h2 className='home1h2'>  MACUL</h2>
                  <p className='home1p'>
                      This is a simple example of a home page with a background image that
                      changes transitions using React.his is a simple example of a home page with a background image that
                      changes transitions using React
                  </p>
                  <CommandButton text="Explore More" className="custom-button" />
              </div>
          </div>
      </div>




          <div className="about-section">
              <div className="left-side">
                  <img className='aboutimage' src="/Images/about2.jpg" alt="About Us" />
              </div>
              <div className="right-side">
                  <hr className='servicehr2' />
                  <MainTopic title="About MACUL" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
          </div></>
          
          
          
          
          
          <div className="home-contact-section">
          <div className="contact-left-side">
                  <hr className='servicehr2' />
                  <MainTopic title="Contact Us" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
              <div className="contact-right-side">
                  <img className='homecontactimage' src="/Images/about2.jpg" alt="Contact us" />
              </div>
              
          </div></>


  );
}

