import { useQuery } from '@apollo/client';
import { zipToObject } from 'helper/converter';
import generalQueries from 'query/general';

// 1.Fetch data navbar (menu)
const FetchNavbar = () => {
  const { loading: loadingNav, data: navbar, error: errorNav } = useQuery(
    generalQueries.GET_PAGES
  );
  // const navbar = !loadingNav && !errorNav && zipToObject(data, "name", "language");
  return { loadingNav, navbar, errorNav };
};

// 2. Fetch data get all Service
const FetchAllService = () => {
  const {
    loading: loadingService,
    data: services,
    error: errorService
  } = useQuery(generalQueries.GET_ALL_SERVICE);
  return { loadingService, services, errorService };
};

// const FetchFooter = () => {
//     const { loading: loadingFooter, data, error: errorFooter } = useQuery(generalQueries.GET_LAYOUT, {
//         variables: {
//             id: "5fa63b8734289400227a85bd",
//         }
//     });
//     const footer = !loadingFooter && !errorFooter && zipToObject(data.layout.property);
//     return { loadingFooter, footer, errorFooter };
// };

const FetchProject = (type) => {
  const {
    loading: loadingProject,
    data: projects,
    error: errorProject
  } = useQuery(generalQueries.GET_ALL_PROJECT, {
    variables: {
      type: type
    }
  });
  return { loadingProject, projects, errorProject };
};

const FetchProjectType = () => {
  const { loading: loadingType, data: type, error: errorType } = useQuery(
    generalQueries.GET_PROJECT_TYPE
  );

  return { loadingType, type, errorType };
};

const FetchIntroProject = () => {
  const { loading: loadingIP, data, error: errorIP } = useQuery(
    generalQueries.GET_LAYOUT,
    {
      variables: {
        id: '6016b97c1f77b40024081b4d'
      }
    }
  );
  const introProject =
    !loadingIP &&
    !errorIP &&
    zipToObject(data.layout.property, 'name', 'language');
  return { loadingIP, introProject, errorIP };
};

const FetchIntroEmail = () => {
  const { loading: loadingEmail, data, error: errorEmail } = useQuery(
    generalQueries.GET_LAYOUT,
    {
      variables: {
        id: '6016be031f77b40024081b74'
      }
    }
  );
  const introEmail =
    !loadingEmail &&
    !errorEmail &&
    zipToObject(data.layout.property, 'name', 'language');
  return { loadingEmail, introEmail, errorEmail };
};

const FetchInfoLeftProject = () => {
  const { loading: loadingLP, data, error: errorLP } = useQuery(
    generalQueries.GET_LAYOUT,
    {
      variables: {
        id: '601b70310c262e0023f8e380'
      }
    }
  );
  const leftProject =
    !loadingLP &&
    !errorLP &&
    zipToObject(data.layout.property, 'name', 'language');
  return { loadingLP, leftProject, errorLP };
};

export {
  FetchNavbar,
  FetchAllService,
  // FetchFooter,
  FetchProject,
  FetchProjectType,
  FetchIntroProject,
  FetchIntroEmail,
  FetchInfoLeftProject
};
