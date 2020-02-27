import { RequestListener } from 'http';
import { route_controller as routes } from './controllers';
import path_handler from './utils/path';

/**
 * Handles the requests and call for the router;
 * @param request - http.ServerRequest entity
 * @param response - http.ServerResponse entity
 */
const app_controller: RequestListener = (request, response) => {
  const resource = path_handler(request.url!);
  routes(response, resource.path, resource.parameters);
};

export default app_controller;
