import tw from "tailwind-styled-components";

interface ContainerProps {
    $bgDark?: boolean;
    children: React.ReactNode;
    $stickyNav: boolean;
}

export default function Container({ $bgDark, children, $stickyNav } : ContainerProps) {      

    return (
        <>
            <ContainerDiv $bgDark={$bgDark} $stickyNav={$stickyNav}>
                {children}
            </ContainerDiv>
        </>
    )
};


const ContainerDiv = tw.div<ContainerProps>`
    lg:flex items-center mb-[-112px] transition-all duration-500 ease-in-out
    ${({ $bgDark }) => $bgDark ? 'bg-accentColor-900' : 'bg-transparentColor'}
    ${({ $stickyNav }) => $stickyNav ? 'fixed top-0 left-0 right-0 bg-accentColor-900 bg-opacity-95 z-50 drop-shadow-md' : ''} 
`;