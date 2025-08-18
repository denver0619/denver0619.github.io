import CardHero from "./components/ui/cards/CardHero";
import "./components/ui/navigation/MainNavigation";
import MainNavigation from "./components/ui/navigation/MainNavigation";
import SectionHero from "./components/reusable/Section";
import { BackgroundBeams } from "./components/ui/backgrounds/BackgroundBeams";

function App() {
  return (
    <>
      <BackgroundBeams className="background-beams"></BackgroundBeams>

      <MainNavigation></MainNavigation>
      <SectionHero idName="home">
        <CardHero></CardHero>
      </SectionHero>
      <SectionHero idName="skills">
        <CardHero></CardHero>
      </SectionHero>
      <SectionHero idName="projects">
        <CardHero></CardHero>
      </SectionHero>
      <SectionHero idName="about-me">
        <CardHero></CardHero>
      </SectionHero>
      <SectionHero idName="contacts">
        <CardHero></CardHero>
      </SectionHero>
    </>
  );
}

export default App;
