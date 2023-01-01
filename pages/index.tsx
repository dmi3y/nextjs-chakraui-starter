import Head from "next/head";
import {
  Divider,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import Navigation from "~/layers/Navigation";
import Details from "~/layers/Details";
import ResourcesNextJs from "~/layers/ResourcesNextJs";
import ResourcesChakraUi from "~/layers/ResourcesChakraUi";
import Credits from "~/layers/Credits";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid as="main" width="full" layerStyle="main">
        <GridItem padding={6}>
          <Navigation />
        </GridItem>
        <GridItem display="grid" alignContent="center">
          <Details />
        </GridItem>
        <GridItem paddingY={6}>
          <VStack>
            <Tabs width="full" minHeight={[500, 400, 300]}>
              <TabList>
                <Tab>Next.js</Tab>
                <Tab>Chakra UI</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ResourcesNextJs />
                </TabPanel>
                <TabPanel>
                  <ResourcesChakraUi />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Divider />
            <Credits />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}
