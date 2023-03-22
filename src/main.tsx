import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Header } from '@/shared/Components';
import './styles/index.css';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <main>
                    <Router />
                </main>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
