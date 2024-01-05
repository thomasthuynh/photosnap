import Story from "../components/Story";
import "../scss/_stories.scss";
import { stories } from "../assets/storyData";
import { StoryDetails } from "../types"

import FullMoonLg from "../assets/stories/desktop/moon-of-appalacia.jpg";
import FullMoonMd from "../assets/stories/tablet/moon-of-appalacia.jpg";
import FullMoonSm from "../assets/stories/mobile/moon-of-appalacia.jpg";

import Arrow from "../assets/shared/desktop/arrow.svg";

const Stories = () => {
  return (
    <div id="stories">
      <header>
        <div className="storiesImgContainer">
          <picture>
            <source media="(min-width: 1280px)" srcSet={FullMoonLg} />
            <source media="(min-width: 768px)" srcSet={FullMoonMd} />
            <img
              src={FullMoonSm}
              alt="Hazy Full Moon of Appalachia"
              className="storiesImg"
            />
          </picture>
          <div className="storiesHeaderOverlay"></div>
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
              <p className="featuredStoryDescription">
                The dissected plateau area, while not actually made up of
                geological mountains, is popularly called "mountains",
                especially in eastern Kentucky and West Virginia, and while the
                ridges are not high, the terrain is extremely rugged.
              </p>
              <button className="invBtn">
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
        {stories.map((story: StoryDetails, index) => (
          <Story
          key={index}
          imgLg={story.imgLg}
          imgSm={story.imgSm}
          title={story.title}
          author={story.author}
          date={story.date}
        />
        ))}
      </section>
    </div>
  );
};

export default Stories;
