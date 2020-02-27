import http from 'http';
import app from './src/app';
import { PORT } from './src/config';

const server = http.createServer(app);
server.listen(PORT);
