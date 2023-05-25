import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import SignIn from "./SignIn";
import { HamburgerIcon } from "@chakra-ui/icons";
import Menu from "./Menu";
import { useUserContext } from "../contexts/userContext";
import { logoutAxios } from "../lib/apiFuncrtionality";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { userDetails, setUserDetails, isUserLogged, setIsUserLogged } = useUserContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const isLoggedOut = await logoutAxios();
    console.log("isLoggedOut", isLoggedOut);
    setIsUserLogged(false);
    setShowLoginModal(false);
    setUserDetails({});
    navigate("/");
  };

  return (
    <Flex p="1rem" justifyContent="space-between">
      <HamburgerIcon fontSize="2rem" onClick={onOpen} />
      <Menu onClose={onClose} isOpen={isOpen} />

      {isUserLogged && userDetails ? (
        <Button onClick={(e) => handleLogout(e)}>Log out</Button>
      ) : (
        <>
          <Button onClick={() => setShowLoginModal(true)} backgroundColor="rgb(64, 233, 187)">Sign In/Up</Button>
        </>
      )}
      <SignIn
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </Flex>
  );
}

export default Navbar;
