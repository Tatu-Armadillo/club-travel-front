import { BoxInfo, BoxText, InfoImg, BoxImg } from "./cardLine.styled";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

type Props = {
    paragraph: string,
    img: string,
};

export const CardLine = ({ paragraph, img }: Props) => {
    const auth = useContext(AuthContext);

    return (
        <BoxInfo theme={auth.theme}>
            <BoxText>
                <p>{paragraph}</p>
            </BoxText>
            <BoxImg>
                <InfoImg src={img} />
            </BoxImg>
        </BoxInfo>
    );
};