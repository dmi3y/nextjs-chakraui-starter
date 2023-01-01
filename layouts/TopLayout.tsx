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
} from '@chakra-ui/react';
import Credits from '~/layouts/Credits';
import Navigation from '~/layouts/Navigation';
import ResourcesChakraUi from '~/layouts/ResourcesChakraUi';
import ResourcesNextJs from '~/layouts/ResourcesNextJs';

type MainProps = {
    children: React.ReactNode;
};
const TopLayout = ({ children }: MainProps) => {
    return (
        <Grid as='main' width='full' layerStyle='main'>
            <GridItem padding={6}>
                <Navigation />
            </GridItem>
            <GridItem display='grid' alignContent='center'>
                {children}
            </GridItem>
            <GridItem paddingY={6}>
                <VStack>
                    <Tabs width='full'>
                        <TabList>
                            <Tab>Next.js</Tab>
                            <Tab>Chakra UI</Tab>
                        </TabList>
                        <TabPanels height={[400, 200, 150]} overflow='scroll'>
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
    );
};

export default TopLayout;
