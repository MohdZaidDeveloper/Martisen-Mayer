import "../Brands/Brands.scss";


import brand1 from "../../Assets/Images/Brands/brand1.svg";
import brand2 from "../../Assets/Images/Brands/brand2.svg";
import brand3 from "../../Assets/Images/Brands/brand3.svg";
import brand4 from "../../Assets/Images/Brands/brand4.svg";
import brand5 from "../../Assets/Images/Brands/brand5.svg";
import brand6 from "../../Assets/Images/Brands/brand6.svg";
import brand7 from "../../Assets/Images/Brands/brand7.svg";
import brand8 from "../../Assets/Images/Brands/brand8.svg";
import brand9 from "../../Assets/Images/Brands/brand9.svg";
import brand10 from "../../Assets/Images/Brands/brand10.svg";

const Brands = () => {
  const Img = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand2,
    brand3,
    brand4,
    brand5,
 
  ];

  return (
    <section className="brands">
      <h2>
        From <span>startups</span> all the way through to <span>scale-ups</span>{" "}
        and <span>enterprise</span> organisations
      </h2>
      <div className="brand-img">
        {Img.map((item) => (
          <img src={item} alt="" key={item} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
