import Link from "next/link";
import { CardHeader, CardSection } from "@/components/Card";
import { Text } from "@/components/Text/Text";

export default function NotFound() {
  return (
    <>
      <CardHeader header="Page not found" />
      <CardSection blue withShadow spaceY={6}>
        <Link href="/">
          <Text variant="link">Return home</Text>
        </Link>
      </CardSection>
    </>
  );
}
