import { Contact } from './contact';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  public Contact = [];
  constructor() { 
    this.Contact.push();
  }
}
