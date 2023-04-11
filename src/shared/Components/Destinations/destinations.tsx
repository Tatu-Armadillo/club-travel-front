import { SwiperProps, SwiperSlide } from 'swiper/react';
import { LinkWraperProps } from '../HotItem/hotItem.styled';
import { FaMapSigns } from 'react-icons/fa';
import { Slider, TitleTopic, HotItem } from '@/shared/Components';

export const Destinations = () => {
    const sliderConfig: SwiperProps = {
        spaceBetween: 10,
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
        <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex'>
                <TitleTopic title='destinos' />
                <FaMapSigns size={'2em'} />
            </div>
            <Slider settings={sliderConfig} className={"mt-0"}>
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
                <SwiperSlide>
                    <HotItem title='Lugar 5' config={hotItemConfig} />
                </SwiperSlide>
                <SwiperSlide>
                    <HotItem title='Lugar 6' config={hotItemConfig} />
                </SwiperSlide>
            </Slider>
        </div>
    );
};
