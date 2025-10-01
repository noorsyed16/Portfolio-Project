"use client";
import { useRef } from "react";
import "./Skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

export default function Skills() {
  const carouselRef = useRef();

  const skills = [
    { name: "HTML", img: "/skills/html.png" },
    { name: "CSS", img: "/skills/css.png" },
    { name: "JavaScript", img: "/skills/javascript.png" },
    { name: "React", img: "/skills/react.png" },
    { name: "C", img: "/skills/c.png" },
    { name: "Git", img: "/skills/git.png" },
    { name: "Java", img: "/skills/java.png" },
    { name: "C++", img: "/skills/cpp.png" },
    { name: "Python", img: "/skills/python.png" },
    { name: "Next.js", img: "/skills/nextjs.svg" },
    { name: "WordPress", img: "/skills/wordpress.png" }
  ];
  //ensure skills fit comfortably depending on screen size
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
  };

  return (
    <section id="skills" className="skillsSection">
    <div className="skillsWrapper">
    <h1 className="skillsHeading">Skills</h1>

    <div className="skillsCarousel">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={true}
        arrows={false}
        draggable={true}
        swipeable={true}
        showDots={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {skills.map((skill, i) => (
          <div key={i} className="skillBox">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </Carousel>

      <div className="arrows-container">
        <button className="custom-arrow left" onClick={() => carouselRef.current.previous()}>
          &#8592;
        </button>
        <button className="custom-arrow right" onClick={() => carouselRef.current.next()}>
          &#8594;
        </button>
      </div>
    </div>
  </div>
  <div className="line"/>
</section>
  );
}
