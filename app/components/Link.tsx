import React from "react";
import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";

interface LinkProps {
  href: string;

  children: string;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
