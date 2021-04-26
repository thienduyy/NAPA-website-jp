import {
  Begin,
  OurServices,
  Statistics,
  About,
  Team,
  Offices,
  Review,
  Consultation,
} from "components/home";
import { OurWorksCpn } from "components/ourworks";
import BackToTopButton from 'components/common/BackToTopButton';
import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Begin />
      <div className={styles.root}>
        <OurServices />
        <Statistics />
        <About />
        <OurWorksCpn center isRow={true} />
        <Team />
        <div className={styles.wrapOffice}>
        <Offices />
        </div>
        <Review />
        <Consultation />
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default Home;
