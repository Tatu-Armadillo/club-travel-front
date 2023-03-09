import { BoxFooter } from "./footer.styled";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

export const Footer = () => {
    type Props = {
        href: string,
        icon: JSX.Element,
    };

    const sizeIcon: string = "1.3rem";

    const arrAnchor: Props[] = [
        { href: "https://www.instagram.com/agenciadeviagem.eth/", icon: <AiOutlineInstagram size={sizeIcon} /> },
        { href: "https://twitter.com/Web3TravelClub", icon: <AiOutlineTwitter size={sizeIcon} /> },
        { href: "https://api.whatsapp.com/message/C4GH5VQQYFZAD1?autoload=1&app_absent=0", icon: <AiOutlineWhatsApp size={sizeIcon} /> },
        { href: "https://t.me/+e-UE2kn0mGkwZWVh", icon: <FaTelegramPlane size={sizeIcon} /> },
        { href: "https://tiktok.com/@agenciadeviagem.eth", icon: <SiTiktok size={sizeIcon} /> },
        { href: "mailto:agenciadeviagem.eth@gmail.com", icon: <AiOutlineMail size={sizeIcon} /> },
    ];

    return (
        <BoxFooter className="p-4">
            <div className="md:flex md:justify-between mx-auto max-w-7xl">
                <div className="mb-6 md:mb-0 justify-center items-center flex">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                </div>
                <div className="flex space-x-6 items-center sm:mt-0 justify-center">
                    {arrAnchor.map((item, key) => {
                        const { href, icon } = item;
                        return (
                            <a href={href} className="text-white hover:text-gray-900 dark:hover:text-white" key={key}>{icon}</a>
                        )
                    })}
                </div>
            </div>
            <hr className="my-6 sm:mx-auto dark:border-gray-700 " />
            <div className="flex items-center justify-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">© 2023 travel club. todos os direitos reservados.</span>
            </div>
        </BoxFooter>
    );
};