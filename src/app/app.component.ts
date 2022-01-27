import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';

  count: number = 10;

  handleIncrease = () =>{
    if(this.count==10){
      this.count = 0
    }
    else
      this.count = this.count + 1;

  }

  handleDecrease = () =>{
    if(this.count==0)
    this.count =0;
    else
    this.count = this.count - 1;
  }

  handleReset = () =>{
    this.count = 0;
  }

}
