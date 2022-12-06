import { DeleteUserUseCase } from '@src/application/usecase/user';
import { BaseController } from '@src/infrastructure/controllers/BaseController';
import { DeleteUserController } from '@src/infrastructure/controllers/user/DeleteUserController';
import { UserRepositoryMongoDB } from '@src/infrastructure/database/mongodb/UserRepositoryMongoDb';

export class DeleteUserFactory {
  static build(): BaseController {
    const repo = new UserRepositoryMongoDB();
    const usecase = new DeleteUserUseCase(repo);

    return new DeleteUserController(usecase);
  }
}
