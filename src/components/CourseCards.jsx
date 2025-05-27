<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';

// Course card component representing a single certification category
const CourseCard = ({ icon, title, viewAllLink }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex">
          <div className="bg-light p-3 rounded me-3">
            {icon}
          </div>
          <div>
            <h5 className="card-title mb-2">{title}</h5>
            <a 
              href={viewAllLink} 
              className="text-warning fw-medium"
              style={{ fontSize: '0.875rem' }}
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main CourseCards component that displays all certification categories
const CourseCards = () => {
  // Course categories data
  const courseCategories = [
    {
      id: 1,
      title: "Sitecore Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-circle-fill text-primary" width="32" height="32" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="#f8f9fa" />
          <path d="M12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z M12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 Z" fill="#0d6efd" />
          <circle cx="16" cy="8" r="2" fill="#0d6efd" />
        </svg>
      ),
      viewAllLink: "/sitecore-certification-courses"
    },
    {
      id: 2,
      title: "Cloud Computing Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-cloud text-info" width="32" height="32" fill="currentColor">
          <rect width="20" height="16" x="2" y="4" rx="2" fill="#f8f9fa" />
          <path d="M12,7 C14.7614237,7 17,9.23857625 17,12 C17,12.7689513 16.8357822,13.4981431 16.5352513,14.1521739 L16.2655377,14.7194099 L16.7224433,15.1763155 C17.0557012,15.5095734 17.0557012,16.0476337 16.7224433,16.3808916 C16.3891855,16.7141495 15.8511252,16.7141495 15.5178673,16.3808916 L15.0609617,15.923986 L14.4937257,16.1936996 C13.8396949,16.4942305 13.1105031,16.6584483 12.3415518,16.6584483 C9.58012811,16.6584483 7.34155186,14.4198721 7.34155186,11.6584483 C7.34155186,8.89702457 9.58012811,6.65844832 12.3415518,6.65844832 L12.3415518,6.65844832 C12.2285205,6.65844832 12.116637,6.66217131 12.0053481,6.66949833 L12,7 Z" fill="#dc3545" />
          <path d="M10,10 C11.1045695,10 12,10.8954305 12,12 C12,13.1045695 11.1045695,14 10,14 C8.8954305,14 8,13.1045695 8,12 C8,10.8954305 8.8954305,10 10,10 Z" fill="#dc3545" />
          <path d="M14,8 C15.1045695,8 16,8.8954305 16,10 C16,11.1045695 15.1045695,12 14,12 C12.8954305,12 12,11.1045695 12,10 C12,8.8954305 12.8954305,8 14,8 Z" fill="#dc3545" />
        </svg>
      ),
      viewAllLink: "/cloud-computing-certification-courses"
    },
    {
      id: 3,
      title: "Big Data Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-file-text text-warning" width="32" height="32" fill="currentColor">
          <rect width="16" height="20" x="4" y="2" rx="2" fill="#f8f9fa" />
          <path d="M8,8 L16,8 M8,12 L16,12 M8,16 L16,16" stroke="#343a40" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="14" r="3" fill="#fff3cd" stroke="#fd7e14" strokeWidth="1" />
        </svg>
      ),
      viewAllLink: "/big-data-certification-courses"
    },
    {
      id: 4,
      title: "Agile and Scrum Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-clock text-info" width="32" height="32" fill="currentColor">
          <path d="M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z" fill="#f8f9fa" />
          <path d="M12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 Z" fill="#f8f9fa" stroke="#0dcaf0" strokeWidth="2" />
          <path d="M16,8 L21,3" stroke="#fd7e14" strokeWidth="2" strokeLinecap="round" />
          <path d="M19,2 L22,5" stroke="#fd7e14" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      viewAllLink: "/agile-scrum-certification-courses"
    },
    {
      id: 5,
      title: "Project Management Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-clipboard-check text-info" width="32" height="32" fill="currentColor">
          <rect width="16" height="20" x="4" y="2" rx="2" fill="#f8f9fa" />
          <path d="M8,8 L16,8 M8,12 L16,12 M8,16 L12,16" stroke="#343a40" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="18" r="4" fill="#f8f9fa" stroke="#0dcaf0" strokeWidth="2" />
          <path d="M18,16 L18,18 L20,18" stroke="#0dcaf0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      viewAllLink: "/project-management-certification-courses"
    },
    {
      id: 6,
      title: "Salesforce Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-cloud-fill text-primary" width="32" height="32" fill="currentColor">
          <path d="M18,6 C19.6568542,6 21,7.34314575 21,9 C21,10.6568542 19.6568542,12 18,12 L18,12 L18,12 C18,14.209139 16.209139,16 14,16 L14,16 L14,16 C14,17.6568542 12.6568542,19 11,19 C9.34314575,19 8,17.6568542 8,16 C6.34314575,16 5,14.6568542 5,13 C5,11.3431458 6.34314575,10 8,10 L8,10 C8,7.790861 9.790861,6 12,6 C13.6568542,6 15,7.34314575 15,9 C15,10.6568542 13.6568542,12 12,12 C10.3431458,12 9,10.6568542 9,9 L9,9 C8.44771525,9 8,9.44771525 8,10 C8,10.5522847 8.44771525,11 9,11 L9,11 C10.1045695,11 11,11.8954305 11,13 C11,14.1045695 10.1045695,15 9,15 L9,15 C8.44771525,15 8,15.4477153 8,16 C8,16.5522847 8.44771525,17 9,17 C9.55228475,17 10,16.5522847 10,16 L10,16 C10,14.8954305 10.8954305,14 12,14 C13.1045695,14 14,14.8954305 14,16 L14,16 C14,16.5522847 14.4477153,17 15,17 C15.5522847,17 16,16.5522847 16,16 C16,15.4477153 15.5522847,15 15,15 L15,15 C13.8954305,15 13,14.1045695 13,13 C13,11.8954305 13.8954305,11 15,11 L15,11 C15.5522847,11 16,10.5522847 16,10 C16,9.44771525 15.5522847,9 15,9 L15,9 C14.4477153,9 14,9.44771525 14,10 C14,10.5522847 14.4477153,11 14,11 L14,11 C14.5522847,11 15,11.4477153 15,12 C15,12.5522847 14.5522847,13 14,13 L14,13 C13.4477153,13 13,12.5522847 13,12 C13,11.4477153 13.4477153,11 14,11" fill="#0d6efd" />
        </svg>
      ),
      viewAllLink: "/salesforce-certification-courses"
    },
    {
      id: 7,
      title: "ERP Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-grid-3x3-gap text-primary" width="32" height="32" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="#f8f9fa" />
          <path d="M12,6 C15.3137085,6 18,8.6862915 18,12 C18,15.3137085 15.3137085,18 12,18 C8.6862915,18 6,15.3137085 6,12 C6,8.6862915 8.6862915,6 12,6 Z M12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 Z" fill="#0d6efd" />
          <path d="M8.5,11 L15.5,11 C15.7761424,11 16,11.2238576 16,11.5 L16,12.5 C16,12.7761424 15.7761424,13 15.5,13 L8.5,13 C8.22385763,13 8,12.7761424 8,12.5 L8,11.5 C8,11.2238576 8.22385763,11 8.5,11 Z" fill="#0d6efd" />
          <path d="M11,8.5 L11,15.5 C11,15.7761424 11.2238576,16 11.5,16 L12.5,16 C12.7761424,16 13,15.7761424 13,15.5 L13,8.5 C13,8.22385763 12.7761424,8 12.5,8 L11.5,8 C11.2238576,8 11,8.22385763 11,8.5 Z" fill="#0d6efd" />
          <text x="12" y="12.5" fontSize="4" textAnchor="middle" fill="#0d6efd" fontWeight="bold">ERP</text>
        </svg>
      ),
      viewAllLink: "/erp-certification-courses"
    },
    {
      id: 8,
      title: "Cyber Security Certification Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-shield-lock text-primary" width="32" height="32" fill="currentColor">
          <rect width="20" height="16" x="2" y="4" rx="2" fill="#f8f9fa" />
          <path d="M12,8 C13.1045695,8 14,8.8954305 14,10 C14,10.7397009 13.5978014,11.3866464 13,11.7324356 L13,14 L11,14 L11,11.7324356 C10.4021986,11.3866464 10,10.7397009 10,10 C10,8.8954305 10.8954305,8 12,8 Z" fill="#0d6efd" />
          <path d="M7,14 L17,14 C17.5522847,14 18,14.4477153 18,15 C18,15.5522847 17.5522847,16 17,16 L7,16 C6.44771525,16 6,15.5522847 6,15 C6,14.4477153 6.44771525,14 7,14 Z" fill="#0d6efd" />
          <path d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 Z" fill="#0d6efd" />
        </svg>
      ),
      viewAllLink: "/cyber-security-certification-courses"
    },
    {
      id: 9,
      title: "Quality Management Courses",
      icon: (
        <svg viewBox="0 0 24 24" className="bi bi-check-circle text-warning" width="32" height="32" fill="currentColor">
          <circle cx="12" cy="12" r="8" fill="#fff3cd" />
          <path d="M9,12 L11,14 L15,10" stroke="#fd7e14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19,14 C19,14 20,15.5 20,17 C20,18.6568542 18.6568542,20 17,20 C15.5,20 14,19 14,19" stroke="#343a40" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      viewAllLink: "/quality-management-courses"
    }
  ];

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courseCategories.map(category => (
          <div className="col" key={category.id}>
            <CourseCard
              icon={category.icon}
              title={category.title}
              viewAllLink={category.viewAllLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
=======
=======
>>>>>>> master
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function generateSlug(title) {
  return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
}

// Your new course categories with icons
const staticInfrastructure = [
  {
    title: "Cloud Computing",
    icon: "https://img.icons8.com/color/48/000000/cloud.png",
    badge: "New",
  },
  {
    title: "Data Science & Analytics",
    icon: "https://img.icons8.com/color/48/000000/combo-chart--v1.png",
    badge: "Trending",
  },
  {
    title: "Machine Learning & Gen AI",
    icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
  },
  {
    title: "ERP (Salesforce, SAP, Oracle)",
    icon: "https://img.icons8.com/color/48/000000/business.png",
  },
  {
    title: "Networking (Cisco, Juniper, Nokia)",
    icon: "https://img.icons8.com/color/48/000000/ethernet.png",
  },
  {
    title: "Content Management System",
    icon: "https://img.icons8.com/color/48/000000/content-management-system.png",
  },
  {
    title: "Software Development",
    icon: "https://img.icons8.com/color/48/000000/code.png",
  },
  {
    title: "Web Technologies (React, Node, Angular)",
    icon: "https://img.icons8.com/color/48/000000/web.png",
  },
].map(item => ({
  ...item,
  slug: generateSlug(item.title),
}));

export default function InfrastructureGrid() {
  const [infra, setInfra] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your real API endpoint
    fetch('MY api URLL')
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(data => {
        // Ensure each item has a slug, generating if not present
        const processedData = Array.isArray(data)
          ? data.map(item => ({
            ...item,
            slug: item.slug || generateSlug(item.title),
          }))
          : staticInfrastructure;
        setInfra(processedData);
        setLoading(false);
      })
      .catch(() => {
        setInfra(staticInfrastructure);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem',background:"#f5f5f5" }}>
      <p style={{
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: '1.7',
        margin: '1.5rem auto 2.5rem',
        color: '#444',
        maxWidth: '800px',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        At Learnitfy, we empower individuals and organizations to thrive in the digital age through high-quality, flexible, and career-focused IT training. Whether you're looking to start a new tech career or upskill your team, our expertly designed courses are built to meet the demands of today’s fast-evolving IT landscape. .
      </p>

      <motion.div
        className="infra-grid-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '3rem' }}
      >
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div className="infra-card skeleton" key={i} />
          ))
        ) : (
          infra.map((item, index) => (
            <Link
              key={index}
              to={`/courses/${item.slug}`}
              className="infra-link"
            >
              <div
                className={`infra-card${item.highlight ? ' highlight' : ''}`}
                tabIndex={0}
                role="button"
                aria-label={item.title}
              >
                <div className="infra-icon">
                  <img src={item.icon} alt={item.title} />
                  {item.badge && (
                    <span className="infra-badge">{item.badge}</span>
                  )}
                </div>
                <div className="infra-title">{item.title}</div>
              </div>
            </Link>
          ))
        )}
      </motion.div>
      <style jsx>{`
        .infra-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          background: #f5f5f5;
        }
        .infra-link {
          text-decoration: none;
          outline: none;
        }
        .infra-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 16px 20px;
          position: relative;
          transition: all 0.25s ease;
          outline: none;
          border: 1px solid #e1e4e8;
          cursor: pointer;
          min-height: 180px;
        }
        .infra-card:focus,
        .infra-card:hover {
          box-shadow: 0 6px 18px rgba(44, 62, 80, 0.15);
          border-color: #ff6b00;
          background: #fff7ef;
          transform: translateY(-4px);
        }
        .infra-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #f6f8fa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          position: relative;
        }
        .infra-icon img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        .infra-badge {
          position: absolute;
          top: -10px;
          right: -16px;
          background: #2563eb;
          color: #fff;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 16px;
          font-weight: 600;
          letter-spacing: 0.02em;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .infra-title {
          font-size: 1.1rem;
          color: #222;
          font-weight: 600;
          text-align: center;
          line-height: 1.4;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
        }
        .skeleton {
          background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 37%, #f5f5f5 63%);
          background-size: 400% 100%;
          animation: skeleton-loading 1.4s ease infinite;
          min-height: 180px;
          border: 1px solid #e1e4e8;
          border-radius: 12px;
        }
        @keyframes skeleton-loading {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
        @media (max-width: 1000px) {
          .infra-grid-container {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
        @media (max-width: 700px) {
          .infra-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .infra-card {
            padding: 24px 12px 16px;
            min-height: 160px;
          }
          .infra-icon {
            width: 52px;
            height: 52px;
            margin-bottom: 12px;
          }
          .infra-icon img {
            width: 32px;
            height: 32px;
          }
          .infra-title {
            font-size: 1rem;
            min-height: 36px;
          }
        }
        @media (max-width: 480px) {
          .infra-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> feature/ui_updated
=======
>>>>>>> master
