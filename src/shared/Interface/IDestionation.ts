export interface IDestination {
    idDestinations?: number,
    title: string,
    nameCity: string,
    references: [
        {
            keyReference: string,
            valor: string,
            imageLink: string
        }
    ]
}
