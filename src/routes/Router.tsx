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
            <Route path='/clubTravel' element={<Home />} />
            <Route path='/clubTravel/about' element={<About />} />
            <Route
                path='/clubTravel/infographics'
                element={
                    <RequireAuth>
                        <Infographics />
                    </RequireAuth>
                }
            />
            <Route path='/clubTravel/signIn' element={<SignIn />} />
            <Route
                path='/clubTravel/controlPanel'
                element={
                    <RequireAuth>
                        <ControlPanel />
                    </RequireAuth>
                }
            />
            <Route path='*' element={<NotFound />} />
            <Route path='/clubTravel/notice' element={<Notice />} />
        </Routes>
    );
};
