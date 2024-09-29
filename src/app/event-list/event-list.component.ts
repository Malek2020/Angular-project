import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  likeEvent(event: Event): void {
    event.likes++;
    this.eventService.updateEvent(event).subscribe();
  }

  dislikeEvent(event: Event): void {
    event.dislikes++;
    this.eventService.updateEvent(event).subscribe();
  }

  viewDetails(id: number): void {
    // Navigate to event details
  }
  deleteEvent(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      this.eventService.deleteEvent(id).subscribe(() => {
        // Filtrer les événements pour enlever celui qui vient d'être supprimé
        this.events = this.events.filter(event => event.id !== id);
      });
    }
  }
}
