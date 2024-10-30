import "../App.css";
import Journey_card from "../components/reusables/Journey.jsx";
import Footer from "../components/reusables/Footer.jsx";
import "../styles/book_appointment.css";
import Header from "../components/reusables/Header";

function Appointment() {
  return (
    <>
      <Header />
      <section className="hero_section">
        <h1>Book Appointment</h1>
        <p>
          Homepage/<span>Book Appointment</span>
        </p>
      </section>
      <section className="form-cont">
        <div className="headings-form">
          <h6>. Our Team</h6>
          <h3>Book Appointment</h3>
          <p>
            Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
            laoreet id donec ultrices tincidunt.
          </p>
        </div>
      </section>

      <form action="#" className="appointment_form">
        <div className="inputHol">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="Services" />
        </div>
        <div>
          <textarea placeholder="Message"></textarea>
        </div>
        <p>
          <input type="checkbox" name="check" id="" /> Emile Subscribe
        </p>
      </form>

      <Journey_card />

      <Footer />
    </>
  );
}

export default Appointment;
