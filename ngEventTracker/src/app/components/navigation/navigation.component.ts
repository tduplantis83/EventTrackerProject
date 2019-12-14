import { EventListComponent } from "src/app/components/event-list/event-list.component";
import { EventService } from "src/app/services/event.service";
import { Component, OnInit } from "@angular/core";
import { Event } from "src/app/models/event";
import { ActivatedRoute, Router } from "@angular/router";
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor(private currentRoute: ActivatedRoute, private router: Router) {}
  keyword: string = null;

  ngOnInit() {

  }

  searchKeyword() {
    this.router.navigateByUrl("events/search" + '/' + this.keyword);
  }
}
