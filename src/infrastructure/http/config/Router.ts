import { Router, Express } from 'express';
import UserRouter from '@src/infrastructure/http/routes/UserRouter';
import ServiceRouter from '@src/infrastructure/http/routes/ServiceRouter';

export default (app: Express): void => {
  const router = Router();
  app.use('/services', router);

  UserRouter(router);
  ServiceRouter(router);
};
