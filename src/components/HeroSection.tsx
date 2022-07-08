interface HeroSectionProps {
  children: any
}

export default function HeroSection (props: HeroSectionProps) {
  
  return (
    <section className={`
    flex flex-col min-h-screen min-w-full items-start justify-center 
    bg-hero bg-cover bg-left-top
    mt-[-80px]
    `}>
      {props.children}
    </section>
  )
}
