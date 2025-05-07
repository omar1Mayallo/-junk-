import { Link, LinkProps } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { LinkI } from "..";

type CombinedProps = LinkI & LinkProps;

const NavLink = ({ name, url, ...restLinkProps }: CombinedProps) => {
  const pathname = usePathname();

  return (
    <Link
      color={url === pathname ? "primary" : "foreground"}
      href={url}
      {...restLinkProps}
    >
      {name}
    </Link>
  );
};

export default NavLink;
