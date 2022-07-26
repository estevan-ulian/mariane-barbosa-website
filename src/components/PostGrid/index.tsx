import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { convertDate } from "../../utils/convert-date";

export default function PostGrid({ posts }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <Wrapper>
           {isMounted && posts?.map(post => {
                const { id, title, slug, excerpt, date, featuredImage } = post?.node
                const { sourceUrl } = featuredImage?.node
                const postDate = convertDate(date)
                return (
                    <Article key={id}>
                        <Link passHref href={`/blog/${slug}`}>
                            <a>
                                <WrapperImage>
                                    <Image src={sourceUrl} alt={title} width={1200} height={628} className={`rounded-t-2xl`} />
                                </WrapperImage>
                                <WrapperContent>
                                    <WrapperDate>{postDate}</WrapperDate>
                                    <TitlePost dangerouslySetInnerHTML={ { __html: title}} />
                                    <Excerpt dangerouslySetInnerHTML={ { __html: excerpt?.slice(0, 125) + "..."}} />
                                </WrapperContent> 
                            </a>
                        </Link>
                    </Article>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = tw.div`
    grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12
`

const Article = tw.article`
    w-full relative transition-all duration-300 h-auto hover:scale-105
`

const WrapperImage = tw.div`
    w-full relative
`

const WrapperContent = tw.div`
    p-3 border-l border-b border-r border-accentColor-700 rounded-b-2xl border-opacity-10
`

const WrapperDate= tw.span`
    text-sm opacity-50
`

const TitlePost = tw.h4`
    text-secondaryColor-700 mt-4 mb-3 text-xl
`

const Excerpt = tw.p`
   text-base text-accentColor-700
`