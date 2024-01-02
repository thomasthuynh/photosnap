import Story from "../components/Story";
import "../scss/_stories.scss";

import FullMoonLg from "../assets/stories/desktop/moon-of-appalacia.jpg";
import FullMoonMd from "../assets/stories/tablet/moon-of-appalacia.jpg";
import FullMoonSm from "../assets/stories/mobile/moon-of-appalacia.jpg";

import Arrow from "../assets/shared/desktop/arrow.svg";

import MountainsLg from "../assets/stories/mobile/mountains.jpg";
import MountainsSm from "../assets/stories/mobile/mountains.jpg";

import CityscapesLg from "../assets/stories/desktop/cityscapes.jpg";
import CityscapesSm from "../assets/stories/mobile/cityscapes.jpg";

import VoyageLg from "../assets/stories/desktop/18-days-voyage.jpg";
import VoyageSm from "../assets/stories/mobile/18-days-voyage.jpg";

import ArchitechturalsLg from "../assets/stories/desktop/architecturals.jpg";
import ArchitechturalsSm from "../assets/stories/mobile/architecturals.jpg";

type Props = {};

const Stories = (props: Props) => {
  return (
    <div>
      <header>
        <div className="storiesImgContainer">
          <picture>
            <source media="(min-width: 1280px)" srcSet={FullMoonLg} />
            <source media="(min-width: 768px)" srcSet={FullMoonMd} />
            <img src={FullMoonSm} alt="Hazy Full Moon of Appalachia" />
          </picture>
        </div>

        <div className="headerTextContainer">
          <div className="wrapper">
            <div className="featuredStoryText">
              <p className="lastMonth">Last Month's Featured Story</p>
              <h1>Hazy Full Moon of Appalachia</h1>
              <p className="publishDate">
                March 2nd 2020
                <span className="author"> by John Appleseed</span>
              </p>
              <p>
                The dissected plateau area, while not actually made up of
                geological mountains, is popularly called "mountains",
                especially in eastern Kentucky and West Virginia, and while the
                ridges are not high, the terrain is extremely rugged.
              </p>
              <button>
                Read the Story
                <span className="arrow">
                  <img src={Arrow} alt="/" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="storyCollection">
        <Story
          imgLg={MountainsLg}
          imgSm={MountainsSm}
          title="The Mountains"
          author="John Appleseed"
          date="April 16th 2020"
        />
        <Story
          imgLg={CityscapesLg}
          imgSm={CityscapesSm}
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          date="April 14th 2020"
        />
        <Story
          imgLg={VoyageLg}
          imgSm={VoyageSm}
          title="18 Days Voyage"
          author="Alexei Borodin"
          date="April 11th 2020"
        />
        <Story
          imgLg={ArchitechturalsLg}
          imgSm={ArchitechturalsSm}
          title="Architechurals"
          author="Samantha Brooke"
          date="April 9th 2020"
        />
      </section>
    </div>
  );
};

export default Stories;
