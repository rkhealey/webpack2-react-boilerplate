import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const Header = () => (
  <div className={styles.header}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);

export default Header;
