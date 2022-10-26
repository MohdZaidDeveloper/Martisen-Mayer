import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={require("../../Assets/Icons/Logo/logo.png")} alt="" />
        </div>
        <div className="menu">
            <p>Who We Are</p>
            <p>Services</p>
            <p>Media</p>
            <p>Jobs</p>
            <p>Contact</p>
        </div>
    </nav>
  )
}

export default Navbar