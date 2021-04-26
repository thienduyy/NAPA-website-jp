import { useQuery } from "@apollo/client";
import { zipToObject } from "helper/converter";
import generalQueries from "query/general";

import homeQuery from "query/home";


// Fetch data get introduce service at home page
const FetchIntroService = () => {
    const { loading: loadingIS, data, error: errorIS } = useQuery(homeQuery.GET_INTRO_SERVICE, {
        variables: {
            id: "5fa7acdbac872800220fe474",
        }
    });
    const introService = !loadingIS && !errorIS && zipToObject(data.introService.property, "name", "language");

    return { loadingIS, introService, errorIS };
};

const FetchProjectBanner = () => {
    const { loading, data: projectBanner, error } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "5fba02e71a37e92874b7d9a0",
        }
    });
    const data = !loading && !error && zipToObject(projectBanner.layout.property, "name", "language");

    return { loading, data, error };
};

const FetchOurTeam = () => {
    const { loading: loadingTeam, data, error: errorTeam } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "601765b7d1b71000232e3b05",
        }
    });
    const ourTeam = !loadingTeam && !errorTeam && zipToObject(data.layout.property, "name", ["language", "image"]);
    return { loadingTeam, ourTeam, errorTeam };
};

const FetchFeedback = () => {
    const { loading: loadingFeedback, data, errorFeedback } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "5fa7acdbac872800220fe473",
        }
    });
    const feedback = !loadingFeedback && !errorFeedback && zipToObject(data.layout.property, "name", ["language", "image"], { simple: false });
    return { loadingFeedback, feedback, errorFeedback };
};

const FetchIntroBanner = () => {
    const { loading: loadingBanner, data, errorBanner } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016b38f1f77b40024081b26",
        }
    });
    const introBanner = !loadingBanner && !errorBanner && zipToObject(data.layout.property, "name", ["language", "image"]);
    return { loadingBanner, introBanner, errorBanner };
}

const FetchOverviewCompany = () => {
    const { loading: loadingOC, data, error: errorOC } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016b6b21f77b40024081b39",
        }
    });
    const overviewCompany = !loadingOC && !errorOC && zipToObject(data.layout.property, "name", "language");
    return { loadingOC, overviewCompany, errorOC };
}

const FetchIntroTechnology = () => {
    const { loading, data: introTech, error } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016bab01f77b40024081b54",
        }
    });
    const data = !loading && !error && zipToObject(introTech.layout.property, "name", "language");
    return { loading, data, error };
}

const FetchIntroCompany = () => {
    const { loading: loadingIC, data, error: errorIC } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016b8ae1f77b40024081b46",
        }
    });
    const introCom = !loadingIC && !errorIC && zipToObject(data.layout.property, "name", ["language", "image"]);
    return { loadingIC, introCom, errorIC };
}

const FetchIntroTeam = () => {
    const { loading: loadingIT, data, error: errorIT } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016bb711f77b40024081b5b",
        }
    });
    const introTeam = !loadingIT && !errorIT && zipToObject(data.layout.property, "name", "language");
    return { loadingIT, introTeam, errorIT };
}

const FetchIntroFeedback = () => {
    const { loading: loadingIF, data, error: errorIF } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016bcb21f77b40024081b66",
        }
    });
    const introFeedback = !loadingIF && !errorIF && zipToObject(data.layout.property, "name", "language");
    return { loadingIF, introFeedback, errorIF };
}

const FetchIntroOption = () => {
    const { loading, data: introOption, error } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "6016bd8a1f77b40024081b6d",
        }
    });
    const data = !loading && !error && zipToObject(introOption.layout.property, "name", "language");
    return { loading, data, error };
}

const FetchFooterLeft = () => {
    const { loading: loadingFL, data, error: errorFL } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "60176821d1b71000232e3b21",
        }
    });
    const footerLeft = !loadingFL && !errorFL && zipToObject(data.layout.property, "name", "language");
    return { loadingFL, footerLeft, errorFL };
}

const FetchFooterRight = () => {
    const { loading: loadingFR, data, error: errorFR } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "60176a45d1b71000232e3b3a",
        }
    });
    const footerRight = !loadingFR && !errorFR && zipToObject(data.layout.property, "name", "language");
    return { loadingFR, footerRight, errorFR };
};

const FetchAllRenew = () => {
    const { loading: loadingRenew, data: dataRenew, error: errorRenew } = useQuery(homeQuery.GET_ALL_RENEW);
    return { loadingRenew, dataRenew, errorRenew };
};

export {
    FetchIntroService,
    FetchProjectBanner,
    FetchOurTeam,
    FetchFeedback,
    FetchIntroBanner,
    FetchOverviewCompany,
    FetchIntroTechnology,
    FetchIntroCompany,
    FetchIntroTeam,
    FetchIntroFeedback,
    FetchIntroOption,
    FetchFooterLeft,
    FetchFooterRight,
    FetchAllRenew
};
