import "../scss/_story.scss";

import Arrow from "../assets/shared/desktop/arrow.svg";

type Props = {
  imgLg: string;
  imgSm: string;
  title: string;
  author: string;
  date?: string
};

const Story = ({ imgLg, imgSm, title, author, date }: Props) => {
  return (
    <div className="story">
      <div className="storyOverlay"></div>
      <div className="storyImgContainer">
        <picture>
          <source media="(min-width: 640px)" srcSet={imgLg} />
          <img src={imgSm} alt={title} />
        </picture>
      </div>

      <div className="storyTextContainer">
        <div className="storyText">
          <p className="date">{date}</p>
          <h3>{title}</h3>
          <p className="author">by {author}</p>
          <div className="storyButtonContainer">
            <button>
              Read Story
              <span className="arrow">
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
