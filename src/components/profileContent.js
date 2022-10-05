import React from "react";
import Skills from "./skills";

function ProfileContent(props) {
  return (
    <section className="profile">
      <div className="profileContent">
        <img
          src={`${process.env.PUBLIC_URL}/josh.JPG`}
          alt="Josh Gearheart wearing a gray shirt"
        ></img>
        <Skills />
      </div>
    </section>
  );
}

export default ProfileContent;
