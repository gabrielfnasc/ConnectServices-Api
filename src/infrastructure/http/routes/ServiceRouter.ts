import { CreateServiceFactory } from '@src/infrastructure/factories/service/CreateServiceFactory';
import { Router } from 'express';
import { ExpressRouterAdapter } from '../adapters/ExpressRouterAdapter';

export default (router: Router): void => {
  router.post('/service/:userId', ExpressRouterAdapter(CreateServiceFactory.build()));
};
