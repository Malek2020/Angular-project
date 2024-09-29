import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined;  // Définir la propriété `event`

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.loadEventDetails();
  }

  loadEventDetails(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));  // Récupérer l'ID de l'URL
    this.eventService.getEventById(eventId).subscribe(
      (event) => {
        this.event = {
          ...event,
          feedbacks: event.feedbacks || []  // S'assurer que feedbacks est un tableau vide si undefined
        };
      },
      error => {
        console.error('Erreur lors de la récupération des détails de l\'événement', error);
      }
    );
  }
  
// Méthode pour liker un événement
likeEvent(): void {
  if (this.event) {
    this.event = {
      ...this.event,
      likes: this.event.likes + 1
    };
    this.eventService.updateEvent(this.event).subscribe(
      () => {
        console.log('Événement liké avec succès');
      },
      error => {
        console.error('Erreur lors de l\'ajout du like', error);
      }
    );
  }
}

// Méthode pour disliker un événement
dislikeEvent(): void {
  if (this.event) {
    this.event = {
      ...this.event,
      dislikes: this.event.dislikes + 1
    };
    this.eventService.updateEvent(this.event).subscribe(
      () => {
        console.log('Événement disliké avec succès');
      },
      error => {
        console.error('Erreur lors de l\'ajout du dislike', error);
      }
    );
  }
}
}
