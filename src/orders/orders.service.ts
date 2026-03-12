import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDER_SERVICE') private orderClient: ClientProxy) {}

  createOrder(order) {
    return this.orderClient.send({ cmd: 'create_order' }, order);
  }
}
