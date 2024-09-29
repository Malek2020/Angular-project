import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:3001/feedbacks';

  constructor(private http: HttpClient) { }

  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl, feedback);
  }

  getFeedbacksForEvent(eventId: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}?eventId=${eventId}`);
  }
}
