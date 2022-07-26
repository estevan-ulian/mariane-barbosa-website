import tw from "tailwind-styled-components";

interface ContainerProps {
    children: any
    $margin?: string
}

export default function Container({ children, $margin }: ContainerProps) {
    return (
        <>
            <Wrapper $margin={$margin}>
                {children}
            </Wrapper>
        </>
    )
}

const Wrapper = tw.div`
    w-full flex flex-col lg:max-w-[1360px] lg:mx-auto py-20 px-4 
    ${({ $margin }) => $margin ? $margin : ''}
`