import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy) {}
  findAll() {
    return this.client.send({ cmd: 'get_products' }, {});
  }

  create(product: CreateProductDto) {
    return this.client.send({ cmd: 'create_product' }, product);
  }
}
