import { ChangeEvent, useState } from "react"

type Props = {
    [key: string]: string;
};

type ReturnType = [
    { values: Props },
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
];

const useForm = (): ReturnType => {
    const [values, setValue] = useState<Props>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const auxValues = { ...values };
        auxValues[e.currentTarget.name] = e.target.value;
        setValue(auxValues);
    }
    return [{ values }, handleChange];
};

export default useForm;