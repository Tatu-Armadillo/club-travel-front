import { BoxContainer, BoxTitle, Card, BoxCards, BoxInfo, InfoText, InfoImg } from "./about.styled";

export const About = () => {
    return (
        <BoxContainer>
            <BoxTitle>
                <h1>Sobre lorem ipsum</h1>
                <p>Conheça mais sobre o grupo Travel</p>
            </BoxTitle>
            <BoxCards className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-4">
                <Card>
                    <h3>title</h3>
                    <hr className="my-2 border-slate-500" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!</p>
                </Card>
                <Card>
                    <h3>title</h3>
                    <hr className="my-2 border-slate-500" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!</p>
                </Card>
                <Card>
                    <h3>title</h3>
                    <hr className="my-2 border-slate-500" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus amet dolor earum pariatur aliquid laboriosam nam repellat repudiandae consequatur voluptatum alias tempore officia, ut facere sequi nihil quo delectus!</p>
                </Card>
            </BoxCards>

            <div className="grid grid-rows-4 gap-10">
                <BoxInfo className="border border-black grid grid-cols-3">
                    <InfoText className="bg-black col-start-1 col-end-3 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                    <InfoImg src="#" className="bg-amber-500" />
                </BoxInfo>

                <BoxInfo className="border border-black grid grid-cols-3">
                    <InfoImg src="#" className="bg-black col-start-1 text-white" />
                    <InfoText className="bg-amber-500 col-start-2 col-end-4">1</InfoText>
                </BoxInfo>

                <BoxInfo className="border border-black grid grid-cols-3">
                    <InfoText className="bg-black col-start-1 col-end-3 text-white">1</InfoText>
                    <InfoImg src="#" className="bg-amber-500" />
                </BoxInfo>
                <BoxInfo className="border border-black grid grid-cols-3">
                    <InfoImg src="#" className="bg-black col-start-1 text-white" />
                    <InfoText className="bg-amber-500 col-start-2 col-end-4">1</InfoText>
                </BoxInfo>
            </div>
        </BoxContainer>
    );
};