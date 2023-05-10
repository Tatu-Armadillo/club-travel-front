import { useForm } from "react-hook-form";
import { Button } from "@/shared/Components";
import { INewsWithSubnews, INews } from "@/shared/Interface/INews";
import { NewsService } from "@/shared/services";

export const FormNews = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<INewsWithSubnews>();

    const handlePost = (data: INewsWithSubnews) => {
        const subNewsArr: INews[] = [];
        subNewsArr.push(data.newsDto)
        data.subNews = subNewsArr;

        NewsService.postNews(data);

    };

    return (
        <div>
            <label>
                título
                <input type="text" {...register("newsDto.title", { required: true })} />
                {errors.newsDto?.title && (<span className="capitalize">campo obrigatório!</span>)}
            </label>
            <label>
                texto
                <input type="text" {...register("newsDto.text", { required: true })} />
                {errors.newsDto?.text && (<span className="capitalize">campo obrigatório!</span>)}
            </label>
            <label>
                imagem
                <input type="text" {...register("newsDto.imageLink", { required: true })} />
                {errors.newsDto?.imageLink && (<span className="capitalize">campo obrigatório!</span>)}
            </label>
            <Button typeButton={"submit"} text={"enviar"} classButton="text-white capitalize" funcClick={handleSubmit(handlePost)} />
        </div>
    )
};
