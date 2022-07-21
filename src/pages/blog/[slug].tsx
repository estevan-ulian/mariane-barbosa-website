import { gql } from "@apollo/client"
import Image from "next/image"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Section from "../../components/Section"
import client from "../../lib/apolloClient"
import Head from "next/head"
import SocialShareButtons from "../../components/SocialShareButtons"
import CopyToClipBoard from "../../components/CopyToClipBoard"
import { BASE_URL, getAllPostsBySlug, getPostBySlug } from "../../data/constants"
import { GetStaticPropsContext } from "next"

export default function Post({ data: { post } }) {  
  const { title, excerpt, content, date, slug, coverImage } = post
  const currentURL = `${BASE_URL}/blog/${slug}`

  return (
    <>
      <Head>
        <title>{title} - Blog da Mari</title>
        <meta name="title" content={`${title} - Blog da Mari`} />
        <meta name="description" content={excerpt}/>
        <meta name="robots" content="index, follow" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:title" content={`${title} - Blog da Mari`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={coverImage.url}/>
        <meta property="ia:markup_url" content={currentURL} />
        
        <meta property="twitter:card" content={coverImage.url} />
        <meta property="twitter:url" content={currentURL} />
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={excerpt}/>
        <meta property="twitter:image" content={coverImage.url}/>
      </Head>

    <Nav bgDark/>

    <Section height="py" >
      <Container>
        <div className={`font-inter mx-auto sm:w-3/4 xl:w-4/5`}>        
          <div className="flex flex-col text-darkColor-900 ">

            <span className="self-center font-light mt-8 text-sm opacity-50">{date}</span>
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
              <div className="postcontent flex flex-col gap-3" dangerouslySetInnerHTML={{ __html: content.html }} />

              <div className="flex flex-wrap flex-col sm:flex-row sm:justify-between items-center 
              gap-3 mx-auto py-4 mt-10 border-y border-y-darkColor-100 border-opacity-20"> 
                <span className="text-darkColor-900 text-xl text-center w-full lg:w-auto">Compartilhe este conteúdo!</span> 
                <div className="w-full lg:w-auto flex flex-wrap flex-col-reverse sm:flex-row items-center justify-center gap-2">
                  <CopyToClipBoard content={currentURL} />
                  <SocialShareButtons url={currentURL} title={title} coverImage={coverImage.url} />
                </div>
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
  const { data } = await getAllPostsBySlug()  

  const paths = data.posts.map(post => {
    return {
        params: { slug: post.slug}
    }
  })
  
  return { paths, fallback: false }
}

export async function getStaticProps (context: GetStaticPropsContext) {
  const { data } = await getPostBySlug(context)

  return {
    props: {
      data
    },
    revalidate: 10
  }
}