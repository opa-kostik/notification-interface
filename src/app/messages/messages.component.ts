import { Component, OnInit, Input } from '@angular/core';
// import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  
  @Input() messages:Message[];
  
  constructor() {
  }

  ngOnInit() {
  }
  
}
