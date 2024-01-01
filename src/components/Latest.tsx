import Story from "./Story";
import "../scss/_latest.scss";

import MountainsLg from "../assets/stories/mobile/mountains.jpg";
import MountainsSm from "../assets/stories/mobile/mountains.jpg";

import CityscapesLg from "../assets/stories/desktop/cityscapes.jpg";
import CityscapesSm from "../assets/stories/mobile/cityscapes.jpg";

import VoyageLg from "../assets/stories/desktop/18-days-voyage.jpg";
import VoyageSm from "../assets/stories/mobile/18-days-voyage.jpg";

import ArchitechturalsLg from "../assets/stories/desktop/architecturals.jpg";
import ArchitechturalsSm from "../assets/stories/mobile/architecturals.jpg";

const Latest = () => {
  return (
    <section id="featured">
      <Story
        imgLg={MountainsLg}
        imgSm={MountainsSm}
        title="The Mountains"
        author="John Appleseed"
      />
      <Story
        imgLg={CityscapesLg}
        imgSm={CityscapesSm}
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
      />
      <Story
        imgLg={VoyageLg}
        imgSm={VoyageSm}
        title="18 Days Voyage"
        author="Alexei Borodin"
      />
      <Story
        imgLg={ArchitechturalsLg}
        imgSm={ArchitechturalsSm}
        title="Architechurals"
        author="Samantha Brooke"
      />
    </section>
  );
};

export default Latest;
