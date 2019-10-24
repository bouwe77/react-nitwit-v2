import React from "react";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import settings from "../../settings";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/190618/9e3030abcf79d598d68c87c766e2f03c.png"
            alt="nitwit"
            width="120"
          />
        </a>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.selected}>
              timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/following" activeClassName={styles.selected}>
              following
            </NavLink>
          </li>
          <li>
            <NavLink to={"/" + settings.username} activeClassName={styles.selected}>
              profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
