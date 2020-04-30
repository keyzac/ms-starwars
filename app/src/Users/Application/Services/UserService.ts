import { injectable, inject } from 'inversify';
import { TYPES } from '../../../Bootstrap/IoC/Types';
import { ResultDto } from '../../../Libs/Dto/BodyResultDto';
import { UserDomain } from '../../Domain/Services/UserDomain';
import { ValidationRequest } from '../../Infrastructure/Validation/ValidationRequest';

@injectable()
export class UserService {
  protected userServiceDomain: any;

  constructor(
    @inject(TYPES.Validation.ValidationRequest)
    private validationRequest: ValidationRequest,
    @inject(TYPES.Domain.UserDomain)
    private userService: UserDomain
  ) {
    this.userServiceDomain = userService;
  }

  public async getUsers(): Promise<ResultDto>{
    const data = await this.userServiceDomain.getUsersDomain();

    return new ResultDto(data);
  }
}