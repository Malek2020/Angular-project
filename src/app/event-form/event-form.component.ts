import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  event: Event = {
    id: 0, 
    title: '',
    category: '',
    description: '',
    imageUrl: '',
    likes: 0,
    dislikes: 0,
    feedbacks: []
  };

  constructor(private eventService: EventService, private router: Router) {}

  onSubmit(): void {
    this.eventService.addEvent(this.event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
