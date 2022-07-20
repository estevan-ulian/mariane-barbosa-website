interface TextContrastProps {
    children: string
    block?:boolean
}

export default function TextContrast({ children, block }:TextContrastProps) {
    return (
        <span className={`text-secondaryColor-700 mb-4 ${block && 'block'}`}>
            {children}
        </span>
    )
}