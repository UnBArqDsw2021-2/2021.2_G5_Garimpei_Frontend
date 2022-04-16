import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { ProductCard } from "../../../components/ProductCard";

export default function CommunityProducts() {
  const router = useRouter();

  function handleRedirectToProductDetails() {
    router.push("/products/1");
  }

  return (
    <ContentWrapper>
      <Image
        src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        alt="Banner da Comunidade X"
        w="full"
        height="15rem"
      />

      <Flex
        mt="4rem"
        justifyContent="space-between"
        alignItems="center"
        w="full"
      >
        <Flex alignItems="center" gap="1rem">
          <Image
            src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg"
            alt="Comunidade X"
            w="150px"
            h="150px"
            objectFit="cover"
            rounded="full"
          />
          <Box>
            <Text fontWeight="bold" fontSize="1.5rem">
              Nome comunidade
            </Text>
            <Text>Localização</Text>
          </Box>
        </Flex>

        <Text
          maxW="620px"
          bg="rgba(219, 47, 67, 0.26)"
          p="1rem"
          borderRadius="lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          viverra tortor, ut venenatis turpis. Ut dapibus iaculis diam id
          vestibulum. Morbi efficitur id leo bibendum laoreet. Curabitur
          vehicula lacus id est luctus dignissim. Pellentesque accumsan, odio
          finibus fermentum tempus, neque dui consectetur leo, nec gravida leo
          ante a augue. Quisque facilisis eleifend eros sed imperdiet. Phasellus
          pulvinar et arcu vel euismod.
        </Text>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap="1.5rem"
        my="5rem"
        alignItems="center"
        justifyItems="center"
        w="full"
      >
        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()} w="full">
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>
      </SimpleGrid>
    </ContentWrapper>
  );
}
