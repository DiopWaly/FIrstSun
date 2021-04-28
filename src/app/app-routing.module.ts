import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutComponent } from './ajout/ajout.component';
import { ContactComponent } from './contact/contact.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path:"contact", component: ContactComponent
  },
  {
    path:"ajout", component: AjoutComponent
  },
  {
    path:"first", component: FirstComponent
  },
  {
    path: "",
    redirectTo: "/first",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
