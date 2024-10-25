import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
function teamCard() {
  return (
    <section>
      <figure></figure>
      <div>
        <span>
          <FaLinkedinIn />
          <FaTwitter />
          <RiInstagramFill />
        </span>
        <h3>Emma johnson</h3>
        <p>Senior Care Development</p>
      </div>
    </section>
  );
}

export default teamCard;
