import { QuerystringParameter } from './types';

/**
 * Checks for the querystrings of a given path returning the path itself and
 * each parameter separated;
 * @param path - Given path of a file
 *
 * @returns the path and its querystrings parameters;
 */
const path_handler = (path: string): {
  path: string,
  parameters: QuerystringParameter[]
} => {
  const [resource, parameters_list] = path.split('?');
  const parameters: QuerystringParameter[] = [];

  if (parameters_list) {
    parameters_list.split('&').forEach((entity) => {
      const [param_name, param_value] = entity.split('=');
      const is_included = parameters.filter((param) => param.name === param_name).length > 0;
      if (!is_included) {
        parameters.push({
          name: param_name,
          value: param_value,
        });
      }
    });
  }

  return {
    path: resource,
    parameters,
  };
};

export default path_handler;
