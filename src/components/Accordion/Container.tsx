import tw from "tailwind-styled-components";

export default function Container({children}) {
    return (
        <>
            <ContainerQuestion>
                {children}
            </ContainerQuestion>
        </>
    )
}

const ContainerQuestion = tw.div`
    w-full sm:w-4/5 md:w-3/4 mb-4 bg-lightColor rounded-2xl p-4      
    transition-all duration-300 ease-in-out
`