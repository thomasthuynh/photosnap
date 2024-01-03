import Story from "./Story";
import "../scss/_latest.scss";
import { stories } from "../assets/storyData";
import { StoryDetails } from "../types";

const Latest = () => {
  return (
    <section id="featured">
       {stories.slice(0, 4).map((story: StoryDetails, index) => (
          <Story
          key={index}
          imgLg={story.imgLg}
          imgSm={story.imgSm}
          title={story.title}
          author={story.author}
        />
        ))}
    </section>
  );
};

export default Latest;
