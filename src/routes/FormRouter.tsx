import { RequireAuth } from '@/context/RequireAuth';
import { SelectForm } from '@/pages/SelectForm/selectForm';
import { FormNews } from '@/shared/Components/FormNews/formNews';
import { Routes, Route } from 'react-router-dom';

export const FormRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <RequireAuth>
                        <SelectForm />
                    </RequireAuth>
                }
            ></Route>
            <Route
                path='/formNews'
                element={
                    <RequireAuth>
                        <FormNews />
                    </RequireAuth>
                }
            ></Route>
        </Routes>
    );
};
