import { Slider, TitleTopic, HotItem } from '@/shared/Components';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { LinkWraperProps } from '../HotItem/hotItem.styled';
import { GiPalmTree } from 'react-icons/gi';

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
        <div className='p-3'>
            <div className='flex gap-2'>
                <TitleTopic title='destaques' />
                <GiPalmTree size={'2em'} color={'green'} />
            </div>

            <span></span>
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
