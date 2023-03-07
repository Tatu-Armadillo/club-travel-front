import { SwiperProps, SwiperSlide } from 'swiper/react';
import { HotItem } from '../HotItem';

import { Slider } from '../Slider';
export const Destinations = () => {
    const sliderConfig: SwiperProps = {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: true,
        pagination: {
            clickable: true,
        },
    };
    return (
        <div>
            <h1 className='text-3xl'>Destinos</h1>
            <Slider settings={sliderConfig}>
                <SwiperSlide>
                    <HotItem />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem />
                </SwiperSlide>
            </Slider>
        </div>
    );
};
