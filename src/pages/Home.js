import React from "react";
import ResumeDropdown from "../ResumeDropdown";
import { TypeAnimation } from 'react-type-animation';
import ChatBot from "../components/ChatBot";


function Home() {
  const skills = [
    "ASP.NET Core",
    "C#",
    "React.js",
    "SQL Server",
    "Entity Framework",
    "Web API",
    "Bootstrap",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Course Selling Platform",
      description:
        "Full-featured online course platform with authentication, course purchase, quiz system, leaderboard, and admin dashboard.",
    },
    {
      title: "Task Management System",
      description:
        "Task tracking application with CRUD operations, authentication, and dashboard reporting.",
    },
    {
      title: "Employee Management System",
      description:
        "ASP.NET Core MVC project implementing CRUD operations using AJAX and SQL Server.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">
          Abhishek Mishra
        </h1>

        <ul className="flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-5">
        <h2 className="text-6xl font-bold mb-4">
  Hi, I'm{" "}
  <span className="text-cyan-400">
    <TypeAnimation
      sequence={[
        "Abhishek Mishra",
        2000,
        "",
        500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h2>

        <h3 className="text-2xl text-gray-300 mb-6">
          Full Stack Developer
        </h3>

        <p className="max-w-2xl text-gray-400 text-lg">
          Experienced in ASP.NET Core MVC, React.js, SQL Server,
          Web API, Entity Framework, and building scalable web
          applications.
        </p>

        <div className="mt-8 flex gap-4">
<div className="mt-8 flex gap-4">
  <a
    href="mailto:aaabhishekmishra123@gmail.com"
    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
  >
    Hire Me
  </a>

  <ResumeDropdown />
</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">
          I am a Full Stack Developer with experience in React.js,
          ASP.NET Core MVC, SQL Server, Entity Framework, ADO.NET,
          and REST APIs. I completed my apprenticeship at Techpile
          Technology and worked as a Graduate Trainee at Motherson
          Technology Services.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-5 rounded-lg text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-10 py-20 bg-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Experience
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">
              Graduate Trainee
            </h3>
            <p className="text-cyan-400">
              Motherson Technology Services
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Apprentice
            </h3>
            <p className="text-cyan-400">
              Techpile Technology
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Contact Me
        </h2>

        <form className="max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-slate-800 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-slate-800 rounded"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 mb-4 bg-slate-800 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-700">
        <p>
          © 2026 Abhishek Mishra | Full Stack Developer
        </p>
      </footer>
      <ChatBot />
    </div>
  );
}

export default Home;