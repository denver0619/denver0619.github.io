import profile_picture from "../../../assets/profile/profile.jpg";

const CardAboutMe = () => {
  return (
    <>
      <div className="main-card">
        <img
          src={profile_picture}
          alt="Profile picture"
          className="profile-picture"
        />
        <h4>About Me</h4>
        <p className="text-justify">
          Graduated cum laude with a degree in Bachelor of Science in Computer
          Science major in Software Development, from Bataan Peninsula State
          University. I contributed as a member of LexAssist, a university
          startup project incubated under Sikat TBI, and worked on academic and
          personal projects, such as Checkmate – a task management app and Gabay
          – an expense tracker. For my thesis, I co-developed WorkWell, a
          posture enhancement system using guided routines powered by a
          CNN-based MediaPipe Pose Landmark Detection algorithm. I enjoy
          creating tools people can actually use and exploring new technologies,
          and I am open to opportunities where I can apply and expand my skills
          in software development.
        </p>
      </div>
    </>
  );
};

export default CardAboutMe;
