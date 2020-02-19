import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { FansComponent } from './fans/fans.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ClubComponent } from './club/club.component';
import { ZoneComponent } from './zone/zone.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'billet', component: BilleterieComponent},
  { path: 'fans', component: FansComponent},
  { path: 'boutique', component: BoutiqueComponent},
  { path: 'club', component: ClubComponent},
  { path: 'zone', component: ZoneComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
