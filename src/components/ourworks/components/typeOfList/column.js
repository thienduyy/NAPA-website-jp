import styles from './column.module.css';
import React from 'react';
import clsx from 'clsx';
import parser from 'html-react-parser';
import { FetchInfoLeftProject } from 'services/data/general';
import appearStyles from 'components/common/AppearAnimation/appear.module.css';

function Header(props) {
  const { loadingLP, leftProject, errorLP } = FetchInfoLeftProject();
  const { entry, loading, onClick } = props;
  const parse2 = (text, placeholder) =>
    loading ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  return (
    <div className={clsx(styles.root, appearStyles.bounce)} onClick={onClick}>
      <img
        alt="detail-pic"
        src={!loading ? entry?.imageDetail?.original : undefined}
        className={clsx(styles.img, 'wow slideInLeft')}
      />
      <div className={clsx(styles.wrapInfo, 'wow slideInRight')}>
        <div className={styles.wrapField}>
          {entry?.type?.map((entryField, indexField) => (
            <div className={styles.field} key={indexField}>
              <span>{parse2(entryField?.type)}</span>
            </div>
          ))}
        </div>
        <h4 className={styles.projectName}>{parse2(entry.name)}</h4>
        <div className={styles.wrapListInfo}>
          {!loadingLP &&
            !errorLP &&
            leftProject?.name?.map((entryListInfo, indexListInfo) => (
              <div className={styles.row} key={indexListInfo}>
                <div className={styles.leftInfo}>
                  <span>{parse2(entryListInfo)}</span>
                </div>
                {/* <div className={styles.rightInfo}>
                {entry?.development?.map((entryTechList, indexTechList) => (
                  <div className={styles.wrapTech} key={indexTechList}>
                    <img
                      alt={entryTechList.name}
                      src={entryTechList.image.original}
                      className={styles.iconTech}
                    />
                    <span className={styles.techName}>
                      {entryTechList.name}
                    </span>
                  </div>
                ))}
              </div> */}
                {parse2(entryListInfo) === 'Technologies' ? (
                  <div className={styles.rightInfo}>
                    {entry?.development?.map((entryTechList, indexTechList) => (
                      <div className={styles.wrapTech} key={indexTechList}>
                        <img
                          alt={entryTechList?.name}
                          src={
                            !loading
                              ? entryTechList?.image?.original
                              : undefined
                          }
                          className={styles.iconTech}
                        />
                        <span className={styles.techName}>
                          {entryTechList?.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : parse2(entryListInfo) === 'URL' ? (
                  <div className={styles.rightInfo}>
                    <a
                      href={!loading ? entry?.url : '/'}
                      className={styles.link}
                    >
                      {entry?.url}
                    </a>
                  </div>
                ) : parse2(entryListInfo) === 'Platforms' ? (
                  <div className={styles.rightInfo}>
                    <span>{parse2(entry?.platforms)}</span>
                  </div>
                ) : parse2(entryListInfo) === 'Customer' ? (
                  <div className={styles.rightInfo}>
                    <span>{parse2(entry?.customer)}</span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
        </div>
        <div className={styles.description}>
          <span>{parse2(entry?.description)}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
