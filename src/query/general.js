import { gql } from '@apollo/client';

//Query data navbar
const GET_PAGES = gql`
  query Pages {
    pages: allPages {
      name
      alias
      language {
        vi
        en
        jp
      }
    }
  }
`;

// Query data layout by id
const GET_LAYOUT = gql`
  query Layout($id: ID!) {
    layout: Layout(where: { id: $id }) {
      id
      name
      property {
        id
        name
        language {
          vi
          en
          jp
        }
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
    }
  }
`;

//query data all service
const GET_ALL_SERVICE = gql`
  query getAllServices {
    services: allServices {
      fullName {
        en
        vi
        jp
      }
      shortName {
        en
        vi
        jp
      }
      layout {
        property {
          name
        }
      }
      features {
        name
        vi
        en
        jp
      }
      featureDetails {
        vi
        en
        jp
      }
      alias
      icon {
        original: publicUrlTransformed(
          transformation: { width: "32", height: "32" }
        )
        thumbnail: publicUrl
      }
      iconSelected {
        original: publicUrlTransformed(
          transformation: { width: "32", height: "32" }
        )
        thumbnail: publicUrl
      }
      image {
        original: publicUrl
        thumbnail: publicUrl
      }
      description {
        name
        en
        vi
        jp
      }
    }
  }
`;

//query data project by type project
const GET_ALL_PROJECT = gql`
  query getAllProject($type: String!) {
    project: allProjects(where: { type_some: { name_contains: $type } }) {
      id
      name {
        en
        vi
        jp
      }
      alias
      layout {
        name
      }
      type {
        name
        type {
          vi
          en
          jp
        }
      }
      platforms {
        en
        jp
        vi
      }
      devStyle {
        en
        jp
        vi
      }
      url
      customer {
        en
        jp
        vi
      }
      description {
        en
        jp
        vi
      }
      tags {
        name
        alias
      }
      buttonShowMore {
        en
        jp
        vi
      }
      imageDetail {
        original: publicUrl
        thumbnail: publicUrl
      }
      image {
        name
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      design {
        name
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      development {
        name
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      projectMemberDesign {
        name
        role
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      projectMemberDev {
        name
        role
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
    }
    total: _allProjectsMeta(where: { type_some: { name_contains: $type } }) {
      count
    }
  }
`;

const GET_DETAIL_PROJECT = gql`
  query getAllProject($id: ID!) {
    project: allProjects(where: { id: $id }) {
      id
      name {
        en
        vi
        jp
      }
      alias
      date
      layout {
        name
      }
      type {
        name
        type {
          vi
          en
          jp
        }
      }
      platforms {
        en
        jp
        vi
      }
      devStyle {
        en
        jp
        vi
      }
      url
      customer {
        en
        jp
        vi
      }
      description {
        en
        jp
        vi
      }
      tags {
        name
        alias
      }
      buttonShowMore {
        en
        jp
        vi
      }
      imageDetail {
        original: publicUrl
        thumbnail: publicUrl
      }
      image {
        name
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      design {
        name
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      development {
        name
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      projectMemberDesign {
        name
        role
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
      projectMemberDev {
        name
        role
        image {
          original: publicUrl
          thumbnail: publicUrl
        }
      }
    }
  }
`;

//query data all type project
const GET_PROJECT_TYPE = gql`
  query getAllType {
    types: allProjectTypes {
      name
      type {
        en
        vi
        jp
      }
    }
  }
`;

const ADD_CUSTOMER = gql`
  mutation AddCustomers(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    createCustomer(
      data: { name: $name, email: $email, subject: $subject, message: $message }
    ) {
      id
    }
  }
`;

const generalQueries = {
  GET_PAGES,
  GET_LAYOUT,
  GET_ALL_SERVICE,
  GET_ALL_PROJECT,
  GET_PROJECT_TYPE,
  GET_DETAIL_PROJECT,
  ADD_CUSTOMER
};

export default generalQueries;
