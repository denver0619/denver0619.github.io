import resume from "../../../assets/resume/laurian_john_denver-cv.pdf";

const CardContacts = () => {
  return (
    <>
      <div className="main-card">
        <h4>Let's Connect</h4>
        <div className="card-container">
          <div className="card-item">
            <p>
              <span className="pre-heading">Email: </span>
              <a href="mailto:jdrlaurian@gmail.com">jdrlaurian@gmail.com</a>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">Github: </span>
              <a
                href="https://github.com/denver0619"
                target="_blank"
                rel="noopener noreferrer"
              >
                denver0619
              </a>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/john-denver-laurian"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/john-denver-laurian
              </a>
            </p>
          </div>
          <div className="card-item button">
            <button
              className="resume"
              onClick={() => {
                const link = document.createElement("a");
                link.href = resume;
                link.download = "JohnDenverLaurian-CV.pdf";
                link.click();
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContacts;
