import React from "react";

import styles from "./Header.module.css";
import COLORS from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const { headerContainer, headerTitle, headerIcon } = styles;

const Header = () => {
  return (
    <div className={headerContainer}>
      <FontAwesomeIcon
        icon={faBasketShopping}
        color={COLORS.PRIMARY_GREEN}
        className={headerIcon}
      />
      <p className={headerTitle}>Recipe Finder</p>
    </div>
  );
};

export default Header;
