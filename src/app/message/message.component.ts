import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message'
import { FormatContentPipe } from '../format-content.pipe'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  
  @Input()message:Message;
  fmtBody: string[];
  fmtTime: Date;
  fmtSubj: string;
  show:boolean;
  
  constructor() {}

  ngOnInit() {
    this.fmtTime = new Date(this.message.invite_time * 1000);
    this.fmtBody = this.message.invite.split('\\n');
    this.fmtSubj = this.fmtBody.shift();
    this.show    = false;
  }

  isUnRead(message:Message){
    return (message.status != 'read');
  }
  
  toggleStatus(message){
    message.status = (message.status == 'read')?'unread':'read';
  }

  openContent(message){
    this.show = !this.show;
    if(message.status != 'read') message.status = 'read';
  }

  hideContent(message){
    this.show = !this.show;
  }
}
