import {
  Badge,
  Card,
  Group,
  Image,
  Rating,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { Product } from "./Product";

interface ProductProps {
  product: Product;
}

export default function ProductCard(props: ProductProps) {
  return (
    <Card shadow="xl" withBorder radius={"lg"}>
      <Card.Section>
        <Image
          src={props.product.thumbnail}
          height={150}
          alt={props.product.title}
        />
      </Card.Section>
      <Group justify="space-between">
        <Title order={2}>{props.product.title}</Title>
        <Badge size="lg">{props.product.price}$</Badge>
      </Group>
      <Tooltip label={props.product.rating} openDelay={100} position="right">
        <Rating value={props.product.rating} fractions={4} readOnly />
      </Tooltip>
      <Text c={"gray"}>{props.product.description}</Text>
    </Card>
  );
}
