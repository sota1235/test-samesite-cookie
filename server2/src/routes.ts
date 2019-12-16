import { Express } from 'express';
import { home, postHome } from './handlers/home';

const setRoutes = (app: Express) => {
  app.get('/', home);
  app.post('/', postHome);
};

export { setRoutes };
