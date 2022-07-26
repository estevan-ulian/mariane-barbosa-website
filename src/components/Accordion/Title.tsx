import tw from "tailwind-styled-components";
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'

interface TitleProps {
    $isShowing: boolean
    children: React.ReactNode
}

export default function Title({children, $isShowing}: TitleProps) {
    return (
        <>
            <Wrapper>        
                <TitleAccordion $isShowing={$isShowing}>
                    {children}
                </TitleAccordion>
                {!$isShowing ? <BiChevronRight /> : <BiChevronDown />}
            </Wrapper>
        </>
    )
}

const Wrapper = tw.div`
    flex justify-between items-center
`

const TitleAccordion = tw.h3<TitleProps>`
    outline-none mb-0 font-bold text-base sm:text-lg
    ${({$isShowing}) => $isShowing ? "text-secondaryColor-700" : "text-accentColor-700"}
`