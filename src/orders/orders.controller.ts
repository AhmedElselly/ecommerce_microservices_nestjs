import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('')
  create(@Body() body: CreateOrderDto) {
    return this.ordersService.createOrder(body);
  }

  @Get('/')
  findAll() {
    return this.ordersService.findAll();
  }
}
