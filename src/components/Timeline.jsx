"use client"; // Needed for React hooks
import "./Timeline.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Array for all my items in the timeline
const timelineData = [
  {
    date: "June 2025 - Present",
    title: "Tech Lead",
    organization: "Data Science and Machine Learning Club",
    description: "Maintained the club website, ensuring timely updates of events and executive info. Currently designing a networking game to help members connect, fostering collaboration and engagement.",
    skills: "Leadership, Teamwork, Communication, Github",
  },
  {
    date: "July 2025 - Present",
    title: "Co-Founder",
    organization: "Woven Wishes YYC",
    description:"Co-founded Woven Wishes, a nonprofit that hosts workshops to create crocheted items for donation to charities and individuals in need. Organized events, sourced supplies, delegated tasks, coordinated with partner organizations, and taught participants to crochet, ensuring smooth and impactful workshops.",
    skills: "Event Planning, Team Leadership, Community Outreach, Teaching, Project Management, Communication"
  },
  {
    date: "May 2025 - Present",
    title: "Web Developer",
    organization: "Lajna AMJ Canada",
    description:"Designed and developed the organization’s website, enhancing front-end functionality and overall user experience. Collaborated to complete a year-long project ahead of schedule and led a quality control team to standardize pages, ensuring a consistent and cohesive site design.",
    skills: "Wordpress, HTML, CSS, JavaScript, Collaboration, Quality Control",
  },
  {
    date: "April 2025 - Present",
    title: "Social Media Coordinator",
    organization: "Women in Stem and Engineering",
    description: "Created and delivered promotional content to showcase the club's initiatives and grow social media presence. WISE is a University of Calgary club that empowers women pursuing degrees in STEM fields",
    skills: "Design, Communication, Canva, Marketing",
  },
  {
    date: "February 2024 - Present",
    title: "Math Tutor",
    organization: "MathPro Tutoring",
    description:"Provided personalized one-on-one tutoring in math and calculus for high school students, tailoring lessons to individual needs. Helped students strengthen problem-solving skills, understand complex concepts, and improve overall academic performance.",
    skills: "Teaching, Problem Solving, Critical Thinking, Communication, Tutoring"
  },
  {
    date: "August 2022 – August 2024",
    title: "Code Sensei",
    organization: "Code Ninjas",
    description: "Instructed and mentored students ages 5–14 in coding fundamentals using Scratch, JavaScript, and Python. Troubleshot coding errors and applied debugging practices to improve curriculum and foster problem-solving skills. Directed summer camps and group sessions with interactive coding challenges and team-based activities.",
    skills: "Programming, Mentorship, Collaboration, Computational Thinking, Debugging"
  },
  {
    date: "2021 – Present",
    title: "Students In-Charge",
    organization: "AMJ Calgary South",
    description: "Mentored and taught 20 students, guiding them through their syllabus while promoting personal growth, community engagement, and a fun learning environment. Led classes, conducted exams, and maintained accurate records to support student development.",
    skills: "Community Building, Leadership, Teaching, Organization"
  }
];


export default function Timeline() {
  return (
    <div className = "timeline-container" id="experience">
    <h1 className="skillsHeading">Experience</h1>
    <br></br>
    <section id="about" className="timeline-section">
        <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconClassName= "timeline-icon-purple"
          >
            <h2 className="vertical-timeline-element-title">{item.title}</h2>
            <h4 className="vertical-timeline-element-subtitle">{item.organization}</h4>
            <p>{item.description}</p>
            <p className = "Skills"> <strong>Skills:</strong> {item.skills}</p>


          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
    </div>
  );
}
