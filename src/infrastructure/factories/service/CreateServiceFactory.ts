import { CreateServiceUseCase } from '@src/application/usecase/service/CreateServiceUseCase';
import { ValidatorComposite, ValidatorRequiredParam } from '@src/application/validator';
import { BaseController } from '@src/infrastructure/controllers/BaseController';
import { CreateServiceController } from '@src/infrastructure/controllers/service/CreateServiceController';
import { ServiceRepositoryMongoDb } from '@src/infrastructure/database/mongodb/ServiceRepositoryMongoDb';
import { UserRepositoryMongoDB } from '@src/infrastructure/database/mongodb/UserRepositoryMongoDb';

export class CreateServiceFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam('expericeYears'),
      new ValidatorRequiredParam('description'),
      new ValidatorRequiredParam('type'),
      new ValidatorRequiredParam('price'),
    ]);

    const serviceRepo = new ServiceRepositoryMongoDb();

    const userRepo = new UserRepositoryMongoDB();

    const usecase = new CreateServiceUseCase(userRepo, serviceRepo);

    return new CreateServiceController(validatorRequest, usecase);
  }
}
