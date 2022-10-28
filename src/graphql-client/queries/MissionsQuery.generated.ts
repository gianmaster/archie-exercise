import * as Types from '../types.global';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FindMissionByNameQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type FindMissionByNameQuery = { __typename?: 'Query', missions?: Array<{ __typename?: 'Mission', description?: string | null, id?: string | null, manufacturers?: Array<string | null> | null, name?: string | null, payloads?: Array<{ __typename?: 'Payload', id?: string | null, nationality?: string | null, orbit?: string | null, payload_mass_kg?: number | null, payload_mass_lbs?: number | null, payload_type?: string | null, reused?: boolean | null } | null> | null } | null> | null };


export const FindMissionByNameDocument = gql`
    query findMissionByName($name: String!) {
  missions(find: {name: $name}) {
    description
    id
    manufacturers
    name
    payloads {
      id
      nationality
      orbit
      payload_mass_kg
      payload_mass_lbs
      payload_type
      reused
    }
  }
}
    `;

/**
 * __useFindMissionByNameQuery__
 *
 * To run a query within a React component, call `useFindMissionByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMissionByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMissionByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFindMissionByNameQuery(baseOptions: Apollo.QueryHookOptions<FindMissionByNameQuery, FindMissionByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMissionByNameQuery, FindMissionByNameQueryVariables>(FindMissionByNameDocument, options);
      }
export function useFindMissionByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMissionByNameQuery, FindMissionByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMissionByNameQuery, FindMissionByNameQueryVariables>(FindMissionByNameDocument, options);
        }
export type FindMissionByNameQueryHookResult = ReturnType<typeof useFindMissionByNameQuery>;
export type FindMissionByNameLazyQueryHookResult = ReturnType<typeof useFindMissionByNameLazyQuery>;
export type FindMissionByNameQueryResult = Apollo.QueryResult<FindMissionByNameQuery, FindMissionByNameQueryVariables>;