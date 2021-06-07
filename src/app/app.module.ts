

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { DetailsComponent } from './details/details.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood.component';
import { BusinessComponent } from './business/business.component';
import { ShowBusinessComponent } from './business/show-business/show-business.component';
import { AddEditBusinessComponent } from './business/add-edit-business/add-edit-business.component';
import { ShowNeighborhoodComponent } from './neighborhood/show-neighborhood/show-neighborhood.component';
import { AddEditNeighborhoodComponent } from './neighborhood/add-edit-neighborhood/add-edit-neighborhood.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    HomeBodyComponent,
    routingComponents,
    DetailsComponent,
    CreateProfileComponent,
    EditProfileComponent,
    NeighborhoodComponent,
    BusinessComponent,
    ShowNeighborhoodComponent,
    ShowBusinessComponent,
    AddEditBusinessComponent,
    AddEditNeighborhoodComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
