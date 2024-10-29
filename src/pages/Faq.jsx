import "../App.css";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import Line from "../assets/imgs/Line2.png";
import Logoimg1 from "../assets/imgs/logoipsum-1.png";
import Logoimg2 from "../assets/imgs/logoipsum-2.png";
import Logoimg3 from "../assets/imgs/logoipsum-3.png";
import Logoimg4 from "../assets/imgs/logoipsum-4.png";
import Logoimg5 from "../assets/imgs/logoipsum-5.png";
import Footer from "../components/reusables/Footer.jsx";
import "../styles/faq.css";
function Faq() {
  return (
    <>
      <section className="hero_section">
        <h1>Frequently Asked Questions</h1>
        <p>
          Homepage/<span>FAQ</span>
        </p>
      </section>
      <section className="section-cover">
        <div className="faq_headings">
          <h6>. FAQ</h6>
          <h3>Staying In Touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <section className="faq_ques">
          <article>
            <div className="faq_ques_item">
              <CiCircleMinus className="icon" />
              <span>
                <h5>How long does the consultation process take?</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </span>
            </div>
            <figure>
              <img src={Line} alt="" />
            </figure>
            <div className="faq_ques_text">
              <CiCirclePlus className="icon" />
              <h5>Can services be customized to individual needs?</h5>
            </div>
            <figure>
              <img src={Line} alt="" />
            </figure>
            <div className="faq_ques_text">
              <CiCirclePlus className="icon" />
              <h5>How can I find the right senior living option?</h5>
            </div>
            <figure>
              <img src={Line} alt="" />
            </figure>
            <div className="faq_ques_text">
              <CiCirclePlus className="icon" />
              <h5>How can feedback or testimonials be provided?</h5>
            </div>
          </article>

          <article>
            <div className="faq_ques_item">
              <CiCircleMinus className="icon" />
              <span>
                <h5>How long does the consultation process take?</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </span>
            </div>
            <figure>
              <img src={Line} alt="" />
            </figure>
            <div className="faq_ques_text">
              <CiCirclePlus className="icon" />
              <h5>Can services be customized to individual needs?</h5>
            </div>
            <figure>
              <img src={Line} alt="" />
            </figure>
            <div className="faq_ques_text">
              <CiCirclePlus className="icon" />
              <h5>How can I find the right senior living option?</h5>
            </div>
            <figure>
              <img src={Line} alt="" />
            </figure>
            <div className="faq_ques_text">
              <CiCirclePlus className="icon" />
              <h5>How can feedback or testimonials be provided?</h5>
            </div>
          </article>
        </section>

        <section className="trusted_sec">
          <article></article>
          <div>
            <h3>237K</h3>
            <h6>Trusted Center</h6>
          </div>
          <section className="page_link2">
            <h5>Trusted By The 1000+ Modern Teams And Companies</h5>
            <figure>
              <img src={Logoimg1} alt="logoisum" />
              <img src={Logoimg2} alt="logoisum" />
              <img src={Logoimg3} alt="logoisum" />
              <img src={Logoimg4} alt="logoisum" />
              <img src={Logoimg5} alt="logoisum" />
            </figure>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Faq;
