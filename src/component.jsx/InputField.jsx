import { Box, Flex, Input } from "@chakra-ui/react";

const InputField = ({ label, placeholder, value, onChangeSenderPhone }) => {
  return (
    <Flex direction="column">
      <Box my="6px" color="gray.800" fontSize={["14px", "16px"]}>
        {label}
      </Box>

      <Input
        value={value}
        placeholder={placeholder}
        color="#334155"
        border="1px"
        borderColor="#DDD"
        height="42px"
        borderRadius="5px"
        onChange={onChangeSenderPhone}
        _placeholder={{ color: "gray.500" }}
      />
    </Flex>
  );
};

export default InputField;
