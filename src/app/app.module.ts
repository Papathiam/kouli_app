import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { FansComponent } from './fans/fans.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ClubComponent } from './club/club.component';
import { ZoneComponent } from './zone/zone.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BilleterieComponent,
    FansComponent,
    BoutiqueComponent,
    ClubComponent,
    ZoneComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
