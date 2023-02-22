import { gql } from "@apollo/client/core/core.cjs";


// Use Apollo to get calendar Events from the GraphQL API. filter to dates in the future
export let EVENTS_QUERY = gql`
query Events {
  events(filters: { date: { gt: "${new Date().toISOString()}" } }) {
    data {
      attributes {
         ...EventFields
      }
    }
  }
}

fragment EventFields on Event {
    name
    date
    description
    slug
    city {
        data {
            attributes {
                name
            }
        }
    }
    image {
        data {
            attributes {
                url
            }
        }
    }
}
`;

export let ALL_EVENTS_TICKETS_QUERY = gql`
query Events {
  events {
    data {
      attributes {
         ...EventFields
          tickets(sort: "sortOrder:asc") {
              data {
                  attributes {
                      ...TicketFields
                  }
              }
          }
      }
    }
  }
}

fragment EventFields on Event {
    name
    date
    description
    slug
    city {
        data {
            attributes {
                name
            }
        }
    }
    image {
        data {
            attributes {
                url
            }
        }
    }
}

fragment TicketFields on Ticket {
    name
    sku
    price
    description
    ticketType
    sortOrder
}
`;

export let EVENT_TICKETS_QUERY = gql`
  query EventTickets($slug: String!) {
    events(filters: { slug: { eq: $slug } }) {
        data {
            attributes {
                ...EventFields
                tickets {
                    data {
                        attributes {
                            ...TicketFields
                        }
                    }
                }
            }
        }
    }
  }
  fragment TicketFields on Ticket {
    name
    sku
    price
    description
    ticketType
  }
  
  fragment EventFields on Event {
    name
    date
    description
    slug
  }`;

export let ALL_TICKETS_QUERY = gql`
query AllTickets{
    tickets {
        data {
            attributes {
                name
                sku
                price
                description
                ticketType
            }
        }
    }
}`;
// Get all press articles, filtered to only show articles with logo
export let PRESS_QUERY = gql`
    query AllPress {
        pressArticles(filters: { feature: { eq: true } }) {
            data {
                attributes {
                    title
                    publication
                    date
                    author
                    feature
                    href
                    logo {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }`;