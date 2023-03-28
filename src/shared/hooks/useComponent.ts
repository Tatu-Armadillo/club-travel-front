import { useState, MouseEvent } from 'react';

export const useComponent = (list: JSX.Element[]) => {
    const [currentItem, setCurrentItem] = useState(0);

    const changeComponent = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === 'newsButton') setCurrentItem(1);
        if (e.currentTarget.name === 'destinationButton') setCurrentItem(2);
    };
    return {
        currentItem,
        currentComponent: list[currentItem],
        changeComponent,
    };
};
