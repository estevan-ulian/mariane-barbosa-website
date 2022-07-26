import tw from "tailwind-styled-components";

interface SingleLinkProps {
    href: string
    children: string
    onClick: () => void
}

export default function SingleLink({ href, children, onClick }: SingleLinkProps) {    

    return (
        <>
            <SingleLinks href={href} onClick={onClick}>
                {children}
            </SingleLinks>
        </>
    )
}

const SingleLinks = tw.a`
    text-whiteColor lg:text-lightColor text-xl cursor-pointer py-1 lg:text-base lg:my-0 lg:py-3
    transition-all duration-400
    border-b-2 border-b-transparentColor
    hover:border-b-2 hover:opacity-100 hover:border-secondaryColor-700
    `