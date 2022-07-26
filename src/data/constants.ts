import { gql } from "@apollo/client";

export const WP_GET_ALL_POSTS_FOR_HOME = gql`
  query getPostsForHome {
    posts(first: 3, where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}) {
      edges {
        node {
          id
          slug
          title
          excerpt(format: RENDERED)
          date
          status
          categories {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
          featuredImage {
            node {
              altText
              id
              sourceUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`

export const WP_GET_ALL_POSTS_FOR_BLOG = gql`
  query getAllPostsForBlog {
    posts(where: {orderby: {order: DESC, field: DATE}, status: PUBLISH}) {
      edges {
        node {
          id
          title
          slug
          date
          excerpt(format: RENDERED)
          featuredImage {
            node {
              altText
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
              slug
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export const WP_GET_ALL_POSTS_SLUGS = gql`
  query AllPostsSlugs {
    posts {
      edges {
        node {
          slug
        }
      }
    }
  }
`

export const WP_GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String) {
    postBy(slug: $slug) {
      id
      slug
      date
      title(format: RENDERED)
      excerpt
      featuredImage {
        node {
          altText
          mediaItemUrl
          mediaDetails {
            width
            height
          }
        }
      }
      categories {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
      tags {
        edges {
          node {
            id
            name
            slug
          }
        }
      }    
      seo {
        metaDesc
        title
        metaKeywords
        opengraphImage {
          altText
          mediaItemUrl
        }
      }
      content(format: RENDERED)    
    }
  }
`