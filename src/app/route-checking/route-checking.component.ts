import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouteCheckingService } from '../_services/route-checking.service';

@Component({
  selector: 'app-route-checking',
  templateUrl: './route-checking.component.html',
  styleUrls: ['./route-checking.component.css']
})
export class RouteCheckingComponent implements OnInit {
  form: any = {
   location:null
  };
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';
  
  message='';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    var main = function() {
      /* Push the body and the nav over by 285px over */
      var isOpened = false;
    
     
      $('.icon-menu').click(function() {
        isOpened = true;
    
       
    
        $('body').animate({
          left: "285px"
        }, 200);
      });
    
      /* Then push them back */
      
      $('.icon-close').click(function() {
        isOpened = false;
    
       
    
        $('body').animate({
          left: "0px"
        }, 200);
      });
    
    
      
    };
    
    $(document).ready(main);
  }
  onSubmit(): void {

    this.apiService.findRoute(this.form.location).subscribe({
      next: data => {
        if (data){
        this.isSuccessful=true;
        this.isFailed = false;
        this.message =`The state of route ${data.location} is ${data.state} because of some ${data.cause}`;
       }else {
        this.isSuccessful=false;
        this.isFailed = true;
        this.errorMessage = "Sorry we don't have any valuable data for this route , but you can be the one to help others by filling the survey below ";
       }
       
      },
      error: err => {
        this.errorMessage = "sorry we couldn't find an answer to your question";
        this.isFailed = true;
        this.isSuccessful=false;
      }
    });
    

  }

}
