import "./Contact.scss"

const Contact = () => {
  return (
    <section className="contact">
      <div className="form">
        <p>
          You can reach out to one of the team directly or simply fill out the
          form and we’ll get back to you asap.
        </p>

        <form>
          <p>Name</p>
          <input type="text" autoComplete="off" />
          <p>Email</p>
          <input type="email" autoComplete="off" />
          <p>Phone</p>
          <input type="tel" autoComplete="off" />
          <p>Topic</p>
          <select name="" id="">
            <option value="General Enquiry">General Enquiry</option>
            <option value="Advisory">Advisory </option>
            <option value="Recuitment">Recuitment </option>
          </select>
         <p>Message</p>
            <textarea cols="30" rows="7"></textarea>
          
          <button>Submit</button>
        </form>
      </div>

      <div className="content">
        <h2>Building out your team? Talk to us</h2>
        <p>
          To find out about the latest roles with the hottest tech organisations
          or to learn how to scale you team, reach out to us today.
        </p>

        <div className="card">
          <img src={require("../../Assets/Images/contactImg.png")} alt="" />
          <div className="text">
            <h3>
              Rob Shannon <span>Managing Director</span>
            </h3>
            <p>+353 867 938 344</p>
            <p>rob.shannon@martinsenmayer.com</p>
          </div>
        </div>
        <div className="card">
          <img src={require("../../Assets/Images/contactImg.png")} alt="" />
          <div className="text">
            <h3>
              Rob Shannon <span>Managing Director</span>
            </h3>
            <p>+353 867 938 344</p>
            <p>rob.shannon@martinsenmayer.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact