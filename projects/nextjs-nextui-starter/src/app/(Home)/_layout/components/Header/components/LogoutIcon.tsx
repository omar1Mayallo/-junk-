import ConfirmModal from "@/shared/components/Modals/ConfirmModal";
import { Avatar, useDisclosure } from "@nextui-org/react";
import { IoLogOut } from "react-icons/io5";

const LogoutIcon = () => {
  // Handle_Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Handle_Logout
  const handleLogout = () => {
    console.log("Logout");
  };
  return (
    <>
      <Avatar
        className={`cursor-pointer transition-colors duration-300 hover:bg-red-500 hover:text-white`}
        onClick={onOpen}
        color="default"
        size="md"
        showFallback
        fallback={<IoLogOut size={25} />}
      />
      <ConfirmModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onConfirm={handleLogout}
        head={"Confirm Logout"}
        text={
          "Are you sure you want to log out? You will need to sign in again to continue using the application."
        }
        confirmBtnName={"Log Out"}
        confirmBtnVariant={"light"}
        confirmBtnColor={"danger"}
        fullFooter
      />
    </>
  );
};

export default LogoutIcon;
