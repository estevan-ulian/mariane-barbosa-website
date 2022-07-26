import Head from 'next/head';
import tw from "tailwind-styled-components";
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import PostFeatured from '../../components/PostFeatured';
import PostGrid from '../../components/PostGrid';
import Section from '../../components/Section';
import { WPGetAllPostsForBlog } from '../../lib/posts';

export default function Blog ({ data: { posts } }) {
  const allPosts = posts.edges
 
  return (
    <>
      <Head>
        <title>Blog - Mariane Barbosa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav $bgDark />
  
      <Section height='py'>        
        <Container>
          <WrapperContent>
            <Title>Blog da Mari</Title>
            <PostFeatured posts={allPosts.slice(0, 1)} />
            <PostGrid posts={allPosts.slice(1)} />
          </WrapperContent>
        </Container>
      </Section>
      <Footer />
    </>

  )    
}

const WrapperContent = tw.div`
  max-w-[1360px] mx-auto flex flex-col py-5
`

const Title = tw.h1`
text-darkColor-900 text-4xl sm:text-5xl font-bold
`

export async function getStaticProps() {
  const { data } = await WPGetAllPostsForBlog();
  
  return {
    props: { data }
  }
}