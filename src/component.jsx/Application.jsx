import { Flex, Text } from "@chakra-ui/react";
import { ApplicationMessage } from "./ApplicationMessage";

const Application = () => {
  return (
    <Flex borderColor="#DDDDDD" borderRadius="6px" borderWidth={1}>
      <Flex
        direction="column"
        pt={{ lg: 2, base: 4 }}
        pl={{ lg: 2, base: 4 }}
        pr={{ lg: 2, base: 4 }}
        pb={{ lg: 2, base: 2 }}
        fontSize="14px"
        width="100%"
      >
        <Text dangerouslySetInnerHTML={{ __html: ApplicationMessage }} />
      </Flex>
    </Flex>
  );
};

export default Application;
