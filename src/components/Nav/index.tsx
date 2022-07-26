import { useEffect, useState } from "react";
import { LogoHeight, LogoWidth, WhatsAppUrl } from "../../data/content";
import Button from "../Button";
import Logo from "../Logo";
import Header from "./Header";
import LinksContainer from "./LinksContainer";
import LogoContainerMobile from "./LogoContainerMobile";
import Container from "./Container";
import NavLinks from "./NavLinks";
import ToogleMenu from './ToggleMenu';
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

interface NavProps {
    $bgDark?: boolean;
}

export default function Nav({ $bgDark }: NavProps) {
    const [stickyNav, setStickyNav] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if(open) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }

        function handleScroll() {
            if(window.pageYOffset > 80) {
                setStickyNav(true);
            } else {
                setStickyNav(false);
            };
        }

        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [open]);


    return (
        <>
            <Container $bgDark={$bgDark} $stickyNav={stickyNav}>
                <Header>
                    <Logo width={!stickyNav ? LogoWidth*50/100 : LogoWidth*40/100} height={!stickyNav ? LogoHeight*50/100 : LogoHeight*40/100} />
                    <div className="absolute right-24 lg:hidden">
                        <Button bgTransparent content='Contato' url={WhatsAppUrl} />                        
                    </div>
                    <ToogleMenu onClick={() => setOpen(!open)} open={open} />

                    <LinksContainer open={open}>

                        <LogoContainerMobile>
                            <Logo width={LogoWidth*45/100} height={LogoHeight*45/100} />
                        </LogoContainerMobile>

                        <NavLinks onClick={() => setOpen(false)} />
                        
                        <Button bgTransparent content='Fale Comigo' url={WhatsAppUrl} />  

                    </LinksContainer>
                </Header>
            </Container>
        </>
    );
};