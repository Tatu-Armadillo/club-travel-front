import { BoxInfo, BoxText, InfoImg, BoxImg } from "./cardLine.styled";

type Props = {
    paragraph: string,
    img: string,
};

export const CardLine = ({ paragraph, img }: Props) => {
    return (
        <BoxInfo>
            <BoxText>
                <p>{paragraph}</p>
            </BoxText>
            <BoxImg>
                <InfoImg src={img} />
            </BoxImg>
        </BoxInfo>
    );
};