import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/page.module.css';
import {
  Container,
  Box,
  Text,
  Badge,
  Divider,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import Search from '../components/Search';
import { Mission } from '../src/graphql-client/types.global';
import {
  useFindMissionByNameQuery,
  FindMissionByNameDocument,
} from '../src/graphql-client/queries/MissionsQuery.generated';
import { addApolloState, initializeApollo } from '../src/lib/apollo-client';
import MissionCardList from '../components/MissionCardList';

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FindMissionByNameDocument,
    variables: {
      name: '',
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

function Home() {
  const router = useRouter();
  const search = router.query.search as string;
  const [missionName, setMissionName] = useState('');

  const { loading, error, data } = useFindMissionByNameQuery({
    skip: !missionName,
    variables: {
      name: missionName.toLowerCase() === 'all' ? '' : missionName,
    },
    nextFetchPolicy: 'cache-first',
  });

  const missions = useMemo(() => {
    if (data?.missions) {
      return data.missions;
    }
    return [];
  }, [data]);

  useEffect(() => {
    setMissionName(search || '');
  }, [search]);

  const handleSearch = (value: string) => {
    setMissionName(value);
    router.push({
      pathname: '/',
      query: { search: value },
    });
  };

  return (
    <div>
      <Head>
        <title>{`SpaceX Missions - Giancarlos Cercado`}</title>
        <meta
          name="description"
          content="SpaceX's Mission Searcher with GraphQl(SpaceX api), Next/Typescript and Chakra UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container maxW="full" mx={8}>
          <Box alignItems={'center'}>
            <Text fontSize="3xl" color={'blue.400'} mt={'4'} mb={'4'}>
              {`SpaceX Missions`}
            </Text>
            <Search
              onSearchDebounced={handleSearch}
              defaultValue={search}
              placeholder="Search by mission name"
            />
            <Text fontSize="sm" color="blackAlpha.700">
              Type <Badge>All</Badge> to see all missions
            </Text>
          </Box>

          <Divider mt={4} mb={6} opacity="0" />

          <Box>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error.message}
              </Alert>
            )}

            <MissionCardList
              dataList={missions as Mission[]}
              isLoading={loading}
            />
            {!loading && !error && missions.length === 0 && search?.length > 0 && (
              <Alert status="info">
                <AlertIcon />
                No results found
              </Alert>
            )}
          </Box>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
