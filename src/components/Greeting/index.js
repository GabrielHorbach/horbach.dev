import React from 'react';

import styles from './styles.module.css';

export default function Greeting() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alô!</h1>
    </div>
  );
}
