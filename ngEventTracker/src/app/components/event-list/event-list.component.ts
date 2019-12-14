import { NotFoundComponent } from './../not-found/not-found.component';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // F I E L D S
  navigationSubscription;
  title = 'Douglas County, CO Events';
  events: Event[] = [];
  newEvent: Event = new Event();
  selected = null;
  updateEvent: Event = null;
  keyword: string = null;
  searchBy: string = null;
  search = null;


  // C O N S T R U C T O R
  constructor(
    private eventsvc: EventService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {
    //reloads current URL with new search term
      this.navigationSubscription = this.router.events.subscribe(
        (e: any ) => {
          if (e instanceof NavigationEnd) {
            this.keyword = this.currentRoute.snapshot.paramMap.get('keyword');
            if(this.keyword) {
              this.reload();
            }
            else {

            }
          }
        }
      );
  }

  // F U N C T I O N S
  ngOnInit() {
    this.reload();
  }

  reload() {
    this.eventsvc.index().subscribe(
      data => {
        this.events = data;
        if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
            return this.eventsvc.findOne(this.currentRoute.snapshot.paramMap.get('id')).subscribe(
              one => {
                this.selected = one;
              },
            err => {
              return console.error('Search error in Component');
            });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('keyword')) {
          return this.eventsvc.findByKeyword(this.currentRoute.snapshot.paramMap.get('keyword')).subscribe(
            keywordsearch => {
              this.events = keywordsearch;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('title')) {
          return this.eventsvc.findByTitle(this.currentRoute.snapshot.paramMap.get('title')).subscribe(
            titlesearch => {
              this.events = titlesearch;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('desc')) {
          return this.eventsvc.findByDesc(this.currentRoute.snapshot.paramMap.get('desc')).subscribe(
            descsearch => {
              this.events = descsearch;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('cat')) {
          return this.eventsvc.findByCat(this.currentRoute.snapshot.paramMap.get('cat')).subscribe(
            catsearch => {
              this.events = catsearch;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('start') && this.currentRoute.snapshot.paramMap.get('end')) {
          // tslint:disable-next-line: max-line-length
          return this.eventsvc.findByDateRange(this.currentRoute.snapshot.paramMap.get('start'), this.currentRoute.snapshot.paramMap.get('end')).subscribe(
            dateRangeS => {
              this.events = dateRangeS;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('year') && this.currentRoute.snapshot.paramMap.get('month')) {
          // tslint:disable-next-line: max-line-length
          return this.eventsvc.findByYearMonth(this.currentRoute.snapshot.paramMap.get('year'), this.currentRoute.snapshot.paramMap.get('month')).subscribe(
            yearMonth => {
              this.events = yearMonth;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('year')) {
          return this.eventsvc.findByYear(this.currentRoute.snapshot.paramMap.get('year')).subscribe(
            years => {
              this.events = years;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
        else if (!this.selected && this.currentRoute.snapshot.paramMap.get('location')) {
          return this.eventsvc.findByLocation(this.currentRoute.snapshot.paramMap.get('location')).subscribe(
            years => {
              this.events = years;
            },
          err => {
            return console.error('Search error in Component');
          });
        }
      },
      err => console.error('Reload error in Component')
    );
    this.updateEvent = null;
    this.selected = null;
    this.newEvent = new Event();
  }

  displayTable() {
    this.selected = null;
  }

  numberOfEvents() {
    if(this.selected){
      return "1";
    }
    return this.events.length;
  }

  displayEvent(event: Event) {
    this.selected = event;
  }

  createEvent(newEvent: Event) {
    this.eventsvc.create(this.newEvent).subscribe(
      data => {
        this.reload();
      },
      err => console.error('Create error in Component: ' + err)
    );
  }

  setUpdateEvent() {
    this.updateEvent = Object.assign({}, this.selected);
  }

  updateAnEvent(event: Event) {
    this.eventsvc.update(event.id, event).subscribe(
      data => {
        this.reload();
      },
      err => console.error('Update error in Component')
    );
  }

  deleteEvent(id: number) {
    this.eventsvc.destroy(id).subscribe(
      data => {
        this.reload();
      },
      err => {
        return console.error('Delete error in Component');
      }
    );
  }
}
