import { Flex } from "@chakra-ui/react";
import { textData } from "../constants/text";

function Footer() {
  const { footerText } = textData;

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
      bottom={0}
      width="100%"
      bgColor="#f4f4f5"
    >
      {footerText}
    </Flex>
  );
}

export default Footer;
