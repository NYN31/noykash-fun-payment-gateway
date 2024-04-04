import { Flex, Text } from "@chakra-ui/react";
import { textData } from "../constants/text";

const FormHeader = () => {
  const { bkashPaymentGateway, payWithBkashANdHaveFun } = textData;
  return (
    <Flex direction="column" align="center" gap="2px">
      <Text fontSize={["28px", "36px"]} color="#e2136e">
        {bkashPaymentGateway}
      </Text>
      <Text fontSize={["14px", "18px"]} color="gray.800">
        {payWithBkashANdHaveFun}
      </Text>
    </Flex>
  );
};

export default FormHeader;
