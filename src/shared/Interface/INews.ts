export interface INewsWithSubnews {
    newsDto: INews
    subNews?: INews[]
};

export interface INews {
    title: string,
    text: string,
    imageLink: string
}

// {
//     newsDto: {
//         title: string, 
//         text: string, 
//         img: string, 
//     }, 
//     subNews [
        
//     ]
// }