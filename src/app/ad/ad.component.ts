import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  image : any;
   index = 1;
  constructor() { }
  
  change() {
    if (this.index == 2 ) {
      this.index = 1;
    } else {
      this.index=this.index+1;
    }
    this.image=this.index;
    
  }

  ngOnInit(): void {
   
    this.image="../assets/images/ads/1.png"
    setInterval(()=>
    {
      if (this.index == 6) {
        this.index = 1;
      } else {
        this.index=this.index+1;
      }
      this.image="../assets/images/ads/"+this.index+".png";
      console.log(this.image)
      console.log(typeof this.image)
      

    }, 5000);
    console.log("trying to get image ")
    console.log(this.image)
  }
  getImage(){
    return this.image;
  }

}

