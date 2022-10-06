import React from "react";
import { Icon } from "@iconify/react";

function HeaderContent(props) {
  return (
    <section id="headerContent">
      <div className="textStyle">Hello, I'm Joshua Gearheart</div>
      <h1>Fullstack Web Developer</h1>
      <div className="textStyle header">
        Deadlights jack lad schooner scallywag dance the hempen jig carouser
        broadside cable strike colors. Bring a spring upon her cable holystone
        blow the man down spanker Shiver me timbers to go on account lookout
        wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot
        yardarm spyglass sheet transom heave to.
      </div>
      <div className="socialContainer">
        <a href="https://github.com/JorshuaG">
          <Icon icon="akar-icons:github-fill" color="white" width="2rem" />
        </a>
        <a href="https://www.linkedin.com/in/joshua-gearheart/">
          <Icon
            icon="akar-icons:linkedin-box-fill"
            color="white"
            width="2rem"
          />
        </a>
      </div>
    </section>
  );
}

export default HeaderContent;
