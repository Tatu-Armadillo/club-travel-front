import { Card } from "./cardAbout.styled";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

type Props = {
    title: string,
    paragraph: string,
};

export const CardAbout = ({ paragraph, title }: Props) => {
    const auth = useContext(AuthContext);
    return (
        <Card theme={auth.theme}>
            <h3>{title}</h3>
            <hr className="my-2 border-slate-500" />
            <p>{paragraph}</p>
        </Card>
    );
};