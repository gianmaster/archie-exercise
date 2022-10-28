import {
  Center,
  Spinner,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Launch } from '../../src/graphql-client/types.global';
import Card from '../Card';

type CardListProps = {
  dataList: Launch[];
  isLoading: boolean;
};

function CardList({ dataList, isLoading }: CardListProps) {
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
          <Card key={data.id} data={data} />
        ))}
      </VStack>
    );
  }

  return (
    <Wrap spacingX={12} spacingY={8}>
      {dataList.map((launch) => (
        <WrapItem key={launch.id}>
          <Card data={launch} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default CardList;
