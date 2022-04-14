import { SimpleGrid } from "@chakra-ui/react";
import { CategoryCard } from "./CategoryCard";

export function CategoryCards() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="1.5rem">
      <CategoryCard imageUrl="/images/category_clothes.png">
        Roupas
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_shirts.png">
        Camisetas
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_sweatshirt.png">
        Moletons
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_glasses.png">
        Óculos
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_accessory.png">
        Acessórios
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_purse.png">Bolsas</CategoryCard>

      <CategoryCard imageUrl="/images/category_shoes.png">
        Calçados
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_dresses.png">
        Vestidos
      </CategoryCard>

      <CategoryCard imageUrl="/images/category_pants.png">Calças</CategoryCard>
    </SimpleGrid>
  );
}
