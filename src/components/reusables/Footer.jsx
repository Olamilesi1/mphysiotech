import "../../styles/footer.css";
import "../../App.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from "../../assets/imgs/logo_img.svg";
function Footer() {
  return (
    <footer>
      <article className="footer-cards">
        <div className="footer_card1">&nbsp;</div>
        <div className="footer_card2">
          <h6>. Contact Us</h6>
          <h3>Staying In Touch</h3>
          <p className="text-wd">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div>
            <FaLocationDot className="icon" />
            <span>
              <h4>Location</h4>
              <p>KLLG st, No.99, Pku City, ID 28289</p>
            </span>
          </div>
          <div>
            <MdEmail className="icon" />
            <span>
              <h4>Email</h4>
              <p>hello@domainsite.com</p>
            </span>
          </div>
          <div>
            <FaPhoneAlt className="icon" />
            <span>
              <h4>Phone</h4>
              <p>0761-8523-398</p>
            </span>
          </div>
        </div>
      </article>
      <article className="footer-contents">
        <div>
          <img src={Logo} alt="logo img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <h5>Follow Us</h5>
          <span>
            <FaLinkedinIn className="icon" />
            <FaTwitter className="icon" />
            <RiInstagramFill className="icon" />
            <FaFacebookF className="icon" />
          </span>
        </div>

        <ul>
          <h4>How Can Help</h4>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Homepage</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">About Us</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Services</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Blog & Article</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Testimonials</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul>
          <h4>Services</h4>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Medical Check-Up</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">In-Home Heatlh Care</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Senior Citizen Care</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Residential Care</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Personalized Care</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">End of Life Care</a>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <a href="#">Nursing Care</a>
          </li>
        </ul>
        <div>
          <h4>Newsletter</h4>
          <p>
            Subscribe our latest news & articles. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et.
          </p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button>
              <FaTelegramPlane className="icon" />
            </button>
          </form>
        </div>
      </article>
      <hr />
      <div className="copy_right">
        <p>Copyright &copy; 2024 Rometheme All Rights Reserved.</p>
        <span>
          <p>Privacy Terms & Service</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;