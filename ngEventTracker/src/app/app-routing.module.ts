import { HomeComponent } from './components/home/home.component';
import { CreateEventsComponent } from './components/create-events/create-events.component';
import { EventListComponent } from 'src/app/components/event-list/event-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchEventsComponent } from './components/search-events/search-events.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchEventsComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventListComponent },
  { path: 'events/search/:keyword', component: EventListComponent },
  { path: 'events/search/title/:title', component: EventListComponent },
  { path: 'events/search/description/:desc', component: EventListComponent },
  { path: 'events/search/category/:cat', component: EventListComponent },
  { path: 'events/search/location/:location', component: EventListComponent },
  { path: 'events/search/street/:street', component: EventListComponent },
  { path: 'events/search/city/:city', component: EventListComponent },
  { path: 'events/search/state/:state', component: EventListComponent },
  { path: 'events/search/zip/:zip', component: EventListComponent },
  { path: 'events/search/dateRange/:start/:end', component: EventListComponent },
  { path: 'events/search/year/:year', component: EventListComponent },
  { path: 'events/search/year/month/:year/:month', component: EventListComponent },
  { path: 'create', component: CreateEventsComponent },
  { path: '**', component: NotFoundComponent } // sends back home if page/route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
