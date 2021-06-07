import { BusinessComponent } from './business/business.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent} from './details/details.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileComponent} from './edit-profile/edit-profile.component';




const routes: Routes = [
  { path: 'profile' , component: ProfileComponent},
  { path: 'home', component: HomeComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'create-profile' , component: CreateProfileComponent },
  { path: 'edit-profile' , component: EditProfileComponent },
  { path: 'business' , component:BusinessComponent },  
  { path: 'neighborhood' , component: NeighborhoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent,HomeComponent , DetailsComponent , CreateProfileComponent , EditProfileComponent , BusinessComponent, NeighborhoodComponent]
