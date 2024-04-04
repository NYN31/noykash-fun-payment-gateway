import { Flex, Image, Spacer } from "@chakra-ui/react";
import banner from "../assets/logo.svg";

function Navbar() {
  return (
    <Flex
      height={70}
      color="#374151"
      fontSize="16px"
      justify="center"
      alignItems="center"
      pos="fixed"
      left={0}
      right={0}
      width="100%"
      bgColor="#f4f4f5"
      px="40px"
    >
      <Image src={banner} width="140px" alt="Logo" />
      <Spacer />
    </Flex>
  );
}

export default Navbar;
