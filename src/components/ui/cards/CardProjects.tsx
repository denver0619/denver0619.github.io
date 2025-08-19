import workwellandroid from "../../../assets/projects/workwell-android.png";
import gabay from "../../../assets/projects/gabay.png";
// import amiscosa from "../../../assets/projects/amiscosa.png";
// import ticketflare from "../../../assets/projects/ticketflare.png";
import Carousel from "../../reusable/Carousel";
import type { Slide } from "../../reusable/Carousel";
import IconText from "../../reusable/IconText";
import { FaJava } from "react-icons/fa6";
import { PiAndroidLogo } from "react-icons/pi";

const CardProjects = () => {
  // const slides = [workwellandroid, gabay, amiscosa, ticketflare];

  const slides: Slide[] = [
    {
      imagePath: workwellandroid,
      header: "",
      body: "An Android mobile app that enhances posture for sedentary users by providing real-time feedback using a CNN-based MediaPipe Pose Landmark Detection algorithm. I implemented posture detection, guided routine interfaces, and session tracking, helping users maintain proper form and review performance history.",
      link: "link: https://github.com/denver0619/workwell",
      tools: [
        <IconText icon={<FaJava />}>Java </IconText>,
        <IconText icon={<PiAndroidLogo />}>Java </IconText>,
      ],
    },
    {
      imagePath: gabay,
      header: "",
      body: "",
      link: "",
      tools: [<IconText icon={<FaJava />}>Java, </IconText>],
    },
  ];
  return (
    <>
      <div className="main-card">
        <h4>Projects</h4>
        <Carousel slides={slides}></Carousel>
      </div>
    </>
  );
};

export default CardProjects;
