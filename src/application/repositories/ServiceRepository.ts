import { Service } from '@src/domain/entities/Service';
import { InputCreateServiceDto } from '../usecase/service/CreateServiceUseCase';

export interface ServiceRepository {
  create(dto: InputCreateServiceDto): Promise<void>;
  findUserServices(userId: string): Promise<Service[]>;
}
