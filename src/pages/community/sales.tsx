import { Divider, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../components/DashboardLayout";

export default function CommunitySales() {
  return (
    <DashboardLayout>
      <Heading>Vendas da comunidade</Heading>

      <Divider w="full" opacity={1} />
    </DashboardLayout>
  );
}
