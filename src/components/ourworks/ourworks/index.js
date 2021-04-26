import styles from './index.module.css';
import Column from '../components/typeOfList/column';
import Row from '../components/typeOfList/row';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  FetchIntroProject,
  FetchProject,
  FetchProjectType
} from 'services/data/general';
import parser from 'html-react-parser';
import { useHistory } from 'react-router-dom';

function OurWork(props) {
  const [activeTech, setActiveTech] = useState(0);
  const { loadingIP, introProject } = FetchIntroProject();
  const { loadingType, type, errorType } = FetchProjectType();
  const { loadingProject, projects, errorProject } = FetchProject('');
  const parse2 = (text, placeholder) =>
    loadingProject ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  // return (
  //   <div className={styles.wrapOurWorks}>
  //     <h2 className={clsx(styles.title, 'wow slideInDown')} data-wow-delay='0.75s'>{!loadingIP && parse2(introProject.intro_project_title)}</h2>
  //     <h5 className={clsx(styles.subTitle, 'wow slideInDown')} data-wow-delay='0.5s'>
  //       {parse2(introProject.intro_project_subtitle)}
  const { center, isRow } = props;
  const history = useHistory();
  function filterProjectByType(type, index, projects) {
    if (!type || !projects) return [];
    const currentType = type.types[index];
    const projectsTest = [...projects.project];
    const results = projectsTest.filter((p) =>
      p.type.some((t) => t.name === currentType.name)
    );
    return results;
  }
  return (
    <div className={styles.wrapOurWorks} id="projects-section">
      <div className={clsx(styles.wrapText, center && styles.wrapTextCenter)}>
        <h2
          className={clsx(styles.title, 'wow slideInDown')}
          data-wow-delay="0.75s"
        >
          {!loadingIP && parse2(introProject?.intro_project_title)}
        </h2>
        <h5
          className={clsx(styles.subTitle, 'wow slideInDown')}
          data-wow-delay="0.5s"
        >
          {parse2(introProject?.intro_project_subtitle)}
        </h5>
        <div className={styles.wrapTech}>
          {!loadingType &&
            !errorType &&
            type.types.map((entry, index) => (
              <div
                key={index}
                className={clsx(
                  activeTech === index
                    ? styles.techItemActive
                    : styles.techItem,
                  'wow slideInDown'
                )}
                data-wow-delay="0.25s"
                onClick={() => setActiveTech(index)}
              >
                <span>{parse2(entry?.type)}</span>
              </div>
            ))}
        </div>
      </div>
      {/* <div className={styles.wrapProject}>
        {!loadingProject && !errorProject && projects.project.map((entry, index) => (
          <Project entry={entry} index={index} key={index} loading={loadingProject} />
        ))}
      </div> */}
      {/* {!loadingProject &&
        filterProjectByType(type, activeTech, projects).map((it, key) => (
          <div key={key}>{1}</div>
        ))} */}
      {isRow ? (
        <div className={styles.wrapProjectRow}>
          {!loadingProject &&
            !errorProject &&
            filterProjectByType.length &&
            filterProjectByType(
              type,
              activeTech,
              projects
            ).map((entry, index) => (
              <Row
                entry={entry}
                key={Date.now() + index}
                loading={loadingProject}
                onClick={() => history.push(`/projects/detail/${entry.id}`)}
              />
            ))}
        </div>
      ) : (
        <div className={styles.wrapProjectColumn}>
          {!loadingProject &&
            !errorProject &&
            filterProjectByType(
              type,
              activeTech,
              projects
            ).map((entry, index) => (
              <Column
                entry={entry}
                key={Date.now() + index}
                loading={loadingProject}
                onClick={() => history.push(`/projects/detail/${entry.id}`)}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default OurWork;
