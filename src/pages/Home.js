import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <img 
          className="hero-video" 
          src="/images/nice.gif" 
          alt="Background animation"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Hi, I'm Andrew!
          </h1>
          <h2 className="hero-subtitle fade-in">
            Master's Aerospace Engineering Student at the University of Washington
          </h2>
          <div className="hero-cta fade-in">
            <a href="/projects" className="cta-button primary">
              View My Work
            </a>
            <a href="/contact" className="cta-button secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <h2 className="section-title">Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card" onClick={() => window.location.href = '/ai-projects'}>
            <div className="highlight-image">
              <img src="/images/ai-project.jpeg" alt="AI Project" />
            </div> 
            <h3>AI Projects</h3>
            <p>Some of my AI and machine learning projects</p>

          </div>
          <div className="highlight-card" onClick={() => window.location.href = '/research'}>
            <div className="highlight-image">
              <img src="/images/uw-research.jpeg" alt="UW Research" />
            </div>
            <h3>Research</h3>
            <p>What my thesis will be about</p>
          </div>
          <div className="highlight-card" onClick={() => window.open('https://dailyevergreen.com/176511/life/wsu-senior-aspires-to-make-the-world-a-better-place/', '_blank')}>
            <div className="highlight-image">
              <img src="/images/daily-evergreen.jpeg" alt="Daily Evergreen Article" />
            </div>
            <h3>Daily Evergreen</h3>
            <p>A news paper article about me</p>
          </div>
        </div>
      </section>

      <Link to="/ai-projects" className="featured-card">
        {/* Add your featured card content here */}
      </Link>
    </div>
  );
};

export default Home; 