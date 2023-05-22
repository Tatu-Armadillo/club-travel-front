import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/shared/Components';
import { INewsWithSubnews } from '@/shared/Interface/INews';
import { NewsService } from '@/shared/services';
import { BoxContainer, BoxForms, BoxMiddle, BoxButtons, BoxInput, } from './formNews.styled';
import { useEffect, useState } from 'react';

export const FormNews = () => {
    const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, control, resetField, reset } = useForm<INewsWithSubnews>();

    const [value, setValue] = useState("flex");

    const handlePost = (data: INewsWithSubnews) => {
        NewsService.postNews(data);
        if (isSubmitSuccessful) {
            reset({ newsRecord: { title: "", imageLink: "", text: "" } })
            fields.length = 0
        };
    };

    const { append, remove, fields } = useFieldArray({
        control,
        name: "subNews"
    });

    function addNewNews() {
        append({ title: "", imageLink: "", text: "" });
    };

    useEffect(() => {
        fields.length !== 0 ? setValue("grid") : setValue("flex");
    }, [fields.length])

    return (
        <BoxContainer display={value}>
            <BoxMiddle>
                <h3>Nova Notícia</h3>
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
                        <textarea cols={30} rows={5} {...register("newsRecord.text", { required: true })} />
                        {errors.newsRecord?.text && (<span className="capitalize">campo obrigatório!</span>)}
                    </BoxInput>
                </BoxForms>

                <div className='flex lg:justify-end sm:justify-center justify-center'>
                    <BoxButtons>
                        <Button typeButton={"submit"} text={"enviar"} classButton="text-white bg-green-800 p-2 rounded-md hover:bg-green-900" funcClick={handleSubmit(handlePost)} />

                        <Button typeButton={"submit"} text={"sub notícia"} classButton="text-white bg-blue-800 p-2 rounded-md hover:bg-blue-900" funcClick={() => addNewNews()} />
                    </BoxButtons>
                </div>
            </BoxMiddle>
            {fields.map((field, index) => {
                return (
                    <BoxMiddle key={field.id}>
                        <h3>Nova Sub Notícia</h3>
                        <span></span>
                        <BoxForms>
                            <BoxInput>
                                <label>
                                    título
                                </label>
                                <input type="text" {...register(`subNews.${index}.title`, { required: true })} />
                                {errors.subNews?.[index]?.title && (<span className="capitalize">campo obrigatório!</span>)}
                            </BoxInput>

                            <BoxInput>
                                <label>
                                    imagem
                                </label>
                                <input type="text" {...register(`subNews.${index}.imageLink`)} />
                            </BoxInput>

                            <BoxInput>
                                <label>
                                    texto
                                </label>
                                <textarea cols={30} rows={5} {...register(`subNews.${index}.text`, { required: true })} />
                                {errors.subNews?.[index]?.text && (<span className="capitalize">campo obrigatório!</span>)}
                            </BoxInput>
                        </BoxForms>

                        <div className='flex lg:justify-center sm:justify-center justify-center'>
                            <BoxButtons>
                                {/* <Button typeButton={"submit"} text={"sub notícia"} classButton="text-white bg-blue-800 p-2 rounded-md hover:bg-blue-900" funcClick={() => addNewNews()} /> */}

                                <Button typeButton={"submit"} text={"remover"} classButton="text-white bg-red-800 p-2 rounded-md hover:bg-red-900" funcClick={() => remove(index)} />
                            </BoxButtons>
                        </div>
                    </BoxMiddle>
                )
            })}
        </BoxContainer>
    );
};
