import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="rehber";

  isHide=true;

  eventShow(value:boolean):void{
    this.isHide=value;
  }



}
