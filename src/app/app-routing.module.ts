import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';  
import { EventFormComponent } from './event-form/event-form.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent , canActivate: [authGuard] },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [authGuard] },
  { path: 'add-event', component: EventFormComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
