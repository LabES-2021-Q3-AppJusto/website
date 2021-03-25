import { Container, ContainerProps } from '@chakra-ui/react'

const CustomContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container maxW={{ base: '100%', md: '740px', lg: '900px', xl: '1120px' }} pt="10" {...props}>
      {children}
    </Container>
  );
}

export default CustomContainer;
