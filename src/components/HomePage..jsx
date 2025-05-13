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
        }
      `}</style>
    </div>
  );
}