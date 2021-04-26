import { OurWorksCpn, Team, Consultation } from 'components/ourworks';
import styles from './index.module.css';

const OurWorks = () => {
  return (
    <div className={styles.root}>
      <OurWorksCpn isRow={false} />
      <Team />
      <div className={styles.wrapConsultation}>
        <Consultation />
      </div>
    </div>
  );
};

export default OurWorks;
