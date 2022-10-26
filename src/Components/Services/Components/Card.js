import "../../Services/Services.scss";
import airplane from "../../../Assets/Icons/AnimatedIcons/airplane.gif";

const Card = (props) => {
  const { image, h3, p, classname } = props;

  return (
    <div className={classname}>
      <div className="top">
        <img src={image} alt="" />
        <h3>{h3}</h3>
      </div>

      <div className="bottom">
        <p>{p}</p>
      </div>
    </div>
  );
};

export default Card;
