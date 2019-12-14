import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-search-events",
  templateUrl: "./search-events.component.html",
  styleUrls: ["./search-events.component.css"]
})
export class SearchEventsComponent implements OnInit {
  constructor(private currentRoute: ActivatedRoute, private router: Router) {}
  id: string = null;
  title: string = null;
  desc: string = null;
  cat: string = null;
  dateRangeStart: string = null;
  dateRangeEnd: string = null;
  year: string = null;
  month: string = null;
  location: string = null;


  ngOnInit() {}

  searchByID(id) {
    this.router.navigateByUrl("events/" + this.id);
    this.id = null;
  }

  searchByTitle(title) {
    this.router.navigateByUrl("events/search/title/" + this.title);
    this.title = null;
  }

  searchByDesc(desc) {
    this.router.navigateByUrl("events/search/description/" + this.desc);
    this.desc = null;
  }

  searchByCat(cat) {
    this.router.navigateByUrl("events/search/category/" + this.cat);
    this.cat = null;
  }

  searchByDateRange(dateRangeStart, dateRangeEnd) {
    this.router.navigateByUrl("events/search/dateRange/" + this.dateRangeStart + '/' + this.dateRangeEnd);
    this.dateRangeStart = null;
    this.dateRangeEnd = null;
  }

  searchByMonthYear(year, month) {
    this.router.navigateByUrl("events/search/year/month/" + this.year + '/' + this.month);
    this.year = null;
    this.month = null;
  }

  searchByYear(year) {
    this.router.navigateByUrl("events/search/year/" + this.year);
    this.year = null;
  }

  searchByLocation(location) {
    this.router.navigateByUrl("events/search/location/" + this.location);
    this.location = null;
  }
}
