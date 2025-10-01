"use client"; // Needed for React hooks
import "./Hero.css";

export default function Hero() {
  return (
    <main className="main">
      <div className="mainDiv" id="hero">
        <h1 className="bigTitle"><span className="welcomeTexjt">Hi,</span> I'm Noor! </h1>
        <div className='research'>I'm a Software Engineering Student</div>
        <div className='research'>Scroll down to discover</div>
        <div className="line"/>
      </div>
    </main>
  );
}