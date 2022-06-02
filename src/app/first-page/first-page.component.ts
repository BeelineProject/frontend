import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Message } from '../message';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }
  sendMessage(message :any ){ 
    message = new Message(message.value.name,
      message.value.email,
      message.value.message
    );
    console.log(message)
    this.apiService.createMessage(message).subscribe(
      (result)=>{
           
       
      console.log(result);
    });

  }

}
