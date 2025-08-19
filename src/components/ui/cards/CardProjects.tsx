import workwellandroid from "../../../assets/projects/workwell-android.png";
import gabay from "../../../assets/projects/gabay.png";
import amiscosa from "../../../assets/projects/amiscosa.png";
import ticketflare from "../../../assets/projects/ticketflare.png";
import Carousel from "../../reusable/Carousel";
import type { Slide } from "../../reusable/Carousel";
import IconText from "../../reusable/IconText";
import { FaJava } from "react-icons/fa6";
import { PiAndroidLogo, PiFileCSharpBold } from "react-icons/pi";
import { SiAndroidstudio, SiMediapipe } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiDotnet, DiVisualstudio } from "react-icons/di";

// {
//   <IconText icon={}></IconText>,
// }

const CardProjects = () => {
  // const slides = [workwellandroid, gabay, amiscosa, ticketflare];

  const slides: Slide[] = [
    {
      imagePath: workwellandroid,
      role: "",
      body: "An Android mobile app that enhances posture for sedentary users by providing real-time feedback using a CNN-based MediaPipe Pose Landmark Detection algorithm. I implemented posture detection, guided routine interfaces, and session tracking, helping users maintain proper form and review performance history.",
      link: "https://github.com/denver0619/workwell",
      tools: [
        <IconText icon={<FaJava />}>Java </IconText>,
        <IconText icon={<PiAndroidLogo />}>Android XML</IconText>,
        <IconText icon={<SiAndroidstudio />}>Android Studio</IconText>,
        <IconText icon={<RiFirebaseFill />}>Firebase Cloudstore</IconText>,
        <IconText icon={<SiMediapipe />}>MediaPipe</IconText>,
      ],
    },
    {
      imagePath: gabay,
      role: "",
      body: "A mobile app that helps Filipino domestic travelers track and manage travel expenses and budgets efficiently. I designed the user interface and implemented features for logging, categorizing, and tracking individual trip expenditures to promote financial awareness and adherence to budgets.",
      link: "https://github.com/denver0619/gabay",
      tools: [
        <IconText icon={<FaJava />}>Java</IconText>,
        <IconText icon={<PiAndroidLogo />}>Android XML</IconText>,
        <IconText icon={<SiAndroidstudio />}>Android Studio</IconText>,
        <IconText icon={<RiFirebaseFill />}>
          Firebase Realtime Database
        </IconText>,
      ],
    },
    {
      imagePath: amiscosa,
      role: "",
      body: "A hardware sales and inventory management system designed to streamline operations, improve inventory accuracy, and enhance customer service for Amiscosa Hardware. I implemented modules for inventory tracking, transactions, customer management, and report generation, enabling real-time stock updates, low-stock alerts, and efficient checkout processes.",
      link: "https://github.com/denver0619/amiscosa-hardware-and-sales-inventory-system",
      tools: [
        <IconText icon={<PiFileCSharpBold />}>C#</IconText>,
        <IconText icon={<GrMysql />}>MySQL</IconText>,
        <IconText icon={<DiVisualstudio />}>Visual Studio</IconText>,
        <IconText icon={<DiDotnet />}>ASP.NET Core</IconText>,
      ],
    },
    {
      imagePath: ticketflare,
      role: "",
      body: "An event management system for BPSU that streamlines event registration, enhances communication, and reduces long queues using a centralized digital platform. I developed the registration and check-in modules, implemented information dissemination features, and ensured efficient event tracking for organizers and attendees.",
      link: "https://github.com/denver0619/event-management-system",
      tools: [
        <IconText icon={<PiFileCSharpBold />}>C#</IconText>,
        <IconText icon={<GrMysql />}>MySQL</IconText>,
        <IconText icon={<DiVisualstudio />}>Visual Studio</IconText>,
        <IconText icon={<DiDotnet />}>ASP.NET Core</IconText>,
      ],
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
