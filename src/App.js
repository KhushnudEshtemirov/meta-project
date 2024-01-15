import React, { useState } from "react";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="/">Logo1</a>
          </li>
          <li>
            <a href="/">Logo2</a>
          </li>
          <li>
            <a href="/">Logo3</a>
          </li>
          <li>
            <a href="/">Logo4</a>
          </li>
          <li>
            <a href="/">Logo5</a>
          </li>
          <li className="right">
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact Me</a>
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
        <div className="job">A frontend developer in React</div>
      </div>
      <div className="projects">
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
      <div className="contact">
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
