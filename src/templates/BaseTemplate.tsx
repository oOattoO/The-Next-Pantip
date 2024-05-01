import React from 'react';

import FullSearch from '@/components/FullSearch';
import HeaderComponent from '@/components/NavbarComponent';

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
        <FullSearch />
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
