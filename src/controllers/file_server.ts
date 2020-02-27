import { ServerResponse } from 'http';
import file_stream from '../utils/file';

/**
 * Handles the request for any generic asset, including html;
 * @param response - http.ServerResponse entity;
 * @param resource - resource to be accessed.
 */
const file_server_controller = (response: ServerResponse, resource: string) => {
  file_stream(response, resource);
};

export default file_server_controller;
