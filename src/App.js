import React from "react";
import "./App.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";

function App() {
  const links = [
    {
      id: 1,
      label: <BiLogoGmail />,
      url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    },
    {
      id: 2,
      label: <FaGithub />,
      url: "https://github.com/KhushnudEshtemirov",
    },
    {
      id: 3,
      label: <FaLinkedin />,
      url: "https://www.linkedin.com/in/khushnud-eshtemirov/",
    },
    {
      id: 4,
      label: <BsMedium />,
      url: "https://medium.com/@khushnudeshtemirov",
    },
    {
      id: 5,
      label: <FaStackOverflow />,
      url: "https://stackoverflow.com/users/17287535/khushnud-eshtemirov",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <ul>
          {links.map((link) => (
            <li>
              <a target="_blank" href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="right">
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
      <div className="hero">
        <div className="me">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIO4l7vjmU9A7VcTDKTKbb6lP5XZIGfekCBkAkqO07YuD4=s288-c-no"
            width={100}
          />
          <p>Hello, I am Khushud</p>
        </div>
        <div className="job">A frontend developer specialised in React</div>
      </div>
      <div className="projects" id="projects">
        <h1>Featured Projects</h1>
        <div className="inner">
          <div className="project">
            <img src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
            <div className="details">
              <h3>My Project 1</h3>
              <p>More text</p>
              <a href="#">See more</a>
            </div>
          </div>
          <div className="project">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" />
            <div className="details">
              <h3>My Project 2</h3>
              <p>More text</p>
              <a href="#">See more</a>
            </div>
          </div>
          <div className="project">
            <img src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2017/07/Project-Management-Skills-HERO.jpg" />
            <div className="details">
              <h3>My Project 3</h3>
              <p>More text</p>
              <a href="#">See more</a>
            </div>
          </div>
          <div className="project">
            <img src="https://cdn-bobah.nitrocdn.com/mDxsknkPRwKnnzdIpDlNbqFeHfgHfCqS/assets/images/optimized/rev-8879379/www.eiresystems.com/wp-content/uploads/Team-members-having-a-meeting..jpg" />
            <div className="details">
              <h3>My Project 4</h3>
              <p>More text</p>
              <a href="#">See more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <label>Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="text" />
          <label>Type of enquiry</label>
          <select>
            <option value="message">Message</option>
            <option value="call">Call</option>
          </select>
          <label>Your message</label>
          <textarea rows={10}></textarea>
          <button>Submit</button>
        </form>
      </div>
      <footer>
        <p>Khushnud &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
