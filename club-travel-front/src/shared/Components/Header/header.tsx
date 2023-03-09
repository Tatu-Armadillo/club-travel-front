import { useState } from "react";
import { Navbar, BoxImages, BoxLogo } from "./header.styled";
import LogoName from "../../img/web3travelclub4.png";
import Logo from "../../img/web3reallogoamarela.png";
import { Link } from "react-router-dom";
import { Button } from "@/shared/Components";
import { IoMdMenu } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";

export const Header = () => {
    const iconSet = <IoMdMenu color="white" className="block h-6 w-6" />;
    const [icon, setIcon] = useState(iconSet);

    type Props = {
        name: string,
        link: string
    };

    const arrItems: Props[] = [
        { name: "início", link: "/" },
        { name: "infográficos", link: "#" },
        { name: "cadastro", link: "#" },
        { name: "sobre nós", link: "/about" },
    ];

    const handleClassHidden = () => {
        const addHidden = document.querySelector("#mobile-menu")?.classList.toggle("hidden");

        const newIcon = <BiMenuAltLeft color="white" className="block h-6 w-6" />;

        addHidden === false ? setIcon(newIcon) : setIcon(iconSet);
    };

    return (
        <header>
            <Navbar>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <Button typeButton="button" classButton="inline-flex items-center justify-center teste rounded-md p-2 text-gray-400 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" text={icon} funcClick={handleClassHidden} />

                        </div>
                        <BoxImages>
                            <Link to="/">
                                <BoxLogo className="hidden lg:block" src={Logo} alt="Your Company" />
                                <BoxLogo className="hidden lg:block" src={LogoName} alt="Your Company" /></Link>
                        </BoxImages>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <BoxImages>
                                <Link to="/">
                                    <BoxLogo className="lg:hidden sm:block hidden" src={Logo} alt="Your Company" />
                                    <BoxLogo className="lg:hidden block" src={LogoName} alt="Your Company" /></Link>
                            </BoxImages>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {arrItems.map((item, key) => {
                                    const { link, name } = item;
                                    return (
                                        <Link to={link} className="capitalize text-gray-300 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-base font-medium" key={key}>{name}</Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden md:hidden sm:hidden hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {arrItems.map((item, key) => {
                            const { link, name } = item;
                            return (
                                <Link to={link} className="capitalize text-center text-gray-300 hover:bg-blue-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium" key={key}>{name}</Link>
                            )
                        })}
                    </div>
                </div>
            </Navbar>
        </header>
    );
};