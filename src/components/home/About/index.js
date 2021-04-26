import styles from './about.module.css';
import { FetchIntroCompany } from 'services/data/home';
import parser from 'html-react-parser';
import LazyLoadImage from 'components/common/LazyLoadImage';

const About = () => {
  const { loadingIC, introCom } = FetchIntroCompany();
  const parse2 = (text, placeholder) =>
    loadingIC ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  return (
    <div className={styles.root} id="about-section">
      <div className={styles.info}>
        <h1>{!loadingIC && parse2(introCom?.intro_company_title?.language)}</h1>
        <p>
          {!loadingIC && parse2(introCom?.intro_company_subtitle?.language)}
        </p>
        {/* <Button className={styles.btn}>Learn more</Button> */}
      </div>
      {/* <img className={styles.img} src={!loadingIC ? introCom?.intro_company_title?.image?.original : undefined} alt="img-intro" /> */}
      <LazyLoadImage
        src={
          !loadingIC
            ? introCom?.intro_company_title?.image?.original
            : undefined
        }
        alt="img-intro"
        className={styles.img}
      />
    </div>
  );
};

export default About;
