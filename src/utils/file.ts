import { ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';
import { DIR } from '../config';

/**
 * Map the known mime types that can be served;
 * @param type - Type of a file to be checked;
 * @returns Proper mime type of a file;
 */
const get_mime_type = (type: string): string => {
  const mime_type: { [key: string]: () => string } = {
    html: () => 'text/html',
    txt: () => 'text/plain',
    css: () => 'text/css',
    ico: () => 'image/x-icon',
    gif: () => 'image/gif',
    jpg: () => 'image/jpeg',
    png: () => 'image/png',
    svg: () => 'image/svg+xml',
    js: () => 'application/javascript',
    default: () => 'text/plain',
  };
  return (mime_type[type] || mime_type.default)();
};

/**
 * Map the files to be used in case of error accessing a not found file;
 * @param basename - Basename of a given file;
 * @returns - Error file to be accessed.
 */
const get_error_file = (basename: string): string => {
  const error_file: { [key: string]: () => string } = {
    '404.html': () => '404.html',
    '404.svg': () => '404.svg',
    'main.css': () => 'main.css',
    default: () => '404.html',
  };
  return (error_file[basename] || error_file.default)();
};

/**
 * Reads a file using a stream;
 * @param response - Response object of a http server;
 * @param filename - Filename to be read.
 */
const file_stream = (response: ServerResponse, filename: string) => {
  const extension = path.extname(filename).slice(1);
  const file = path.join(DIR, path.normalize(filename));
  const stream = fs.createReadStream(file);

  stream.on('open', () => {
    response.setHeader('Content-Type', get_mime_type(extension));
    stream.pipe(response);
  });

  /* eslint-disable @typescript-eslint/no-unused-vars */
  stream.on('error', (err) => {
    response.statusCode = 404;
    file_stream(response, get_error_file(path.basename(filename)));
  });
};

export default file_stream;
