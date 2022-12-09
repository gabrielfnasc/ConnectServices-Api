import { ServiceRepository } from '@src/application/repositories/ServiceRepository';
import { InputCreateServiceDto } from '@src/application/usecase/service/CreateServiceUseCase';
import { Service } from '@src/domain/entities/Service';
import { BaseMongoRepository } from './BaseMongoRepository';
import { MongoHelper } from './MongoHelper';

export class ServiceRepositoryMongoDb extends BaseMongoRepository implements ServiceRepository {
  collection(): string {
    return 'services';
  }
  async create(dto: InputCreateServiceDto): Promise<void> {
    const { userId, description, createdAt, experienceYears, price, type, id } = dto;
    const filter = { userId };
    await this.getCollection.updateOne(
      filter,
      { $addToSet: { services: { description, createdAt, experienceYears, type, price, id } } },
      { upsert: true }
    );
  }
  async findUserServices(userId: string): Promise<Service[]> {
    const services = await this.getCollection.find({ userId }).toArray();
    return services && MongoHelper.mapCollection(services);
  }
}
