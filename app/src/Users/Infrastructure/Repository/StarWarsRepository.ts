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

  public async getPeople(id: number): Promise<PeopleDto> {
    try {
      return axios.get(this.url + 'people/' + id).then(resp => {
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
