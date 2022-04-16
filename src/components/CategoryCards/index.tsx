import { Link, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CategoryCard } from "./CategoryCard";

export function CategoryCards() {
  const router = useRouter();

  function handleRedirectToProductCategory() {
    router.push("/products/category/camisetas");
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="1.5rem">
      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_clothes.png">
          Roupas
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_shirts.png">
          Camisetas
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_sweatshirt.png">
          Moletons
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_glasses.png">
          Óculos
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_accessory.png">
          Acessórios
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_purse.png">
          Bolsas
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_shoes.png">
          Calçados
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_dresses.png">
          Vestidos
        </CategoryCard>
      </Link>

      <Link onClick={() => handleRedirectToProductCategory()}>
        <CategoryCard imageUrl="/images/category_pants.png">
          Calças
        </CategoryCard>
      </Link>
    </SimpleGrid>
  );
}
