import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .swiper-pagination-bullet-active {
        background-color: #F29799;
    }

    .swiper-button-prev::after, .swiper-button-next::after {
        color: #F29799;    
        font-size: 24px;
        font-weight: bold;
    }

    .swiper-button-next {
        position: absolute;
        top: 40%;
        right: 0;
    }

    .swiper-button-prev {
        position: absolute;
        top: 40%;
        left: 0;
    }
`;