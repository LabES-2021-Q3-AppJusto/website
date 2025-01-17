import { Box, Flex, Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/index";
import { Product, WithId } from "../../types";
import React from 'react';
import Image from "../Image";
import { getDownloadURL } from "../../utils/businesses";
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import { useRouter } from "next/router";
import NextLink from 'next/link';

interface ProductItemProps {
  businessId: string;
  product: WithId<Product>;
  setIsLoading(): void;
}

export const ProductItem = ({ businessId, product, setIsLoading }: ProductItemProps) => {
  // router
  const { asPath, query } = useRouter();
  // state
  const [imageUrl, setImageUrl] = React.useState<string | null>();
  // helpers
  const mode = query.mode;
  const basePath = mode ? asPath.split('?')[0] : asPath;
  const productLink = mode ?
    `${basePath}/p/${product.id}?mode=${mode}` :
    `${basePath}/p/${product.id}`
  // side effects
  React.useEffect(() => {
    if(!product?.id) return;
    if(!product.imageExists) return;
    (async () => {
      const { storage } = await getFirebaseProjectsClient();
      const imageRef = storage.ref().child(`businesses/${businessId}/products/${product.id}_288x288.jpg`);
      getDownloadURL(imageRef).then(uri => {
        if(!uri || uri === 'not_found') setImageUrl(null);
        else setImageUrl(uri);
      });
    })();
  }, [businessId, product?.id]);
  // UI
  return (
    <NextLink href={productLink}>
      <Flex
        w="100%"
        py="3"
        justifyContent="space-between"
        borderTop="1px solid #F6F6F6"
        cursor="pointer"
        onClick={setIsLoading}
      >
        <Box maxW={{base: '228px', lg: '400px'}}>
          <Text fontSize="15px" lineHeight="21px" fontWeight="500">
            {product.name}
          </Text>
          <Text mt="1" color="#697667" fontSize="13px" lineHeight="18px" fontWeight="500">
            {product.description}
          </Text>
          <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
            {formatCurrency(product.price)}
          </Text>
        </Box>
        {
          imageUrl && (
            <Box position="relative" w="80px" h="80px" bgColor="#F6F6F6" borderRadius="lg" overflow="hidden">
              <Image src={imageUrl} w="80px" h="80px" />
            </Box>
          )
        }
      </Flex>
    </NextLink>
  )
}
