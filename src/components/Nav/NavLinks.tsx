import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import tw from "tailwind-styled-components";
import { InstagramUrl, LINKS } from '../../data/content';
import SingleLink from "./SingleLink";

interface NavLinksProps {
    onClick: () => void
}

export default function NavLinks({ onClick }: NavLinksProps) {    

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
            <div className="lg:hidden">
                <Link href={InstagramUrl}>
                    <a target='_blank' className="text-whiteColor flex-row-reverse flex gap-2">
                        @psi.marianebarbosa<BsInstagram className="w-6 h-6" />
                    </a>
                </Link>
            </div>
        </>
    )
}

const AllLinks = tw.li`
        lg:flex lg:items-center lg:justify-center
    `