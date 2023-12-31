import "../scss/_main.scss";

import CreateAndShareLg from "../assets/home/desktop/create-and-share.jpg";
import CreateAndShareMd from "../assets/home/tablet/create-and-share.jpg";
import CreateAndShareSm from "../assets/home/mobile/create-and-share.jpg";

import BeautifulStoresLg from "../assets/home/desktop/beautiful-stories.jpg";
import BeautifulStoriesMd from "../assets/home/tablet/beautiful-stories.jpg";
import BeautifulStoriesSm from "../assets/home/mobile/beautiful-stories.jpg";

import DesignedForEveryoneLg from "../assets/home/desktop/designed-for-everyone.jpg";
import DesignedForEveryoneMd from "../assets/home/tablet/designed-for-everyone.jpg";
import DesignedFromEveryoneSm from "../assets/home/mobile/designed-for-everyone.jpg";

import Arrow from "../assets/shared/desktop/arrow.svg";

type Props = {};

const Main = (props: Props) => {
  return (
    <div id="main">
      {/* CREATE AND SHARE */}
      <div className="createAndShare mainStory">
        <div className="createAndShareImgContainer mainImgContainer">
          <picture>
            <source media="(min-width: 1280px)" srcSet={CreateAndShareLg} />
            <source media="(min-width: 768px)" srcSet={CreateAndShareMd} />
            <img src={CreateAndShareSm} alt="/" />
          </picture>
        </div>

        <div className="createAndShareTextContainer mainTextContainer">
          <div className="wrapper">
            <div className="createAndShareText mainText">
              <div className="gradient"></div>
              <h1>Create and Share Your Photo Stories.</h1>
              <p>
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <button>
                Get an Invite
                <span className="arrow">
                  <img src={Arrow} alt="/" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BEAUTIFUL STORIES */}
      <div className="beautifulStories mainStory">
        <div className="beautifulStoriesImgContainer mainImgContainer">
          <picture>
            <source media="(min-width: 1280px)" srcSet={BeautifulStoresLg} />
            <source media="(min-width: 768px)" srcSet={BeautifulStoriesMd} />
            <img src={BeautifulStoriesSm} alt="/" />
          </picture>
        </div>

        <div className="beautifulStoriesTextContainer mainTextContainer">
          <div className="wrapper">
            <div className="beautifulStoriesText mainText">
              <h1>Beautiful Stories Every Time</h1>
              <p>
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
              <button>
                View the Stories
                <span className="arrow">
                  <img src={Arrow} alt="/" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESIGNED FOR EVERYONE */}
      <div className="designedForEveryone mainStory">
        <div className="designedForEveryoneImgContainer mainImgContainer">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={DesignedForEveryoneLg}
            />
            <source media="(min-width: 768px)" srcSet={DesignedForEveryoneMd} />
            <img src={DesignedFromEveryoneSm} alt="/" />
          </picture>
        </div>

        <div className="designedForEveryoneTextContainer mainTextContainer">
          <div className="wrapper">
            <div className="designedForEveryoneText mainText">
              <h1>Designed for Everyone</h1>
              <p>
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
              <button>
                View the Stories
                <span className="arrow">
                  <img src={Arrow} alt="/" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
