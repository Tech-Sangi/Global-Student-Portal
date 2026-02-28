import React from 'react';
import { 
  Building2, 
  Settings2, 
  LayoutDashboard, 
  FileCheck2, 
  CalendarClock, 
  CreditCard, 
  Mail,
  GraduationCap
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portal-container">
      <div className="card">
        {/* Header */}
        <header className="header">
          <div className="brand">
            <div className="logo-icon">
              <GraduationCap size={26} strokeWidth={2.5} color="#ffffff" />
            </div>
            <div className="brand-text">
              <h1>Global Academy</h1>
              <span>Student ERP Portal</span>
            </div>
          </div>
          <div className="status-badge">
            <span className="dot"></span>
            System Update
          </div>
        </header>
        
        {/* Main Content */}
        <main className="content">
          <div className="hero-section">
            <div className="icon-wrapper">
              <Settings2 size={44} strokeWidth={1.5} className="spin-slow" />
            </div>
            <h2>Portal Under Construction</h2>
            <p>
              We are currently upgrading the Global Academy infrastructure to bring you a next-generation centralized student experience. The new ERP portal will streamline your academic journey.
            </p>
          </div>
          
          <div className="modules-section">
            <h3>Upcoming Infrastructure Modules</h3>
            <div className="grid">
              <div className="grid-item">
                <div className="icon-container primary">
                  <LayoutDashboard size={20} />
                </div>
                <div className="item-text">
                  <h4>Academic Dashboard</h4>
                  <p>Centralized view of your academic standing & metrics.</p>
                </div>
              </div>
              
              <div className="grid-item">
                <div className="icon-container success">
                  <FileCheck2 size={20} />
                </div>
                <div className="item-text">
                  <h4>Assignments & Grades</h4>
                  <p>Track submissions and official term progress.</p>
                </div>
              </div>
              
              <div className="grid-item">
                <div className="icon-container warning">
                  <CalendarClock size={20} />
                </div>
                <div className="item-text">
                  <h4>Timetable & Attendance</h4>
                  <p>Real-time class schedules and attendance logs.</p>
                </div>
              </div>
              
              <div className="grid-item">
                <div className="icon-container default">
                  <CreditCard size={20} />
                </div>
                <div className="item-text">
                  <h4>Fee Management</h4>
                  <p>Secure, transparent fee payments and history.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="progress-section">
            <div className="progress-labels">
              <span>Development Phase</span>
              <span>Estimated Progress: 65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="footer-bottom">
            <a href="mailto:info@techsangi.com.np" className="support-link">
              <Mail size={16} /> Contact Support
            </a>
            <span className="copyright">&copy; {new Date().getFullYear()} Global Academy</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
