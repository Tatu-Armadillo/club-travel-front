import { Routes, Route } from "react-router-dom";

import { Home, About, Infographics, SignIn } from "@/pages";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infographics" element={<Infographics />} />
            <Route path="/signIn" element={<SignIn />} />
        </Routes>
    );
};
