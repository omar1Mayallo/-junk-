import { Link, NavbarBrand } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <NavbarBrand as={Link} href={"/"} className="s max-w-fit">
      <Image src={"/logo/logo.png"} alt="Logo" width={35} height={35} />
    </NavbarBrand>
  );
};

export default Logo;
