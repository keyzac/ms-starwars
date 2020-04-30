import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Bootstrap/IoC/Types';
import { UserRepository } from '../../Domain/Repository/UserRepository';
import { UserDto } from '../../Application/Dto/Response/UserDto';
import { DbUserRepository } from '../../Infrastructure/Repository/DbUserRepository';

@injectable()
export class UserDomain {
  protected userServiceInfraestructura: any;

  constructor(
    @inject(TYPES.Repositories.UserRepository)
    private userRepository: UserRepository
  ) {
    // @ts-ignore
    this.userServiceInfraestructura = new DbUserRepository();
  }

  public async getUsersDomain(): Promise<UserDto[]> {
    let users: UserDto[];

    users = await this.userServiceInfraestructura.getUsersDb();

    return users;
  }
}