import tw from "tailwind-styled-components";

interface ButtonAccordionProps {
    onClick: () => void;
    children: React.ReactNode
}

export default function ButtonAccordion({ children, onClick }: ButtonAccordionProps) {
    return (
        <>
            <Button onClick={onClick}>
                {children}
            </Button>
        </>
    )
};

const Button = tw.button<ButtonAccordionProps>`
    w-full relative text-left bg-transparentColor cursor-pointer
`;