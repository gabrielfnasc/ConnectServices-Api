import { FindAllUsersUseCase } from '@src/application/usecase/user';
import { BaseController } from '@src/infrastructure/controllers/BaseController';
import { FindAllUsersController } from '@src/infrastructure/controllers/user';
import { UserRepositoryMongoDB } from '@src/infrastructure/database/mongodb/UserRepositoryMongoDb';

export class FindAllUserFactory {
  static build(): BaseController {
    const repo = new UserRepositoryMongoDB();
    const usecase = new FindAllUsersUseCase(repo);

    return new FindAllUsersController(usecase);
  }
}
