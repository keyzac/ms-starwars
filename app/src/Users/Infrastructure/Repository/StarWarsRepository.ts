import axios from 'axios';
import { BaseException } from '../../../Libs/Exception/BaseException';
import HttpStatusCode from '../../../Libs/CommonResources/HttpStatusCode';
import { injectable } from 'inversify';
import { APP_STATUS_CODE } from '../Services/Util/AppStatusCode';
import { StarWarsRepositoryInterface } from '../../Domain/Repository/StarWarsRepositoryInterface';
import { PeopleDto } from '../../Application/Dto/Response/PeopleDto';

@injectable()
export class StarWarsRepository implements StarWarsRepositoryInterface {
  private url: string = 'https://swapi.py4e.com/api/';

  public async getPeople(): Promise<PeopleDto> {
    try {
      return axios.get(this.url + 'people/1/').then(resp => {
        return resp.data;
      });
    } catch (error) {
      console.error(error);
      throw new BaseException(
        HttpStatusCode.BAD_REQUEST,
        'Hubo un error al retornar el registro',
        APP_STATUS_CODE.errorNotFound
      );
    }
  }
}
