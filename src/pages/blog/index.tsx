import { gql } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Section from '../../components/Section';
import client from '../../lib/apolloClient';

export default function Blog ({ data: { posts } }) {

  const firstPost = posts.slice(0, 1)
  const morePosts = posts.slice(1)

  const renderFirstPost = () => {
    const posts = firstPost.map(post => {
    const { id, title, slug, coverImage, excerpt, date } = post 
    const fallbackImage = !coverImage?.url ? "images/mariane-barbosa.jpg" : coverImage?.url
      return (
        <article key={id} className={`w-full mx-auto transition-all duration-300 hover:scale-[1.01]`}>          
          <Link href={`/blog/${slug}`}>
            <a>
              <div className={`w-full mx-auto flex flex-col relative`}>
                <Image loader={() => fallbackImage} src={fallbackImage} alt={title} width={1024} height={480} 
                className={`rounded-t-xl md:rounded-xl`} />
                <div className={`
                md:absolute md:bottom-4 md:left-4 md:right-4 p-3 md:p-0
                border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10
                md:border-none
                `}>
                  <div className='text-sm text-darkColor-100 opacity-50 md:text-whiteColor md:opacity-75'>
                    {date}
                  </div>
                  <h2 className='text-xl font-bold text-secondaryColor-700 mt-4 mb-3'>{title}</h2>
                  <p className='md:text-whiteColor'>{excerpt.slice(0,220)} ...</p>
                </div>
              </div>      
            </a>      
          </Link>
        </article>
      )
    })
    return (
      <div>{posts}</div>
    )
  }

  function renderMorePosts() {
    return morePosts.map(post => {
      const { id, title, slug, coverImage, excerpt, date } = post      
      const excerpt125char = excerpt.slice(0, 125)
      const fallbackImage = !coverImage?.url ? "images/mariane-barbosa.jpg" : coverImage?.url
  
      return (
        <article key={id} className={`w-full relative transition-all duration-300 hover:scale-105`}>
          <Link href={`/blog/${slug}`}>
            <a>
              <div className="w-full relative">
                <Image loader={() => fallbackImage} src={fallbackImage} alt={title} width={768} height={360} className={`rounded-t-2xl`} />
              </div>
              <div className="flex flex-col p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
                <span className='text-sm text-darkColor-100 opacity-50 self-end'>{date}</span>
                <h4 className="text-xl font-bold text-secondaryColor-700 h-14 mt-4 mb-3" dangerouslySetInnerHTML={ { __html: title}} />
                <div className="text-darkColor-100">{excerpt125char} ...</div>
              </div> 
            </a>
          </Link>
        </article>
      )
    })
  }

  return (
    <div className={``}>
      <Head>
        <title>Blog - Mariane Barbosa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav bgDark />
  
      <Section height='py'>        
        <Container>
          <div className='max-w-screen-lg mx-auto flex flex-col py-5 md:py-0'>
            <h1 className="text-darkColor-900 text-4xl sm:text-5xl font-bold mt-3 mb-8">Blog da Mari</h1>
              {renderFirstPost()}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
              {renderMorePosts()}
            </div>

          </div>
        </Container>
      </Section>
      <Footer />
    </div>

  )    
}

export async function getStaticProps() {
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
  
  return {
    props: { data }
  }
}