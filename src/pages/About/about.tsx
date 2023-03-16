import { BoxContainer, BoxTitle, Card, BoxCards, BoxInfo, InfoText, InfoImg, BoxMainInfo } from "./about.styled";
import Image from "../../shared/img/web3reallogoamarela.png"

export const About = () => {
    return (
        <BoxContainer>
            <BoxTitle>
                <h1>Sobre a travel club</h1>
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

            <BoxMainInfo>
                <div>
                    <BoxInfo className="border border-black flex ">
                        <InfoText className="bg-slate-700">
                            aaaaaaa
                        </InfoText>
                        <InfoImg className="bg-black">
                            aaaaaa
                        </InfoImg>
                    </BoxInfo>
                </div>

                <div>
                    <BoxInfo className="border border-black">
                        <InfoImg>
                            aaaaaaa
                        </InfoImg>
                    </BoxInfo>
                </div>

                <div>
                    <BoxInfo className="border border-black">
                        <InfoImg>
                            <span>Travel</span>
                        </InfoImg>
                    </BoxInfo>
                </div>
            </BoxMainInfo>
        </BoxContainer>
    );
};