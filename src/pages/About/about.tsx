import { BoxContainer, BoxTitle, BoxCards, BoxInfo, InfoText, InfoImg } from "./about.styled";
import { CardAbout } from "@/shared/Components";

export const About = () => {
    type Props = {
        title: string,
        paragraph: string
    };

    const cardsArr: Props[] = [
        { title: "title", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!" },
        { title: "title", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!" },
        { title: "title", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!" }
    ];

    return (
        <BoxContainer>
            <BoxTitle>
                <h1>Sobre lorem ipsum</h1>
                <p>Conheça mais sobre o grupo Travel</p>
            </BoxTitle>
            <BoxCards className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-4">
                {cardsArr.map((card, key) => {
                    const { paragraph, title } = card;
                    return (
                        <CardAbout key={key} paragraph={paragraph} title={title} />
                    )
                })}
            </BoxCards>

            <div className="grid grid-rows-4 gap-10 justify-items-center lg:mx-0 mx-10 ">
                <BoxInfo>
                    <InfoText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                    <InfoImg src="#" className="bg-amber-500" />
                </BoxInfo>

                <BoxInfo className="inverter">
                    <InfoImg src="#" className="leftImg bg-amber-500" />
                    <InfoText className="leftTxt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                </BoxInfo>

                <BoxInfo>
                    <InfoText className="bg-black col-start-1 col-end-3 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                    <InfoImg src="#" className="bg-amber-500" />
                </BoxInfo>

                <BoxInfo className="inverter">
                    <InfoImg src="#" className="leftImg bg-amber-500" />
                    <InfoText className="leftTxt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                </BoxInfo>
            </div>
        </BoxContainer>
    );
};