import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Bootstrap/IoC/Types';
import { StarWarsRepositoryInterface } from '../Repository/StarWarsRepositoryInterface';
import { DynamoRepositoryInterface } from '../Repository/DynamoRepositoryInterface';
import { PeopleDto } from '../../Application/Dto/Response/PeopleDto';
import { StarWarsRepository } from '../../Infrastructure/Repository/StarWarsRepository';
import { DynamoRepository } from '../../Infrastructure/Repository/DynamoRepository';
import { PeopleBody } from '../../Application/Dto/Body/PeopleBody';

@injectable()
export class PeopleDomain {
  protected starWarsInfrastructure: any;
  protected DynamoInfrastructure: any;

  constructor(
    @inject(TYPES.Repositories.PeopleRepository)
    private starWarsRepository: StarWarsRepositoryInterface,
    @inject(TYPES.Repositories.PeopleRepository)
    private dynamoRepository: DynamoRepositoryInterface
  ) {
    this.starWarsInfrastructure = new StarWarsRepository();
    this.DynamoInfrastructure = new DynamoRepository();
  }

  public async getPeopleDomain(id: number): Promise<PeopleDto> {
    let people: PeopleDto;
    people = await this.starWarsInfrastructure.getPeople(id);

    return people;
  }

  public async setPeopleDomain(peopleData: PeopleBody): Promise<PeopleDto> {
    return await this.DynamoInfrastructure.createPeople(peopleData);
  }
}