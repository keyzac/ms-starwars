import { PeopleDto } from '../../Application/Dto/Response/PeopleDto';

export interface StarWarsRepositoryInterface {
  getPeople(): Promise<PeopleDto>;
}
