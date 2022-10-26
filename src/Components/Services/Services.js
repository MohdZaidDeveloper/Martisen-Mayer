import "../Services/Services.scss";
import Card from "./Components/Card";

import airplane from "../../Assets/Icons/AnimatedIcons/airplane.gif";
import book from "../../Assets/Icons/AnimatedIcons/book.gif";
import lineChart from "../../Assets/Icons/AnimatedIcons/line-chart.gif";
import message from "../../Assets/Icons/AnimatedIcons/message.gif";
import rocket from "../../Assets/Icons/AnimatedIcons/rocket.gif";
import truck from "../../Assets/Icons/AnimatedIcons/truck.gif";

const cards = [
  {
    image: airplane,
    h3: "Permanent & Contract recruitment",
    p: " Need a job filled and we’ll fill it with a permanent resource or a flexible contract resource",
    classname: "card",
  },
  {
    image: book,
    h3: "Permanent & Contract recruitment",
    p: " Need a job filled and we’ll fill it with a permanent resource or a flexible contract resource",
    classname: "card",
  },
  {
    image: lineChart,
    h3: "Permanent & Contract recruitment",
    p: " Need a job filled and we’ll fill it with a permanent resource or a flexible contract resource",
    classname: "card",
  },
  {
    image: message,
    h3: "Permanent & Contract recruitment",
    p: " Need a job filled and we’ll fill it with a permanent resource or a flexible contract resource",
    classname: "card",
  },
  {
    image: rocket,
    h3: "Permanent & Contract recruitment",
    p: " Need a job filled and we’ll fill it with a permanent resource or a flexible contract resource",
    classname: "card",
  },
  {
    image: truck,
    h3: "Permanent & Contract recruitment",
    p: " Need a job filled and we’ll fill it with a permanent resource or a flexible contract resource",
    classname: "card-reverse",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="content">
        <h2>Product & Services</h2>
        <p>
          Our team have extensive networks and are active within the tech
          community hosting <br /> multiple podcast series,meetups and events.
          Some events are less serious than others!
        </p>
      </div>

      <div className="cards">
       {
        cards.map((item)=>{
          const {image, h3, p, classname}=  item;
          return <Card image={image} h3={h3} p={p} classname={classname} />;
         
        })
       }
      </div>
    </section>
  );
}

export default Services