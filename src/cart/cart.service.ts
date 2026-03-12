import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCartDto } from './dtos/create-cart.dto';

@Injectable()
export class CartService {
  constructor(@Inject('CART_SERVICE') private cartClient: ClientProxy) {}

  addToCart(body: CreateCartDto) {
    return this.cartClient.send({ cmd: 'add_to_cart' }, body);
  }

  getCart(userId: number) {
    return this.cartClient.send({ cmd: 'get_user_cart' }, userId);
  }
}
