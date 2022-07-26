import React from "react";
import tw from "tailwind-styled-components";

interface LogoContainerMobile {
    children: React.ReactNode
}

export default function LogoContainerMobile({ children }: LogoContainerMobile) {

    return (
        <>
            <LogoContainer>
                {children}
            </LogoContainer>
        </>
    )
}

const LogoContainer = tw.li<LogoContainerMobile>`
        flex relative justify-center cursor-pointer hover:animate-pulse lg:hidden
    `