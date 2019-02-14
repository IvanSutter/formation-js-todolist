import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { LegalComponent } from './legal/legal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'list', component: ListComponent },
  { path: 'legal', component: LegalComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [HomeComponent, ContactComponent, ListComponent, LegalComponent, NotFoundComponent]
})
export class AppRoutingModule { }
