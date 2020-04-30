import { BaseException } from '../../../Libs/Exception/BaseException';
import HttpStatusCode from '../../../Libs/CommonResources/HttpStatusCode';
import { injectable } from 'inversify';
import { APP_STATUS_CODE } from '../Services/Util/AppStatusCode';
import { DynamoRepositoryInterface } from '../../Domain/Repository/DynamoRepositoryInterface';
import { PeopleBody } from '../../Application/Dto/Body/PeopleBody';

@injectable()
export class DynamoRepository implements DynamoRepositoryInterface {

  public async createPeople(peopleData: PeopleBody): Promise<PeopleBody> {
    try {
      return peopleData;
    } catch (error) {
      console.error(error);
      throw new BaseException(
        HttpStatusCode.BAD_REQUEST,
        'Hubo un error al crear el registro',
        APP_STATUS_CODE.errorNotFound
      );
    }
  }
}
