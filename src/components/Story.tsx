import "../scss/_story.scss";

import Arrow from "../assets/shared/desktop/arrow.svg";

type Props = {
  imgLg: string;
  imgSm: string;
  title: string;
  author: string;
};

const Story = ({ imgLg, imgSm, title, author }: Props) => {
  return (
    <div className="story">
      <div className="overlay"></div>
      <div className="storyImgContainer">
        <picture>
          <source media="(min-width: 640px)" srcSet={imgLg} />
          <img src={imgSm} alt={title} />
        </picture>
      </div>

      <div className="storyTextContainer">
        <div className="storyText">
          <h3>{title}</h3>
          <p>by {author}</p>
          <div className="storyButtonContainer">
            <button>
              Read Story
              <span>
                <img src={Arrow} alt="/" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;