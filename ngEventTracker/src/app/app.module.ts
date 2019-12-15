import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventListComponent } from "./components/event-list/event-list.component";
import { SearchEventsComponent } from "./components/search-events/search-events.component";
import { CreateEventsComponent } from "./components/create-events/create-events.component";
import { EventService } from "./services/event.service";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    SearchEventsComponent,
    CreateEventsComponent,
    NotFoundComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EventService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
