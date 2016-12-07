import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public messages:Message[];
  public delay: number;
  private interval:any;
  public filter:string;

  constructor(private messagesService:MessagesService ) {
    this.messages = [];
    this.delay = 10;
    this.filter = 'all'; 
  }

  ngOnInit() {
    this.initMessages();
    this.interval = setInterval(() => {
      if(this.delay <= 0){
        this.updateMessages();
        clearInterval(this.interval);
      }else 
      this.delay -= 1;
    }, 1000)
  }

  initMessages(){
     this.messagesService
      .getMessages('./assets/invitations.json')
      .subscribe(messages =>{ 
        messages.invites.forEach(item => {
          this.addMessage(item); 
        });
      });
  }

  manualUpdate(){
    this.delay = 0;
  }
  
  updateMessages(){
     this.messagesService
      .getMessages('./assets/invitations_update.json')
      .subscribe(messages =>{ 
        messages.invites.forEach(item => {
          this.addMessage(item);
        });
      })
  }

  addMessage(newMsg){
    //check each message: if it is new or updates existing one
    let index = this.messages.findIndex(item => item.invite_id === newMsg.invite_id);
    if (index > -1){
      this.messages[index] = new Message(newMsg);
    }else{
      this.messages.push(new Message(newMsg));
      this.messages.sort((a,b) => b.invite_time - a.invite_time);
    }
  }

  getUnreadCnt(){
    return this.messages.filter(msg => {
      return !msg.isRead() 
    }).length
  }

  showAll(){
    this.filter = 'all';
  }

  showNew(){
    this.filter = 'new';
  }
}
