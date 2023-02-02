import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHouse, faBriefcase, faUser, faKitchenSet, faServer, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaBlog } from "react-icons/fa";

const Navbar = ({ isOpen, toggle }) => {
  const [show, setShow] = useState(false);
  const menuItem = [
    {
      path: "Home",
      name: "Home",
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      path: "Works",
      name: "Works",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      path: "About",
      name: "About",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      path: "Skills",
      name: "Skills",
      icon: <FontAwesomeIcon icon={faKitchenSet} />,
    },
    {
      path: "Services",
      name: "Services",
      icon: <FontAwesomeIcon icon={faServer} />,
    },

    {
      path: "Contact",
      name: "Contact",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      path: "Blog",
      name: "Blog",
      icon: <FaBlog />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="bars" style={{ display: "none" }}>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <div className="n-list" style={{ display: show ? "block" : "none" }}>
        {menuItem.map((item, index) => (
          <Link
            key={index}
            spy={true}
            to={item.path}
            smooth={true}
            className="link"
            activeClassName="active"
          >
            <div className="icon" style={{ marginLeft: isOpen ? "" : "-10px" }}>
              {item.icon}
            </div>

            <div
              className="link_text"
              style={{ display: isOpen ? "" : "none", transition: "0.1s" }}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;