import React from "react";

function ProfileContent(props) {
  return (
    <section className="profile">
      <div className="profileContent">
        <img
          src={`${process.env.PUBLIC_URL}/josh.JPG`}
          alt="Josh Gearheart wearing a gray shirt"
        ></img>
        <div className="profileText">
          βHe felt that his whole life was some kind of dream and he sometimes
          wondered whose it was and whether they were enjoying it.β β Douglas
          Adams, The Hitchhiker's Guide to the Galaxy
        </div>
      </div>
    </section>
  );
}

export default ProfileContent;
