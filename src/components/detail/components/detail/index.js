import styles from './index.module.css';
import LinkIcon from 'assets/icons/link.svg';
import { FetchIFProject } from 'services/data/detailProject';
import parser from 'html-react-parser';

function Detail({ loading, data }) {
  const { loadingIFP, ifProject } = FetchIFProject();
  const parse2 = (text, placeholder) =>
    loadingIFP ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  const newDate = new Date(data?.date);
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const day = newDate.getDate();
  const month = months[newDate.getMonth()];
  const year = newDate.getFullYear();
  return (
    <div className={styles.root}>
      <h3 className={styles.subTitle}>
        {!loading && parse2(data?.platforms)} - {month} {day}, {year}
      </h3>
      <div className={styles.wrapTitle}>
        <h1 className={styles.title}>{!loading && parse2(data?.name)}</h1>
        <div className={styles.icon}>
          <img alt="link-icon" src={LinkIcon} />
        </div>
      </div>
      <div className={styles.wrapDetail}>
        <div className={styles.wrapDesc}>
          <span>{!loading && parse2(data?.description)}</span>
        </div>
        <div className={styles.wrapTech}>
          <h3 className={styles.subTitle}>
            {!loadingIFP && parse2(ifProject?.tool)}
          </h3>
          <div className={styles.wrapDetailTech}>
            <div className={styles.half}>
              <span>{!loadingIFP && parse2(ifProject?.design)}</span>
              <div className={styles.wrapIcon}>
                {!loading &&
                  data?.design?.map((entry, index) => (
                    <img
                      alt={entry?.name}
                      src={!loading ? entry?.image?.original : undefined}
                      key={index}
                    />
                  ))}
              </div>
            </div>
            <div className={styles.half}>
              <span>{!loadingIFP && parse2(ifProject?.development)}</span>
              <div className={styles.wrapIcon}>
                {!loading &&
                  data?.development.map((entry, index) => (
                    <img
                      alt={entry?.name}
                      src={!loading ? entry?.image?.original : undefined}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailImg}>
        <img
          alt={data?.image?.name + 'detail'}
          src={!loading ? data?.image[0]?.image?.original : undefined}
        />
      </div>
    </div>
  );
}

export default Detail;
