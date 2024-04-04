import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import TransactionForm from "./component.jsx/TransactionForm";
import FormHeader from "./component.jsx/FormHeader";
import banner from "./assets/banner.jpg";
import Navbar from "./component.jsx/Navbar";
import Footer from "./component.jsx/Footer";

function App() {
  const [isMinimumThan1024] = useMediaQuery("(max-width: 1024px)");
  console.log(isMinimumThan1024);

  return (
    <Box>
      <Navbar />
      <Flex
        direction="row"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        bgColor="#FFFFFF"
      >
        {!isMinimumThan1024 && (
          <Flex
            justifyContent="center"
            alignItems="center"
            width="500px"
            borderRadius="10px"
          >
            <Image src={banner} width="100%" height="50%" alt="Banner pic" />
          </Flex>
        )}
        <Flex
          direction="column"
          gap="30px"
          width={isMinimumThan1024 ? "95%" : "50%"}
          justifyContent="center"
          alignItems="center"
        >
          <FormHeader />
          <TransactionForm />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

export default App;
