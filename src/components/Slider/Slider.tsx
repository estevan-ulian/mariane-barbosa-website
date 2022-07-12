import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
    className: string
}

export default function Slider({ children, settings, className}: SliderProps) {
    
    return (
            <Swiper modules={[Navigation, Pagination, A11y]} {...settings} className={className}>
                {children}
            </Swiper>
    )
}