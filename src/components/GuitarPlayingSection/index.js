import React from 'react';

import styles from './styles.module.css';

import GuitarPlaying from '../../assets/animations/playing_guitar.gif';

function GuitarPlayingSection() {
  return (
    <div className={styles.container}>
      <img src={GuitarPlaying} alt="Guitar playing gif" />

      <div className={styles.information}>
        <p>Um dos meus hobbies é a música.</p>
        <p>
          Desde muito pequeno amo música, ao longo dos anos aprendi diversos instrumentos e canto,
          sendo violão e guitarra meus favoritos.
        </p>
      </div>
    </div>
  );
}

export default GuitarPlayingSection;
