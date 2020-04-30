import { PeopleDto } from '../../Application/Dto/Response/PeopleDto';

export interface StarWarsRepositoryInterface {
  getPeople(id: number): Promise<PeopleDto>;
}
