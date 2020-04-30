import {IsInt, IsString} from 'class-validator';
import { messageType } from '../../../Domain/Entities/Validation/messages';

export class PeoplePostRequest {
  @IsString({
    message: messageType.string
  })
  private readonly nombrePeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly alturaPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly masaPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly colorCabelloPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly colorPielPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly colorOjosPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly nacimientoPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly generoPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly planetaPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly peliculasPeople: string[];

  @IsString({
    message: messageType.string
  })
  private readonly especiesPeople: string[];

  @IsString({
    message: messageType.string
  })
  private readonly vehiculosPeople: string[];

  @IsString({
    message: messageType.string
  })
  private readonly navesPeople: string[];

  @IsString({
    message: messageType.string
  })
  private readonly creadoPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly editadoPeople: string;

  @IsString({
    message: messageType.string
  })
  private readonly urlPeople: string;


  constructor(
    nombrePeople: string,
    alturaPeople: string,
    masaPeople: string,
    colorCabelloPeople: string,
    colorPielPeople: string,
    colorOjosPeople: string,
    nacimientoPeople: string,
    generoPeople: string,
    planetaPeople: string,
    peliculasPeople: string[],
    especiesPeople: string[],
    vehiculosPeople: string[],
    navesPeople: string[],
    creadoPeople: string,
    editadoPeople: string,
    urlPeople: string
  ) {
    this.nombrePeople = nombrePeople;
    this.alturaPeople = alturaPeople;
    this.masaPeople = masaPeople;
    this.colorCabelloPeople = colorCabelloPeople;
    this.colorPielPeople = colorPielPeople;
    this.colorOjosPeople = colorOjosPeople;
    this.nacimientoPeople = nacimientoPeople;
    this.generoPeople = generoPeople;
    this.planetaPeople = planetaPeople;
    this.peliculasPeople = peliculasPeople;
    this.especiesPeople = especiesPeople;
    this.vehiculosPeople = vehiculosPeople;
    this.navesPeople = navesPeople;
    this.creadoPeople = creadoPeople;
    this.editadoPeople = editadoPeople;
    this.urlPeople = urlPeople;
  }

  public getNombrePeople(): string {
    return this.nombrePeople;
  }

  public getAlturaPeople(): string {
    return this.alturaPeople;
  }

  public getMasaPeople(): string {
    return this.masaPeople;
  }

  public getColorCabelloPeople(): string {
    return this.colorCabelloPeople;
  }

  public getColorPielPeople(): string {
    return this.colorPielPeople;
  }

  public getColorOjosPeople(): string {
    return this.colorOjosPeople;
  }

  public getNacimientoPeople(): string {
    return this.nacimientoPeople;
  }

  public getGeneroPeople(): string {
    return this.generoPeople;
  }

  public getPlanetaPeople(): string {
    return this.planetaPeople;
  }

  public getPeliculasPeople(): string[] {
    return this.peliculasPeople;
  }

  public getEspeciesPeople(): string[] {
    return this.especiesPeople;
  }

  public getVehiculosPeople(): string[] {
    return this.vehiculosPeople;
  }

  public getNavesPeople(): string[] {
    return this.navesPeople;
  }

  public getCreadoPeople(): string {
    return this.creadoPeople;
  }

  public getEditadoPeople(): string {
    return this.editadoPeople;
  }

  public getUrlPeople(): string {
    return this.urlPeople;
  }
}
