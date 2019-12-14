import { CreateEventsComponent } from './components/create-events/create-events.component';
import { EventListComponent } from 'src/app/components/event-list/event-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchEventsComponent } from './components/search-events/search-events.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'events'},
  { path: 'home', component: EventListComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventListComponent },
  { path: 'events/search/:keyword', component: EventListComponent },
  { path: 'create', component: CreateEventsComponent },
  { path: '**', component: NotFoundComponent } // sends back home if page/route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
