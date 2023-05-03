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
                <input type="text" {...register("newsDto.title")} />
            </label>
            <label>
                texto
                <input type="text" {...register("newsDto.text")} />
            </label>
            <label>
                imagem
                <input type="text" {...register("newsDto.imageLink")} />
            </label>
            <Button typeButton={"submit"} text={"enviar"} classButton="text-white capitalize" funcClick={handleSubmit(handlePost)} />
        </div>
    )
};
