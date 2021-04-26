import { gql } from "@apollo/client";

const GET_INTRO_SERVICE = gql`
    query introService($id: ID!){
        introService : Layout(where: { id: $id }){
            property {
                name
                language {
                    vi
                    en
                    jp
                }
            }
        }
    }
`;

const GET_ALL_RENEW = gql`
query getAllRenew {
    renews: allRenews {
      name
      position
      message {
        en
        vi
        jp
      }
      image {
        original: publicUrl
        thumbnail: publicUrl
      }
    }
  }
`;


const homeQuery = {
    GET_INTRO_SERVICE,
    GET_ALL_RENEW
};
export default homeQuery;