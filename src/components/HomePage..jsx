<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
 import CourseCards from './CourseCards';

export default function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning fw-bold">Study</span>
            <span className="text-dark fw-bold">Notion</span>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  All Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Web Development</a></li>
                  <li><a className="dropdown-item" href="#">Data Science</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Development</a></li>
                </ul>
              </div>
            </div>
            
            <form className="d-flex mx-lg-4 my-2 my-lg-0">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search for Course" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            
            <div className="d-flex align-items-center">
              <a href="#" className="nav-link text-dark me-3">Blog</a>
              <a href="#" className="nav-link text-dark me-3">Corporate Training</a>
              <button className="btn btn-link position-relative me-3">
                <i className="bi bi-cart3 fs-5"></i>
              </button>
              <button className="btn btn-warning text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="bg-dark text-white position-relative">
        <div className="position-absolute w-100 h-100 overflow-hidden">
          <img 
            src="/api/placeholder/1200/600" 
            alt="Background" 
            className="w-100 h-100 object-fit-cover opacity-25"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark"></div>
        </div>
        
        <div className="container position-relative py-5 py-md-6">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="display-4 fw-bold mb-3">
                IT Courses that are<br />best for your career
              </h2>
              <p className="fs-5 mb-4">Learn From The Experts. Become An Expert.</p>
              
              <div className="position-relative max-width-500">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-pill pe-5"
                    placeholder="What do you want to learn?"
                  />
                  <button className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y me-2 z-index-10">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <img 
                src="/api/placeholder/600/400" 
                alt="Student learning" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Categories Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-semibold mb-5">
            Explore Our Popular Course Categories
          </h3>
          
          <CourseCards /> 
        </div>
      </div>
      
      {/* Bootstrap CSS & JS imports - Add to your HTML file */}
      {/* 

      */}
      
      {/* Custom CSS for additional styling */}
      <style jsx>{`
        .bg-gradient-dark {
          background: linear-gradient(90deg, rgba(33,37,41,1) 0%, rgba(33,37,41,0) 100%);
        }
        .max-width-500 {
          max-width: 500px;
        }
        .object-fit-cover {
          object-fit: cover;
        }
        .z-index-10 {
          z-index: 10;
=======
=======
>>>>>>> master
import React, { useState, useEffect } from 'react';
import CourseCards from './CourseCards';
import Timeline from './Tmeline';

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    headline: "Unlock Your Potential",
    subtext: "Expert-led courses for every learner.",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    headline: "Learn In-Demand Skills",
    subtext: "Stay ahead with industry-relevant programs.",
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Transform Your Career",
    subtext: "Join thousands of successful graduates.",
  },
];

function SearchBar() {
  return (
    <form className="custom-search-bar" autoComplete="off">
      <input
        type="text"
        className="custom-search-input"
        placeholder="e.g. Web Development"
      />
      <button type="submit" className="custom-search-btn">
        <span className="custom-search-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" />
            <line x1="14.5" y1="14.5" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="custom-search-label">Search</span>
      </button>
    </form>
  );
}

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = sliderImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div className="position-relative w-100 overflow-hidden" style={{ minHeight: '70vh', height: '90vh', maxHeight: '800px' }}>
      {sliderImages.map((img, idx) => (
        <div
          key={idx}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: idx === current ? 1 : 0,
            zIndex: idx === current ? 2 : 1,
            transition: 'opacity 0.9s ease',
          }}
        >
          <img
            src={img.src}
            alt={img.headline}
            className="w-100 h-100 object-fit-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center p-3 p-md-5"
            style={{
              color: '#fff',
              background: 'linear-gradient(90deg, rgba(33,37,41,0.7) 0%, rgba(33,37,41,0.2) 100%)',
            }}
          >
            <div className="text-center mb-4 mb-lg-5" style={{ width: '100%' }}>
              <h1 className="display-1 fw-bold mb-3" style={{ lineHeight: 1.1, fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                {(() => {
                  const words = img.headline.split(' ');
                  return (
                    <>
                      {words.slice(0, -1).join(' ')}{' '}
                      <span style={{ color: 'orange' }}>{words[words.length - 1]}</span>
                    </>
                  );
                })()}
              </h1>
              <p className="fs-3 mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}>{img.subtext}</p>
            </div>
            <div className="w-100 d-flex justify-content-center" style={{ maxWidth: 700 }}>
              <SearchBar />
            </div>
          </div>
        </div>
      ))}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2"
        style={{ zIndex: 3 }}
      >
      </div>
      <style>{`
        .custom-search-bar {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(60, 60, 60, 0.10);
          padding: 0.5rem 0.5rem 0.5rem 1.2rem;
          max-width: 700px;
          width: 100%;
          transition: box-shadow 0.25s;
        }
        .custom-search-bar:focus-within {
          box-shadow: 0 4px 24px rgba(60, 60, 60, 0.18);
        }
        .custom-search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1.15rem;
          background: transparent;
          color: #222;
          padding: 0.6rem 0;
        }
        .custom-search-input::placeholder {
          color: #b0b0b0;
          font-style: italic;
        }
        .custom-search-btn {
          display: flex;
          align-items: center;
          background:rgb(249, 169, 30);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1.2rem;
          margin-left: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.18s;
          box-shadow: 0 1px 3px rgba(60, 60, 60, 0.10);
        }
        .custom-search-btn:hover,
        .custom-search-btn:focus {
          background:rgb(254, 173, 51);
        }
        .custom-search-icon {
          display: flex;
          align-items: center;
          margin-right: 0.5rem;
        }
        @media (max-width: 700px) {
          .custom-search-bar {
            max-width: 98vw;
            padding: 0.4rem 0.4rem 0.4rem 0.7rem;
          }
          .custom-search-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.98rem;
          }
          .custom-search-input {
            font-size: 1rem;
          }
