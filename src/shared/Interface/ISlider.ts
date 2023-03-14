import { SwiperProps } from 'swiper/react';

import { ReactNode } from 'react';

// Ajustar para o mesmo nome do arquivo ou da interface
export interface SliderProps {
    settings: SwiperProps;
    children?: ReactNode;
}
