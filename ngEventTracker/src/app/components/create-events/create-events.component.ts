import { NotFoundComponent } from './../not-found/not-found.component';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Event } from 'src/app/models/event';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  newEvent: Event = new Event();
  selected = null;

  constructor(private eventsvc: EventService,
              private currentRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  addNewEvent(newEvent: Event){
    console.log(newEvent);
    this.eventsvc.create(this.newEvent).subscribe(
      data => {
        this.selected = data;
        let id: string = this.selected.id;
        this.router.navigateByUrl("events/" + id);
      },
    err => {
      return console.error('Search error in Component');
    });
    this.newEvent = null;
  }

}
