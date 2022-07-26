import { ReactNode } from "react"

interface SubtitleProps {
    content: ReactNode
    textColor: 'white' | 'secondary'
}

export default function Subtitle({ content, textColor }: SubtitleProps) {
    
    return (
        <h3 className={`${textColor === 'white' ? 'text-whiteColor' : 'text-secondaryColor-700'} uppercase text-sm font-bold mb-2`} >{content}</h3>
    )
}