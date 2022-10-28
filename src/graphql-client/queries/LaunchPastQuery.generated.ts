import * as Types from '../types.global';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LaunchesPastQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type LaunchesPastQuery = { __typename?: 'Query', launchesPast?: Array<{ __typename?: 'Launch', id?: string | null, launch_date_unix?: any | null, launch_year?: string | null, mission_name?: string | null, launch_date_local?: any | null, launch_site?: { __typename?: 'LaunchSite', site_name_long?: string | null } | null, links?: { __typename?: 'LaunchLinks', article_link?: string | null, video_link?: string | null, flickr_images?: Array<string | null> | null } | null, rocket?: { __typename?: 'LaunchRocket', rocket_name?: string | null } | null, ships?: Array<{ __typename?: 'Ship', name?: string | null, home_port?: string | null, image?: string | null } | null> | null } | null> | null };


export const LaunchesPastDocument = gql`
    query launchesPast($name: String!) {
  launchesPast(find: {mission_name: $name}) {
    id
    launch_date_unix
    launch_year
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      flickr_images
    }
    rocket {
      rocket_name
    }
    ships {
      name
      home_port
      image
    }
  }
}
    `;

/**
 * __useLaunchesPastQuery__
 *
 * To run a query within a React component, call `useLaunchesPastQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchesPastQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchesPastQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useLaunchesPastQuery(baseOptions: Apollo.QueryHookOptions<LaunchesPastQuery, LaunchesPastQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LaunchesPastQuery, LaunchesPastQueryVariables>(LaunchesPastDocument, options);
      }
export function useLaunchesPastLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaunchesPastQuery, LaunchesPastQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LaunchesPastQuery, LaunchesPastQueryVariables>(LaunchesPastDocument, options);
        }
export type LaunchesPastQueryHookResult = ReturnType<typeof useLaunchesPastQuery>;
export type LaunchesPastLazyQueryHookResult = ReturnType<typeof useLaunchesPastLazyQuery>;
export type LaunchesPastQueryResult = Apollo.QueryResult<LaunchesPastQuery, LaunchesPastQueryVariables>;