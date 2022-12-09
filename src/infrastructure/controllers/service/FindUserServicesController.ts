import { FindUserServicesUseCase } from '@src/application/usecase/service/FindUserServicesUseCase';
import {
  HttpResponse,
  ok,
  serverError,
} from '@src/infrastructure/http/presentation/controllers/helpers';
import { BaseController } from '../BaseController';

export type FindUserServicesRequestDto = {
  userId: string;
};

export class FindUserServicesController implements BaseController {
  constructor(private readonly usecase: FindUserServicesUseCase) {}
  async handle(request: FindUserServicesRequestDto): Promise<HttpResponse> {
    try {
      const output = await this.usecase.execute(request);
      return ok(output.services);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
