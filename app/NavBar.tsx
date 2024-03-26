"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug className="text-2xl" />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            key={`${href}${label}`}
            className={classNames({
              "hover:text-zinc-700 transition-colors": true,
              "text-zinc-500": currentPath !== href,
              "text-zinc-900": currentPath === href,
            })}
            href={href as string}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
