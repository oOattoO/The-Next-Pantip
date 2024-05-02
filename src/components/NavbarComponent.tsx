'use client';

import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchIcon } from '@nextui-org/shared-icons';
import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Home',
    'My Feed',
    'Pantip Pick',
    'Pantip Hitz',
    'Explore',
    'แลกพอยต์',
    'กิจกรรมพันทิป',
  ];
  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Pantip</p>
      </NavbarBrand>
      <Input
        fullWidth
        className="flex sm:hidden"
        placeholder="Type anything you want"
        // variant="bordered"
        radius="full"
        startContent={<SearchIcon />}
      />
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/dashboard">
            เข้าสู่ระบบ / สมัครสมาชิก
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item}>
            <Link
              color={index === 0 ? 'primary' : 'foreground'}
              className="w-full"
              href="/"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
