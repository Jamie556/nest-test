import { Module } from '@nestjs/common';
import { CatsModule } from 'src/modules/cats/cats.module';
import { HeroesModule } from '../heroes/heroes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatsModule, HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
