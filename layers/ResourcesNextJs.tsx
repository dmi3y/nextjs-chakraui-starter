import { SimpleGrid } from '@chakra-ui/react';
import ResourceLink from '~/components/ResourceLink';

const ResourcesNextJs = () => {
    return (
        <SimpleGrid layerStyle='resource'>
            <ResourceLink href='https://nextjs.org/docs' header='Docs'>
                Find in-depth information about Next.js features and&nbsp;API.
            </ResourceLink>

            <ResourceLink href='https://nextjs.org/learn' header='Learn'>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
            </ResourceLink>

            <ResourceLink
                href='https://vercel.com/templates'
                header='Templates'
            >
                Discover and deploy boilerplate example Next.js&nbsp;projects.
            </ResourceLink>

            <ResourceLink href='https://vercel.com/new' header='Deploy'>
                Instantly deploy your Next.js site to a shareable URL
                with&nbsp;Vercel.
            </ResourceLink>
        </SimpleGrid>
    );
};

export default ResourcesNextJs;
