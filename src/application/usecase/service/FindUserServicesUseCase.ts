import { UserRepository } from '@src/application/repositories';
import { ServiceRepository } from '@src/application/repositories/ServiceRepository';
import { Service } from '@src/domain/entities/Service';
import { NotFoundHttpError } from '@src/infrastructure/http/errors';
import { Usecase } from '../UseCase';

export type InputFindUserServicesDto = {
  userId: string;
};

export type OutputFindUserServicesDto = {
  services: Service[];
};

export class FindUserServicesUseCase
  implements Usecase<InputFindUserServicesDto, OutputFindUserServicesDto>
{
  constructor(
    private readonly userRepo: UserRepository,
    private readonly serviceRepo: ServiceRepository
  ) {}
  async execute(data: InputFindUserServicesDto): Promise<OutputFindUserServicesDto> {
    const user = await this.userRepo.findById(data.userId);
    if (!user) {
      throw new NotFoundHttpError('User not found!');
    }
    const services = await this.serviceRepo.findUserServices(data.userId);
    if (!services || services.length < 1) {
      throw new NotFoundHttpError('No service found!');
    }
    return { services };
  }
}
