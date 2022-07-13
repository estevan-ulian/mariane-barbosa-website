import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  id?: string
  bgSection: 'bg-hero' | 'bg-flower-light' | 'bg-flower-light-reverse' | 'bg-pattern-bals' | 'bg-footer' | 'darkGradient'
  bgPosition: 'bg-left-top' | 'bg-right-top' | 'bg-left' | 'bg-right' | 'bg-center' | 'bg-bottom'
  bgSize?: 'bg-cover' | 'bg-contain' 
  bgRepeat?: boolean
  bgFixed?: boolean
}

export default function Section ({ 
  children, 
  id,
  bgSection, 
  bgPosition,
  bgRepeat, 
  bgFixed, 
  bgSize = 'bg-cover' 
}: SectionProps) {
  
  return (
    <section id={id} className={`
    flex flex-col min-h-screen min-w-full items-start justify-center 
    ${bgSection === 'darkGradient' ? 'bg-gradient-to-b from-accentColor-700 to-accentColor-900' : bgSection} ${bgPosition} ${bgSize} ${bgRepeat ? 'bg-repeat' : 'bg-no-repeat' }
    ${bgFixed ? 'bg-fixed' : ''}
    `}>
      {children}
    </section>
  )
}
