import "./Bullshit.scss";

import img1 from "../../Assets/Icons/NormalIcons/icon1.png";
import img2 from "../../Assets/Icons/NormalIcons/icon2.png";
import img3 from "../../Assets/Icons/NormalIcons/icon3.png";
import img4 from "../../Assets/Icons/NormalIcons/icon4.png";
import img5 from "../../Assets/Icons/NormalIcons/icon5.png";
import img6 from "../../Assets/Icons/NormalIcons/icon6.png";
import img7 from "../../Assets/Icons/NormalIcons/icon7.png";
import img8 from "../../Assets/Icons/NormalIcons/icon8.png";
import img9 from "../../Assets/Icons/NormalIcons/icon9.png";
import img10 from "../../Assets/Icons/NormalIcons/icon10.png";

const Bullshit = () => {
  const icons1 = [
    {
      image: img1,
      content: "Technology leadership",
    },
    {
      image: img2,
      content: "PMO",
    },
    {
      image: img3,
      content: "Design",
    },
    {
      image: img4,
      content: "Mobile Development",
    },
    {
      image: img5,
      content: "Marketing",
    },
  ];

  const icons2 = [
    {
      image: img6,
      content: "Engineering",
    },
    {
      image: img7,
      content: "Product",
    },
    {
      image: img8,
      content: "QA",
    },
    {
      image: img9,
      content: "Sales",
    },
    {
      image: img10,
      content: "Customer Success",
    },
  ];

  return (
    <section className="bullshit">
      <div className="left-section">
        <h2>No bullsh*t – just <br /> delivery</h2>
        <p>These are the areas we focus on.</p>
        <div className="list">
          <div className="item">
            {icons1.map((item) => {
              const { image, content } = item;
              return (
                <div className="list-item" key={content}>
                  <img src={image} alt="" />
                  <p>{content}</p>
                </div>
              );
            })}
          </div>
          <div className="item">
            {icons2.map((item) => {
              const { image, content } = item;
              return (
                <div className="list-item" key={content}>
                  <img src={image} alt="" />
                  <p>{content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={require("../../Assets/Images/bullshitImg.jpg")} alt="" />
      </div>
    </section>
  );
};

export default Bullshit;
