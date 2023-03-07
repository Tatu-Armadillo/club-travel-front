import React, { ReactNode } from 'react';
import { GridContainer } from './style';

interface MainProps {
    childrens: ReactNode[];
}
export const Main = ({ childrens }: MainProps) => {
    return <GridContainer>{childrens}</GridContainer>;
};
