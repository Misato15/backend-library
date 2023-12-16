import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'BooksAuthors'}}})
export class BooksAuthors extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'AuthorId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  authorId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'BookId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  bookId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BooksAuthors>) {
    super(data);
  }
}

export interface BooksAuthorsRelations {
  // describe navigational properties here
}

export type BooksAuthorsWithRelations = BooksAuthors & BooksAuthorsRelations;
