import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Authors'}}})
export class Authors extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 70,
    generated: 0,
    mssql: {columnName: 'Name', dataType: 'varchar', dataLength: 70, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: 0,
    mssql: {columnName: 'Country', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  country: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Authors>) {
    super(data);
  }
}

export interface AuthorsRelations {
  // describe navigational properties here
}

export type AuthorsWithRelations = Authors & AuthorsRelations;
