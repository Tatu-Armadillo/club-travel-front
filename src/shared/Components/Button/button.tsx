type Props = {
    typeButton: "submit" | "button" | "reset" | undefined,
    classButton: string,
    text: string | JSX.Element,
    funcClick?: () => any
};

export const Button = ({ typeButton, classButton, funcClick, text }: Props) => {
    const handleClick = () => {
        if (funcClick) {
            funcClick();
        };
    };

    return <button type={typeButton} className={classButton} onClick={handleClick}>{text}</button>;
};