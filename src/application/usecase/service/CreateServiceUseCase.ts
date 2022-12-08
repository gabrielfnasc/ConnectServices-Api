import { UserRepository } from '@src/application/repositories';
import { ServiceRepository } from '@src/application/repositories/ServiceRepository';
import { NotFoundHttpError } from '@src/infrastructure/http/errors';
import { Usecase } from '../UseCase';

export type InputCreateServiceDto = {
  type: string;
  userId: string;
  description: string;
  price: number;
  experienceYears: number;
  createdAt: Date;
  id: string;
};

export class CreateServiceUseCase implements Usecase<InputCreateServiceDto, void> {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly serviceRepo: ServiceRepository
  ) {}
  async execute(data: InputCreateServiceDto): Promise<void> {
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError('User not found!');
    }
    await this.serviceRepo.create(data);
  }
}
