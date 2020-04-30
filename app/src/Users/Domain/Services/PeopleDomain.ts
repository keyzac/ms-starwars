import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Bootstrap/IoC/Types';
import { StarWarsRepositoryInterface } from '../Repository/StarWarsRepositoryInterface';
import { PeopleDto } from '../../Application/Dto/Response/PeopleDto';
import { StarWarsRepository } from '../../Infrastructure/Repository/StarWarsRepository';

@injectable()
export class PeopleDomain {
  protected starWarsInfrastructure: any;

  constructor(
    @inject(TYPES.Repositories.PeopleRepository)
    private starWarsRepository: StarWarsRepositoryInterface
  ) {
    // @ts-ignore
    this.starWarsInfrastructure = new StarWarsRepository();
  }

  public async getPeopleDomain(): Promise<PeopleDto> {
    let users: PeopleDto;

    users = await this.starWarsInfrastructure.getPeople();

    return users;
  }
}