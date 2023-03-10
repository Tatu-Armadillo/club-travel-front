import { Slider } from '../Slider/slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { HotItem } from '../HotItem/hotItem';
import { LinkWraperProps } from '../HotItem/styles';
import { TitleTopic } from '../TitleTopic/titleTopic';

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
            <TitleTopic title='Destaques' />
            <Slider settings={sliderConfig}>
                <SwiperSlide>
                    <HotItem title='Lugar 1' config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem title='Lugar 2' config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem title='Lugar 3' config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem title='Lugar 4' config={hotItemConfig} />
                </SwiperSlide>
            </Slider>
        </div>
    );
};
