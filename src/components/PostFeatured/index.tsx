import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { convertDate } from "../../utils/convert-date";

export default function PostFeatured({ posts }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <Wrapper>
           {isMounted && posts?.map(post => {
                const { id, title, slug, featuredImage, excerpt, date } = post.node
                const imageUrl = featuredImage.node.sourceUrl
                const postDate = convertDate(date)
            
                return (
                    <Article key={id}>          
                        <Link href={`/blog/${slug}`}>
                            <a>
                                <Wrapper>
                                    <Image
                                        src={imageUrl} alt={title} 
                                        width={1200} height={628} 
                                        className={`rounded-t-xl sm:rounded-xl`} 
                                    />
                                    <WrapperContent>
                                        <WrapperDate>
                                            {postDate}
                                        </WrapperDate>
                                        <TitlePost>{title}</TitlePost>
                                        <Excerpt dangerouslySetInnerHTML={ { __html: excerpt?.slice(0, 300) + "..."}} />
                                    </WrapperContent>
                                </Wrapper>      
                                <BackgroundGradient />
                            </a>      
                        </Link>
                    </Article>
                )
            })}
        </Wrapper>
    )
}

const Article = tw.article`
    w-full mx-auto relative transition-all duration-300 hover:scale-105 sm:hover:scale-[1.01]
`

const Wrapper = tw.div`
    w-full mx-auto flex flex-col relative   
`

const WrapperContent = tw.div`
    sm:absolute sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-0 z-10
    border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10
    sm:border-none
`

const WrapperDate= tw.span`
    text-sm text-darkColor-100 opacity-50 sm:text-whiteColor sm:opacity-75  
`

const TitlePost = tw.h2`
    text-secondaryColor-700 mt-4 mb-3 text-2xl lg:text-4xl
`

const Excerpt = tw.p`
    text-accentColor-700 sm:text-lightColor
`

const BackgroundGradient = tw.div`
    hidden sm:flex absolute rounded-b-xl top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-accentColor-900 to-transparentColor
`