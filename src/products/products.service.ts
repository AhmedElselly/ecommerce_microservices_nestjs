import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private axios: HttpService) {}

  async findAll() {
    const res = await firstValueFrom(
      this.axios.get('http://localhost:8004/products'),
    );
    if (!res.data) throw new NotFoundException('No products found');
    console.log({ data: res.data });
    return res.data;
  }
}
