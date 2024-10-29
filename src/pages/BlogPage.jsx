import "../styles/blog_page.css";
import "../App.css";
import Footer from "../components/reusables/Footer";
import { IoMdTime } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";

function BlogPage() {
  return (
    <>
      <section className="hero_section">
        <h1>Blog & Article</h1>
        <p>
          Homepage/<span>Blog & Article</span>
        </p>
      </section>

      <section className="blog_card_section">
        <div className="headings">
          <h6>. Blog & Article</h6>
          <h3>Insights into Senior Care</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            commodi reiciendis error voluptates, Lorem ipsum nmklfjil
          </p>
        </div>
        <article>
          <div className="blog_card color_bgcard">
            <div className="img_content"></div>
            <div className="blog_text">
              <h3>
                Senior Care Technology: Innovations to Enhance Quality of Life
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <span>
                <h4>
                  <IoMdTime className="icon" /> Feburary 30, 2023
                </h4>
                <aside></aside>
                <h4>
                  <BiMessageDetail className="icon" /> 2 comment
                </h4>
              </span>
            </div>
          </div>
          <div className="blog_card color_bgcard">
            <div className="img_content"></div>
            <div className="blog_text">
              <h3>
                Senior Care Technology: Innovations to Enhance Quality of Life
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <span>
                <h4>
                  <IoMdTime className="icon" /> Feburary 30, 2023
                </h4>
                <aside></aside>
                <h4>
                  <BiMessageDetail className="icon" /> 2 comment
                </h4>
              </span>
            </div>
          </div>
          <div className="blog_card color_bgcard">
            <div className="img_content"></div>
            <div className="blog_text">
              <h3>
                Senior Care Technology: Innovations to Enhance Quality of Life
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <span>
                <h4>
                  <IoMdTime className="icon" /> Feburary 30, 2023
                </h4>
                <aside></aside>
                <h4>
                  <BiMessageDetail className="icon" /> 2 comment
                </h4>
              </span>
            </div>
          </div>
          <div className="blog_card color_bgcard">
            <div className="img_content"></div>
            <div className="blog_text">
              <h3>
                Senior Care Technology: Innovations to Enhance Quality of Life
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <span>
                <h4>
                  <IoMdTime className="icon" /> Feburary 30, 2023
                </h4>
                <aside></aside>
                <h4>
                  <BiMessageDetail className="icon" /> 2 comment
                </h4>
              </span>
            </div>
          </div>
          <div className="blog_card color_bgcard">
            <div className="img_content"></div>
            <div className="blog_text">
              <h3>
                Senior Care Technology: Innovations to Enhance Quality of Life
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <span>
                <h4>
                  <IoMdTime className="icon" /> Feburary 30, 2023
                </h4>
                <aside></aside>
                <h4>
                  <BiMessageDetail className="icon" /> 2 comment
                </h4>
              </span>
            </div>
          </div>
          <div className="blog_card color_bgcard">
            <div className="img_content"></div>
            <div className="blog_text">
              <h3>
                Senior Care Technology: Innovations to Enhance Quality of Life
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              <span>
                <h4>
                  <IoMdTime className="icon" /> Feburary 30, 2023
                </h4>
                <aside></aside>
                <h4>
                  <BiMessageDetail className="icon" /> 2 comment
                </h4>
              </span>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
