import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  
  @Input() messages:Message[];
  @Input() filter:string;

  constructor() {
  }

  ngOnInit() {
  }
  
  getMsgText(msg){
    let text = msg.invite;
    return text.replace('\\n', ' ')
  }

  doHide(msg){
    if(this.filter === 'new'){
      return this.isRead(msg);
    } 
    return false;
  }

  isRead(msg){
    return msg.isRead();
  }

  setRead(msg){
    msg.setRead();
  }
}
