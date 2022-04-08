import { Divider, Grid, Heading } from "@chakra-ui/react";
import { CommunityUser } from "../../components/CommunityUser";
import { DashboardLayout } from "../../components/DashboardLayout";

export default function ManageComunity() {
  return (
    <DashboardLayout>
      <Heading>Gerenciar comunidade</Heading>

      <Divider w="full" opacity={1} />

      <Grid
        gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
        rowGap="1.5rem"
      >
        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />

        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />

        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />

        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />
        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />
        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />
        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />
        <CommunityUser
          userID="1"
          username="Segun Adebayo"
          avatarURL="https://bit.ly/sage-adebayo"
        />
      </Grid>
    </DashboardLayout>
  );
}
