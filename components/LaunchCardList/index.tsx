import {
  Center,
  Spinner,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Launch } from '../../src/graphql-client/types.global';
import LaunchCard from '../LaunchCard';

type LaunchCardListProps = {
  dataList: Launch[];
  isLoading: boolean;
};

function LaunchCardList({ dataList, isLoading }: LaunchCardListProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isLoading) {
    return (
      <Center height={60}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (isMobile) {
    return (
      <VStack spacing={8} align="stretch">
        {dataList.map((data) => (
          <LaunchCard key={data.id} data={data} />
        ))}
      </VStack>
    );
  }

  return (
    <Wrap spacingX={12} spacingY={8}>
      {dataList.map((launch) => (
        <WrapItem key={launch.id}>
          <LaunchCard data={launch} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default LaunchCardList;
