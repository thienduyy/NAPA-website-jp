import styles from './backgroundMobile.module.css';

import BgOffices from 'assets/images/home/offices/bg_office.svg';
const BackgroundMobile = ({ currentSlide }) => {
  return (
    <div className={styles.root}>
      <img alt='Background' src={BgOffices} className={styles.background} />
      {currentSlide === 0 && (
        <>
          <div className={styles.VNDot}></div>
          <div className={styles.AUDot}></div>
          <div className={styles.USDot}></div>
          <div className={styles.JPDot}></div>
        </>
      )}
      {currentSlide === 1 && <div className={styles.VNDot}></div>}
      {currentSlide === 2 && <div className={styles.AUDot}></div>}
      {currentSlide === 3 && <div className={styles.USDot}></div>}
      {currentSlide === 4 && <div className={styles.JPDot}></div>}
    </div>
  );
};

export default BackgroundMobile;
