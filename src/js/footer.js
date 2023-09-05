import React from 'react';
import '../css/footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className='footer-content'>
          <h2>Follow Us</h2>
          <a href='#'>Facebook</a>
          <a href='#'>Twitter</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
      <p className='footer-bottom'>© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
