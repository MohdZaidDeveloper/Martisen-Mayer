import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="upper-section">
        <img src={require("../../Assets/Icons/Logo/footerLogo.png")} alt="" />

        <div className="content">
          <div className="links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Media</a>
          </div>
          <div className="links">
            <a href="">Who we are</a>
            <a href="">Jobs</a>
            <a href="">Testimonials</a>
          </div>
          <p>3 Leeson Cl, Dublin 2, D02 TX88, Ireland</p>
        </div>
      </div>

      <div className="lower-section">
        <p>© 2022 - Martinsen Mayer</p>
        <p>PRIVACY POLICY</p>
      </div>
    </footer>
  );
};

export default Footer;
