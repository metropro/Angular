import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  HomeComponent } from './home/home.component';
import {  TodoComponent } from './todo/todo.component';
import { CharactersComponent } from './characters/characters.component';
import { IndividualCharacterComponent } from './individual-character/individual-character.component'
import { ContactComponent } from './contact/contact.component';
import { AmiibosComponent } from './amiibos/amiibos.component';
import { IndividualAmiiboComponent } from './individual-amiibo/individual-amiibo.component';

const routes: Routes=[
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: IndividualCharacterComponent},
  { path: 'contacts', component: ContactComponent},
  { path: 'amiibo', component: AmiibosComponent},
  { path: 'individual-amiibo', component: IndividualAmiiboComponent}
  // parameter instance ^ with character ID
  

 
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]

})
export class AppRoutingModule { }