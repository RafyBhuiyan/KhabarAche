import React from "react";
import "../components/userdashboard.css";
import "boxicons/css/boxicons.min.css"; 
import logo from "../assets/logo.png";  
import heroImage from "../assets/heroImage.png";  

const UserDashboardHotel = () => {
  return (
    <div className="userdashboard">
      <input type="checkbox" id="sidebar-toggle" />
      
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-flex">
            <img src={logo} height="100px" width="70px" alt="Logo" />  
            <div className="brand-icons">
              <span className="bx bx-bell"></span> 
              <span className="bx bx-user-circle"></span>
            </div>
          </div>
        </div>

        <div className="sidebar-main">
          <div className="sidebar-user">
            <img src={heroImage} alt="Hotel" />
            <div>
              <h3>Hotel Name</h3>
              <span>Hotel Email</span>
            </div>
          </div>

          <div className="sidebar-menu">
            <div className="menu-head"><span>Dashboard</span></div>
            <ul>
              <li><a href="#"><span className="bx bx-line-chart"></span> Finance</a></li>
              <li><a href="#"><span className="bx bx-pie-chart"></span> Analytics</a></li>
            </ul>

            <div className="menu-head"><span>Applications</span></div>
            <ul>
              <li><a href="#"><span className="bx bx-calendar"></span> Calendar</a></li>
              <li><a href="#"><span className="bx bx-user"></span> Contacts</a></li>
              <li><a href="#"><span className="bx bx-shopping-bag"></span> Followers</a></li>
              <li><a href="#"><span className="bx bx-envelope"></span> Mailbox</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="menu-toggle">
            <label htmlFor="sidebar-toggle">
              <span className="bx bx-menu"></span>
            </label>
          </div>
          <div className="header-icons">
            <span className="bx bx-search"></span>
            <span className="bx bx-bookmark"></span>
            <span className="bx bx-message"></span>
          </div>
        </header>

        <main>
          <div className="page-header">
            <div>
              <h1>Analytics Dashboard</h1>
              <a href="#">Monitor your donation</a>
            </div>
            <div className="header-actions">
              <button><span className="bx bx-file-export"></span> Complaint Box</button>
              <button><span className="bx bx-cog"></span> Settings</button>
            </div>
          </div>

          <div className="cards">
            {[
              { title: "Donation", count: 17, desc: "Till now you have encountered 17 donations" },
              { title: "Purchases", count: 5, desc: "Till now you have got 5 purchased donations" },
              { title: "Pending-Purchases", count: 12, desc: "Till now you have 12 units of donations pending" }
            ].map((card, index) => (
              <div className="card-single" key={index}>
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>{card.title}</span>
                      <small>Number of {card.title.toLowerCase()}</small>
                    </div>
                    <h2>{card.count}</h2>
                    <small>{card.desc}</small>
                  </div>
                  <div className="card-chart">
                    <span className="bx bx-line-chart"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="jobs-grid">
            <div className="analytics-card">
              <div className="analytics-head">
                <h3>Actions needed</h3>
                <span className="bx bx-dots-horizontal-rounded"></span>
              </div>
              <div className="analytics-chart">
                <div className="chart-circle"><h1>74%</h1></div>
                <div className="analytics-note">
                  <small>You have the ability to download PDF files that contain details or records of the donations you have made.</small>
                </div>
              </div>
              <div className="analytics-btn">
                <button>Download PDF</button>
              </div>
            </div>

            <div className="jobs">
              <h2>Donate <small>See all donation orders <span className="bx bx-right-arrow-alt"></span></small></h2>
              <div className="table-responsive">
                <table width="100%">
                  <tbody>
                    {[
                      { name: "Rafy Bhuiyan", status: "donated" },
                      { name: "Israt Jahan", status: "donate" },
                      { name: "Jerin Neon", status: "donated" },
                      { name: "Abdur Rahman", status: "donate" }
                    ].map((donor, index) => (
                      <tr key={index}>
                        <td><div><span className={`indicator ${index % 2 === 0 ? "" : "even"}`}></span></div></td>
                        <td><div>{donor.name}</div></td>
                        <td><div>Menu</div></td>
                        <td><div>Description</div></td>
                        <td><div><button>{donor.status}</button></div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <label htmlFor="sidebar-toggle" className="userdashboard-label"></label>
      <footer>
        <h3>&copy; All Rights Reserved</h3>
      </footer>
    </div>
  );
};

export default UserDashboardHotel;
