import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/PNG-01.png'; // Update with your actual file name

export default function Footer() {
  return (
    
    <footer style={{ background: '#2c2e34', color: 'rgb(255, 137, 27)', fontSize: '0.85rem', letterSpacing: '.01em', padding: '1rem 0' }}>
            {/* Full-width Map at the Bottom */}

      <div className="container py-3">
        <div className="row gy-2">
          {/* Logo and Address */}
          <div className="col-12 col-md-4">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: '100px', height: 'auto', marginRight: '3px', display: 'block', filter: 'none', opacity: 1 }}
              />
            </Link>
            <p style={{ color: '#999', marginBottom: '0.5rem', lineHeight: '1.3', fontSize: '0.85em' }}>
              Educational Technology Solutions
              <br />
              123 Learning Plaza, Knowledge Park
              <br />
              Tech City, Digital State - 100001
              <br />
              India
              <br />
              <br />
              +1 1133223332332
              <br />
              <br />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#ff6b00',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(255,107,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,107,0,0.2)';
                  }}
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#ff6b00',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(255,107,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,107,0,0.2)';
                  }}
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#ff6b00',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(255,107,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,107,0,0.2)';
                  }}
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </p>
          </div>
          {/* About Extension */}
          <div className="col-6 col-md-2">
            <div style={{ color: '#bfc0c4', fontWeight: 600, letterSpacing: '.04em', marginBottom: '0.7rem', textTransform: 'uppercase', fontSize: '.85rem' }}>
              <a href="/about" style={{ color: '#f5f5f5', textDecoration: 'none' }}>
                About Us
              </a>
              <br />
              <br/>
              <br />
              <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
              Contact Us
              </a>
            </div>
            <ul className="list-unstyled" style={{ lineHeight: '1.5' }}>
              <li>
              </li>
            </ul>
          </div>
          {/* Map on the right, covers all right side with border */}
          <div className="col-12 col-md-6 d-flex align-items-stretch justify-content-end">
            <div style={{width: '100%', height: '100%', border: '3px solidrgb(7, 7, 7)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', minHeight: '180px'}}>
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196925876904!2d-122.4194154846817!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e5b0b1d%3A0x4a0b8b8b8b8b8b8b!2s123%20Learning%20Plaza!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, minHeight: '180px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
