import { ServerResponse } from 'http';
import file_server from './file_server';
import not_found from './not_found';
import success from './success';
import { QuerystringParameter } from '../utils/types';

/**
 * Handles the request calling the right controller for each endpoint;
 * @param response - http.ServerResponse entity;
 * @param endpoint - given endpoint to be accessed;
 * @param params - querystring params of the request.
 */
const route_controller = (
  response: ServerResponse, endpoint: string, params: QuerystringParameter[],
) => {
  const pool: { [key: string]: () => void } = {
    '/success': () => success(response, params),
    '/404': () => not_found(response),
    default: () => file_server(response, endpoint),
  };
  return (pool[endpoint] || pool.default)();
};

export default route_controller;
