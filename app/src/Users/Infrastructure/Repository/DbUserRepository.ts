import { BaseException } from '../../../Libs/Exception/BaseException';
import HttpStatusCode from '../../../Libs/CommonResources/HttpStatusCode';
import { injectable } from 'inversify';
import { APP_STATUS_CODE } from '../Services/Util/AppStatusCode';
import { UserRepository } from '../../Domain/Repository/UserRepository';
import { UserDto } from '../../Application/Dto/Response/UserDto';

@injectable()
export class DbUserRepository implements UserRepository {
  constructor() {}

  public async getUsersDb(): Promise<UserDto[]> {
    try {
      return [{
        id: 1,
        firstName: 'kevin',
        lastName: 'yza',
        age: 28,
        birthDate: '11',
        probablyDeathDate: 'string'
      }];
    } catch (error) {
      console.error(error);
      throw new BaseException(
        HttpStatusCode.BAD_REQUEST,
        'Hubo un error al retornar los usuarios',
        APP_STATUS_CODE.errorNotFound
      );
    }
  }
}
