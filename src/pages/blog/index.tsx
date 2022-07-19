import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Section from '../../components/Section';
import { getAllPosts } from '../../lib/api';

export default function Blog ({ allPosts: { edges } }) {
  
  function renderPost() {
    return edges.map(post => {
      const { id, title, slug, featuredImage, excerpt, date } = post.node
      const excerpt125words = excerpt.slice(0, 125)
  
      const { altText, sourceUrl } = featuredImage.node
  
  
      return (
        <article key={id} className={`w-full relative`}>
          <Link href={`/${slug}`}>
            <a>
              <div className="w-full relative">
                <Image loader={() => sourceUrl} src={sourceUrl} alt={altText} width={768} height={360} />
              </div>
              <div className="p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10">
                <h4 className="text-xl font-bold text-secondaryColor-700 mt-4 mb-3" dangerouslySetInnerHTML={ { __html: title}} />
                <p className="text-darkColor-100" dangerouslySetInnerHTML={ { __html: excerpt125words + " ..."}} />
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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-1'>
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
  const allPosts = await getAllPosts()

  

  return {
    props: { allPosts } || {},
    revalidate: 10
  }
}