import { Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ResourceLinkProps = {
  href: string;
  header: string;
  children: React.ReactNode;
};

const ResourceLink = ({ href, header, children }: ResourceLinkProps) => {
  return (
    <LinkBox padding={2}>
      <Heading as="h2" size="md" className={inter.className}>
        {header} <span>-&gt;</span>
      </Heading>
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text className={inter.className}>{children}</Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export default ResourceLink;
