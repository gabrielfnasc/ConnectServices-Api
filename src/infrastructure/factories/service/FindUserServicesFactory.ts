import { FindUserServicesUseCase } from '@src/application/usecase/service/FindUserServicesUseCase';
import { BaseController } from '@src/infrastructure/controllers/BaseController';
import { FindUserServicesController } from '@src/infrastructure/controllers/service/FindUserServicesController';
import { ServiceRepositoryMongoDb } from '@src/infrastructure/database/mongodb/ServiceRepositoryMongoDb';
import { UserRepositoryMongoDB } from '@src/infrastructure/database/mongodb/UserRepositoryMongoDb';

export class FindUserServicesFactory {
  static build(): BaseController {
    const serviceRepo = new ServiceRepositoryMongoDb();
    const userRepo = new UserRepositoryMongoDB();
    const usecase = new FindUserServicesUseCase(userRepo, serviceRepo);

    return new FindUserServicesController(usecase);
  }
}
