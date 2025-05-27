import {
  Title,
  Container,
  TextInput,
  Textarea,
  Button,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value.length === 0 ? "Message is required" : null),
    },
  });

  return (
    <Container size="md" py="xl">
      <Title mb="lg">Contact</Title>
      <form action="https://formspree.io/f/xldbqroz" method="POST">
        <Stack>
          <TextInput
            label="Name"
            name="name"
            required
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            required
            {...form.getInputProps("email")}
          />
          <Textarea
            label="Message"
            name="message"
            required
            minRows={4}
            {...form.getInputProps("message")}
          />
          <Button type="submit" color="blue">
            Send
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
