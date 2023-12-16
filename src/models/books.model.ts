import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Books'}}})
export class Books extends Entity {
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
    length: 50,
    generated: 0,
    mssql: {columnName: 'Title', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  title: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
