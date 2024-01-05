import Feature from "../ui/Feature";
import "../scss/_benefits.scss";

import Responsive from "../assets/features/desktop/responsive.svg";
import NoLimit from "../assets/features/desktop/no-limit.svg";
import Embed from "../assets/features/desktop/embed.svg";

const Benefits = () => {
  return (
    <div id="benefits" className="wrapper">
      <Feature
        icon={Responsive}
        title="100% Responsive"
        description="No matter which device you're on, our site is fully responsive and stories look beautiful on any screen."
      />
      <Feature
        icon={NoLimit}
        title="No Photo Upload Limit"
        description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />
      <Feature
        icon={Embed}
        title="Available to Embed"
        description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
      />
    </div>
  );
};

export default Benefits;
