import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  
  @Input()message:Message;
  fmtTime: Date;
  
  constructor() {}

  ngOnInit() {
    this.fmtTime = new Date(this.message.invite_time * 1000);
  }
}
