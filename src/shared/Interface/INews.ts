export interface INewsWithSubnews {
    newsRecord: INews
    subNews?: INews[]
};

export interface INews {
    title: string,
    text: string,
    imageLink: string
}