import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutLink() {
  return (
    <div className="absolute right-5 bottom-5">
      <Link to="/about">
        <FaQuestion color="white" size={30} />
      </Link>
    </div>
  );
}

export default AboutLink;
