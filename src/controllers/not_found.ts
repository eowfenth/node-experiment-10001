import { ServerResponse } from 'http';
import file_stream from '../utils/file';

/**
 * Handles cases of not found resources;
 *
 * @param response - http.ServerResponse entity
 */
const not_found_controller = (response: ServerResponse) => {
  file_stream(response, '404.html');
};

export default not_found_controller;
