import { GraphQLClient } from 'graphql-request';

import { drawsQuery } from './querys/draws';
import { Draw, DrawTypes } from '@/interfaces';

const client = new GraphQLClient('http://localhost:8010/proxy/graphql');

// TODO can this be coupled with the query and the real schema?
interface DrawsResponse {
  draw: {
    draws: Draw[];
  };
}

export const fetchDraws = (type: DrawTypes) =>
  client
    .request(drawsQuery, { type })
    .then((data: DrawsResponse) => data.draw.draws);
