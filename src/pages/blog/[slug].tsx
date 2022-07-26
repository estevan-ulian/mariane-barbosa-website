import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import SocialShareButtons from "../../components/SocialShareButtons";
import CopyToClipBoard from "../../components/CopyToClipBoard";
import { BASE_URL } from "../../data/content";
import { GetStaticPropsContext } from "next";
import { WPGetAllPostsSlugs, WPGetPostBySlug } from "../../lib/posts";
import { convertDate } from "../../utils/convert-date";

export default function Post({ data: { postBy } }) {
  const { title, content, date, slug, featuredImage, categories, tags, seo } = postBy;
  const { altText, mediaItemUrl, mediaDetails } = featuredImage?.node;
  const { metaDesc  } = seo;
  const postDate = convertDate(date);
  const currentURL = `${BASE_URL}/blog/${slug}`; 

  function renderCategoriesOrTags(array, urlArchive) {
    return array?.edges?.map((item, index) => {
      const { id, name, slug } = item.node;
      const url = `${BASE_URL}/${urlArchive}/${slug}`;
      return (
        <span key={id} className="mb-0">
          <Link href={url}>
            <a>
              {name}{array.edges.length - 1 === index ? '' : ', '}
            </a>
          </Link>
        </span>
      );
    });    
  }; 

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={metaDesc}/>
        <meta name="robots" content="index, follow" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={mediaItemUrl}/>
        <meta property="ia:markup_url" content={currentURL} />
        
        <meta property="twitter:card" content={mediaItemUrl} />
        <meta property="twitter:url" content={currentURL} />
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={metaDesc}/>
        <meta property="twitter:image" content={mediaItemUrl}/>
      </Head>

      <Nav $bgDark/>

      <Section height="py" >
        <Container>
          <div className={`font-inter mx-auto sm:w-3/4 xl:w-4/5`}>        
            <div className="flex flex-col text-darkColor-900 ">
              
              <h1 className="text-secondaryColor-700 text-center mb-0 mt-8">{title}</h1>
              <div className="flex items-center justify-center py-4 gap-3 font-light text-accentColor-900 opacity-50 ">              
                <span className="mb-0">{postDate} | {renderCategoriesOrTags(categories, 'categoria')}</span>
              </div>
              <p className="mb-10 text-lg text-center font-light" dangerouslySetInnerHTML={ { __html: metaDesc } }></p>

            </div>
              <div className="self-center w-full">
                <div className="sm:w-3/4 mx-auto mb-12">
                  <Image                     
                    src={mediaItemUrl} 
                    width={mediaDetails.width} 
                    height={mediaDetails.height} 
                    alt={altText}
                  />
                </div>                  
                <div className="postcontent flex flex-col gap-3" dangerouslySetInnerHTML={{ __html: content }} ></div>

                <div className="flex justify-between gap-2 flex-wrap mt-16">
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-bold">Categorias: </span>
                      {renderCategoriesOrTags(categories, 'categoria')}
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      <span className="font-bold">Tags: </span>{renderCategoriesOrTags(tags, 'tag')}
                    </div>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row sm:justify-between items-center 
                gap-3 mx-auto py-4 mt-10 border-y border-y-darkColor-100 border-opacity-20"> 
                  <span className="text-darkColor-900 text-xl text-center w-full lg:w-auto m-0">Compartilhe este conteúdo!</span>                 
                  <div className="w-full lg:w-auto flex flex-wrap flex-col-reverse sm:flex-row items-center justify-center gap-2">
                    <CopyToClipBoard content={currentURL} />
                    <SocialShareButtons url={currentURL} title={title} coverImage={mediaItemUrl} />
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
  const { data } = await WPGetAllPostsSlugs();

  const paths = data?.posts?.edges?.map(post => {
    return {
      params: { slug: post.node.slug }
    }
  })
  
  return { paths, fallback: false };
}


export async function getStaticProps (context: GetStaticPropsContext) {
  const { data } = await WPGetPostBySlug(context);

  return { props: { data }, revalidate: 10 };
}