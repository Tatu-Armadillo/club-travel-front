import { Routes, Route } from 'react-router-dom';
import {
    Home,
    About,
    Infographics,
    SignIn,
    ControlPanel,
    NotFound,
} from '@/pages';
import { RequireAuth } from '@/context/RequireAuth';
import { Notice } from '@/pages/Notice/notice';

export const Router = () => {
    return (
        <Routes>
            <Route path='/club-travel-front' element={<Home />} />
            <Route path='/club-travel-front/about' element={<About />} />
            <Route
                path='/club-travel-front/infographics'
                element={
                    <RequireAuth>
                        <Infographics />
                    </RequireAuth>
                }
            />
            <Route path='/club-travel-front/signIn' element={<SignIn />} />
            <Route
                path='/club-travel-front/controlPanel'
                element={
                    <RequireAuth>
                        <ControlPanel />
                    </RequireAuth>
                }
            />
            <Route path='*' element={<NotFound />} />
            <Route path='/club-travel-front/notice' element={<Notice />} />
        </Routes>
    );
};
