import { useQuery } from "@apollo/client";
import { zipToObject } from "helper/converter";
import generalQueries from "query/general";

const FetchDetailProject = (id) => {
    const { loading: loadingDP, data: detailProject, error: errorDP } = useQuery(generalQueries.GET_DETAIL_PROJECT, {
        variables: {
            id: id,
        }
    });
    return { loadingDP, detailProject, errorDP };
};

const FetchIFProject = () => {
    const { loading: loadingIFP, data, error: errorIFP } = useQuery(generalQueries.GET_LAYOUT, {
        variables: {
            id: "601772db37dbc800234f74c7",
        }
    });
    const ifProject = !loadingIFP && !errorIFP && zipToObject(data.layout.property, "name", "language");
    return { loadingIFP, ifProject, errorIFP };
}

export {
    FetchDetailProject,
    FetchIFProject,
}