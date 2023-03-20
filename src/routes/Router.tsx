import { Routes, Route } from 'react-router-dom';

import { Home, About, Infographics, SignIn } from '@/pages';
import { RequireAuth } from '@/context/RequireAuth';
import { ControlPanel } from '@/pages/ControlPanel/controlPanel';
import { NotFound } from '@/pages/NotFound/notFound';

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
