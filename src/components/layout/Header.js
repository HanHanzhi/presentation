import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import COLORS from "../../constants/colors";

const Header = () => {
  const { headerContainer, headerTitle, headerIcon } = styles;

  return (
    <div className={headerContainer}>
      <FontAwesomeIcon
        icon={faBasketShopping}
        color={COLORS.rfGREEN}
        className={headerIcon}
      />
      <p className={headerTitle}>Recipe Finder</p>
    </div>
  );
};

export default Header;
