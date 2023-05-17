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
import { useComponent } from '@/shared/hooks';
import { SubnewsModal } from './SubnewsModal/subnewsModal';

export const FormNews = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<INewsWithSubnews>();

    const handlePost = (data: INewsWithSubnews) => {
        const subNewsArr: INews[] = [];
        subNewsArr.push(data.newsDto);
        data.subNews = subNewsArr;
        NewsService.postNews(data).then(() => {
            // toast.success('Cadastrado com Sucesso!', {
            //     position: "top-right",
            //     autoClose: 1000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
        });
    };

    return (
        <BoxContainer>
            <BoxMiddle>
                <h3>Cadastro de Notícia</h3>
                <span></span>
                <BoxForms>
                    <BoxInput>
                        <label>título</label>
                        <input
                            type='text'
                            {...register('newsDto.title', { required: true })}
                        />
                        {errors.newsDto?.title && (
                            <span className='capitalize'>
                                campo obrigatório!
                            </span>
                        )}
                    </BoxInput>

                    <BoxInput>
                        <label>texto</label>
                        <input
                            type='text'
                            {...register('newsDto.text', { required: true })}
                        />
                        {errors.newsDto?.text && (
                            <span className='capitalize'>
                                campo obrigatório!
                            </span>
                        )}
                    </BoxInput>

                    <BoxInput>
                        <label>imagem</label>
                        <input
                            type='text'
                            {...register('newsDto.imageLink', {
                                required: true,
                            })}
                        />
                        {errors.newsDto?.imageLink && (
                            <span className='capitalize'>
                                campo obrigatório!
                            </span>
                        )}
                    </BoxInput>
                </BoxForms>

                <div className='flex lg:justify-end sm:justify-center justify-center'>
                    <BoxButtons>
                        <Button
                            typeButton={'submit'}
                            text={'enviar'}
                            classButton='text-white bg-green-800 p-2 rounded-md hover:bg-green-900'
                            funcClick={handleSubmit(handlePost)}
                        />

                        <Button
                            classButton='text-white p-2 bg-red-700 rounded-md hover:bg-red-800'
                            typeButton='button'
                            text={'cancelar'}
                        />
                    </BoxButtons>
                </div>
            </BoxMiddle>
            <SubnewsModal />
        </BoxContainer>
    );
};
