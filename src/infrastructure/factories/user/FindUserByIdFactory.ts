import { FindUserByIdUseCase } from '@src/application/usecase/user';
import { BaseController } from '@src/infrastructure/controllers/BaseController';
import { FindUserByIdController } from '@src/infrastructure/controllers/user';
import { UserRepositoryMongoDB } from '@src/infrastructure/database/mongodb/UserRepositoryMongoDb';

export class FindUSerByIdFactory {
  static build(): BaseController {
    const repository = new UserRepositoryMongoDB();
    const usecase = new FindUserByIdUseCase(repository);
    return new FindUserByIdController(usecase);
  }
}
