import { UserRepository } from '@src/application/repositories';
import { Validator } from '@src/domain/validator/validator';
import { Usecase } from '../UseCase';

export type InputCreateServiceUseCaseDto = {
  type: string;
  userId: string;
  description: string;
  price: number;
  experienceYears: number;
  createdAt: Date;
};

export class CreateServiceUseCase implements Usecase<InputCreateServiceUseCaseDto, void> {
  constructor(private readonly validator: Validator, private readonly userRepo: UserRepository,private readonly serviceRepo :) {}
  async execute(data: InputCreateServiceUseCaseDto): Promise<void> {
    this.validator.validate(data);
  }
}
