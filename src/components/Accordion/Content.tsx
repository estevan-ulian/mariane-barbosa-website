import tw from "tailwind-styled-components";

interface ContentProps {
    content: string
    $isShowing: boolean
}

export default function Content({ content, $isShowing }: ContentProps) {
    return (
        <>
            <Wrapper $isShowing={$isShowing}>
                {content}
            </Wrapper>
        </>
    )
}
const Wrapper = tw.div<ContentProps>`
    text-accentColor-700
    transition-all duration-300
    ${({$isShowing}) => $isShowing ? "visible mt-2 h-auto" : "invisible opacity-0 h-0"}
`