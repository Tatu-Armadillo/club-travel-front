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

            <div className="grid grid-rows-4 gap-10 justify-items-center lg:mx-0 mx-10 ">
                <BoxInfo className="lg:flex-row flex flex-col-reverse ">
                    <InfoText className="bg-black text-white lg:rounded-tl-xl lg:rounded-br-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                    <InfoImg src="#" className="bg-amber-500 rounded-tl-xl rounded-br-xl" />
                </BoxInfo>
{/* 
                <BoxInfo>
                    <InfoImg src="#" className="bg-black text-white" />
                    <InfoText className="bg-amber-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                </BoxInfo>

                <BoxInfo>
                    <InfoText className="bg-black col-start-1 col-end-3 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                    <InfoImg src="#" className="bg-amber-500" />
                </BoxInfo>

                <BoxInfo>
                    <InfoImg src="#" className="bg-black text-white" />
                    <InfoText className="bg-amber-500 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Distinctio tempora labore quae laborum nam mollitia beatae iure? Voluptatibus doloremque itaque, distinctio rem saepe sapiente blanditiis cumque qui dolore.</InfoText>
                </BoxInfo> */}
            </div>
        </BoxContainer>
    );
};