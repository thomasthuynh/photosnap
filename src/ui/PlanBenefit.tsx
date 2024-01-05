import "../scss/_planBenefit.scss";

import Check from "../assets/pricing/desktop/check.svg";

type Props = {
  title: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
};

const PlanBenefit = ({ title, basic, pro, business }: Props) => {
  return (
    <div className="planBenefit">
      <h4>{title}</h4>

      <div className="planBenefitTiers">
        <p className="tierLevel">
          <span className="tierLevelTitle">Basic</span>
          {basic && (
            <span className="check">
              <img src={Check} alt="Check" />
            </span>
          )}
        </p>

        <p className="tierLevel">
          <span className="tierLevelTitle">Pro</span>
          {pro && (
            <span className="check">
              <img src={Check} alt="Check" />
            </span>
          )}
        </p>

        <p className="tierLevel">
          <span className="tierLevelTitle">Business</span>
          {business && (
            <span className="check">
              <img src={Check} alt="Check" />
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default PlanBenefit;
