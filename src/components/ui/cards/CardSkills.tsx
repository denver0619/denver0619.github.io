import {
  SiJavascript,
  SiAndroidstudio,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiLinux,
  SiDebian,
  SiUbuntu,
} from "react-icons/si";
import { PiFileCSharpBold, PiAndroidLogo } from "react-icons/pi";
import { RiFirebaseFill } from "react-icons/ri";
import { VscVscode, VscGithubInverted } from "react-icons/vsc";
import { FaJava, FaWindows } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import IconText from "../../reusable/IconText";

const CardSkills = () => {
  return (
    <>
      <div className="main-card">
        {/* <IconText icon={<></>}></IconText> */}
        <h4>Tools I Use</h4>
        <div className="card-container">
          <div className="card-item">
            <p>
              <span className="pre-heading">Languages: </span>
              <IconText icon={<FaJava />}>Java,</IconText>
              <IconText icon={<PiFileCSharpBold />}>C#,</IconText>
              <IconText icon={<GrMysql />}>SQL,</IconText>
              <IconText icon={<SiJavascript />}>JavaScript</IconText>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">Web: </span>
              <IconText icon={<SiReact />}>React,</IconText>
              <IconText icon={<SiTailwindcss />}>TailwindCSS</IconText>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">Mobile: </span>
              <IconText icon={<PiAndroidLogo />}>
                Android (Java + XML Views),
              </IconText>
              <IconText icon={<RiFirebaseFill />}>
                Firebase Realtime Database
              </IconText>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">Databases: </span>
              <IconText icon={<SiMysql />}>MySQL</IconText>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">Tools and Platforms: </span>
              <IconText icon={<VscGithubInverted />}>Git/GitHub,</IconText>
              <IconText icon={<VscVscode />}>VS Code,</IconText>
              <IconText icon={<SiAndroidstudio />}>Android Studio,</IconText>
              <IconText icon={<FaWindows />}>Windows,</IconText>
              <IconText icon={<SiLinux />}>Linux (</IconText>
              <IconText icon={<SiDebian />}>Debian,</IconText>
              <IconText icon={<SiUbuntu />}>Ubuntu)</IconText>
            </p>
          </div>
          <div className="card-item">
            <p>
              <span className="pre-heading">Currently Learning: </span>
              Web development tools (React ecosystem, Node.js backend)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkills;
