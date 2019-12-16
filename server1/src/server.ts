import express from 'express';
import logger from 'morgan';
import { setRoutes } from './routes';
import path from 'path';
import { SERVER1_PORT } from '../../config';

const app = express();
const PORT = SERVER1_PORT;

// TODO switch format for Prod
app.use(logger('dev'));
app.set('views', path.join(__dirname, '.', 'views'));
app.set('view engine', 'pug');

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server1 ${PORT}`);
});
