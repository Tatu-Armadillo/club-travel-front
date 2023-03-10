import { SwiperProps, SwiperSlide } from 'swiper/react';
import { HotItem } from '@/shared/Components';
import { LinkWraperProps } from '../HotItem/hotItem.styled';
import { FaMapSigns } from 'react-icons/fa';
import { Slider } from '@/shared/Components';
import { TitleTopic } from '@/shared/Components';

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
        <div className='p-3'>
            <div className='flex gap-2'>
                <TitleTopic title='destinos' />
                <FaMapSigns size={'2em'} />
            </div>
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
