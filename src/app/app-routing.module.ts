import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component'
import { DetailsComponent} from './details/details.component'

const routes: Routes = [
  { path: 'profile' , component: ProfileComponent},
  { path: 'home', component: HomeComponent},
  { path: 'details', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent,HomeComponent , DetailsComponent]
