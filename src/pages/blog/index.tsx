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

  function renderPost() {
    return posts.map(post => {
      const { id, title, slug, coverImage, excerpt, date } = post
      const excerpt125words = excerpt.slice(0, 125)

      const fallbackImage = !coverImage?.url ? "images/mariane-barbosa.jpg" : coverImage?.url
  
      return (
        <article key={id} className={`w-full relative`}>
          <Link href={`/blog/${slug}`}>
            <a>
              <div className="w-full relative">
                <Image loader={() => fallbackImage} src={fallbackImage} alt={title} width={768} height={360} className={`rounded-t-2xl`} />
              </div>
              <div className="flex flex-col p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
                <span className='text-sm text-darkColor-100'>{date}</span>
                <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3" dangerouslySetInnerHTML={ { __html: title}} />
                <div className="text-darkColor-100">
                  {excerpt125words}
                </div>
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
        <title>Blog da Mari - Mariane Barbosa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav bg="accentColor-700" />
  
      <Section height='py'>        
        <Container>
          <div className='flex flex-col'>
            <h1 className="text-darkColor-900 text-3xl md:text-5xl lg:text-6xl font-bold mt-3 mb-8">Blog da Mari</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
              {renderPost()}
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