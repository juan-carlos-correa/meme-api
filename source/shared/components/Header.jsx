import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Meme Api</h1>

      <nav role="navigation" className={styles.navigation}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <a
          className={styles.link}
          href="https://github.com/juan-carlos-correa/meme-api"
          target="_blank"
        >
          Source Code
        </a>
      </nav>
    </header>
  );
}

export default Header;
