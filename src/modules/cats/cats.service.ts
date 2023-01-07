import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create.cat.dto';

export interface Cat {
    id: number;
    name: string;
}

@Injectable()
export class CatsService {
    
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    createCat(cat: CreateCatDto) {
        console.log(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findById(id: number): Cat {
        return this.cats.find(c => c.id === id);
    }
}
