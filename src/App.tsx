import CardHero from "./components/ui/cards/CardHero";
import "./components/ui/navigation/MainNavigation";
import MainNavigation from "./components/ui/navigation/MainNavigation";
import SectionHero from "./components/reusable/Section";
import { BackgroundBeams } from "./components/ui/backgrounds/BackgroundBeams";
import CardSkills from "./components/ui/cards/CardSkills";
import CardAboutMe from "./components/ui/cards/CardAboutMe";
import CardContacts from "./components/ui/cards/CardContacts";
import CardProjects from "./components/ui/cards/CardProjects";

function App() {
  return (
    <>
      <BackgroundBeams className="background-beams"></BackgroundBeams>

      <MainNavigation></MainNavigation>
      <SectionHero idName="home">
        <CardHero></CardHero>
      </SectionHero>
      <SectionHero idName="skills">
        <CardSkills></CardSkills>
      </SectionHero>
      <SectionHero idName="projects">
        <CardProjects></CardProjects>
      </SectionHero>
      <SectionHero idName="about-me">
        <CardAboutMe></CardAboutMe>
      </SectionHero>
      <SectionHero idName="contacts">
        <CardContacts></CardContacts>
      </SectionHero>
    </>
  );
}

export default App;
