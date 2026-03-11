import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy) {}
  findAll() {
    return this.client.send({ cmd: 'get_products' }, {});
  }

  create(product) {
    return this.client.send({ cmd: 'create_product' }, product);
  }
}
