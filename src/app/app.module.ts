import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NomineeServicesComponent } from './components/nominee-services/nominee-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'nomineeServices', component: NomineeServicesComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'login/signup', component: LoginSignupComponent },
  { path: '', redirectTo: '/homePage', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    FooterComponent,
    HomePageComponent,
    NomineeServicesComponent,
    ContactUsComponent,
    ServicesComponent,
    LoginSignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
