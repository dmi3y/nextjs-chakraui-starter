import {
    VStack,
    Text,
    Code,
    Spacer,
    Box,
    keyframes,
    usePrefersReducedMotion,
    Card,
    CardBody,
} from '@chakra-ui/react';
import BrandNextJs from '~/components/BrandNextJs';
import BrandChakraUi from '~/components/BrandChakraUi';

const pulse = keyframes`
  0% { transform: scale(1.0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1.0); }
`;
const hoverPulse = keyframes`
  0% { transform: scale(1.0); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1.0); }
`;

const Details = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animation = prefersReducedMotion
        ? undefined
        : `${pulse} infinite 1s linear`;

    const hoverAnimation = prefersReducedMotion
        ? undefined
        : `${hoverPulse} infinite 0.5s linear`;

    return (
        <VStack>
            <BrandNextJs />
            <Box
                animation={animation}
                _hover={{ animation: hoverAnimation }}
                color='red.500'
                textShadow='red 1px 0 40px'
                padding={0}
                lineHeight={2}
                fontSize={40}
                cursor='pointer'
            >
                ♥
            </Box>
            <BrandChakraUi />
            <Spacer paddingTop={20} />
            <Card
                backgroundColor='callout'
                borderWidth='thin'
                borderRadius='base'
                borderColor='calloutBorder'
            >
                <CardBody>
                    Get started by editing&nbsp;
                    <Code fontWeight='extrabold'>pages/index.tsx</Code>
                </CardBody>
            </Card>
        </VStack>
    );
};

export default Details;
