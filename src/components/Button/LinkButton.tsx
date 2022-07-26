import tw from "tailwind-styled-components";
import Link from "next/link"

interface LinkButtonProps {
    $bgTransparent: boolean
    children: string
    $url: string
    $big?: boolean
}

export default function LinkButton({$bgTransparent, children, $url, $big}: LinkButtonProps) {
    return (
        <>
            <Link passHref href={$url}>
                <WrapperLink $bgTransparent={$bgTransparent} $big={$big}>
                    {children}
                </WrapperLink>
            </Link>
        </>
    )
}

const WrapperLink = tw.a<LinkButtonProps>`
    max-w-fit border rounded-full px-6 py-3 sm:px-10 sm:py-4 text-whiteColor cursor-pointer     
    transition-all duration-300 ease-in-out
    ${({$big}) => $big ? 'sm:text-lg' : 'text-base'}
    ${({$bgTransparent}) => $bgTransparent ? bgtransparent : bgpink}    
    
`

const bgtransparent = `border-lightColor lg:hover:bg-secondaryColor-700 lg:hover:border-secondaryColor-700`

const bgpink = `bg-secondaryColor-700 border-secondaryColor-700 hover:scale-105`