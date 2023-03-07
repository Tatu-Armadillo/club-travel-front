import { Navbar } from "./header.styled";

export const Header = () => {
    return (
        <header>
            <Navbar className="bg-red-500 grid grid-cols-3">
                <div className="border">1</div>
                <div className="border">2</div>
                <div className="border">3</div>
            </Navbar>
        </header>
    );
};