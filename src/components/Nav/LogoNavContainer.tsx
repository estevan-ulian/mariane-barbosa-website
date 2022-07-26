import React from "react";
import tw from "tailwind-styled-components";

interface LogoNavContainerProps {
    children: React.ReactNode
}

export default function LogoNavContainer({children}: LogoNavContainerProps) {

    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

const Container = tw.div<LogoNavContainerProps>`
        w-4/5 lg:w-1/5 cursor-pointer hover:animate-pulse
    `