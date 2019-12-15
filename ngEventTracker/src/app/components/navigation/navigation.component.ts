import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor(private currentRoute: ActivatedRoute, private router: Router) {}
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  keyword: string = null;
  search = null;

  ngOnInit() {

  }

  searchKeyword() {
    this.router.navigateByUrl("events/search" + '/' + this.keyword);
    this.keyword = null;
  }
}
