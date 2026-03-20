import "./App.css";
import profile from "./profile.jpg"; // 👉 உன் image src folder-ல இருக்கணும்

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Kanimozhi S</h2>
        <div>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <img src={profile} alt="profile" className="profile-img" />

        <h1>Hi, I'm Kanimozhi 👋</h1>
        <p>Information Technology Student | Web Developer | IoT Enthusiast</p>

        <div className="buttons">
          <a href="https://github.com/kanimozhi2110" target="_blank">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kanimozhisk"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>React</span>
          <span>Arduino</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="card">
        <h2>Projects</h2>

        <div className="project">
          <h3>💰 Expense Tracker App</h3>
          <p>
            React-based expense tracker with real-time calculation,
            category management and clean UI.
          </p>
          <p><b>Tech:</b> React, JavaScript, HTML, CSS</p>
        </div>

        <div className="project">
          <h3>👗 Fashion Management System</h3>
          <p>
            Web application to manage fashion products, inventory and orders
            with admin dashboard.
          </p>
          <p><b>Tech:</b> HTML, CSS, JS, PHP, MySQL</p>
        </div>

        <div className="project">
          <h3>🗑️ Smart Dustbin (IoT)</h3>
          <p>
            Smart waste detection system using Arduino UNO and sensors
            for wet/dry segregation.
          </p>
          <p><b>Tech:</b> Arduino UNO, Sensors</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="card">
        <h2>Contact</h2>
        <p>Email: kanilalitha2020@gmail.com</p>
        <p>Phone: 9597661816</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Kanimozhi | Built with React 🚀</p>
      </footer>

    </div>
  );
}

export default App;