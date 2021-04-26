import styles from './index.module.css';
import clsx from 'clsx';
import { FetchIFProject } from 'services/data/detailProject';
import parser from 'html-react-parser';

function Member({ loading, data }) {
  const { loadingIFP, ifProject } = FetchIFProject();
  const parse2 = (text, placeholder) =>
    loadingIFP ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  return (
    <div className={styles.root}>
      <div className={styles.half}>
        <h1 className={styles.title}>
          {!loadingIFP && parse2(ifProject?.team_member_title)}
        </h1>
        <span className={styles.subTitle}>
          {!loadingIFP && parse2(ifProject?.team_member_description)}
        </span>
      </div>
      <div className={styles.half}>
        <div className={styles.halfChild}>
          <span>{!loadingIFP && parse2(ifProject?.development)}</span>
          <div className={styles.listTeam}>
            {!loading &&
              data?.projectMemberDev?.map((entry, index) => (
                <div className={styles.item} key={index}>
                  <img
                    alt={entry?.name}
                    src={!loading ? entry?.image?.original : undefined}
                  />
                  <div className={styles.wrapName}>
                    <h3>{entry?.name}</h3>
                    <div className={styles.wrapSkills}>
                      <span>{entry?.role}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className={clsx(styles.halfChild, styles.mt30)}>
          <span>{!loadingIFP && parse2(ifProject?.design)}</span>
          <div className={styles.listTeam}>
            {!loading && data?.projectMemberDesign?.map((entry, index) => (
              <div className={styles.item} key={index}>
                <img alt={entry.name} src={!loading ? entry?.image?.original : undefined} />
                <div className={styles.wrapName}>
                  <h3>{entry?.name}</h3>
                  <div className={styles.wrapSkills}>
                    <span >
                      {entry?.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Member;
