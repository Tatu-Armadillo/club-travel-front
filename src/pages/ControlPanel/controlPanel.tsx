import React from 'react';
import { SelectForm } from '@/shared/Components';
import { useComponent } from '@/shared/hooks';
import { FormNews } from './FormNews/formNews';
import { FormDestinations } from './FormDestinations/formDestinations';
import { ButtonBackHome } from '@/shared/Components/ButtonBackHome/buttonBackHome';

export const ControlPanel = () => {
    const componentList = [
        <SelectForm
            externalFunc={(e) => {
                changeComponent(e);
            }}
        />,
        <FormNews />,
        <FormDestinations />,
    ];

    const { currentComponent, currentItem, changeComponent, backHome } = useComponent(componentList);
    return (
        <React.Fragment>
            {currentItem == 0 ? null : (
                <ButtonBackHome externalFunc={backHome} />
            )}
            {currentComponent}
        </React.Fragment>
    );
};
