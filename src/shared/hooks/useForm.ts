import { ChangeEvent, useState } from "react";

type FormValues = {
    [key: string]: string;
};

const useForm = () => {
    const [values, setValues] = useState<FormValues>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const auxValues = { ...values };
        auxValues[e.currentTarget.name] = e.currentTarget.value;
        setValues(auxValues);
    }
    return [{ values }, handleChange]
}

export default useForm;