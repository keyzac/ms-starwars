import { injectable, inject } from 'inversify';
import { TYPES } from '../../../Bootstrap/IoC/Types';
import { ResultDto } from '../../../Libs/Dto/BodyResultDto';
import { PeopleDomain } from '../../Domain/Services/PeopleDomain';
import { ValidationRequest } from '../../Infrastructure/Validation/ValidationRequest';
import { ResponseDto } from '../../../Libs/Dto/ResponseDto';
import { PeopleBody } from '../Dto/Body/PeopleBody';
import { PeoplePostRequest } from '../../Infrastructure/Validation/Request/PeoplePostRequest';

@injectable()
export class PeopleService {
  protected peopleServiceDomain: any;

  constructor(
    @inject(TYPES.Validation.ValidationRequest)
    private validationRequest: ValidationRequest,
    @inject(TYPES.Domain.PeopleDomain)
    private peopleService: PeopleDomain
  ) {
    this.peopleServiceDomain = peopleService;
  }

  public async get(id: number): Promise<ResponseDto>{
    const data = await this.peopleServiceDomain.getPeopleDomain(id);

    return new ResultDto(data);
  }

  public async create (peopleData: PeopleBody): Promise<ResponseDto>{
    const validateInput: PeoplePostRequest = new PeoplePostRequest(
      peopleData.nombre,
      peopleData.altura,
      peopleData.masa,
      peopleData.color_cabello,
      peopleData.color_piel,
      peopleData.color_ojos,
      peopleData.nacimiento,
      peopleData.genero,
      peopleData.planeta,
      peopleData.peliculas,
      peopleData.especies,
      peopleData.vehiculos,
      peopleData.naves,
      peopleData.creado,
      peopleData.editado,
      peopleData.url
    );

    await this.validationRequest.validate(validateInput);
    const data = await this.peopleServiceDomain.setPeopleDomain(peopleData);

    return new ResultDto(data);
  }
}