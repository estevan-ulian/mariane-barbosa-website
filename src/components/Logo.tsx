import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { LogoLight, LogoDark } from "../data/content";


interface LogoProps {
    width: number
    height: number
    logoDark?: boolean
    onClick?: () => void
}

export default function Logo({ width, height, logoDark, onClick }: LogoProps) {
    
    return (
        <>
            <Link href='/' onClick={onClick} passHref>
                <LogoContainer>
                    <Image 
                        src={logoDark ? LogoDark : LogoLight} 
                        alt='Logo Mariane Barbosa'
                        width={width}
                        height={height}
                    />
                </LogoContainer>          
            </Link>
        </>
    )
}

const LogoContainer = tw.a`
        relative flex items-center justify-start hover:animate-pulse
    `