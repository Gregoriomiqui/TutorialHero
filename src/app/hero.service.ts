import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from  'rxjs/observable/of';
import { MessagesService } from './messages.service';


@Injectable()
export class HeroService {

  constructor(private _messagesService:MessagesService) {

   }

  getHeroes():Observable<Hero[]>{
    console.log("hola");
    this._messagesService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

}
