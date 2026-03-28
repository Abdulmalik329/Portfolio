import { AnimatePresence, motion } from "framer-motion";
import { BiBookContent } from "react-icons/bi";
import { FaHome, FaLaptop } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import ProfileImg from "../../images/profile_me.png";
import "../../styles/Navbar.css";

const navVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = ({ nav, handleNav }) => {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ width: "0" }}
        animate={
          nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
        }
        className={nav ? "navbar active" : "navbar"}
      >
        <motion.div
          initial="hidden"
          whileInView={nav ? "visible" : "hidden"}
          variants={navVariants}
          exit="hidden"
          className="navbar-container"
        >
          <div className="top-details">
            <div
              className="img__cover"
              style={{
                width: "120px",
                height: "120px",
                margin: "0 auto",
                overflow: "hidden",
                borderRadius: "50%",
              }}
            >
              <img
                src={ProfileImg}
                alt="Main"
                className="profile-pic-small"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleNav}
              to="home"
              className="profile-name"
              style={{
                cursor: "pointer",
                display: "block",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Abdulmalik Gayratov
            </Link>
          </div>

          <ul className="mid-details" style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="home"
                className="mid-links"
                onClick={handleNav}
              >
                <FaHome className="mid-icon" />
                <span className="mid-link">Home</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="about"
                className="mid-links"
                onClick={handleNav}
              >
                <FiUser className="mid-icon" />
                <span className="mid-link">About</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="skills"
                className="mid-links"
                onClick={handleNav}
              >
                <FaLaptop className="mid-icon" />
                <span className="mid-link">Skills</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="works"
                className="mid-links"
                onClick={handleNav}
              >
                <BiBookContent className="mid-icon" />
                <span className="mid-link">Projects</span>
              </Link>
            </li>
          </ul>

          <div className="copy">
            <small className="copyright">
              © Copyright ©2026 | All rights reserved
            </small>
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
