import React from 'react';

import HeaderComponent from '@/components/TestNavbar';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div>
      <div>
        <HeaderComponent />
        <main className="px-2">
          <div className="flex flex-col">
            <ul className="flex flex-nowrap">{props.leftNav}</ul>
            <nav>{props.rightNav}</nav>
          </div>
          {props.children}
        </main>
        <footer />
      </div>
    </div>
  );
};

export { BaseTemplate };
