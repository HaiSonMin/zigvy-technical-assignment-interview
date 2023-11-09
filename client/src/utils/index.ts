import { IArgsQuery } from '@/interfaces/shared';
import http from './http';
import { v4 as uuidv4 } from 'uuid';

const getQueriesString = (argsQueries: Partial<IArgsQuery>) => {
  const _limit: number = Number(argsQueries.limit) || 10;
  const _start: number = Number(argsQueries.limit) || 1;
  return { _start, _limit };
};

const randomKey = (): string => uuidv4();

export { http, getQueriesString, randomKey };
