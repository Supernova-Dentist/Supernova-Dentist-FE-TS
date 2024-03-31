import React from 'react';
import MainNav from '../MainNav/MainNav';
import Footer from '../Footer/Footer';
import CrispChat from '../CrispChat/CrispChat';

type LayoutProps = {
  children: React.ReactNode; // This allows any valid React node(s) to be passed as children
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <MainNav />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <div aria-hidden='true'>
        <CrispChat />
      </div>
    </div>
  );
};

export default Layout;
