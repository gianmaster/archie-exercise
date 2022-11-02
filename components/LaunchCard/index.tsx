import { ExternalLinkIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, Image, Link, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Launch } from '../../src/graphql-client/types.global';
import { YoutubeIcon } from '../icons';

export type LaunchCardProps = {
  data: Launch;
};

function LaunchCard({ data }: LaunchCardProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const boxWidth = isMobile ? 'full' : '400px';

  const img =
    data.links?.flickr_images?.[0] ||
    `https://via.placeholder.com/800x800.png?text=No+image+available`;

  const articleLink = data.links?.article_link;
  const videoLink = data.links?.video_link;

  return (
    <Box
      width={boxWidth}
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      bgColor="#fff"
      bgImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='263' height='263' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F4F4F4' stroke-width='1.7'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23DDF6FA'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`}
    >
      {img && (
        <Image
          src={img}
          alt={data.mission_name!}
          maxH="300px"
          height="300px"
          minW={boxWidth}
        />
      )}

      <Box>
        <Box p="2" px="4">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {data.mission_name}
          </Box>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="capitalize"
          >
            {data.launch_date_local.replace('T', ' ').substr(0, 16)}
            <TimeIcon mb={1} ml={1} />
          </Box>
          <Box>
            <Stack direction="row" fontSize="sm" fontWeight="bold" spacing={4}>
              {videoLink && (
                <Link
                  href={videoLink}
                  isExternal
                  color="red.500"
                  display="flex"
                  gap={1}
                >
                  Watch video <YoutubeIcon />
                </Link>
              )}
              {articleLink && (
                <Link href={articleLink} isExternal color="blue.400">
                  Go to article <ExternalLinkIcon fontSize="md" mb={1} />
                </Link>
              )}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LaunchCard;
