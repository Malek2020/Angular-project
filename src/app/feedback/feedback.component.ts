import { Component, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  @Input() event: Event | undefined;  // Utilisez Input pour recevoir l'événement
  comment = '';

  constructor(private eventService: EventService) {}

  submitFeedback(): void {
    if (this.event && this.comment) {
      const feedback = {
        userId: 1,  // Ici, vous pouvez utiliser un vrai ID d'utilisateur si nécessaire
        comment: this.comment,
        like: true  // Par exemple, ajouter un bouton pour définir "like" ou "dislike"
      };
      this.event.feedbacks.push(feedback);
      this.eventService.updateEvent(this.event).subscribe();
      this.comment = '';  // Réinitialiser le champ de commentaire après l'envoi
    }
  }
}
