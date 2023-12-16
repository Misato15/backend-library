import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {BooksAuthors} from '../models';
import {BooksAuthorsRepository} from '../repositories';

export class BooksAuthorsController {
  constructor(
    @repository(BooksAuthorsRepository)
    public booksAuthorsRepository : BooksAuthorsRepository,
  ) {}

  @post('/books-authors')
  @response(200, {
    description: 'BooksAuthors model instance',
    content: {'application/json': {schema: getModelSchemaRef(BooksAuthors)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BooksAuthors, {
            title: 'NewBooksAuthors',
            
          }),
        },
      },
    })
    booksAuthors: BooksAuthors,
  ): Promise<BooksAuthors> {
    return this.booksAuthorsRepository.create(booksAuthors);
  }

  @get('/books-authors/count')
  @response(200, {
    description: 'BooksAuthors model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BooksAuthors) where?: Where<BooksAuthors>,
  ): Promise<Count> {
    return this.booksAuthorsRepository.count(where);
  }

  @get('/books-authors')
  @response(200, {
    description: 'Array of BooksAuthors model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BooksAuthors, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BooksAuthors) filter?: Filter<BooksAuthors>,
  ): Promise<BooksAuthors[]> {
    return this.booksAuthorsRepository.find(filter);
  }

  @patch('/books-authors')
  @response(200, {
    description: 'BooksAuthors PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BooksAuthors, {partial: true}),
        },
      },
    })
    booksAuthors: BooksAuthors,
    @param.where(BooksAuthors) where?: Where<BooksAuthors>,
  ): Promise<Count> {
    return this.booksAuthorsRepository.updateAll(booksAuthors, where);
  }

  @get('/books-authors/{id}')
  @response(200, {
    description: 'BooksAuthors model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BooksAuthors, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BooksAuthors, {exclude: 'where'}) filter?: FilterExcludingWhere<BooksAuthors>
  ): Promise<BooksAuthors> {
    return this.booksAuthorsRepository.findById(id, filter);
  }

  @patch('/books-authors/{id}')
  @response(204, {
    description: 'BooksAuthors PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BooksAuthors, {partial: true}),
        },
      },
    })
    booksAuthors: BooksAuthors,
  ): Promise<void> {
    await this.booksAuthorsRepository.updateById(id, booksAuthors);
  }

  @put('/books-authors/{id}')
  @response(204, {
    description: 'BooksAuthors PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() booksAuthors: BooksAuthors,
  ): Promise<void> {
    await this.booksAuthorsRepository.replaceById(id, booksAuthors);
  }

  @del('/books-authors/{id}')
  @response(204, {
    description: 'BooksAuthors DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.booksAuthorsRepository.deleteById(id);
  }
}
