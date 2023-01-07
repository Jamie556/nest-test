import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero } from './interfaces/Hero';
import { HeroById } from './interfaces/HeroById';

@Controller()
export class HeroesController {
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata): Hero {
    // 获取客户单携带的元数据
    const cookie = metadata.get('Set-Cookie');
    console.log(cookie);
    const items: Hero[] = [
      {
        id: 1,
        name: 'Jone',
      },
      {
        id: 2,
        name: 'Doe',
      },
    ];
    return items.find(({id}) => id === data.id);
  }
}
