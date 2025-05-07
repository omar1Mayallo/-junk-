import { Button, Link } from "@nextui-org/react";
import React from "react";

const Register = () => {
  return (
    <div>
      <Button
        href="/login"
        as={Link}
        color="primary"
        variant="solid"
        showAnchorIcon={true}
      >
        Login
      </Button>
    </div>
  );
};

export default Register;
