import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  return (
    <Navbar className="bg-purple-900">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          width={50}
          height={32}
          src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          The Next Pantip
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
