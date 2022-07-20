interface ContainerProps {
    children: any
    margin?: string
}

export default function Container({ children, margin }: ContainerProps) {
    return (
        <>
            <div className={`w-full lg:max-w-[1360px] mx-auto py-16 md:py-32 px-4 ${margin}`}>
                {children}
            </div>
        </>
    )
}