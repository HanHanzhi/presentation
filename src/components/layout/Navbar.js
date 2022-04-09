import React from "react";

import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBoxArchive } from "@fortawesome/free-solid-svg-icons";

const { navContainer, navIcon, navBtnEnabled, navBtnDisabled } = styles;

const Navbar = ({ isHomeSelected, setIsHomeSelected }) => {
  return (
    <div className={navContainer}>
      <button
        className={isHomeSelected ? navBtnEnabled : navBtnDisabled}
        onClick={() => setIsHomeSelected(true)}
      >
        <FontAwesomeIcon icon={faHouse} className={navIcon} />
      </button>
      <button
        className={isHomeSelected ? navBtnDisabled : navBtnEnabled}
        onClick={() => setIsHomeSelected(false)}
      >
        <FontAwesomeIcon icon={faBoxArchive} className={navIcon} />
      </button>
    </div>
  );
};

export default Navbar;
