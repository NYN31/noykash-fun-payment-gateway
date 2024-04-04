import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import TransactionForm from "./component.jsx/TransactionForm";
import FormHeader from "./component.jsx/FormHeader";
import banner from "./assets/banner.svg";
import Navbar from "./component.jsx/Navbar";
import Footer from "./component.jsx/Footer";

function App() {
  const [isMinimumThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Box>
      <Navbar />
      <Box py={[100, 120, 140, 140, 0]}>
        <Flex
          direction={["column", "column", "column", "row"]}
          height="100vh"
          justifyContent="center"
          alignItems="center"
          bgColor="#FFFFFF"
        >
          <Flex justifyContent="center" alignItems="center" borderRadius="10px">
            <Image
              src={banner}
              width={["350px", "450px", "500px", "550px"]}
              alt="Banner pic"
            />
          </Flex>

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
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
