import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { getAllPostsForHome, getAllPostsWithSlug, getPostAndMorePosts, getPostBySlug } from "../../lib/api"


export default function Slug({ post, posts, preview }) {
  const router = useRouter()
  console.log(router.query)
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <div><h1>ERRO</h1></div>
  }

  <>
    <Head>
      <title>
        {post.title} | Mariane Barbosa
      </title>
      <meta
        property="og:image"
        content={post.featuredImage?.sourceUrl}
      />
    </Head>    
    <div className="container pt-5">
        <article>
          <h1>{post.title}</h1>
          <span>{post.date}</span>
          <span>{post.autor}</span>
          <span>{post.categories}</span>
          <span>{post.tags.edges.length > 0 && post.tags}</span>
          <Image loader={post.featuredImage?.sourceUrl} src={post.featuredImage?.sourceUrl} width={1200} height={628} alt={post.featuredImage?.altText} />
          <main>
            {post.content}
          </main>
        </article>
    </div>
  </>  
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  const paths = await allPosts.map(({ node }) => {
    return `/${node.slug}`
  })
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const data = await getPostBySlug(params.slug)
  // const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      post: data.post,
    },
    revalidate: 10,
  }
}