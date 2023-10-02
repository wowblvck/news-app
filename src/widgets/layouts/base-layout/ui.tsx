import React from 'react';

type BaseLayoutProps = {
  children: React.ReactNode;
  headerSlot: React.ReactNode;
  footerSlot: React.ReactNode;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, headerSlot, footerSlot }) => {
  return (
    <>
      {headerSlot}
      <main>{children}</main>
      {footerSlot}
    </>
  );
};
