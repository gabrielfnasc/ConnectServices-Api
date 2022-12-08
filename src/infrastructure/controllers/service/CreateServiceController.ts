import { CreateServiceUseCase } from '@src/application/usecase/service/CreateServiceUseCase';
import { Validator } from '@src/domain/validator/validator';
import {
  HttpResponse,
  ok,
  serverError,
} from '@src/infrastructure/http/presentation/controllers/helpers';
import { BaseController } from '../BaseController';
import { v4 as uuid } from 'uuid';

export type CreateServiceRequestDto = {
  type: string;
  userId: string;
  description: string;
  price: number;
  experienceYears: number;
};

export class CreateServiceController implements BaseController {
  constructor(
    private readonly validator: Validator,
    private readonly usecase: CreateServiceUseCase
  ) {}
  async handle(request: CreateServiceRequestDto): Promise<HttpResponse> {
    try {
      const { type, userId, description, price, experienceYears } = request;
      await this.usecase.execute({
        userId,
        description,
        type,
        experienceYears,
        price,
        id: uuid(),
        createdAt: new Date(),
      });
      return ok({ message: 'Service created successfully!' });
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
