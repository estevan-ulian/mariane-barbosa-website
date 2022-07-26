import tw from "tailwind-styled-components";

interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    

    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
};

const Container = tw.header`
    flex justify-between px-4 lg:grow h-28 items-center max-w-[1360px] mx-auto
`;