import styles from './index.module.css';
import Row from 'components/ourworks/components/typeOfList/row';
import { useHistory } from 'react-router-dom';
import { FetchIFProject } from 'services/data/detailProject';
import parser from 'html-react-parser';
import { FetchProject } from 'services/data/general';

function RelatedProject(props) {
  const { loadingIFP, ifProject } = FetchIFProject();
  const { loadingProject, projects } = FetchProject('');
  const parse2 = (text, placeholder) =>
    loadingProject ? placeholder ?? '' : parser(text?.['jp'] ?? '');
  const history = useHistory();
  const id = props.match.params.id;
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        {!loadingIFP && parse2(ifProject?.related_project)}
      </h1>
      <div className={styles.wrapProjectRow}>
        {!loadingProject &&
          projects?.project?.map(
            (entry, index) =>
              entry.id != id && (
                <Row
                  entry={entry}
                  index={index}
                  key={index}
                  onClick={() => history.push(`/projects/detail/${entry.id}`)}
                />
              )
          )}
      </div>
    </div>
  );
}

export default RelatedProject;
