import "../scss/_feature.scss"

type Props = {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: Props) => {
  return (
    <div className="feature">
      <div className="featureImgContainer">
        <img src={icon} alt="/" />
      </div>

      <div className="featureTextContainer">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Feature