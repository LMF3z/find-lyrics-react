import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="container w-full min-h-screen p-5 flex flex-col justify-start items-center">
      {children}
    </div>
  );
};

export default MainLayout;
