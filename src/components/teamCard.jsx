import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import "../App.css";
function teamCard() {
  return (
    <section className="team_card">
      <figure></figure>
      <div>
        <span>
          <FaLinkedinIn className="icon" />
          <FaTwitter className="icon" />
          <RiInstagramFill className="icon" />
        </span>
        <h5>Emma johnson</h5>
        <h6>Senior Care Development</h6>
      </div>
    </section>
  );
}

export default teamCard;
