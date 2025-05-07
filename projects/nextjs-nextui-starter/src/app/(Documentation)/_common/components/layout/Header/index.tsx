import Link from "next/link";
import ThemeSwitch from "./components/ThemeSwitch";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-content2 py-1">
      <nav className="flex items-center justify-between container">
        <div className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
