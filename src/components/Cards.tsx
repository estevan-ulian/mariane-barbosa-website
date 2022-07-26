import tw from "tailwind-styled-components";
import Image from "next/image"
import { CARDS_HOME } from "../data/content"

export default function Cards() {    

    function renderCards() {
        return CARDS_HOME.map((value, index) => {
            const {img, title, content} = value
            return (
                <Article key={index}>
                    <WrapperImage>
                        <Image src={img} 
                        alt={title} 
                        width={78} 
                        height={78} />
                    </WrapperImage>
                    <WrapperContent>
                        <Title>{title}</Title>
                        <Content>{content}</Content>
                    </WrapperContent>
                </Article>
            )
        })
    }

    return (
        <>
            {renderCards()}
        </>
    )
}

const Article = tw.article`
    bg-accentColor-700 bg-opacity-95 rounded-3xl py-9 px-7 flex gap-3
`

const WrapperContent = tw.div`
    flex flex-col gap-2 w-full
`

const WrapperImage = tw.div`
    relative
`

const Title = tw.h4`
    font-bold text-xl text-whiteColor m-0
`

const Content = tw.p`
    text-lightColor opacity-75
`