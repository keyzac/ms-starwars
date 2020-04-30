import { ResourceManager } from '../../Libs/ResourceManager/ResourceManager';
import { TYPES } from './Types';
import { Container } from 'inversify';
import { ValidationRequest } from '../../Users/Infrastructure/Validation/ValidationRequest';
import { PeopleService } from '../../Users/Application/Services/PeopleService';
import { PeopleDomain } from '../../Users/Domain/Services/PeopleDomain';
import { StarWarsRepositoryInterface } from '../../Users/Domain/Repository/StarWarsRepositoryInterface';
import { StarWarsRepository } from '../../Users/Infrastructure/Repository/StarWarsRepository';

const container = new Container();
const commonConfig = new ResourceManager();
const db = commonConfig.getConfig('development');

/**
 * Commons
 */
container
  .bind<ResourceManager>(TYPES.ResourceManager)
  .to(ResourceManager)
  .inSingletonScope();
container
  .bind<ValidationRequest>(TYPES.Validation.ValidationRequest)
  .to(ValidationRequest)
  .inSingletonScope();

/**
 * Application Services
 */
container
  .bind<PeopleService>(TYPES.Services.UserService)
  .to(PeopleService)
  .inSingletonScope();

/**
 * Domain Services
 */
container
  .bind<PeopleDomain>(TYPES.Domain.UserDomain)
  .to(PeopleDomain)
  .inSingletonScope();

/**
 * Repositories
 */
container
  .bind<StarWarsRepositoryInterface>(TYPES.Repositories.UserRepository)
  .to(StarWarsRepository)
  .inSingletonScope();

export { container };
