import { BoxContainer, BoxTitle, Card } from "./about.styled";

export const About = () => {
    return (
        <BoxContainer>
            <BoxTitle>
                <h1>Sobre a Travel Club</h1>
                <p>Conheça mais sobre o grupo Travel</p>
            </BoxTitle>
            <div className="grid lg:grid-cols-3 justify-items-center grid-cols-1 lg:gap-0 gap-4 py-10">
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
            </div>
        </BoxContainer>
    );
};