<<<<<<< HEAD
>>>>>>> feature/ui_updated
=======
>>>>>>> master
        }
      `}</style>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> master
}

export default function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Hero Section with Image Slider */}
      <div className="bg-dark text-white position-relative overflow-hidden" style={{ minHeight: '70vh', height: '90vh', maxHeight: '800px' }}>
        <ImageSlider />
      </div>

      {/* Course Categories Section */}
      <div style={{ background: "#f5f5f5", paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          <h3 className="text-center fw-semibold mb-5 text-dark">
            Explore Our Popular Course Categories
          </h3>
          <CourseCards />
          <Timeline />
        </div>
      </div>

      {/* Stats and Training Modes Section */}
      <section className="training-modes-section" style={{ background: "#f5f5f5" }}>
        <div className="container">
          <div className="row align-items-center flex-column flex-md-row">
            {/* Left: Training Modes */}
            <div className="col-md-6 mb-5 mb-md-0">
              <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: 4 }}>
                Choose your own comfortable learning experience.
              </p>
              <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 24, fontFamily: 'Ubuntu, sans-serif' }}>
                <span style={{ color: 'rgb(249, 169, 30)', fontFamily: 'Ubuntu, sans-serif' }}>Training</span> Patterns
              </h2>
              <div style={{ fontSize: '1.18rem', fontWeight: 500, marginBottom: 10 }}>
                <span style={{ fontWeight: 600 }}>Live Virtual Training</span>
              </div>
              <ul style={{ marginLeft: 0, marginBottom: 18, color: '#555', fontSize: '1rem', paddingLeft: 22 }}>
                <li style={{ marginBottom: 8, listStyle: 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -18, color: '#888' }}>&#8250;</span>
                  Schedule your sessions at your comfortable timings.
                </li>
                <li style={{ marginBottom: 8, listStyle: 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -18, color: '#888' }}>&#8250;</span>
                  Instructor led training with practical lab sessions.
                </li>
                <li style={{ marginBottom: 8, listStyle: 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -18, color: '#888' }}>&#8250;</span>
                  Real time projects and certification guidance.
                </li>
              </ul>
              <div style={{ fontSize: '1.18rem', fontWeight: 500, marginBottom: 10 }}>
                <span style={{ fontWeight: 600 }}>Live Classroom Training</span>
              </div>
              <ul style={{ marginLeft: 0, marginBottom: 18, color: '#555', fontSize: '1rem', paddingLeft: 22 }}>
                <li style={{ marginBottom: 8, listStyle: 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -18, color: '#888' }}>&#8250;</span>
                  Schedule your sessions at your comfortable timings.
                </li>
                <li style={{ marginBottom: 8, listStyle: 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -18, color: '#888' }}>&#8250;</span>
                  Instructor led training with practical lab sessions.
                </li>
                <li style={{ marginBottom: 8, listStyle: 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -18, color: '#888' }}>&#8250;</span>
                  Real time projects and certification guidance.
                </li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:800/0*AGsPW_0Fptw9iVE2.jpg"
                alt="Training Patterns"
                style={{
                  maxWidth: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 4px 18px rgba(60,60,60,0.12)",
                  background: "#fff",
                  width: "420px",
                  height: "auto",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
      </section>





    </div>
  );
}
<<<<<<< HEAD
>>>>>>> feature/ui_updated
=======
>>>>>>> master
