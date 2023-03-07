import { Slider } from '../Slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { HotItem } from '../HotItem';
import { LinkWraperProps } from '../HotItem/styles';

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
    const hotItemConfig: LinkWraperProps = {
        hoverState: false,
    };
    return (
        <div>
            <h1 className='text-center text-3xl'>Destaques</h1>
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
