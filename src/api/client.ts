import { GraphQLClient } from 'graphql-request'

import { drawsQuery } from './querys/draws';

const client = new GraphQLClient('http://localhost:8010/proxy/graphql');

export const fetchDraws = () => client.request(drawsQuery);
