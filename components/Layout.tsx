
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-background-dark -z-10" />
      
      {children}
      
    </div>
  );
};

export default Layout;
