import { gql } from "@apollo/client"
import client from "../lib/apolloClient"

export const BASE_URL = "https://mariane-barbosa-website.vercel.app"
export const API_URL = process.env.GRAPHQL_ENDPOINT

export const WhatsAppUrl = 'https://api.whatsapp.com/send?phone=5517991938867';

export const Links = [
  { name: 'Sobre Mim', url: '/#sobre-mim' },
  { name: 'Blog da Mari', url: '/blog' },
  { name: 'Depoimentos', url: '/#depoimentos' },
  { name: 'FAQ', url: '/#faq' },
  { name: 'Quer Ajuda?', url: '#contato' },
]

export async function getThreeFirstPostsForHome() {
    const { data } = await client.query({
        query: gql`
          query allPosts {
            posts(first: 3, orderBy: date_DESC, stage: PUBLISHED) {
              id
              excerpt
              slug
              title
              stage
              coverImage {
                url
                width
                height
              }
            }
          }            
        `
      })
      return { data }
}

export async function getAllPostsForBlog() {
    const { data } = await client.query({
        query: gql`
          query allPosts {
            posts(first: 10000, orderBy: date_DESC, stage: PUBLISHED) {
              excerpt
              id
              date
              slug
              title
              stage
              coverImage {
                id
                url
                width
                height
              }
              content {
                html
              }
            }
          }            
        `
      })
      return { data }
}

export async function getAllPostsBySlug() {
    const { data } = await client.query({
        query: gql`
          query {
            posts {
              slug
            }  
          }      
        `
    })

    return { data }
}

export async function getPostBySlug(context) {
    const slug = context.params.slug
    const { data } = await client.query({
        query: gql`
        query PostBySlug($slug: String!) {
            post(where: {slug: $slug}) {          
                id
                slug
                title
                tags
                date
                excerpt
                content {
                    html
                }
                coverImage {
                    height
                    id
                    width
                    url
                }    
            }
        }        
        `,
    variables: { slug }
  })

  return { data }
}