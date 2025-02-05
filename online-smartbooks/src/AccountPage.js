import React from "react";
import "./App.css";

const AccountPage = () => {
  
  const menuItems = [
    "Scheduler", "Attendance", "Text Books", "Online Exam", "Progress Tracker",
    "My Exam", "Offline Exam Paper", "Offline Progress Tracker", "Past Result",
    "Lectures", "Assignments", "Library", "Courses", "Recognition", "Certificate",
    "White Board", "Parent Teachers Meeting"
  ];

  return (
    <div className="account-container">
      {/* Fixed Header */}
      <header className="account-header">
        <img src="/logo512.png" alt="User" className="profile-pic" />
        <h2>Suhaan Patel</h2>
        <p>Nursery</p>
      </header>

      {/* Menu Buttons */}
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <button key={index} className="menu-button">{item}</button>
        ))}
      </div>
      
      {/* Logout Button */}
      <div className="logout-container">
        <button className="logout-btn" onClick={""}>Logout</button>
      </div>
    </div>
  );
};

export default AccountPage;
