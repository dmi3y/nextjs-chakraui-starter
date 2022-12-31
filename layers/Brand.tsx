import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Brand = () => {
  return (
    <Flex
      justifyContent="center"
      justifyItems="center"
      position="relative"
      paddingY={4}
    >
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Box>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </Box>
    </Flex>
  );
};

export default Brand;
