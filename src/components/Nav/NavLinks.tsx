import tw from "tailwind-styled-components";
import { LINKS } from '../../data/content';
import SingleLink from "./SingleLink";

interface NavLinksProps {
    onClick: () => void
}

export default function NavLinks({ onClick }: NavLinksProps) {

    const AllLinks = tw.li`
        lg:flex lg:items-center lg:justify-center
    `

    function renderLinks(LINKS) {
        return LINKS.map((link, i) => {
            return (
                <AllLinks key={i}>                                
                    <SingleLink href={link.url} onClick={onClick}>
                        {link.name}
                    </SingleLink>                                
                </AllLinks>
                )
            }
        )
    }    

    return (
        <>
            {renderLinks(LINKS)}
        </>
    )
}