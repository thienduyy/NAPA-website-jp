import styles from './index.module.css';
import React from 'react';
import Button from '../Button';
import clsx from 'clsx';
const BackToTopButton = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const scrollEvent = () => {
      const offset = window.pageYOffset;

      if (offset > 200 && !show) {
        setShow(true);
      }

      if (offset === 0) {
        setShow(false);
      }
    };
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [show]);

  const handleClickGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={handleClickGoToTop}
      className={clsx(styles.root, { [styles.reveal]: show })}
    >
      <div className={styles.arrow}></div>
    </Button>
  );
};

export default BackToTopButton;
