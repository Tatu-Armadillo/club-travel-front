import { BoxContainer, BoxTitle, BoxCards } from "./about.styled";
import { CardAbout } from "./CardAbout/cardAbout";
import { CardLine } from "./CardLine/cardLine";
import Logo from "../../assets/img/web3reallogoamarela.png";

export const About = () => {
    type Props = {
        title: string,
        paragraph: string
    };

    type CardLine = {
        text: string,
        image: string
    };

    const cardsArr: Props[] = [
        { title: "title", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!" },
        { title: "title", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!" },
        { title: "title", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!" }
    ];

    const cardLineArr: CardLine[] = [
        { text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.", image: Logo },
        { text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.", image: Logo },
        { text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.", image: Logo },
        { text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.", image: Logo },
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

            <div className="grid grid-rows-4 gap-10 justify-items-center w-full">
                {cardLineArr.map((card, key) => {
                    const { image, text } = card;
                    return (
                        <CardLine paragraph={text} img={image} key={key} />
                    )
                })}
            </div>
        </BoxContainer>
    );
};