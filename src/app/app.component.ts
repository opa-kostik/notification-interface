import { Component } from '@angular/core';
import { MessagesService } from './messages.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService]
})
export class AppComponent {
  constructor(private messagesService:MessagesService){}
  title = 'Notification app';
}
