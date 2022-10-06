import React from "react";
import HeaderContent from "./headerContent";
import ProfileContent from "./profileContent";
import Projects from "./projects";

const Home = () => {
  return (
    <div>
      <HeaderContent />
      <ProfileContent />
      <Projects />
      <p>
        Thank you for your time and consideration! Feel free to contact me if
        you would like to collaborate or if you have any questions!
      </p>
    </div>
  );
};

export default Home;
