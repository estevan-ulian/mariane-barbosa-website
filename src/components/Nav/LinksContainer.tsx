import React from "react";
import tw from "tailwind-styled-components";

interface LinksContainerProps {
    children: React.ReactNode;
    open: boolean;
}

export default function LinksContainer({ children, open }: LinksContainerProps) {    

    return (
        <>
            <Container open={open}>
                {children}
            </Container>
        </>
    );
};

const Container = tw.ul<LinksContainerProps>`
    absolute top-0 px-2 z-10 w-full h-screen
    flex flex-col gap-10 items-center justify-center
    transition-all duration-500 ease-in-out
    bg-secondaryColor-700     
    lg:flex-row lg:items-center lg:justify-end lg:pb-0 lg:static
    lg:gap-5 lg:h-auto lg:w-4/5 lg:pl-0 lg:bg-transparentColor        
    ${({open}) => open ? 'left-0' : 'left-[-100%]'}
`;