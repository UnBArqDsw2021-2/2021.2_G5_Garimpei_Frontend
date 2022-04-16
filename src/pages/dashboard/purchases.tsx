import { Divider, Grid, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../components/DashboardLayout";
import { ProductWithRatingCard } from "../../components/ProductCard/ProductWithRatingCard";

export default function Purchases() {
  return (
    <DashboardLayout>
      <Heading>Minhas compras</Heading>
      <Divider w="full" opacity={1} mt="1rem" mb="2rem" />

      <Grid gap="2rem" mb="3rem">
        <ProductWithRatingCard
          imageURL="http://simpleicon.com/wp-content/uploads/picture.png"
          productName="Nome do produto"
          productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          viverra tortor, ut venenatis turpis. Ut dapibus iaculis diam id
          vestibulum. Morbi efficitur id leo bibendum laoreet. Curabitur
          vehicula lacus id est luctus dignissim."
          purchasedData="03/02/2022"
          rating={4.3}
          hasRating
          isCommunitySale={false}
        />

        <ProductWithRatingCard
          imageURL="http://simpleicon.com/wp-content/uploads/picture.png"
          productName="Nome do produto"
          productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          viverra tortor, ut venenatis turpis. Ut dapibus iaculis diam id
          vestibulum. Morbi efficitur id leo bibendum laoreet. Curabitur
          vehicula lacus id est luctus dignissim."
          purchasedData="03/02/2022"
          rating={4.3}
          hasRating={false}
          isCommunitySale={false}
        />

        <ProductWithRatingCard
          imageURL="http://simpleicon.com/wp-content/uploads/picture.png"
          productName="Nome do produto"
          productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          viverra tortor, ut venenatis turpis. Ut dapibus iaculis diam id
          vestibulum. Morbi efficitur id leo bibendum laoreet. Curabitur
          vehicula lacus id est luctus dignissim."
          purchasedData="03/02/2022"
          rating={2}
          hasRating
          isCommunitySale={false}
        />

        <ProductWithRatingCard
          imageURL="http://simpleicon.com/wp-content/uploads/picture.png"
          productName="Nome do produto"
          productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          viverra tortor, ut venenatis turpis. Ut dapibus iaculis diam id
          vestibulum. Morbi efficitur id leo bibendum laoreet. Curabitur
          vehicula lacus id est luctus dignissim."
          purchasedData="03/02/2022"
          rating={5}
          hasRating
          isCommunitySale={false}
        />
      </Grid>
    </DashboardLayout>
  );
}
