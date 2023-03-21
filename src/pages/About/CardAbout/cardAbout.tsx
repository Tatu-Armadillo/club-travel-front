import { Card } from "./cardAbout.styled";

type Props = {
    title: string,
    paragraph: string,

}

export const CardAbout = ({ paragraph, title }: Props) => {
    return (
        <Card>
            <h3>{title}</h3>
            <hr className="my-2 border-slate-500" />
            <p>{paragraph}</p>
        </Card>
    );
};