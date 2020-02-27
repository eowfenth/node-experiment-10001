import { ServerResponse } from 'http';
import file_stream from '../utils/file';
import { QuerystringParameter } from '../utils/types';

/**
 * Handles a particular case to serve a success asset;
 * @param response - http.ServerResponse entity;
 * @param params - querystrings params of the request;
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
const success_controller = (
  response: ServerResponse,
  params: QuerystringParameter[],
) => {
  file_stream(response, 'success.html');
};

export default success_controller;
