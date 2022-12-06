import { Validator } from '@src/domain/validator/validator';
import {
  HttpResponse,
  serverError,
} from '@src/infrastructure/http/presentation/controllers/helpers';
import { BaseController } from '../BaseController';

export type CreateServiceRequestDto = {
  type: string;
  userId: string;
  description: string;
  price: number;
  experienceYears: number;
};

export class CreateServiceController implements BaseController {
  constructor(private readonly validator: Validator,private readonly usecase :) {}
  async handle(request: CreateServiceRequestDto): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
