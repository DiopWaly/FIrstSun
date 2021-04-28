import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AddService } from './../add.service';
import { Contact } from './../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('addModal') private addModal: ElementRef;
  public contacts:Array<Contact> = [];
  public contact: Contact;
  private index: number;
  public form: FormGroup;
  public messageAlert:string = "";
  public alt:string;
  public action: boolean = false;
  
  constructor(private route: Router, private add: AddService) { }

  ngOnInit(): void {
    this.contacts.push({nom: "Diop", prenom: "waly", email: "waly@gmail.com", tel: "770331545",dateNais: new Date()});   
    this.instancier();
  }

  instancier(){
    this.form = new FormGroup({
      prenom: new FormControl("",Validators.compose([Validators.required])),
      nom: new FormControl("",Validators.compose([Validators.required])),
      email: new FormControl("",Validators.compose([Validators.required])),
      tel: new FormControl("",Validators.compose([Validators.required])),
      dateNais: new FormControl("",Validators.compose([Validators.required]))
    });
  }
  ajoutModal(){
    this.action = true;
  }
  ajout(): void{
    this.contacts.push(this.form.value);
    this.messageAlert = "Add";
    this.alt = "alert alert-success";
    this.addModal.nativeElement.click();
    this.instancier();
  }
  modalUpdate(index: number, contact: Contact): void{
    this.action = false;
    this.contact = contact;
    this.index = index;
    this.form.patchValue(contact);
    this.form.get('dateNais').setValue(new Date(this.form.get('dateNais').value).toUTCString())
  }
  update(){
    // this.contacts[this.index] = this.form.value;
    console.log("test",this.contact);
    this.contacts.splice(this.index,1,this.form.value);
    this.messageAlert = "Updated";
    this.alt = "alert alert-danger";
    this.instancier();
    this.addModal.nativeElement.click();
    // if(confirm("validez")){
    // }
  }
  supprimer(index: number): void{
    this.contacts.splice(index,1);
  }

}
