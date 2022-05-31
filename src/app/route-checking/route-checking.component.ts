import { Component, OnInit } from '@angular/core';
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
  checkFailed = false;
  errorMessage = '';

  constructor(private routeService : RouteCheckingService) { }

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
    const {route } = this.form;

    this.routeService.getRouteState(route).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.checkFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.checkFailed = true;
      }
    });
  }

}
