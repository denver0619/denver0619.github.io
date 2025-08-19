const CardHero = () => {
  return (
    <>
      <div className="main-card">
        <h5>
          “Building Mobile Apps for Everyday Users — Aspiring Software Engineer”
        </h5>
        <h6>
          I design and develop mobile apps that simplify everyday tasks. I’m
          also exploring web development to broaden my skills and create
          versatile solutions.
        </h6>
        <div className="container-buttons">
          <button
            type="button"
            onClick={() => {
              const project = document.getElementById("projects");
              project?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => {
              const project = document.getElementById("contacts");
              project?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default CardHero;
