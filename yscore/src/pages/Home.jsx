import React from "react";
import { Box, VStack, Image, Heading, Flex } from "@chakra-ui/react";
import Logo from "../images/Logo.svg";
import styles from "../css/Home.module.css";

function HomePage() {
  return (
    <>
      <VStack className={styles["div-container"]}>
        <div className={styles["logo-container"]}>
            <Image className={styles["logo"]} src={Logo} alt="logo" />
        </div>
            <Flex>
            <Box className={styles["top-div-content"]}>
                <Heading>Get Your Credit Score</Heading>
              <Box className={styles["text-div"]}>
              Your credit score can have a big impact on your financial future. Sign up for YScore to get your credit score for free! Join us and get the tools you need to help understand, manage, and master your credit - in under 3 minutes. Checking your credit score with YScore won't hurt your score.
              </Box>
             
            </Box>
            <Image className={styles["home-pic"]} src="https://images.ctfassets.net/h0969ul5arsq/6o2njcGEnFXfgDSeqeoroA/7f27d1ae4190683352caa819c9c13bc2/Important_to_Establish_Credit_While_Young_-_Large_730x300.png" alt="logo" />
            </Flex> 
        
      </VStack>
    </>
  );
}

export default HomePage;
