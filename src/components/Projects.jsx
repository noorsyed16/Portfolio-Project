"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Projects.css";
import { useState, useEffect } from "react";

export default function Projects() {
  const [isPortrait, setIsPortrait] = useState(false); // renamed

    useEffect(() => {
    const checkScreen = () => {
        // Trigger portrait layout if width < 1050px or height > width so that the game console ratios match
        const isRectangle = window.innerWidth < 1050 || window.innerHeight > window.innerWidth;
        setIsPortrait(isRectangle);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen);
    }, [])

    const projects = [
    {
      title: "AWS Dynamic Dashboard",
      description:
        "Awarded Second Place in HTC Data Analytics Case Competition. Cleaned data and built a dynamic dashboard using AWS QuickSight, cutting analysis time and highlighting plants with high emissions to introduce sustainable solutions.",
      technologies: "AWS QuickSight, Python, Pandas, Data Analysis",
      image: "/projects/dashboard.png",
      link: "/projects/AWS-Dynamic-Dashboard.pdf",
    },
    {
      title: "KNN Classifier",
      description:
        "Received Second Place in DSMLC AI in Public Engagement Competition. Developed a KNN classifier in Python using object-oriented principles to categorize survey responses, prioritize high-impact concerns, and visualize results in a Power BI dashboard.",
      technologies: "Python, Pandas, Power BI",
      image: "/projects/knn.png",
      link: "/projects/KNN-Classifier.pdf",
    },
    {
      title: "Disaster Relief Tracking System",
      description:
        "Designed a disaster management system in Java using OOP principles, UML modeling, and PostgreSQL integration, enabling accurate tracking of victims and resources and improving disaster response efficiency.",
      technologies: "Java, SQL, PostgreSQL, JUnit, Hamcrest, MVC, UML",
      image: "/projects/Disaster-Relief.png",
      link: "https://github.com/noorsyed16/JavaDisasterVictimReliefSystem",
    },
    {
      title: "Hallucination Hacker",
      description:
        "Top 3 in KPMG Cyber Hackathon. Developed a Python tool to assess AI-generated content credibility, preventing hallucinations by scoring and flagging uncertain outputs, enabling safer AI use in healthcare, education, and other domains.",
      technologies: "Python, AI, Data Analysis",
      image: "/projects/kpmg.png",
      link: "/projects/Hallucination-Hacker.pdf",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase projects, skills, and experiences, with an interactive and responsive front-end. Learned to use Next.js and design prototypes with Figma.",
      technologies: "React, Next.js, CSS, Figma",
      image: "/projects/portfolio.png",
      link: "https://github.com/noorsyed16/Portfolio-Project",
    },
  ];
  // ensure there is only 1 card visible at a time
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };
  //return statement uses conditional based on if the screen size is able to fit the game console
  //if it fits, the game console is displayed
  //if not a regular carousel layout is used
  return (
    <div>
      {isPortrait ? (
        <section id="projects" className="projectsSection">
            <div className="line" />
            <h1 className="projectsHeading">Projects</h1>

            <div className="portraitCarouselWrapper">
            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                containerClass="portraitCarouselContainer"
                itemClass="portraitCarouselItem"
            >
                {projects.map((project, i) => (
                <div key={i} className="portraitProjectCard">
                    <h2 className="portraitProjectTitle">{project.title}</h2>
                    <img
                    src={project.image}
                    alt={project.title}
                    className="portraitProjectImage"
                    />
                    <p className="portraitProjectDescription">{project.description}</p>
                    <p className="portraitProjectTech">
                    <strong>Technologies:</strong> {project.technologies}
                    </p>
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="portraitProjectButton">Check it out!</button>
                    </a>
                </div>
                ))}
            </Carousel>
            </div>
        </section>
        )  : (
        <section id="projects" className="projectsSection">
          <div className="line" />
          <h1 className="projectsHeading">Projects</h1>

          <div className="consoleWrapper">
            <img
              src="/graphics/game-console.png"
              alt="Console"
              className="consoleImage"
            />

            <div className="consoleScreen">
              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                containerClass="projects-carousel-container"
                itemClass="projects-carousel-item"
              >
                {projects.map((project, i) => (
                  <div key={i} className="projectCard">
                    <div className="projectContent">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="projectImage"
                      />
                      <div className="projectText">
                        <h2 className="ProjectTitle">{project.title}</h2>
                        <p className="projectDescription">{project.description}</p>
                        <p className="projectTech">
                          <strong>Technologies:</strong> {project.technologies}
                        </p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="projectButton">Check it out!</button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
