/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from 'react';

import BenchPress from '../../assets/animations/bench_press.mp4';

import styles from './styles.module.css';

export default function BenchPressSection() {
  const [reps, setReps] = useState(2);
  const videoRef = useRef(null);

  function handleRepetition(event) {
    event.preventDefault();

    if (reps === 0) return;

    videoRef.current.playbackRate = 2;
    videoRef.current.play();
    setReps(reps - 1);
  }

  function handleRepetitionCount() {
    if (reps > 1) {
      return (
        <p>
          Restam
          {' '}
          {reps}
          {' '}
          repetições
        </p>
      );
    }

    if (reps > 0) {
      return (
        <p>
          Resta
          {' '}
          {reps}
          {' '}
          repetição
          {' '}
        </p>
      );
    }

    return <p>Muito bem!</p>;
  }

  function handleInformationBlock() {
    if (reps === 2) {
      return (
        <>
          <p>
            Me chamo Gabriel, tenho 23 anos e sou desenvolvedor web, apaixonado por tecnologia,
            música e bodybuilding (:
          </p>
          <p className={styles.instructions}>
            Complete a série de repetições!
          </p>
        </>
      );
    }

    if (reps === 1) {
      return (
        <>
          <p>
            Iniciei minha carreira profissional no final de 2015 como desenvolvedor PHP trabalhando
            em softwares voltados a supermercados.
          </p>
          <p>
            Nesse meio tempo comecei a me aventurar pelo JavaScript e foi quando eu decidi que era
            com isso que eu queria trabalhar.
          </p>
        </>
      );
    }

    return (
      <p>
        Hoje as principais tecnologias que utilizo são ReactJS no frontend, NodeJS no backend e
        estou iniciando no desenvolvimento mobile com React Native.
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <video ref={videoRef}>
          <source src={BenchPress} type="video/mp4" />
        </video>

        <div className={styles.controls}>
          {reps > 0
            && (
              <button className={styles.repButton} type="button" onClick={handleRepetition}>
                Fazer repetição
              </button>
            )}
          {handleRepetitionCount()}
        </div>
      </div>
      <div className={styles.info}>
        {handleInformationBlock()}
      </div>
    </div>
  );
}
