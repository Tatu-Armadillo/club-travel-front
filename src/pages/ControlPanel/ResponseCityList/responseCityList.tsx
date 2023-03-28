import { ReactNode } from 'react';
export interface ResponseCityListProps {
    children: ReactNode;
}
export const ResponseCityList = ({ children }: ResponseCityListProps) => {
    return (
        <ul className='absolute z-10 w-44 h-36 overflow-y-auto rounded-md bg-white flex flex-col items-center p-1'>
            {children}
        </ul>
    );
};
