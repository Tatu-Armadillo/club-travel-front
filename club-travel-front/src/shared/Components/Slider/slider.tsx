import { Swiper } from 'swiper/react';
import { SliderProps } from '../../Interface/ISlider';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.styles.css';

export const Slider = ({ settings, children }: SliderProps) => {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    );
};
