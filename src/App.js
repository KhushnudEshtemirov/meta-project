import React, { useEffect, useState } from "react";
import "./App.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import ContactSection from "./components/ContactSection";

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

  const projects = [
    {
      id: 1,
      name: "My Project 1",
      desc: "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      img: "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",
    },
    {
      id: 2,
      name: "My Project 2",
      desc: "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
    },
    {
      id: 3,
      name: "My Project 3",
      desc: "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      img: "https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2017/07/Project-Management-Skills-HERO.jpg",
    },
    {
      id: 4,
      name: "My Project 4",
      desc: "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      img: "https://cdn-bobah.nitrocdn.com/mDxsknkPRwKnnzdIpDlNbqFeHfgHfCqS/assets/images/optimized/rev-8879379/www.eiresystems.com/wp-content/uploads/Team-members-having-a-meeting..jpg",
    },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (isScrollingDown && visible) {
        setVisible(false);
      } else if (!isScrollingDown && !visible) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const headerStyle = {
    transform: `translateY(${visible ? "0" : "-200px"})`,
    transition: "transform 0.3s ease-in-out",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
  };

  return (
    <div className="App">
      <header style={headerStyle}>
        <ul>
          {links.map((link) => (
            <li>
              <a target="_blank" href={link.url} rel="noreferrer">
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
          {projects.map((project) => (
            <div className="project">
              <img src={project.img} />
              <div className="details">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <a href="#">See more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
      <footer>
        <p>Khushnud &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
