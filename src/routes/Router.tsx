import { Routes, Route } from 'react-router-dom';
import { Home, About, Infographics, SignIn, ControlPanel, NotFound } from '@/pages';
import { RequireAuth } from '@/context/RequireAuth';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route
                path='/infographics'
                element={
                    <RequireAuth>
                        <Infographics />
                    </RequireAuth>
                }
            />
            <Route path='/signIn' element={<SignIn />} />
            <Route
                path='/controlPanel'
                element={
                    <RequireAuth>
                        <ControlPanel />
                    </RequireAuth>
                }
            />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};
