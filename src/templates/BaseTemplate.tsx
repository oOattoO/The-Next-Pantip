import React from 'react';

import NavbarComponent from '@/components/Navbar';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div>
      <div>
        <header>
          <NavbarComponent />
        </header>

        <main className="px-2">
          <div className="flex flex-col">
            <h5 className="mb-2 text-xl font-bold tracking-tight">
              Select Room
            </h5>
            <nav className="overflow-scroll whitespace-nowrap">
              <ul className="flex flex-nowrap">{props.leftNav}</ul>
            </nav>
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
          {props.children}
        </main>
        <footer />
      </div>
    </div>
  );
};

export { BaseTemplate };
