interface TextContrastProps {
    children: string
    block?:boolean
    className?: string
}

export default function TextContrast({ children, block, className }:TextContrastProps) {
    return (
        <span className={`text-secondaryColor-700 mb-4 ${block && 'block'} ${className}`}>
            {children}
        </span>
    )
}