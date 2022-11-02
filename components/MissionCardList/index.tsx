import {
  Center,
  Spinner,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Mission } from '../../src/graphql-client/types.global';
import MissionCard from '../MissionCard';

type MissionCardListProps = {
  dataList: Mission[];
  isLoading: boolean;
};

function MissionCardList({ dataList, isLoading }: MissionCardListProps) {
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
          <MissionCard key={data.id} data={data} />
        ))}
      </VStack>
    );
  }

  return (
    <Wrap spacingX={12} spacingY={8}>
      {dataList.map((launch) => (
        <WrapItem key={launch.id}>
          <MissionCard data={launch} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default MissionCardList;
