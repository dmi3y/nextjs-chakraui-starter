import { Code, Box, Text, Link } from "@chakra-ui/react";
import Image from "next/image";

const Description = () => {
    return <Box width="full" layerStyle="description">
    <Text
      position="relative"
      margin={0}
      padding={1}
      backgroundColor="callout"
      borderWidth="thin"
      borderRadius="base"
      borderColor="calloutBorder"
    >
      Get started by editing&nbsp;
      <Code fontWeight="extrabold">pages/index.tsx</Code>
    </Text>
    <Box>
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={0.5}
      >
        By{" "}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
    </Box>
  </Box>
}

export default Description;
