import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  id?: string
  height: 'full' | 'py'
  bgSection?: 'bg-whiteColor' | 'bg-hero' | 'bg-flower-light' | 'bg-flower-light-reverse' | 'bg-pattern-balls' | 'bg-footer' | 'darkGradient'
  bgPosition?: 'bg-left-top' | 'bg-right-top' | 'bg-left' | 'bg-right' | 'bg-center' | 'bg-bottom'
  bgSize?: 'bg-cover' | 'bg-contain' 
  bgRepeat?: boolean
  bgFixed?: boolean
}

export default function Section ({ 
  children, 
  id,
  bgSection, 
  bgPosition = 'bg-center',
  bgRepeat, 
  bgFixed, 
  bgSize = 'bg-cover',
  height,
}: SectionProps) {
  
  return (
    <>
      <section id={id} className={`
      flex flex-col min-w-full items-start justify-center 
      ${height === 'full' ? 'min-h-screen' : 'py-9'}
      ${bgSection === 'darkGradient' ? 'bg-gradient-to-b from-accentColor-700 to-accentColor-900' : bgSection} ${bgPosition} ${bgSize} ${bgRepeat ? 'bg-repeat' : 'bg-no-repeat' }
      ${bgFixed ? 'bg-fixed' : ''} 
      `}>
        {children}
      </section>
    </>
  )
}
