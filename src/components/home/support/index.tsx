import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image'
import Container from "../../Container";
import Section from "../../Section";
import CustomLinkButton from "../../CustomLinkButton";

const Support: React.FC = () => {
  return (
    <Section
      id="support"
      bg="#F2F6EA"
      p="64px 0"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading 
          as="h2"
          fontSize={["24px", null, null, "48px"]}
          lineHeight={["28,8px", null, null, "48px"]}
          mb={["30px", null, null, "48px"]}
          maxW={["270px", "100%"]}
        >
          Estamos em busca de mais apoio.
          <Box 
            position="relative"
            maxW={["124px", null, "136px", "480px"]}
            mt={["-26px", null, "-28px", "-26px"]}
            ml={["0", null, "226px", "240px"]}
            color="white"
          >
            <Image 
              src="/line-vector-g.svg"
              alt="Linha verde" 
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Text 
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
          mb="32px"
          display={["none", null, null, "block"]}
        >
          O AppJusto está em fase de captação de investimentos e montando uma 
          rede de apoiadores por todo país. <br/>
          Quer nos ajudar nessa missão?
        </Text>
        <Text 
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
          mb="32px"
          display={["block", null, null, "none"]}
        >
          O AppJusto está em fase de captação de investimentos e montando uma 
          rede de apoiadores por todo país. Quer nos ajudar nessa missão?
        </Text>
        <Flex
          flexDir={["column", null, null, "row"]}
          w="100%"
        >
          <CustomLinkButton 
            link="mailto:parceiros@appjusto.com.br"
            linkLabel="Quero ser um parceiro" 
            variant="basic"
            bg="white"    
            maxW={["100%", null, "220px"]}
            mr={["0", "0", "0", "16px"]}
          />
          <CustomLinkButton
            link="mailto:vagas@appjusto.com.br" 
            linkLabel="Quero trabalhar com vocês" 
            variant="basic"
            bg="white"      
            maxW={["100%", null, "220px"]}
          />
        </Flex>
      </Container>
    </Section>
  );
}

export default Support;