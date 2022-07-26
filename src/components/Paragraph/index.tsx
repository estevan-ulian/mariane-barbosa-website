import { Attributes } from "react";
import tw from "tailwind-styled-components";

interface ParagraphProps {
    content: Attributes
}

export default function Paragraph({ content }: ParagraphProps) {
    return (
        <>
            <P dangerouslySetInnerHTML={ { __html: content }} />
        </>
    )
}

const P = tw.p<ParagraphProps>`
    text-base lg:text-lg
    font-light font-inter
`