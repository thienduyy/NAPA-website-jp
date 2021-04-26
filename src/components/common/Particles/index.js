import styles from './index.module.css';
import React, { useEffect } from 'react';
import particlesConfig from 'particles.json';
import 'particles.js/particles';
import { useRef } from 'react';

const particlesJS = window.particlesJS;

function Particlesjs() {
  const random = useRef(Math.random().toString(16).slice(2));
  useEffect(() => {
    particlesJS(`particles-js-${random.current}`, particlesConfig, function () {
      console.log('particlesjs config loaded');
    });
  }, []);
  return <div className={styles.root} id={`particles-js-${random.current}`}></div>;
}

export default Particlesjs;
