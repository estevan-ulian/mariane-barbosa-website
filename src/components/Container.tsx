import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-[1360px] mx-auto py-16 md:py-32 px-4">
            {children}
        </div>
    )
}