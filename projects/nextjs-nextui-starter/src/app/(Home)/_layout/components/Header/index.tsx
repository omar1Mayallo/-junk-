"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import Logo from "./components/Logo";
import LogoutIcon from "./components/LogoutIcon";
import NavLink from "./components/NavLink";

export interface LinkI {
  name: string;
  url?: string;
}
export type HeaderProps = {
  links?: Array<Pick<LinkI, "name" | "url"> & { childs?: LinkI[] }>;
};

export default function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      {/* NAV_START | [MenuToggle] | (size < sm screens) */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* NAV_START | [Logo] | (size < sm screens) */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <Logo />
      </NavbarContent>

      {/* NAV_START | [Logo] | (size < sm screens) */}
      <NavbarContent className="hidden sm:flex" justify="start">
        <Logo />
      </NavbarContent>

      {/* NAV_CENTER | [NavLinks] | (size > sm screens) */}
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {links?.map((link, idx) => (
          <NavbarItem key={idx}>
            <NavLink aria-current="page" {...link} />
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* NAV_END | [ThemeIcon, LogoutIcon] */}
      <NavbarContent justify="end">
        <LogoutIcon />
      </NavbarContent>

      {/* MENU| (size < sm screens) */}
      <NavbarMenu>
        {links?.map((link, idx) => (
          <NavbarMenuItem key={idx} isActive={true}>
            <NavLink className="w-full" size="lg" {...link} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
