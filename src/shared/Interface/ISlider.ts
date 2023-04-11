import { SwiperProps } from 'swiper/react';
import { ReactNode } from 'react';

export interface ISlider {
    settings: SwiperProps;
    children?: ReactNode;
    className?: string,
}
