import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDER_SERVICE') private orderClient: ClientProxy) {}

  createOrder(order: CreateOrderDto) {
    return this.orderClient.send({ cmd: 'create_order' }, order);
  }

  findAll() {
    return this.orderClient.send({ cmd: 'get_orders' }, {});
  }
}
