import { Outlet, NavLink } from "react-router-dom";
import { AppShell, Container, Group } from "@mantine/core";

export default function Layout() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container size="md" py="md">
          <Group spacing="lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
