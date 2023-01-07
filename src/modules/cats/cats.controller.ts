import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ValidationPipe } from 'src/concept/validation.pipe';
import { Cat, CatsService } from './cats.service';
import { CatDto } from './dto/cat';
import { CreateCatDto } from './dto/create.cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    
    @Get()
    findAll(@Req() request: Request): Cat[] {
        return this.catsService.findAll();
    }

    @Post()
    create(@Body() cat: CatDto): string {
        this.catsService.create(cat);
        return 'success';
    }

    @Get('/:id')
    findById(@Param('id', ParseIntPipe) id): Cat {
        return this.catsService.findById(id);
    }
    
    @Get('/uuid/:uuid')
    findByUUID(@Param('uuid', new ParseUUIDPipe()) uuid) {
        console.log(uuid);
        return this.catsService.findById(uuid);
    }

    @Post('/create')
    async createCat(@Body(new ValidationPipe()) body: CreateCatDto) {
        this.catsService.createCat(body);
        return 'success';
    }
}
