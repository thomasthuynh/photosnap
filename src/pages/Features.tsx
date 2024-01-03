import Feature from "../ui/Feature";
import BetaInvite from "../components/BetaInvite";
import "../scss/_features.scss";

import FeaturesHeroLg from "../assets/features/desktop/hero.jpg";
import FeaturesHeroMd from "../assets/features/tablet/hero.jpg";
import FeaturesHeroSm from "../assets/features/mobile/hero.jpg";

import Responsive from "../assets/features/desktop/responsive.svg";
import NoLimit from "../assets/features/desktop/no-limit.svg";
import Embed from "../assets/features/desktop/embed.svg";
import CustomDomain from "../assets/features/desktop/custom-domain.svg";
import BoostExposure from "../assets/features/desktop/boost-exposure.svg";
import DragDrop from "../assets/features/desktop/drag-drop.svg";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="features">
      <header>
        <div className="featuresHeroImgContainer">
          <picture>
            <source media="(min-width: 1280px)" srcSet={FeaturesHeroLg} />
            <source media="(min-width: 768px)" srcSet={FeaturesHeroMd} />
            <img src={FeaturesHeroSm} alt="/" />
          </picture>
        </div>

        <div className="featuresTextContainer">
          {/* <div className="wrapper"> */}
            <div className="featuresText">
              <div className="gradient"></div>
              <h1>Features</h1>
              <p>
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photgraphers who wanted to
                share their stories.
              </p>
            </div>
          {/* </div> */}
        </div>
      </header>

      <div className="featuresList wrapper">
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
        <Feature
          icon={CustomDomain}
          title="Custom Domain"
          description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
        />
        <Feature
          icon={BoostExposure}
          title="Boost Your Exposure"
          description="Users that viewed your story or gallery can easily get notified of new nad featured stories with our built in mailing list."
        />
        <Feature
          icon={DragDrop}
          title="Drag & Drop Image"
          description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
        />
      </div>

      <BetaInvite />
    </div>
  );
};

export default Features;
