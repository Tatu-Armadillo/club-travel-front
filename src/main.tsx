import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Header } from '@/shared/Components';
import './styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
