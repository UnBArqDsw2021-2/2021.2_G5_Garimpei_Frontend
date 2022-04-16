import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { Rating } from "../Rating";

interface ProductWithRatingCardProps {
  imageURL: string;
  productName: string;
  purchasedData: string;
  productDescription: string;
  hasRating: boolean;
  rating?: number;
  isCommunitySale: boolean;
}

export function ProductWithRatingCard({
  imageURL,
  hasRating,
  productDescription,
  productName,
  purchasedData,
  rating,
  isCommunitySale,
}: ProductWithRatingCardProps) {
  return (
    <Flex shadow="dark-lg" borderRadius="xl">
      <Box flex="1">
        <Image src={imageURL} alt={productName} maxW="230px" />
      </Box>

      <Grid flex="3" placeContent="flex-start" pt="1rem">
        <Text fontSize="2.25rem">{productName}</Text>
        <Text>comprado em: {purchasedData}</Text>
        <Text color="#2B2B2B">{productDescription}</Text>
      </Grid>
      <Divider orientation="vertical" opacity={1} />
      <Grid flex="1" placeContent="center">
        {hasRating ? (
          <Flex flexDirection="column" alignItems="center">
            <Text fontWeight="bold" textAlign="center" fontSize="1.2rem">
              {isCommunitySale ? "Avaliação deste produto" : "Sua avaliação"}
            </Text>
            <Rating score={rating || 0} />
            {isCommunitySale && (
              <Button colorScheme="brand" mt="1rem" w="full">
                Ver detalhes
              </Button>
            )}
          </Flex>
        ) : (
          <Flex flexDirection="column" alignItems="center">
            <Text fontWeight="bold" textAlign="center" fontSize="1.2rem">
              Produto não avaliado
            </Text>
            <Rating score={0} />
            <Button colorScheme="brand" mt="1rem" w="full">
              Avaliar
            </Button>
          </Flex>
        )}
      </Grid>
    </Flex>
  );
}
