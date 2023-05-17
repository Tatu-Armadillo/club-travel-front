import { IReference } from './IReference';
export interface IDestination {
    idDestinations?: number;
    title: string;
    nameCity: string;
    references: Array<IReference>;
}
