import { useForm } from 'react-hook-form';
import { Button } from '@/shared/Components';
import { INewsWithSubnews, INews } from '@/shared/Interface/INews';
import { NewsService } from '@/shared/services';
import {
    BoxContainer,
    BoxForms,
    BoxMiddle,
    BoxButtons,
    BoxInput,
} from './formNews.styled';
import { SubnewsModal } from './SubnewsModal/subnewsModal';

export const FormNews = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<INewsWithSubnews>();

    const handlePost = (data: INewsWithSubnews) => {
        const subNewsArr: INews[] = [];
        subNewsArr.push(data.newsRecord);
        data.subNews = subNewsArr;
        NewsService.postNews(data);
    };

    const handleShowModal = () => {
        const modal = document.querySelector("#modal");
        modal?.classList.remove("hidden");
    };

    return (
        <BoxContainer>
            <BoxMiddle>
                <h3>Cadastro de Notícia</h3>
                <span></span>
                <BoxForms>
                    <BoxInput>
                        <label>
                            título
                        </label>
                        <input type="text" {...register("newsRecord.title", { required: true })} />
                        {errors.newsRecord?.title && (<span className="capitalize">campo obrigatório!</span>)}
                    </BoxInput>

                    <BoxInput>
                        <label>
                            imagem
                        </label>
                        <input type="text" {...register("newsRecord.imageLink")} />
                        {errors.newsRecord?.imageLink && (<span className="capitalize">campo obrigatório!</span>)}
                    </BoxInput>

                    <BoxInput>
                        <label>
                            texto
                        </label>
                        <textarea cols={30} rows={5} {...register("newsRecord.text", { required: true })}></textarea>
                        {errors.newsRecord?.text && (<span className="capitalize">campo obrigatório!</span>)}
                    </BoxInput>
                </BoxForms>

                <div className='flex lg:justify-end sm:justify-center justify-center'>
                    <BoxButtons>
                        <Button typeButton={"submit"} text={"enviar"} classButton="text-white bg-green-800 p-2 rounded-md hover:bg-green-900" funcClick={handleSubmit(handlePost)} />

                        <Button typeButton={"submit"} text={"enviar"} classButton="text-white bg-blue-800 p-2 rounded-md hover:bg-blue-900" funcClick={() => handleShowModal()} />
                    </BoxButtons>
                </div>
            </BoxMiddle>
            <SubnewsModal />
        </BoxContainer>
    );
};
