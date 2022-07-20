import { gql } from "@apollo/client"
import Image from "next/image"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Section from "../../components/Section"
import client from "../../lib/apolloClient"
import Head from "next/head"
import { useState } from "react"
import { copyTextToClipboard } from '../../utils/copy-to-clipboard'
import { BsCheck2All } from "react-icons/bs"
import { AiOutlineCopy } from "react-icons/ai"
import SocialShareButtons from "../../components/SocialShareButtons"

export default function Post({ data: { post } }) {
  const BASE_URL = "https://mariane-barbosa-website.vercel.app"
  const [isCopied, setIsCopied] = useState(false);

  const { title, excerpt, content, date, tags, slug, coverImage } = post

  function handleCopiedText() {
    if (!isCopied) {
      return (
        <span className="flex items-center justify-between gap-1 border border-lightColor px-2 py-1 rounded w-full">Copiar URL <AiOutlineCopy /></span>
      )
    } else {
      return (
        <span className="flex items-center justify-between gap-3 border border-lightColor px-2 py-1 rounded w-full">Copiado <BsCheck2All /></span>
      )
    }
  }

  return (
    <>
      <Head>
        <title>{title} - Blog da Mari</title>
        <meta name="title" content={`${title} - Blog da Mari`} />
        <meta name="description" content={excerpt}/>
        <meta name="robots" content="index, follow" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BASE_URL}/blog/${slug}`} />
        <meta property="og:title" content={`${title} - Blog da Mari`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={coverImage.url}/>
        
        <meta property="twitter:card" content={coverImage.url} />
        <meta property="twitter:url" content={`${BASE_URL}/blog/${slug}`} />
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={excerpt}/>
        <meta property="twitter:image" content={coverImage.url}/>
      </Head>

    <Nav bg="accentColor-900"/>

    <Section height="py" >
      <Container>
        <div className="flex flex-col text-darkColor-900 font-inter mx-auto sm:w-3/4 lg:w-3/4">

          <span className="self-center font-light">{date}</span>
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold mt-3 mb-8">{title}</h1>
          <p className="mb-10 text-lg text-center font-light">{excerpt}</p>

        </div>
          <div className="self-center w-full">
            <div className="sm:w-3/4 mx-auto mb-12">
              <Image 
                loader={() => coverImage.url} 
                src={coverImage.url} 
                width={coverImage.width} 
                height={coverImage.height} 
                alt={title}
              />
            </div>                  
            <div className="postcontent flex flex-col gap-3 mx-auto sm:w-3/4 md:w-3/4" dangerouslySetInnerHTML={{ __html: content.html }} />

            <div className="flex flex-wrap justify-between items-center sm:w-3/4 md:w-3/4 mx-auto py-4 border-y border-y-darkColor-100 border-opacity-20 mt-10"> 
              <span className="text-darkColor-900">Compartilhe</span> 
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => {
                    copyTextToClipboard(`${BASE_URL}/blog/${slug}`)
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 5000)
                  }}
                  >
                  <div className="text-sm mr-4 w-full">
                    {handleCopiedText()}
                  </div>
                </button>
                <SocialShareButtons url={`${BASE_URL}/blog/${slug}`} title={title} coverImage={coverImage.url} />
              </div>
            </div>

          </div>          
         
      </Container>
    </Section>
    <Footer />
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

  return {
    props: {
      data
    },
    revalidate: 10
  }
}