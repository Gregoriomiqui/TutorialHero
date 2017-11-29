import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messages:string[]=[];

  constructor() { }


  add(messages:string){
    this.messages.push(messages);
  }

  clear(){
    this.messages=[];
  }
}
