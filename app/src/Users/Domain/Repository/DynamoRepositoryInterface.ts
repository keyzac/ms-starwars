import { PeopleDto } from '../../Application/Dto/Response/PeopleDto';
import {PeopleBody} from '../../Application/Dto/Body/PeopleBody';

export interface DynamoRepositoryInterface {
  createPeople(peopleData: PeopleBody): Promise<PeopleBody>;
}
