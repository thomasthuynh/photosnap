import { useState } from "react";
import BetaInvite from "../components/BetaInvite";
import "../scss/_pricing.scss";

import PricingHeroLg from "../assets/pricing/desktop/hero.jpg";
import PricingHeroMd from "../assets/pricing/tablet/hero.jpg";
import PricingHeroSm from "../assets/pricing/mobile/hero.jpg";

import Check from "../assets/pricing/desktop/check.svg";

type Props = {};

const Pricing = (props: Props) => {
  const [annualPlan, setAnnualPlan] = useState<boolean>(false);

  return (
    <div id="pricing">
      <header>
        <div className="pricingHeroImgContainer">
          <picture>
            <source media="(min-width: 1280px)" srcSet={PricingHeroLg} />
            <source media="(min-width: 768px)" srcSet={PricingHeroMd} />
            <img src={PricingHeroSm} alt="/" />
          </picture>
        </div>

        <div className="pricingTextContainer">
          <div className="pricingText">
            <div className="gradient"></div>
            <h1>Pricing</h1>
            <p>
              Create your stories, Photosnap is a platform for photographers and
              visual storytellers. It's the simple way to create and share your
              photos.
            </p>
          </div>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <div className="subscriptions">
            <div className="subscriptionType">
              <p className={annualPlan ? "" : "selectedSubscription"}>
                Monthly
              </p>
              <label className="switch">
                <input type="checkbox" checked={annualPlan} readOnly/>
                <span
                  className="slider"
                  onClick={() => setAnnualPlan(!annualPlan)}
                ></span>
              </label>
              <p className={annualPlan ? "selectedSubscription" : ""}>Yearly</p>
            </div>

            <div className="planOptions">
              {/* BASIC */}
              <div className="plan">
                <div className="planText">
                  <h2>Basic</h2>
                  <p>
                    Includes basic usage of our platform. Recommended for new
                    and aspiring photgraphers.
                  </p>
                </div>

                <div className="planPrice">
                  <p>${annualPlan ? "190.00" : "19.00"}</p>
                  <span>per {annualPlan ? "year" : "month"}</span>
                </div>

                <button>Pick Plan</button>
              </div>

              {/* PRO */}
              <div className="plan proPlan">
                <div className="gradient"></div>
                <div className="planText">
                  <h2>Pro</h2>
                  <p>
                    More advanced features available. Recommended for
                    photography veterans and professionals.
                  </p>
                </div>

                <div className="planPrice">
                  <p>${annualPlan ? "390.00" : "39.00"}</p>
                  <span>per {annualPlan ? "year" : "month"}</span>
                </div>

                <button>Pick Plan</button>
              </div>

              {/* BUSINESS */}
              <div className="plan">
                <div className="planText">
                  <h2>Business</h2>
                  <p>
                    Additional features available such as more detailed metrics. Recommended for business owners.
                  </p>
                </div>

                <div className="planPrice">
                  <p>${annualPlan ? "990.00" : "99.00"}</p>
                  <span>per {annualPlan ? "year" : "month"}</span>
                </div>

                <button>Pick Plan</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BetaInvite />
    </div>
  );
};

export default Pricing;
