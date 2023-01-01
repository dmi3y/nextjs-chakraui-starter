import {
    VStack,
    Code,
    Spacer,
    Box,
    keyframes,
    Card,
    CardBody,
    usePrefersReducedMotion,
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

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(60deg); }
  100% { transform: rotate(-0deg); }
`;

const Details = () => {
    const beforeAndAfter = {
        content: '""',
        left: '50%',
        position: 'absolute',
        filter: 'blur(45px)',
        transform: 'translateZ(0)',
        zIndex: 'hide',
    };

    const prefersReducedMotion = usePrefersReducedMotion();
    const animation = prefersReducedMotion
        ? undefined
        : `${pulse} infinite 1s linear`;

    const hoverAnimation = prefersReducedMotion
        ? undefined
        : `${hoverPulse} infinite 0.5s linear`;

    const rotateAnimation = prefersReducedMotion
        ? undefined
        : `${rotate} infinite 60s linear`;

    return (
        <VStack>
            <BrandNextJs />
            <Box
                animation={rotateAnimation}
                position='relative'
                _before={{
                    background: 'brandBackgroundAlt',
                    borderRadius: '50%',
                    width: '480px',
                    height: '360px',
                    marginLeft: '-400px',
                    marginTop: '-100px',
                    ...beforeAndAfter,
                }}
                _after={{
                    background: 'brandBackground',
                    width: '240px',
                    height: '180px',
                    ...beforeAndAfter,
                }}
                zIndex='hide'
            />
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
