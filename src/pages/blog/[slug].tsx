import { gql } from "@apollo/client"
import Image from "next/image"
import client from "../../lib/apolloClient"

export default function Post({ data: { post } }) {
  const { title, content, date, tags, coverImage } = post
  return (
    <div>
      <Image 
        loader={() => coverImage.url} 
        src={coverImage.url} 
        width={coverImage.width} 
        height={coverImage.height} 
        alt={title} 
      />
      <div>
        <span>{date}</span>
      </div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          slug
        }  
      }      
    `
  })
  
  const paths = data.posts.map(post => {
    return {
      params: { slug: post.slug}
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const { data } = await client.query({
    query: gql`
      query PostBySlug($slug: String!) {
        post(where: {slug: $slug}) {
          id
          title
          tags
          date
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

  return {
    props: {
      data
    }
  }
}