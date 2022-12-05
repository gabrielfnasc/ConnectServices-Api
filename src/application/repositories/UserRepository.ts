export interface UserRepository {
  create(data: any): Promise<any>;
}
