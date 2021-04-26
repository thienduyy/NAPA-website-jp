import styles from './index.module.css';
import clsx from 'clsx';

const Banner3 = () => {
  return (
    <div>
      <div className={clsx(styles.phoneImage, styles.slideInBottom)}></div>
      <div className={clsx(styles.firstContent, styles.slideInBR)}></div>
      <div className={clsx(styles.secondContent, styles.slideInTL)}></div>
    </div>
  );
};

export default Banner3;
