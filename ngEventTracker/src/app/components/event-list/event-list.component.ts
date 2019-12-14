import { NotFoundComponent } from './../not-found/not-found.component';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // F I E L D S
  title = 'Douglas County, CO Events';
  events: Event[] = [];
  newEvent: Event = new Event();
  selected = null;
  updateEvent: Event = null;
  urlId = null;

  // C O N S T R U C T O R
  constructor(
    private eventsvc: EventService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  // F U N C T I O N S
  ngOnInit() {
    this.reload();
  }

  reload() {
    this.eventsvc.index().subscribe(
      data => {
        this.events = data;
        if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
          this.urlId = +this.currentRoute.snapshot.paramMap.get('id');
          this.events.forEach(e => {
            if (e.id === this.urlId) {
              this.selected = e;
            }
            if (this.selected === null) {
              this.router.navigateByUrl(
                'events' +
                  this.currentRoute.snapshot.paramMap.get('id') +
                  NotFoundComponent
              );
            }
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
