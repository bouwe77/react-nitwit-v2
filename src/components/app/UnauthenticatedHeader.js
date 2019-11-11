import React from "react";

import styles from "./Header.module.css";

export default () => {
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
    </div>
  );
};
