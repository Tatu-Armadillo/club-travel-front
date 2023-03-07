import { Slider } from '../Slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { HotItem } from '../HotItem';

export const Highlights = () => {
    const sliderConfig: SwiperProps = {
        spaceBetween: 50,
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: false,
        pagination: {
            clickable: true,
        },
    };
    return (
        <div>
            <h1 className='text-center text-3xl'>Destaques</h1>
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
