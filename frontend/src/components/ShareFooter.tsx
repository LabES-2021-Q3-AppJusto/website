import { Box, Flex, HStack, Text, Icon } from '@chakra-ui/react'
import { BiUpArrowAlt  } from 'react-icons/bi'
import { Link as ScrollLink } from "react-scroll";
import Container from './Container'
import ShareButton from './ShareButton';
import { useState, useEffect } from 'react';

const ShareFooter: React.FC = () => {
  // state
  const [isTop, setisTop] = useState(false);
  // handlers
  const handleScroll = () => {
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 1000) {
      if (document.documentElement.scrollTop > 600) {
        setisTop(false);
      } else {
        setisTop(true);
      }
    }
  };
  // side effects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener('scroll', handleScroll);
  }, []);
  // UI
  return (
    <Flex
      position={{md: 'fixed'}}
      bottom={{md: '0'}}
      as="div"
      w="100%"
      h="64px"
      bg="black"
      justifyContent="center"
      alignItems="center"
      fontFamily="Barlow"
      zIndex="999"
    >
      <Container
        h="64px"
        p="8px 0"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        color="primary"
      >
        <HStack
          w="100%"
          spacing={4}
          align="center"
        >
          <ShareButton bg="primary" color="black" />
          <Text
            fontSize="15px"
            fontWeight="500"
            display={["none", null, null, "inherit"]}
          >
            Espalhe essa notícia e faça mais gente conhecer esse movimento por uma economia mais justa!
          </Text>
        </HStack>
        {
          !isTop && (
            <Box w="150px">
              <ScrollLink
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Flex
                  direction="row"
                  w="100%"
                  justifyContent="flex-end"
                  alignItems="center"
                  cursor="pointer"
                >
                  <Text
                    display={["none", null, null, "inherit"]}
                    _focus={{outline: "none"}}
                    minW="130px"
                    fontWeight="700"
                  >
                    Voltar para o topo
                  </Text>
                  <Text
                    display={["inherit", null, null, "none"]}
                    _focus={{outline: "none"}}
                    fontWeight="700"
                    mr="4px"
                  >
                    Topo
                  </Text>
                  <Icon
                    as={BiUpArrowAlt}
                    fontWeight="700"
                    width={["32px", null, null, "16px"]}
                    height={["32px", null, null, "16px"]}
                  />
                </Flex>
              </ScrollLink>
            </Box>
          )
        }
      </Container>
    </Flex>
  );
}

export default ShareFooter;
