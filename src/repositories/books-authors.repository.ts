import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {BooksAuthors, BooksAuthorsRelations} from '../models';

export class BooksAuthorsRepository extends DefaultCrudRepository<
  BooksAuthors,
  typeof BooksAuthors.prototype.id,
  BooksAuthorsRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(BooksAuthors, dataSource);
  }
}
