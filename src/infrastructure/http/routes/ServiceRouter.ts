import { CreateServiceFactory } from '@src/infrastructure/factories/service/CreateServiceFactory';
import { FindUserServicesFactory } from '@src/infrastructure/factories/service/FindUserServicesFactory';
import { Router } from 'express';
import { ExpressRouterAdapter } from '../adapters/ExpressRouterAdapter';

export default (router: Router): void => {
  router.post('/service/:userId', ExpressRouterAdapter(CreateServiceFactory.build()));
  router.get('/service/:userId', ExpressRouterAdapter(FindUserServicesFactory.build()));
};
