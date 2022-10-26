import "../About/About.scss";

const About = () => {
  return (
    <>
      <section className="about">
        <img
          src={require("../../Assets/Images/AboutImg1.jpg")}
          alt=""
          className="left-img"
        />
        <div className="right-section">
          <div className="content">
            <h2>
              Born in Ireland <br /> – global reach
            </h2>
            <p>
              We love getting to know founders and investors to really
              understand what makes a business tick. We work with exceptional
              technology companies who don’t settle for mediocrity.
            </p>
            <p>
              Our team have extensive networks and are active within the tech
              community hosting multiple podcast series, meetups and events.
              Some events are less serious than others!
            </p>
            <button>Meet the team</button>
          </div>

          <img src={require("../../Assets/Images/AboutImg2.jpg")} alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
