import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen selection:bg-red-200 selection:text-red-900">
            <Header />
            <main className="flex-grow">
                <div key={pathname} className="page-transition">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
