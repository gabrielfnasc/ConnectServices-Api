import { InputCreateServiceDto } from '../usecase/service/CreateServiceUseCase';

export interface ServiceRepository {
  create(dto: InputCreateServiceDto): Promise<void>;
}
