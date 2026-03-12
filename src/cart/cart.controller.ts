import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dtos/create-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/')
  addToCart(@Body() body: CreateCartDto) {
    return this.cartService.addToCart(body);
  }

  @Get(':userId')
  getUserCart(@Param('userId') userId: number) {
    return this.cartService.getCart(userId);
  }
}
