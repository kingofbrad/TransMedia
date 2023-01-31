import {Text, Heading, VStack, HStack} from "@chakra-ui/react"
import Nav from "./navbar";

function App() {
  return (
    <VStack>
      <Nav/>
      <Heading> 
        TransMedia
      </Heading>
      <Text>
        This is the landing page for the TransMedia page
      </Text>
    </VStack>
  );
}

export default App;


