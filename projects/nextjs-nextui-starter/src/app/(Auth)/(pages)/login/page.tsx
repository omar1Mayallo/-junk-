import { Link, Button } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="">
      <Button
        href="/register"
        as={Link}
        color="primary"
        variant="solid"
        showAnchorIcon={true}
      >
        Register
      </Button>
      <Button
        href="/contacts"
        as={Link}
        color="primary"
        variant="solid"
        showAnchorIcon={true}
      >
        Contacts
      </Button>
    </main>
  );
}
