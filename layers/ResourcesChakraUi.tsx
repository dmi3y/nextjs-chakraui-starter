import { SimpleGrid } from "@chakra-ui/react";
import ResourceLink from "~/components/ResourceLink";

const ResourcesChakraUi = () => {
  return (
    <SimpleGrid layerStyle="resource">
      <ResourceLink
        href="https://chakra-ui.com/getting-started/principles"
        header="Principles"
      >
        Learn about established principles to understand concepts Chakra UI
        built on.
      </ResourceLink>
      <ResourceLink href="https://chakra-ui.com/getting-started" header="Docs">
        Find in-depth information about Chakra UI features and&nbsp;API.
      </ResourceLink>
      <ResourceLink
        href="https://chakra-ui.com/community/showcase"
        header="Showcase"
      >
        A collection of beautiful websites that are built in Chakra UI.
      </ResourceLink>
      <ResourceLink
        href="https://chakra-ui.com/getting-started/nextjs-guide"
        header="Integration"
      >
        Easy to follow integration guide for Chakra UI and Next.js 13.
      </ResourceLink>
    </SimpleGrid>
  );
};

export default ResourcesChakraUi;
