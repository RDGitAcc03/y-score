import React, { useState } from "react";
import SignUp from "./SignUp";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Input,
  Text,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import styles from "../css/SignIn.module.css";
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { loginAxios } from "../lib/apiFuncrtionality";

const SignIn = ({ showLoginModal, setShowLoginModal }) => {
  const { userDetails, setUserDetails, isUserLogged, setIsUserLogged } =
    useUserContext();

  const navigate = useNavigate();
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await loginAxios(userDetails);
    console.log("user logged", user);
    if (user) {
      setIsUserLogged(true);
      setUserDetails(user);
      console.log("userDetails", userDetails);
      navigate("/dashboard");
    }
  };
  const handleSignupFromLogin = (e) => {
    e.preventDefault();
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  return (
    <>
      {showSignupModal && !isUserLogged && (
        <SignUp
          setShowLoginModal={setShowLoginModal}
          showSignupModal={showSignupModal}
          setShowSignupModal={setShowSignupModal}
        />
      )}
      {showLoginModal && !isUserLogged && (
        <Modal
          border={"1px"}
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <Container>
              <ModalHeader>Login</ModalHeader>
              <ModalBody mb={5}>
                <Input
                  mb={5}
                  autoFocus
                  type="email"
                  placeholder="Email"
                  name={"email"}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name={"password"}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </ModalBody>
              <Flex
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
                pb={5}
              >
                <Box mb={2}>
                  <Button
                    //   className={styles["login-btn"]}
                    colorScheme="blue"
                    type="submit"
                    onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </Button>
                </Box>
                <Box>
                  <Text>
                    Need A New Account?
                    <span
                        className={styles["login-from-sign-up"]}
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={(e) => handleSignupFromLogin(e)}
                    >
                      Sign up now!
                    </span>
                  </Text>
                </Box>
              </Flex>
            </Container>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SignIn;
