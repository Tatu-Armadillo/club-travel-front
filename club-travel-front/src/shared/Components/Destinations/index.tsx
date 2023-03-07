import { SwiperProps, SwiperSlide } from 'swiper/react';
import { HotItem } from '../HotItem';
import { LinkWraperProps } from '../HotItem/styles';

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
    const hotItemConfig: LinkWraperProps = {
        hoverState: true,
    };
    return (
        <div>
            <h1 className='text-3xl'>Destinos</h1>
            <Slider settings={sliderConfig}>
                <SwiperSlide>
                    <HotItem config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem config={hotItemConfig} />
                </SwiperSlide>
            </Slider>
        </div>
    );
};
