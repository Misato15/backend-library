import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Authors, AuthorsRelations} from '../models';

export class AuthorsRepository extends DefaultCrudRepository<
  Authors,
  typeof Authors.prototype.id,
  AuthorsRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Authors, dataSource);
  }
}
