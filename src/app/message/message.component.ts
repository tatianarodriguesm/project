import { Component, OnInit } from '@angular/core';
import {MessageDetails} from "../messageDetails";
import {messages} from '../m-message'


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  m: MessageDetails[] = [];
  
  
  selectedMessage : MessageDetails;
  
    constructor() { }
  
    ngOnInit() {
      this.m = messages;
    }
   
  
    selectMessage(message: MessageDetails) {
      this.selectedMessage = message;
    }
  }
  
