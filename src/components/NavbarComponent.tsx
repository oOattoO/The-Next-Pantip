'use client';

import {
  Image,
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
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Pantip</p>
      </NavbarBrand>
      <Input
        placeholder="Type anything you want"
        variant="bordered"
        color="default"
        radius="md"
        endContent={<Image src="/assets/icons/search.svg" />}
      />
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            ตั้งกระทู้
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" aria-current="page">
            คอมมูนิตี้
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
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
