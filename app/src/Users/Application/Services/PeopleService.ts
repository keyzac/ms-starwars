import { injectable, inject } from 'inversify';
import { TYPES } from '../../../Bootstrap/IoC/Types';
import { ResultDto } from '../../../Libs/Dto/BodyResultDto';
import { PeopleDomain } from '../../Domain/Services/PeopleDomain';
import { ValidationRequest } from '../../Infrastructure/Validation/ValidationRequest';
import { ResponseDto } from '../../../Libs/Dto/ResponseDto';

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

  public async getPeople(): Promise<ResponseDto>{
    const data = await this.peopleServiceDomain.getPeopleDomain();

    return new ResultDto(data);
  }
}