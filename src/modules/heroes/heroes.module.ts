import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [HeroesController],
  exports: [],
})
export class HeroesModule {}
