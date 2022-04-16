import { Button, Flex, Link, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlineAdjustments } from "react-icons/hi";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { ProductCard } from "../../../components/ProductCard";

export default function ListProducts() {
  const router = useRouter();

  function handleRedirectToProductDetails() {
    router.push("/products/1");
  }

  return (
    <ContentWrapper>
      <Flex alignItems="center" flexDirection={{ base: "column", lg: "row" }}>
        <Text fontSize="64px" my="1.25rem">
          camisetas
        </Text>

        <Button
          ml={{ base: "0", lg: "auto" }}
          mr={{ base: "0", lg: "12" }}
          h="8"
          rightIcon={<HiOutlineAdjustments />}
          bg="brand.100"
          mb={{ base: "1rem", lg: 0 }}
        >
          Filtros
        </Button>

        <Text mr="2">ordenar por</Text>

        <Select w="auto" h="8" bg="brand.100">
          <option value="option1">Maior Preço</option>
          <option value="option2">Menor Preço</option>
          <option value="option3">Mais Recentes</option>
        </Select>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap="1.5rem"
        my="3rem"
        alignItems="center"
        justifyItems="center"
      >
        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>

        <Link onClick={() => handleRedirectToProductDetails()}>
          <ProductCard imageUrl="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
        </Link>
      </SimpleGrid>
    </ContentWrapper>
  );
}
