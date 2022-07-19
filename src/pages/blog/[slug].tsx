import { gql } from "@apollo/client"
import Image from "next/image"
import Container from "../../components/Container"
import Nav from "../../components/Nav"
import Section from "../../components/Section"
import client from "../../lib/apolloClient"

export default function Post({ data: { post } }) {
  const { title, excerpt, content, date, tags, coverImage } = post

  return (
    <>
    <Nav bg="accentColor-700"/>
    <Section height="py" >
      <Container>
        <div className="flex flex-col text-darkColor-900 mx-auto sm:w-3/4 md:w-2/3">
          <span className="self-center font-light">{date}</span>
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold mt-3 mb-8">{title}</h1>
          <p className="mb-10 text-lg text-center font-light">{excerpt}</p>

        </div>
          <div className="self-center">
            <div className="w-2/4 mx-auto mb-12">
              <Image 
                loader={() => coverImage.url} 
                src={coverImage.url} 
                width={coverImage.width} 
                height={coverImage.height} 
                alt={title}
              />
            </div>                  
            <div className="postcontent" dangerouslySetInnerHTML={{ __html: content.html }} />
          </div>          
         
      </Container>
    </Section>
    </>
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

  return {
    props: {
      data
    },
    revalidate: 10
  }
}