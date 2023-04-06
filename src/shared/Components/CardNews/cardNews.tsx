import { Img, BoxMain, BoxContent, BoxTop, BoxMiddle, BoxBottom } from './cardNews.styled';
import { Button } from '@/shared/Components';

interface CardNewsProps {
    url: string;
    title: string;
    description: string;
}

function limitTxt(data: string): string {
    return data.length > 200 ? data.substring(0, 200) + "..." : data;
};

export const CardNews = ({ url, title, description }: CardNewsProps) => {
    return (
        <section className='border rounded-2xl	 bg-white'>
            <BoxMain>
                <BoxContent>
                    <BoxTop>
                        <h2>{title}</h2>
                        <hr />
                    </BoxTop>

                    <BoxMiddle>
                        <p>{limitTxt(description)}</p>
                    </BoxMiddle>

                    <BoxBottom>
                        <Button typeButton={'button'}
                            text={'ler mais'}
                            classButton={'rounded-md capitalize bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '} />
                    </BoxBottom>
                </BoxContent>

                <Img src={url} alt="imagem" />
            </BoxMain>
        </section>
    );
};
