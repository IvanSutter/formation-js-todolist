import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ContactComponent]
})
export class AppRoutingModule { }
