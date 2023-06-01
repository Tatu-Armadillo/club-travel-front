import { ICity } from "@/shared/Interface";

export interface ResponseCityItemProps extends ICity {
    externalFunc: (cityName: string) => void;
}

export const ResponseCityItem = ({
    idCity,
    name,
    externalFunc,
}: ResponseCityItemProps) => {
    return (
        <li
            className='w-full p-1 hover:border-b-2 hover:cursor-pointer'
            key={idCity}
            onClick={() => externalFunc(name)}
        >
            {name}
        </li>
    );
};
